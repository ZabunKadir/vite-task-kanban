import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import classNames from "classnames";

const CustomAccordion = ({
  type = "single",
  collapsible = true,
  containerClass = "",
  itemClass = "",
  contentClass = "",
  items,
}) => {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      className={classNames("w-full", containerClass)}
    >
      {items &&
        items.map((item, index) => (
          <AccordionItem
            value={item.title + index}
            key={index}
            className={classNames("border-b", itemClass)}
          >
            <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180">
              {item.title}
            </AccordionTrigger>
            <AccordionContent
              className={classNames(
                "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                contentClass
              )}
            >
              <div className="pb-4">{item.content}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default CustomAccordion;
