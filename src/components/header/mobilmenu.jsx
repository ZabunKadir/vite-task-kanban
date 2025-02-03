import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      {/* Border ve genişlik eklenen alan */}
      <SheetContent
        side="left"
        className="w-[350px] bg-white border-r border-gray-200"
      >
        <div className="flex flex-col gap-4 mt-6">
          {/* Linkler */}
          <div className="border-b border-gray-200 pb-4 w-full mt-4">
            {" "}
            {/* Border eklendi */}
            <SheetClose asChild>
              <Link to="#" className="hover:text-gray-400 block">
                Privacy policy
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="#" className="hover:text-gray-400 block mt-2">
                Your Privacy Choices
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="#" className="hover:text-gray-400 block mt-2">
                Terms
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="#" className="hover:text-gray-400 block mt-2">
                Impressum
              </Link>
            </SheetClose>
          </div>

          {/* Butonlar */}
          <div className="flex  justify-center gap-4">
            <SheetClose asChild>
              <Link to="/signup">
                {" "}
                <Button>Kayıt Ol</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/login">
                {" "}
                <Button>Giriş Yap</Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
