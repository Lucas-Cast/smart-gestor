'use client'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSideBar'
import { PropsWithChildren, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </main>
  )
}
