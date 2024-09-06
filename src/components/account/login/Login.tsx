'use client';

import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { LoginFormData } from '@/src/types';

function Login() {
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  });

  const loginServer = async (values: LoginFormData) => {};

  const onSubmit = form.onSubmit((values: LoginFormData) => console.log(values));

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
