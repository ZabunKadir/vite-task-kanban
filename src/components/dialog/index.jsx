import { CustomButton } from "../button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

const DialogComp = ({ title, description }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton className="w-20 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Aç
        </CustomButton>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-4 z-50 bg-white p-6 rounded shadow-lg">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>

        <input
          type="text"
          placeholder="Adınızı girin"
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="E-posta adresinizi girin"
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <DialogClose asChild>
          <CustomButton className="mt-4 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Kapat
          </CustomButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComp;
