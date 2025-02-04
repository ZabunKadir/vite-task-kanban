import { CustomButton } from "@/components/button";
import CustomDialog from "@/components/dialog";
import PublicLayout from "@/layout/PublicLayout";
import { useState } from "react";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <PublicLayout>
      <section className="min-h-[calc(100vh-105px)] space-y-4 ">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <CustomDialog
          open={isModalVisible}
          closeClick={() => setIsModalVisible(false)}
        >
          <div className="flex w-full min-h-[200px]">
            <CustomButton onClick={() => setIsModalVisible(false)}>
              Aç
            </CustomButton>
          </div>
        </CustomDialog>

        <CustomButton onClick={() => setIsModalVisible(true)}>Aç</CustomButton>
      </section>
    </PublicLayout>
  );
};

export default HomePage;
