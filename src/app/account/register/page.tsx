'use client';

import { useState } from 'react';
import MainLayout from '@/src/components/layout/MainLayout';
import Register from '@/src/components/features/account/register/Register';

export default function RegisterPage() {
  return (
    <MainLayout>
      <Register />
    </MainLayout>
  );
}
