"use client"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface PaymentFormProps {
  configId: string
  product: string
}

const paymentFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  street: z.string().min(1, { message: "Street is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postalCode: z.string().min(1, { message: "Postal code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),
  cardNumber: z.string().optional(),
  expirationDate: z.string().optional(),
  cvv: z.string().optional(),
})

const PaymentForm = ({ configId, product }: PaymentFormProps) => {
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: "",
      street: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
      phone: "",
      paymentMethod: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  })

  const onSubmit = (data: z.infer<typeof paymentFormSchema>) => {
    console.log("Form Data:", data)
  }

  const router = useRouter()

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => <Input {...field} placeholder="Full Name" />}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <Input {...field} placeholder="Street Address" />
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => <Input {...field} placeholder="City" />}
        />
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => <Input {...field} placeholder="Postal Code" />}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => <Input {...field} placeholder="Country" />}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => <Input {...field} placeholder="State" />}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <Input {...field} placeholder="Phone Number" />
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <Input {...field} placeholder="Payment Method" />
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <Input {...field} placeholder="Card Number (Optional)" />
          )}
        />
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <Input {...field} placeholder="Expiration Date (Optional)" />
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <Input {...field} placeholder="CVV (Optional)" />
          )}
        />
      </div>
      <div className="mt-4">
        <Button
          onClick={() => router.push(`/catalog/${configId}/${product}/finish`)}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default PaymentForm
