import { HoverCard, Button, Text } from '@mantine/core';
import { BiSupport, BiPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md'; // <-- New Email Icon

export default function Contact() {
  return (
    <HoverCard width={320} shadow="md" position="bottom" openDelay={100} closeDelay={100}>
      <HoverCard.Target>
        <Button
          classNames={{ section: 'mr-[4px]' }}
          className="flex h-auto px-3 md:border md:border-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
          variant="subtle"
        >
          <BiSupport size={28} className="text-indigo-700" />
          <span className="hidden pl-2 md:inline font-semibold text-indigo-700">
            Customer Service
          </span>
        </Button>
      </HoverCard.Target>

      <HoverCard.Dropdown className="space-y-3">
        
        {/* Phone Section */}
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-indigo-50 transition-colors duration-200 cursor-pointer w-full">
          <BiPhone size={36} className="text-indigo-700 bg-slate-100 p-2 rounded-full" />
          <div className="flex-1">
            <Text fw={700} className="text-gray-900 text-base">
              Call Support
            </Text>
            <Text className="text-sm font-medium text-indigo-700">
              Tel: +91-97921 14666, 81275 54658
            </Text>
          </div>
        </div>

        <hr />

        {/* Email Section */}
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-indigo-50 transition-colors duration-200 cursor-pointer w-full">
          <MdEmail size={36} className="text-indigo-700 bg-slate-100 p-2 rounded-full" />
          <div className="flex-1">
            <Text fw={700} className="text-gray-900 text-base">
              Mail Support
            </Text>
            <Text className="text-sm font-medium text-indigo-700 break-words">
              ashish.mishra@myjourney<br/>wings.com
            </Text>
          </div>
        </div>

      </HoverCard.Dropdown>
    </HoverCard>
  );
}
