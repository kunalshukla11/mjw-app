import { Button, Group } from '@mantine/core';
import mycomponent from './MyComponent.module.css';

export function MyComponent() {
  return (
    <>
      <Group>
        <h1 className={mycomponent.heading}>MyComponent</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button className="bg-red-400">Button</Button>
      </Group>
    </>
  );
}
