import { MdCheckCircle, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";

const SuccessModal = ({
  isOpen,
  onClose,
  title,
  description,
  color = "green",
  icon = "success",
  buttonText,
  onButtonClick,
}) => {
  if (!isOpen) return null;

  const icons = {
    success: <MdCheckCircle className="w-10 h-10 text-green-500" />,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div
        className={cn(
          "relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-96",
          color === "green" && "border-green-500"
        )}
      >
        {/* Sağ üstte kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <MdClose className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {icons[icon] || icons.success}
          <h2 className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
