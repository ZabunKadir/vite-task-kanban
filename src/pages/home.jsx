import { CustomButton } from "@/components/button";
import CustomDialog from "@/components/dialog";
import PublicLayout from "@/layout/PublicLayout";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { SuccessToast, ErrorToast, WarningToast, InfoToast } from "../components/toast/index";
import UserHeader from "@/components/header/userheader";
import Sidebar from "@/components/header/usersidebar";
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
        <div className="flex flex-col md:flex-row justify-center space-x-4">
           <CustomButton onClick={() => SuccessToast("Başarıyla eklendi!")}>Başarılı</CustomButton>
           <CustomButton onClick={() => ErrorToast("Bir hata meydana geldi!")}>Hata</CustomButton>
           <CustomButton onClick={() => WarningToast("Dikkat etmelisin!")}>Uyarı</CustomButton>
           <CustomButton onClick={() => InfoToast("Bu sadece bilgilendirme!")}>Bilgi</CustomButton>
          <ToastContainer/>
        </div>
        <UserHeader />
        <Sidebar/>
      </section>
    </PublicLayout>
  );
};

export default HomePage;
