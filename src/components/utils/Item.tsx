import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsPlus, BsChevronDown } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconType } from "react-icons";

interface ItemProps {
  title: string;
  icon: IconType;
  path: string;
  children?: React.ReactNode; 
  showPlusIcon?: boolean;
  showDropdownIcon?: boolean;
}

const Item: React.FC<ItemProps> = ({
  title,
  icon: Icon,
  path,
  children,
  showPlusIcon,
  showDropdownIcon,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <Link
        to={path}
        className={`flex items-center justify-between space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ease-in-out ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
            : ""
        } hover:bg-blue-500 hover:text-white`}
      >
        <div className="flex gap-5 items-center">
          <Icon className="h-7 w-7" />
          <h3 className="text-lg">{title}</h3>
        </div>

        <div className="flex justify-between gap-2 items-center">
          {showPlusIcon && (
            <Dialog>
              <DialogTrigger asChild>
                <BsPlus className="h-5 w-5 ml-auto cursor-pointer" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>
                    Fill out the form to add a new product.
                  </DialogDescription>
                </DialogHeader>
                {/* Add your form or content here */}
              </DialogContent>
            </Dialog>
          )}

          {showDropdownIcon && (
            <BsChevronDown
              className="h-3 w-3 ml-auto cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            />
          )}
        </div>
      </Link>

      {isDropdownOpen && <div className="ml-10 mt-2 space-y-2">{children}</div>}
    </div>
  );
};

export default Item;
