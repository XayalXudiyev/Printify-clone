type RouteProps = {
  id: number
  href: string
  title: string
}

type ServiceProps = {
  id: number
  image: string
  title: string
  description: string
}

export const routes: RouteProps[] = [
  {
    id: 1,
    href: "/catalog",
    title: "Catalog",
  },
  {
    id: 2,
    href: "/how-it-works",
    title: "How it works",
  },
  {
    id: 3,
    href: "/pricing",
    title: "Pricing",
  },
  {
    id: 4,
    href: "/contacts",
    title: "Need help?",
  },
]

export const services: ServiceProps[] = [
  {
    id: 1,
    image: "/services/1.png",
    title: "Higher profits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas.",
  },
  {
    id: 2,
    image: "/services/2.png",
    title: "Robust scaling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas.",
  },
  {
    id: 3,
    image: "/services/3.png",
    title: "Best selection",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas.",
  },
]

type ProductType = {
  id: number
  image: string
  title: string
  href: string
}

export const products: ProductType[] = [
  {
    id: 1,
    image: "/product/1.jpg",
    title: "Phone",
    href: "phone",
  },
  {
    id: 2,
    image: "/product/2.jpg",
    title: "T-shirt",
    href: "t-shirt",
  },
  {
    id: 3,
    image: "/product/3.jpg",
    title: "Mug",
    href: "mug",
  },
]
