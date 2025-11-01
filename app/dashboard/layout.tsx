import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    
    <div className="flex h-screen  ">


      

      <aside className="w-64  bg-slate-400  ">
        <Sidebar  />
      
      </aside>
      <main className="flex-1 w-full  dashboard overflow-y-auto p-4 ">
      
        {children}
      </main>
    </div>
  
  )
}

export default Layout



