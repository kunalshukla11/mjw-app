import { Button, Group, Input } from '@mantine/core';
import mycomponent from './MyComponent.module.css';

export function MyComponent() {
  return (
    <>
      <Group>
        <h1 className={mycomponent.heading}>MyComponent</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button className="bg-red-400">Button</Button>
        <Input placeholder="Heys"></Input>
      </Group>
    </>
  );
}
