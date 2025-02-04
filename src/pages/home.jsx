import DialogComp from "../components/dialog/index";
import PublicLayout from "@/layout/PublicLayout";

const HomePage = () => {
  return (
    <PublicLayout>
      <section className="min-h-[calc(100vh-105px)]  gap-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <DialogComp title="qwceqwecqwecqw" description="cqwecqwceqwe" />
      </section>
    </PublicLayout>
  );
};

export default HomePage;
