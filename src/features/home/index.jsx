import { useState } from "react";
import WarningModal from "@/components/modals/warning";
import ErrorModal from "@/components/modals/error";
import SuccessModal from "@/components/modals/successmodal";
import CustomSelect from "@/components/common/select";
import { Switch } from "@radix-ui/react-switch";
import CustomDatePicker from "@/components/common/datepicker";
import Accordion from "@/components/common/accordion";



const HomeModule = () => {

  const [selectedDate, setSelectedDate] = useState(null)
  const handleDateChange = (date) => {
    setSelectedDate(date)
  } 

  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); 

  const selectOptions = [
    {
      group: "Ülkeler",
      options: [
        { value: "tr", label: "Türkiye" },
        { value: "us", label: "Amerika Birleşik Devletleri" }
      ]
    },
    {
      group: "Şehirler",
      options: [
        { value: "34", label: "İstanbul" },
        { value: "06", label: "Ankara" }
      ]
    }
  ];

  // Modal fonksiyonları aynı kalıyor...
  const openWarningModal = () => setIsWarningModalOpen(true);
  const closeWarningModal = () => setIsWarningModalOpen(false);

  const openErrorModal = () => setIsErrorModalOpen(true);
  const closeErrorModal = () => setIsErrorModalOpen(false);

  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const handleWarningButtonClick = () => {
    console.log("Warning acknowledged!");
    closeWarningModal();
  };

  const handleErrorButtonClick = () => {
    console.log("Error acknowledged!");
    closeErrorModal();
  };

  const handleSuccessButtonClick = () => {
    console.log("Success acknowledged!");
    closeSuccessModal();
  };
  const accordionItems = [
    { title: "Item 1", content: "Content for the first item." },
    { title: "Item 2", content: "Content for the second item." },
    { title: "Item 3", content: "Content for the third item." }
  ]

  return (
    <section className="min-h-[calc(100vh-105px)] space-y-4 p-4">
      {/* Yeni Eklenen CustomSelect Bileşeni */}
 
      <Accordion items={accordionItems} />
      {/* Mevcut Butonlar */}
      <div className="flex gap-4">
        <button
          onClick={openWarningModal}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Open Warning Modal
        </button>

        <button
          onClick={openErrorModal}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Open Error Modal
        </button>

        <button
          onClick={openSuccessModal}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Open Success Modal
        </button>
      </div>

      {/* Modaller (Aynı Kalıyor) */}
      <WarningModal
        isOpen={isWarningModalOpen}
        onClose={closeWarningModal}
        title="Warning"
        description="This is a warning message."
        color="yellow"
        icon="warning"
        buttonText="I understand"
        onButtonClick={handleWarningButtonClick}
      />

      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={closeErrorModal}
        title="Error Occurred"
        description="There was an unexpected error. Please try again later."
        color="red"
        icon="error"
        buttonText="Close"
        onButtonClick={handleErrorButtonClick}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Operation Successful"
        description="Your operation was successful. Congratulations!"
        color="green"
        icon="success"
        buttonText="Great"
        onButtonClick={handleSuccessButtonClick}
      />
           <div className="max-w-md">
        <CustomSelect
          options={selectOptions}
          placeholder="Bir seçenek seçin"
          onChange={setSelectedOption}
          value={selectedOption}
        />
        {selectedOption && (
          <p className="mt-2 text-gray-600">Seçilen değer: {selectedOption}</p>
        )}
            <Switch />
      </div>
      <div className="p-4">
      <h1 className="text-xl font-bold">Tarih Seçici Kullanımı</h1>
      <CustomDatePicker
        selectedDate={selectedDate}
        onChange={handleDateChange}
        placeholder="Bir tarih seçin"
        className="mt-4"
      />
      {selectedDate && (
        <div className="mt-4">
          <strong>Seçilen Tarih:</strong> {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
      <div>
      

      <Accordion items={accordionItems} />

     
    
      </div>
    </section>
  );
};

export default HomeModule;