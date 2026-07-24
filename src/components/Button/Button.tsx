import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import type { ButtonProps } from './Button.types'

const VARIANT_STYLES: Record<string, string> = {
  primary:
    'bg-orange-500 text-black-950 hover:bg-orange-600 focus-visible:bg-orange-600',
  secondary:
    'bg-transparent text-white border-2 border-orange-500/40 hover:border-orange-500 hover:text-orange-500',
  ghost: 'bg-transparent text-white hover:text-orange-500',
}

const SIZE_STYLES: Record<string, string> = {
  md: 'h-[52px] px-6 text-[15px]',
  lg: 'h-[56px] px-8 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold',
          'transition-all duration-[250ms] ease-out hover:scale-[1.03] active:scale-[0.98]',
          'disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100',
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          className,
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    )
  },
)

Button.displayName = 'Button'
