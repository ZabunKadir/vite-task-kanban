import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import CustomButton from "../button";

const UserDropdown = ({ items, generalIcon: GeneralIcon }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {GeneralIcon ? <GeneralIcon className="text-xl cursor-pointer text-gray-500 dark:text-gray-300" /> : null}
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 mt-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-lg rounded-lg"
        >
          {items.map((item, index) => (
            item.isDescription ? (
              <div 
                key={index} 
                className="px-2 py-2 text-sm text-gray-500 dark:text-gray-400 cursor-default flex items-center gap-2"
              >
                {item.icon && <span className="text-lg">{item.icon}</span>}
                {item.label}
              </div>
            ) : item.isButton ? (
              <CustomButton
                key={index}
                onClick={item.onClick}
                className="px-2 w-full hover:bg-primary-main justify-start flex items-center gap-2"
              >
                {item.icon && <span className="text-lg">{item.icon}</span>}
                {item.label}
              </CustomButton>
            ) : (
              <DropdownMenuItem 
                key={index} 
                onClick={item.onClick} 
                className={`cursor-pointer px-2 py-2 hover:bg-primary-main hover:text-white dark:hover:bg-gray-700 rounded-md flex items-center gap-2 ${
                  item.isBordered ? 'border-b border-gray-200 dark:border-gray-700' : ''
                }`}
              >
                {item.icon && <span className="text-lg">{item.icon}</span>}
                {item.label}
              </DropdownMenuItem>
            )
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

export default UserDropdown;
