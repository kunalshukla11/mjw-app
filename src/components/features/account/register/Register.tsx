import { Button, PasswordInput, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import * as accountService from '@/src/lib/services/account/authService';
import { showToast } from '@/src/lib/services/common/toastService';
import { LoginRegisterActionResponse, RegisterFormData } from '@/src/lib/types/types';
import { useAppContext } from '@/src/contexts/AppContext';
import { useActionState, useEffect } from 'react';
import { register } from '@/src/lib/services/account/authService';

function Register() {
  const queryClient = useQueryClient();
  const { setAuthenticated, setUser } = useAppContext();
  const router = useRouter();

  //TODO: Add good popup with password strength as given in mantine docs
  const form = useForm<RegisterFormData>({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      firstName: (value: string) => (value ? null : 'First name is required'),

      password: (value: string) =>
        value.length === 0
          ? 'Password is required'
          : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={};:'<>,./?]).{6,}$/.test(value)
            ? null
            : 'Password must be at least 6 characters, including 1 uppercase, 1 lowercase, 1 number and 1 special character',
      confirmPassword: (value: string, values: RegisterFormData) => {
        if (value !== values.password) {
          return 'Passwords do not match';
        }
        return null;
      },
    },
  });

  const loginRegisterActionResposne: LoginRegisterActionResponse = {
    success: false,
    message: '',
    profile: undefined,
  };

  const [formState, formAction, isPending] = useActionState(register, loginRegisterActionResposne);

  useEffect(() => {
    if (formState?.message) {
      if (formState.success) {
        showToast({ message: formState.message, type: 'SUCCESS' });
        setAuthenticated(true);
        setUser(formState.profile);
        router.push('/');
      } else {
        showToast({ message: formState.message, type: 'ERROR' });
      }
    }
  }, [formState]);

  // Handle form submission
  const handleSubmit = async (values: RegisterFormData) => {
    // Call the server action only if the form is valid
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await formAction(formData);
  };

  return (
    <form className='flex flex-col gap-5 pb-20' onSubmit={form.onSubmit(handleSubmit)}>
      <Title className='text-3xl font-bold'>Create an Account</Title>

      <div className='flex flex-col gap-5 md:flex-row'>
        <TextInput
          className='flex-1'
          withAsterisk
          label='First Name'
          name='firstName'
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          className='flex-1'
          label='Last Name'
          name='lastName'
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
      </div>

      <TextInput
        label='Email'
        name='email'
        withAsterisk
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label='Password'
        name='password'
        withAsterisk
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <PasswordInput
        label='Confirm Password'
        name='confirmPassword'
        withAsterisk
        key={form.key('confirmPassword')}
        {...form.getInputProps('confirmPassword')}
      />
      <span>
        <Button
          loading={isPending}
          type='submit'
          className='p-2 text-xl font-bold text-white hover:bg-indigo-100 hover:text-indigo-700'
        >
          Create Account
        </Button>
      </span>

      <div className='flex items-center'>
        <span className='text-xs italic'>Already have an account?</span>
        <Link className='ml-2 text-sm underline' href='/account/login'>
          Log in
        </Link>
      </div>
    </form>
  );
}

export default Register;
