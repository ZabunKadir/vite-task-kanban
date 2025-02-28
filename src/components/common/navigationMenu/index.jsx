
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CustomNavigation = ({ className, items = [] }) => {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}>
      <NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center space-x-1">
        {items.map((item, index) => (
          <NavigationMenuPrimitive.Item key={index}>
            {item.children ? (
              <>
                <NavigationMenuPrimitive.Trigger
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  {item.label}
                  <ChevronDown
                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content className="left-0 top-0 w-full md:absolute md:w-auto bg-white shadow-md rounded-md p-2">
                  <ul className="flex flex-col space-y-1">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <NavigationMenuPrimitive.Link
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                          {child.label}
                        </NavigationMenuPrimitive.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuPrimitive.Content>
              </>
            ) : (
              <NavigationMenuPrimitive.Link
                href={item.href}
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                {item.label}
              </NavigationMenuPrimitive.Link>
            )}
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Viewport className="absolute left-0 top-full flex justify-center" />
    </NavigationMenuPrimitive.Root>
  );
};

export default CustomNavigation;
