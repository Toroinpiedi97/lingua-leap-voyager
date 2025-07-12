import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useCapacitor } from "@/hooks/useCapacitor"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-gradient-success text-success-foreground hover:shadow-success transform hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        lesson: "bg-gradient-success text-white font-bold shadow-success hover:shadow-lg transform hover:scale-105 active:scale-95",
        accent: "bg-gradient-warm text-accent-foreground font-bold hover:shadow-lg transform hover:scale-105",
        floating: "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl animate-pulse-glow",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-xl px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const { triggerHaptic } = useCapacitor();
    const Comp = asChild ? Slot : "button"
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      triggerHaptic();
      onClick?.(e);
    };
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "touch-manipulation active:scale-[0.98] transition-transform duration-150"
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
