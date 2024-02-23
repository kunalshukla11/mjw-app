import React from 'react';

export default function PageWrapper({ children }: { children: any }) {
  return <div className='flex flex-col space-y-2 px-4 pb-4 pt-4'>{children}</div>;
}
