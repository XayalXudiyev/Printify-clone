import PhoneDesignConfig from "@/app/(routes)/_components/Product/PhoneCase/PhoneDesignConfig"
import { prismadb } from "@/lib/prismadb"
import { isValidObjectId } from "@/lib/utils"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    configId: string
    product: string
  }
}

const ProductPage = async ({ params: unresolvedParams }: ProductPageProps) => {
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
  const { imageUrl, width, height } = configuration

  console.log("params", params.product)
  
  switch (params.product) {
    case "phone":
      return (
        <PhoneDesignConfig
          productType={params.product}
          configId={configuration.id}
          imageUrl={imageUrl}
          imageDimensions={{ width, height }}
        />
      )
    case "mug":
      return <div>Mug</div>
    case "t-shirt":
      return <div>T-shirt</div>
    default:
      return notFound()
  }
}

export default ProductPage
