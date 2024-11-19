import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import Link from "next/link"
import MobileMenu from "./_components/MobileMenu"
import Sidebar from "./_components/Sidebar"

interface AdminLayoutProps {
  children: React.ReactNode
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col  h-screen">
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
          <div className="hidden lg:block  ">Admin Panel</div>
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
          <Link href="/">
            <Button className="bg-myColor-100 text-white">
              <HomeIcon className="w-4 h-4 text-white" /> Home
            </Button>
          </Link>
        </header>
        <main className="flex- p-6 bg-gray-100 overflow-">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
