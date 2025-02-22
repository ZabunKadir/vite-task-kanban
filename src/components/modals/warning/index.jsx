import { useEffect } from "react";
import { MdWarning, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";

const WarningModal = ({
  isOpen,
  onClose,
  title,
  description,
  color = "yellow",
  icon = "warning",
  buttonText,
  onButtonClick,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const icons = {
    warning: <MdWarning className="w-10 h-10 text-yellow-500" />,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div
        className={cn(
          "relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-96",
          color === "yellow" && "border-yellow-500"
        )}
      >
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <MdClose className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center text-center">
          {icons[icon] || icons.warning}
          <h2 className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          {buttonText && (
            <button
              onClick={onButtonClick}
              type="button"
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
