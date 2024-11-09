import { products } from "@/constans"
import { prismadb } from "@/lib/prismadb"
import { isValidObjectId } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface CatalogPageProps {
  params: {
    configId: string
  }
}

const ConfigPage = async ({ params: unresolvedParams }: CatalogPageProps) => {
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

  return (
    <div className="container mx-auto">
      <div className="relative h-[800px] md:h-[500px] flex-1 my-16 w-full rounded-xl bg-gray-950/5 p-2 flex  justify-center flex-col items-center">
        <div className=" flex flex-col md:flex-row  gap-8">
          {products.map((product) => (
            <Link
              href={`${params.configId}/${product.href}`}
              key={product.id}
              className="flex flex-col gap-4 group"
            >
              <Image
                alt={product.title}
                src={product.image}
                width={500}
                height={500}
                className=" w-36 h-auto brightness-50 rounded-xl group-hover:brightness-100 transition duration-700"
              />
              <div>
                <p className="text-center font-semibold">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConfigPage
