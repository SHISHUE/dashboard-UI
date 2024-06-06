import { BsPlus, BsShop } from "react-icons/bs";
import { CiDiscount1, CiCircleQuestion } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogoIonitron } from "react-icons/io";
import { IoHomeOutline, IoPieChartOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import Item from "../utils/Item";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { HiSearch } from "react-icons/hi";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Sidebar = () => {
  const itemData = [
    {
      name: "Home",
      path: "/",
      icon: IoHomeOutline,
    },
    {
      name: "Products",
      path: "/product",
      icon: RiVipDiamondLine,
      showPlusIcon: true,
      showDropdownIcon: true,
      children: [
        {
          name: "Add Product",
          path: "/product/add",
          icon: BsPlus,
        },
        {
          name: "Manage Products",
          path: "/product/manage",
          icon: BsShop,
        },
      ],
    },
    {
      name: "Customers",
      path: "/customer",
      icon: FaRegUserCircle,
      showDropdownIcon: true,
      children: [
        {
          name: "Customer List",
          path: "/customer/list",
          icon: FaRegUserCircle,
        },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      icon: BsShop,
    },
    {
      name: "Income",
      path: "/income",
      icon: IoPieChartOutline,
      showDropdownIcon: true,
      children: [
        {
          name: "Monthly Report",
          path: "/income/monthly",
          icon: IoPieChartOutline,
        },
        {
          name: "Annual Report",
          path: "/income/annual",
          icon: IoPieChartOutline,
        },
      ],
    },
    {
      name: "Promote",
      path: "/promote",
      icon: CiDiscount1,
    },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Router>
      <div
        className={`sticky top-0 p-4 bg-zinc-900 ${
          isHidden ? "h-16  " : "h-34"
        } transition-all duration-500`}
        
      >
        {/* Main icon */}
        <div className="mb-6 cursor-pointer flex items-center justify-between">
          <IoLogoIonitron
            className="h-10 w-10 text-white"
            onClick={() => setIsHidden(!isHidden)}
          />
          {/* Search and Avatar */}
          <div className=" items-center gap-2 menu-icon hidden">
            <Dialog>
              <DialogTrigger asChild>
                <HiSearch className="h-6 w-6 text-stone-400 cursor-pointer" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </DialogDescription>
              </DialogContent>
            </Dialog>
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

        {/* Sidebar items */}
        <div
          className={`transition-all duration-200 ${
            isHidden ? "item" : "translate-x-0"
          }`}
        >
          {itemData.map((item, index) => (
            <div key={index} className="p-2">
              <Item
                title={item.name}
                icon={item.icon}
                path={item.path}
                showPlusIcon={item.showPlusIcon}
                showDropdownIcon={item.showDropdownIcon}
                
              >
                {item.children &&
                  item.children.map((child, childIndex) => (
                    <Item
                      key={childIndex}
                      title={child.name}
                      icon={child.icon}
                      path={child.path}
                      
                    />
                  ))}
              </Item>
            </div>
          ))}
        </div>

        {/* Help and Theme Switcher */}
        <div
          className={`relative bottom-0 m-4 border-t-2 border-opacity-35 ${
            isHidden ? "item" : "translate-x-0"
          } transition-all duration-200 border-zinc-400`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 py-3">
              {/* Help icon */}
              <CiCircleQuestion className="h-5 w-5 text-stone-400" />
              <p className="text-sm text-stone-400">Help & getting started</p>
            </div>
            <div className="rounded text-sm bg-violet-400 p-1 text-stone-900">
              8
            </div>
          </div>

          {/* Theme switcher */}
          <div className="flex items-center justify-evenly bg-black rounded-full p-1 gap-2 mt-4">
            <button
              onClick={() => toggleTheme("light")}
              className={`flex items-center gap-2 w-1/2  py-1 px-2 border-none outline-none rounded-full transition-all duration-200 
                  ${
                    theme === "light"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-stone-300"
                  }`}
            >
              <MdLightMode className="h-5 w-5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              className={`flex items-center gap-2 px-2 py-1 border-none w-1/2 outline-none rounded-full transition-all duration-200 
                  ${
                    theme === "dark"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-stone-300"
                  }`}
            >
              <MdDarkMode className="h-5 w-5" />
              <span>Dark</span>
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
