import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"
import { FaUser, FaXRay } from "react-icons/fa"
import { IoLogoXbox } from "react-icons/io"
import { RiCloseLine } from "react-icons/ri"
import { SignIn } from "@clerk/nextjs"

interface ModalLoginProps {
    redirectUrl?: string
}

const ModalLogin = ({ redirectUrl }: ModalLoginProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="gap-2">Login <FaUser className="h-4 w-4 ml-2 inline" /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex justify-center items-center w-full">
                <AlertDialogCancel asChild>

                    <Button variant="ghost" className="absolute top-2 right-2 p-2"> <RiCloseLine className="h-4 w-4 " /></Button>
                </AlertDialogCancel >
                <SignIn routing="hash" redirectUrl={redirectUrl} />
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default ModalLogin