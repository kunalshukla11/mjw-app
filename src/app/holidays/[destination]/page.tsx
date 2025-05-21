import MainLayout from '@/src/components/layout/MainLayout';

export default async function HolidaysListPage() {
  const holidayList = await fetch('http://localhost:8080/api/holiday/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cityCode: 'BOM',
      stateCode: 'MH',
      countryCode: 'IN',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Holiday List:', data);
      return data;
    })
    .catch((err) => {
      console.error('Error fetching holiday list:', err);
      return [];
    });
  console.log('Holiday List:', holidayList);

  return (
    <MainLayout showSubHeader={false}>
      <div className='flex h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-bold text-red-200'>Destinations</h1>
        <div className='flex flex-col items-center justify-center'>
          {holidayList.map((holiday: any) => (
            <div key={holiday.id} className='m-2 rounded-lg border p-4 shadow-md'>
              <h2 className='text-2xl font-semibold'>{holiday.name}</h2>
              <p>{holiday.description}</p>
            </div>
          ))}
          /{' '}
        </div>
      </div>
    </MainLayout>
  );
}
