"use client"

import { CheckIcon } from "lucide-react"
import { useEffect, useState } from "react"
import Confetti from "react-dom-confetti"

const FinishPage = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <>
      <div className="pointer-events-none absolute select-none inset-0 flex justify-center overflow-hidden">
        <Confetti
          active={showConfetti}
          config={{ elementCount: 1000, spread: 550 }}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="w-60 h-60 flex flex-col items-center justify-center text-5xl rounded-full bg-myColor-100">
          <CheckIcon className="w-40 h-40 text-white" />
        </div>
        <p className="text-myColor-100 mt-9 text-2xl">Checkout Complete</p>
      </div>
    </>
  )
}

export default FinishPage
