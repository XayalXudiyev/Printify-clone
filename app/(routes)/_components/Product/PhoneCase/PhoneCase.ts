export const PHONE_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 7.00,
  },
  finish: {
    smooth: 0,
    textured: 4.00,
  },
} as const

export const PHONE_BASE_PRICE = 12.00

type Color = { label: string; value: string; tw: string; twBorder: string }

export const PHONE_COLORS: Color[] = [
  {
    label: "Black",
    value: "black",
    tw: "bg-zinc-900",
    twBorder: "border-zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "bg-blue-500",
    twBorder: "border-blue-500",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "bg-rose-400",
    twBorder: "border-rose-400",
  },
  {
    label: "Yellow",
    value: "yellow",
    tw: "bg-yellow-300",
    twBorder: "border-yellow-300",
  },
]

type Model = { label: string; value: string }

export const PHONE_MODELS: Model[] = [
  { label: "iPhone X", value: "iphonex" },
  { label: "iPhone 11", value: "iphone11" },
  { label: "iPhone 12", value: "iphone12" },
  { label: "iPhone 13", value: "iphone13" },
  { label: "iPhone 14", value: "iphone14" },
  { label: "iPhone 15", value: "iphone15" },
]

type Option = {
  label: string
  value: string
  price: number
  description?: string
}
type Group = { label: string; options: Option[] }

export const PHONE_MATERIALS: Group[] = [
  {
    label: "material",
    options: [
      {
        label: "Silicone",
        value: "silicone",
        price: PHONE_PRICES.material.silicone,
        description: undefined,
      },
      {
        label: "Soft Polycarbonate",
        value: "polycarbonate",
        price: PHONE_PRICES.material.polycarbonate,
        description: "Flexible and durable",
      },
    ],
  },
] as const

export const PHONE_FINISHES: Group[] = [
  {
    label: "finish",
    options: [
      {
        label: "Smooth Finish",
        value: "smooth",
        price: PHONE_PRICES.finish.smooth,
        description: undefined,
      },
      {
        label: "Textured",
        value: "textured",
        price: PHONE_PRICES.finish.textured,
        description: "Anti-slip",
      },
    ],
  },
] as const
