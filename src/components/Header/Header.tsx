import { SidebarTrigger } from '../ui/sidebar'

export const Header = () => {
  return (
    <header className="w-screen max-w-full fixed bg-mainBg border-bottom-3 shadow-xl">
      <div className="flex items-center justify-center relative">
        <div className="absolute left-0">
          <SidebarTrigger />
        </div>
        <h1 className="text-xxlarge">Smart Gestor</h1>
      </div>
    </header>
  )
}
