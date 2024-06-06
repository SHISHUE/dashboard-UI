import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { MdMessage, MdNotifications } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from '@/components/ui/button';

function Navbar() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="flex navbar items-center backdrop-blur-md justify-between px-3 py-2 shadow-md sticky top-0 bg-zinc-900/5 text-white z-50">
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 transition duration-150 ease-in-out">
        <HiSearch className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder-gray-400"
        />
        <kbd className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">Ctrl + K</kbd>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 text-white px-4 py-1 rounded-xl flex items-center gap-2">
              <FaPlus className="h-4 w-4" />
              Create
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Item</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new item.
              </DialogDescription>
              {/* Add form or other content here */}
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Message Icon */}
        <div className="relative">
          <MdMessage className="h-6 w-6 text-gray-400" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <MdNotifications className="h-6 w-6 text-gray-400" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
        </div>

        {/* Avatar */}
        <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
      </div>
    </div>
  );
}

export default Navbar;
