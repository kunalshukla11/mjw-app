'use client';

import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { LoginFormData } from '@/src/lib/types/types';
import { useMutation } from '@tanstack/react-query';
import * as accountService from '@/src/lib/services/account/authService';
import { showToast } from '@/src/lib/services/common/toastService';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (loginFormData: LoginFormData) => accountService.login(loginFormData),
    onSuccess: async () => {
      showToast({ message: 'Login Successful', type: 'SUCCESS' });
      router.push('/');
    },
    onError: (error: Error) => {
      console.error('Login not successful -> ', error.message);
    },
  });

  const onSubmit = form.onSubmit((values: LoginFormData) => mutation.mutate(values));

  return (
    <form className='mx-auto flex w-3/4 flex-col  gap-5' onSubmit={onSubmit}>
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
    </form>
  );
}

export default Login;
