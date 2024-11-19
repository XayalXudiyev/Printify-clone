import PaymentForm from "@/app/(routes)/_components/PaymentForm"
import { prismadb } from "@/lib/prismadb"
import { isValidObjectId } from "@/lib/utils"
import { notFound } from "next/navigation"

interface CheckoutProps {
  params: {
    configId: string
    product: string
  }
}

const Checkout = async ({ params: unresolvedParams }: CheckoutProps) => {
  const params =  unresolvedParams
  const { configId, product } = params

  if (!isValidObjectId(configId)) {
    return notFound()
  }

  const configuration = await prismadb.configuration.findUnique({
    where: { id: configId },
  })

  if (!configuration || !product) {
    return notFound()
  }

  return (
    <div className="px-10 mx-auto">
      <div className="grid grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border bg-slate-200 p-4 mt-8 rounded-lg">
            <PaymentForm configId={configId} product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
