import Footer from "@/components/footer";
import Header from "@/components/header";

const PublicLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PublicLayout;
