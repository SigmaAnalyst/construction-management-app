
import * as React from "react";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"ghost"|"outline"|"secondary"; size?: "sm"|"md"|"icon" };
export const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, variant="default", size="md", ...props }, ref) => {
  const base = "inline-flex items-center justify-center gap-1 font-medium transition rounded-md";
  const variants = { default:"bg-neutral-900 text-white hover:opacity-90", ghost:"bg-transparent hover:bg-neutral-100", outline:"border border-neutral-300 hover:bg-neutral-50", secondary:"bg-neutral-100 text-neutral-900" };
  const sizes = { sm:"h-8 px-3 text-sm", md:"h-10 px-4 text-sm", icon:"h-10 w-10" };
  return <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
});
Button.displayName="Button";
export default Button;
