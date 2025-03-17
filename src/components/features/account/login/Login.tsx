'use client';

import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { LoginFormData } from '@/src/lib/types/types';
import { showToast } from '@/src/lib/services/common/toastService';
import * as accountService from '@/src/lib/services/account/authService';
import { useAppContext } from '@/src/contexts/AppContext';

function Login() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser, setAuthenticated } = useAppContext();
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  });

  //   onSuccess: async () => {
  //     showToast({ message: 'Login Successful', type: 'SUCCESS' });
  //     await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
  //     router.push('/');
  //   },
  //   onError: (error: Error) => {
  //     console.error('Login not successful -> ', error.message);
  //     showToast({ message: error.message, type: 'ERROR' });
  //   },
  // });
  //
  // const onSubmit = form.onSubmit((values: LoginFormData) => mutation.mutate(values));
  //
  const onSubmit = form.onSubmit(async (values: LoginFormData) => {
    try {
      const response = await accountService.login(values);
      const profile = await accountService.getProfile();
      setUser(profile);
      setAuthenticated(!!profile);

      showToast({ message: 'Login Successful', type: 'SUCCESS' });
      router.push('/');
    } catch (error: any) {
      console.error('Login not successful -> ', error.message);
      showToast({ message: error.message, type: 'ERROR' });
    }
  });

  return (
    <form className='mx-auto flex w-3/4 flex-col gap-5' onSubmit={onSubmit}>
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
      <Button type='submit'>Login</Button>

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
