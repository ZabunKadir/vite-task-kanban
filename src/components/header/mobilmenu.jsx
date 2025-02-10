import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LinkComp from "../link";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CustomButton } from "../button";
import ThemeToggle from "./themetoglle";

const MobileMenu = ({ links }) => {
  return (
    <Sheet>
      {/* Dark mode */}
      <ThemeToggle />
      <SheetTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full max-w-[400px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300"
      >
        <DialogTitle className="text-gray-900 dark:text-gray-100">Menu</DialogTitle>
        <div className="flex flex-col gap-4 mt-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4 w-full mt-4 flex flex-col">
            {links.map((item, index) => {
              return (
                <SheetClose asChild key={index}>
                  <LinkComp className="hover:text-red-400 text-gray-900 dark:text-gray-100" to={item.link}>
                    {item.title}
                  </LinkComp>
                </SheetClose>
              );
            })}
          </div>
          <div className="flex justify-center gap-4">
            <SheetClose asChild>
              <LinkComp to="/signup">
                <CustomButton className="bg-primary-main text-white dark:bg-gray-700 dark:text-white">
                  Sign Up
                </CustomButton>
              </LinkComp>
            </SheetClose>
            <SheetClose asChild>
              <LinkComp to="/login">
                <CustomButton className="text-primary-main bg-white border border-transparent hover:border-primary-main dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500">
                  Sign In
                </CustomButton>
              </LinkComp>
            </SheetClose>
          </div>

        
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
