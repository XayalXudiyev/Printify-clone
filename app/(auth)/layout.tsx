import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex relative gap-2 max-h-screen">
      <div className="absolute top-2 left-2">
        <Link href="/">
          <IoMdClose className="text-slate-700" />
        </Link>
      </div>
      <div className=" w-full md:w-1/2 flex flex-col space-y-8 items-center justify-center h-screen">
      <Link href="/">
            <Image
              alt="Logo"
              src="/logo.png"
              width={512}
              height={120}
              className=" h-10 w-auto"
            />
            <div className="text-center">
<h2 className=" font-semibold text-2xl">Welcome back</h2>
            </div>
          </Link>
        {children}

      </div>
      <div className="hidden md:flex w-1/2 h-screen">
        <Image alt="" src="/auth.jpg" width={1080} height={1920} className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default AuthLayout