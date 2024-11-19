import { prismadb } from "@/lib/prismadb"

const DashboardPage = async () => {
  const totalConfigurations = await prismadb.configuration.count()

  return (
    <div className="p-8  space-y-8">
      <div className="text-lg bg-gray-800 text-white p-4 rounded-lg flex flex-col gap-4">
        Total Orders: {totalConfigurations}
      </div>
    </div>
  )
}

export default DashboardPage
