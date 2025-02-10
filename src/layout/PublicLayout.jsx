import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
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
