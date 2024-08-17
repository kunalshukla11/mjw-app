import { Button, Title } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from '@/src/types';
import { match } from 'assert';

function Register() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = handleSubmit((data: RegisterFormData) => {
    console.log(data);
  });

  return (
    <form className='flex flex-col gap-5 pb-20' onSubmit={onSubmit}>
      <Title className='text-3xl font-bold '>Create an Account</Title>
      <div className='flex flex-col gap-5 md:flex-row'>
        <label className='flex-1 text-sm font-bold text-gray-700'>
          First Name
          <input
            className='w-full rounded border px-2 py-1 font-normal'
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </label>
        <label className='flex-1 text-sm font-bold text-gray-700'>
          Last Name
          <input
            className='w-full rounded border px-2 py-1 font-normal'
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
        </label>
      </div>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Email
        <input
          type='email'
          className='w-full rounded border px-2 py-1 font-normal'
          {...(register('email'), { required: true })}
        />
      </label>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Password
        <input
          type='password'
          className='w-full rounded border px-2 py-1 font-normal'
          {...register('password', {
            required: true,
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
        />
      </label>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Confirm Password
        <input
          type='password'
          className='w-full rounded border px-2 py-1 font-normal'
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className='text-red-500'>{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <Button
          type='submit'
          className='p-2 text-xl font-bold text-white hover:bg-indigo-100 hover:text-indigo-700'
        >
          Create Account
        </Button>
      </span>
    </form>
  );
}

export default Register;
