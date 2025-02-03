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

const MobileMenu = ({ links }) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full max-w-[400px] bg-white border-r border-gray-200"
      >
        <DialogTitle>Menu</DialogTitle>
        <div className="flex flex-col gap-4 mt-6">
          {/* Linkler */}
          <div className="border-b border-gray-200 pb-4 w-full mt-4 flex flex-col">
            {links.map((item, index) => {
              return (
                <SheetClose asChild key={index}>
                  <LinkComp className="hover:text-red-400" to={item.link}>
                    {item.title}
                  </LinkComp>
                </SheetClose>
              );
            })}
          </div>

          {/* Butonlar */}
          <div className="flex  justify-center gap-4">
            <SheetClose asChild>
              <LinkComp to="/signup">
                <CustomButton>Sign Up</CustomButton>
              </LinkComp>
            </SheetClose>
            <SheetClose asChild>
              <LinkComp to="/login">
                <CustomButton>Sign In</CustomButton>
              </LinkComp>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
