import { Button, NavLink, PasswordInput, TextInput, Title } from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { RegisterFormData } from '@/src/lib/types/types';
import * as accountService from '@/src/lib/services/account/authService';
import { showToast } from '@/src/lib/services/common/toastService';
import { useAppContext } from '@/src/contexts/AppContext';

function Register() {
  const queryClient = useQueryClient();
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

  const mutation = useMutation({
    mutationFn: (registerFormData: RegisterFormData) => accountService.register(registerFormData),
    onSuccess: async () => {
      showToast({ message: 'Registration Successful', type: 'SUCCESS' });
      await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
      router.push('/');
    },
    onError: (error: Error) => {
      console.error('Registration not successful -> ', error.message);
      showToast({
        message: error.message,
        type: 'ERROR',
      });
    },
  });

  const onSubmit = form.onSubmit((values: RegisterFormData) => {
    mutation.mutate(values);
    // console.log(values);
  });

  return (
    <form className='flex flex-col gap-5 pb-20' onSubmit={onSubmit}>
      <Title className='text-3xl font-bold '>Create an Account</Title>

      <div className='flex flex-col gap-5 md:flex-row'>
        <TextInput
          className='flex-1'
          withAsterisk
          label='First Name'
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          className='flex-1'
          label='Last Name'
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
      </div>

      <TextInput
        label='Email'
        withAsterisk
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label='Password'
        withAsterisk
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <PasswordInput
        label='Confirm Password'
        withAsterisk
        key={form.key('confirmPassword')}
        {...form.getInputProps('confirmPassword')}
      />
      <span>
        <Button
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
