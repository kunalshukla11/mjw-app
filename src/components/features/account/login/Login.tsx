'use client';

import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { LoginFormData, LoginRegisterActionResponse } from '@/src/lib/types/types';
import { login } from '@/src/lib/services/account/authService';
import { showToast } from '@/src/lib/services/common/toastService';
import { useAppContext } from '@/src/contexts/AppContext';
function Login() {
  const router = useRouter();
  const { setAuthenticated, setUser } = useAppContext();
  const queryClient = useQueryClient();
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  });

  const loginActionResponse: LoginRegisterActionResponse = {
    success: false,
    message: '',
    profile: undefined,
  };

  const [formState, formAction, isPending] = useActionState(login, loginActionResponse);

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

  return (
    <form className='mx-auto flex w-3/4 flex-col gap-5' action={formAction}>
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
      <Button type='submit' loading={isPending}>
        Login
      </Button>

      <div className='flex items-center'>
        <span className='text-xs italic'>Do not have an account?</span>
        <Link className='ml-2 text-sm underline' href='/account/register'>
          Register
        </Link>
      </div>
    </form>
  );
}

export default Login;
