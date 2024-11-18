import PhonePreview from "@/app/(routes)/_components/Product/PhoneCase/PhonePreview"
import { prismadb } from "@/lib/prismadb"
import { isValidObjectId } from "@/lib/utils"
import { notFound } from "next/navigation"

interface PreviewPageProps {
  params: {
    configId: string
    product: string
  }
}

const PreviewPage = async ({ params: unresolvedParams}: PreviewPageProps) => {
  const params = await unresolvedParams
  const { configId } = params

  if (!isValidObjectId(configId)) {
    return notFound()   
  }

  const configuration = await prismadb.configuration.findUnique({
    where: {    
      id: configId,
    },  
  })

  if (!configuration) { 
    return notFound()
  }
  switch (params.product) {
    case "phone":
      return  <PhonePreview configuration={configuration} />
    case "mug":
      return <div>Mug</div>
    case "t-shirt":
      return <div>T-shirt</div>
    default:
      return notFound()
  }

}

export default PreviewPage