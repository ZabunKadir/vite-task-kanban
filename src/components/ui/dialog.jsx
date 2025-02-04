import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

// Overlay
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// Dialog Content
const DialogContent = React.forwardRef(
  ({ width = "max-w-lg", height = "auto", children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `fixed left-1/2 top-1/2 z-50 grid w-full ${width} ${height} translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg`
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
          <X className="h-4 w-4" />
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// Dialog Title
const DialogTitle = React.forwardRef(({ children, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className="text-lg font-semibold" {...props}>
    {children}
  </DialogPrimitive.Title>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Dialog Description
const DialogDescription = React.forwardRef(({ children, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className="text-sm text-muted-foreground"
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
