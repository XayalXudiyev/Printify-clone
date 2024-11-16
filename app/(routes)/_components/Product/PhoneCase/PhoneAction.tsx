"use server"

import { prismadb } from "@/lib/prismadb"
import type {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  ProductType,
} from "@prisma/client"

export type SaveConfigArgs = {
  type: ProductType
  caseColor: CaseColor
  caseModel: PhoneModel
  caseMaterial: CaseMaterial
  caseFinish: CaseFinish
  configId: string
}

export const saveConfig = async ({
  type,
  caseColor,
  caseModel,
  caseMaterial,
  caseFinish,
  configId,
}: SaveConfigArgs) => {
  await prismadb.configuration.update({
    where: {
      id: configId,
    },
    data: {
      caseColor,
      caseModel,
      caseMaterial,
      caseFinish,
      type,
    },
  })
}
