import { services } from "@/constans"
import Image from "next/image"
import React from "react"

const Service = () => {
  return (
    <div className="bg-myColor-200 py-32 relative ">
      <Image
        src="/vaves/2.png"
        alt="service"
        width={1500}
        height={150}
        className="absolute top-0 w-full"
      />
      <div className="mx-auto px-10 ">
        <div className="flex flex-col md:flex-row gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 gap-4"
            >
              <Image
                src={service.image}
                width={500}
                height={500}
                alt={service.title}
                className="w-40 h-40"
              />
              <h2 className="font-semibold text-3xl">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
