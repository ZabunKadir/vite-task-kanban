import Link from "@/components/link";
const Footer = () => {
  return (
    <footer className="footer-container   py-6 ">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-44">
        <div className="footer-content flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
          {/* Copyright */}
          <div className="text-left font-bold">Copyright © 2025 Atlassian</div>

          {/* EREN Linkleri */}
          <div className="footer-links flex flex-col gap-2 md:flex-row md:gap-6">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Your Privacy Choices</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
