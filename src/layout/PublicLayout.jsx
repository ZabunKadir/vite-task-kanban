import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <main className="min-h-screen w-full overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PublicLayout;
