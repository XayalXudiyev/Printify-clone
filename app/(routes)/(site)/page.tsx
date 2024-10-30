"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Hero from "../_components/Home/Hero"
import Service from "../_components/Home/Service"

export default function Home() {
  const { toast } = useToast()

  return (
    <>
      <Hero />
      <Service />
    </>
  )
}
