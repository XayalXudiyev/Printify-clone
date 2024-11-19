import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { prismadb } from "@/lib/prismadb"
import PhotoModal from "../_components/Modal"

const OrderPage = async () => {
  const totalConfigurations = await prismadb.configuration.count()
  const configurations = await prismadb.configuration.findMany()

  return (
    <div className="overflow-x-auto mt-4">
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead>Case Model</TableHead>
            <TableHead>Case Color</TableHead>
            <TableHead>Case Material</TableHead>
            <TableHead>Case Finish</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {configurations.map((configuration) => (
            <TableRow
              key={configuration.id}
              className="hover:bg-gray-200 capitalize cursor-pointer "
            >
              <TableCell>{configuration.caseModel}</TableCell>
              <TableCell>{configuration.caseColor}</TableCell>
              <TableCell>{configuration.caseMaterial}</TableCell>
              <TableCell>{configuration.caseFinish}</TableCell>
              <TableCell>{configuration.basePrice}</TableCell>
              <TableCell>{configuration.totalPrice}</TableCell>
              <TableCell>
                <PhotoModal
                  caseColor={configuration.caseColor || ""}
                  croppedImageUrl={configuration.croppedImageUrl || ""}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderPage
