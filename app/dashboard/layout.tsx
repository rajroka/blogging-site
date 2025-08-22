import { AppSidebar } from '@/components/App-sidebar'
import Sidebar from '@/components/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    
    <div className="flex h-screen">
      <aside className="w-64 bg-slate-400 ">
        <Sidebar />
      
      </aside>
      <main className="flex-1 w-full  overflow-auto p-4">
         {/* Button to toggle sidebar */}
          {/* <SidebarTrigger /> */}
        {children}
      </main>
    </div>
  
  )
}

export default Layout



