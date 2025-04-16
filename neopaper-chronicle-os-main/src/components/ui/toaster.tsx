
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-paper border border-paper-dark/20 font-serif shadow-md group relative overflow-hidden">
            <div className="absolute -top-2 -right-2 text-xs bg-highlight-red text-paper-light py-0.5 px-2 rotate-[2deg] shadow-sm z-10">
              Breaking News
            </div>
            <div 
              className="absolute top-0 left-0 w-full h-full bg-grain-texture opacity-10 pointer-events-none"
              style={{ backgroundSize: '200px' }}
            ></div>
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-ink-dark font-bold tracking-tight">{title}</ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-ink leading-relaxed">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="rounded-full h-5 w-5 bg-paper-dark/10 hover:bg-paper-dark/20 
              text-ink-light transition-colors overflow-hidden group-hover:opacity-100" />
          </Toast>
        )
      })}
      <ToastViewport className="p-6 flex flex-col gap-2.5" />
    </ToastProvider>
  )
}
