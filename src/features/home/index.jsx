import ErrorModal from "@/components/modals/error";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hoverCard"
import CustomDatePicker from "@/components/common/datepicker";

const HomeModule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal'ı açmak için
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Modal'ı kapatmak için
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Button click event
  const handleButtonClick = () => {
    alert("Button clicked!");
    closeModal(); // Button tıklanınca modal'ı kapat
  };


  const [selectedDate, setSelectedDate] = useState(null); // Başlangıçta tarih yok

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="min-h-[calc(100vh-105px)] p-4">
      <div className="p-4 w-[100px]">
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Open Error Modal
      </button>

      <ErrorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Error Occurred"
        description="There was an issue processing your request. Please try again later."
        buttonText="Try Again"
        onButtonClick={handleButtonClick}
      />
      <HoverCard>
        <HoverCardTrigger>
          Eren
        </HoverCardTrigger>
        <HoverCardContent>
          Merhaba ben eren
        </HoverCardContent>
      </HoverCard>
      <CustomDatePicker
        selectedDate={selectedDate}         
        onChange={handleDateChange}         
        placeholder="Tarih ve saat seçin"    
        format="dd/MM/yyyy HH:mm"        
        className="w-64"                     
        reset={false}                      
      />
    </div>
     
    </section>
  );
};

export default HomeModule;
