import { Button, Title } from '@mantine/core';
import React from 'react';

function Register() {
  return (
    <form className='flex flex-col gap-5 pb-20'>
      <Title className='text-3xl font-bold '>Create an Account</Title>
      <div className='flex flex-col gap-5 md:flex-row'>
        <label className='flex-1 text-sm font-bold text-gray-700'>
          First Name
          <input className='w-full rounded border px-2 py-1 font-normal'></input>
        </label>
        <label className='flex-1 text-sm font-bold text-gray-700'>
          Last Name
          <input className='w-full rounded border px-2 py-1 font-normal'></input>
        </label>
      </div>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Email
        <input type='email' className='w-full rounded border px-2 py-1 font-normal'></input>
      </label>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Password
        <input type='password' className='w-full rounded border px-2 py-1 font-normal'></input>
      </label>
      <label className='flex-1 text-sm font-bold text-gray-700'>
        Confirm Password
        <input type='password' className='w-full rounded border px-2 py-1 font-normal'></input>
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
