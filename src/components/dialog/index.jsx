import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

const CustomDialog = ({
  defaultOpen = false,
  open,
  title,
  description,
  children,
  footer,
  closeClick = () => {},
}) => {
  return (
    <Dialog defaultOpen={defaultOpen} open={open} onOpenChange={closeClick}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
