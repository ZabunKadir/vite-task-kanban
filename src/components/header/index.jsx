import { Link } from "react-router-dom";
import MobileMenu from "./mobilmenu"; // Mobil menü componentini import edin
import { Button } from "../ui/button";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="w-full flex border-b border-gray-200 px-4 md:px-20 py-6">
      <div className="flex items-center justify-between w-full">
        {/* Logo (Sol Tarafta) */}
        <div className="flex-shrink-0">
          <Logo width={90} height={60} />
        </div>

        {/* Linkler (Ortada - Sadece Desktop'ta Görünür) */}
        <div className="hidden md:flex items-center gap-6 mx-4">
          <Link to="#" className="hover:text-gray-400">
            Privacy policy
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Your Privacy Choices
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Terms
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Impressum
          </Link>
        </div>

        {/* Buton (Sağ Tarafta) */}
        <div className="flex-shrink-0 hidden md:flex gap-4  ">
          <Link to="/signup">
            {" "}
            <but>Kayıt Ol</Button>
          </Link>
          <Link to="/login">
            {" "}
            <Button>Giriş Yap</Button>
          </Link>
        </div>

        {/* Mobil Menü (Sadece Mobilde Görünür) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
