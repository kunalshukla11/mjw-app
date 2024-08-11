'use client';

import { useState } from 'react';
import MainLayout from '@/src/components/layout/MainLayout';
import Register from '@/src/components/register/register';

export default function RegisterPage() {
  return (
    <MainLayout>
      <Register />
    </MainLayout>
  );
}
