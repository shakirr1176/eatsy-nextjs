import cn from '@/lib/cn'

export default function PrimaryBtn({className, ...rest}) {
  return (
    <button {...rest} className={cn("px-7 rounded font-semibold py-3 bg-gradient-to-r from-primary to-defRed hover:from-defRed hover:to-defRed text-white transition-background duration-500", className)}>Search</button>
  )
}
