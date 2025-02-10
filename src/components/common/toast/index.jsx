import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Success Message
export const SuccessToast = (message) => {
  toast.success(message || "İşlem başarılı!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
// Error Message
export const ErrorToast = (message) => {
  toast.error(message || "Bir hata oluştu!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
//Warning Message
export const WarningToast = (message) => {
  toast.warning(message || "Dikkat! Kontrol edin.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
// Information Message

export const InfoToast = (message) => {
  toast.info(message || "Bilgilendirme mesajı.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
