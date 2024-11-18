"use client"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface CatalogSiteMapProps {
    params: {
        configId: string
        product: string
    }
}

interface Step {
    label: string
    href: string
    key: number
}

const CatalogSiteMap = () => {
    const params = useParams<CatalogSiteMapProps['params']>()
    const pathname = usePathname()
    const [currentStep, setCurrentStep] = useState<number>(1)
    const steps: Step[] = [
        {
            label: 'Upload',
            href: "/catalog",
            key: 1,
        },
        {
            label: 'Product',
            href: `/catalog/${params.configId}`,
            key: 2,
        },
        {
            label: 'Design',
            href: `/catalog/${params.configId}/${params.product}`,
            key: 3,
        },
        {
            label: 'Preview',
            href: `/catalog/${params.configId}/${params.product}/preview`,
            key: 4,
        },
        {
            label: 'Checkout',
            href: `/catalog/${params.configId}/${params.product}/checkout`,
            key: 5,
        },
        {
            label: 'Finish',
            href: `/order/${params.configId}`,
            key: 6,
        }
    ]

    useEffect(() => {
        const currentStep = steps.findIndex((step) => step.href === pathname)
        if (currentStep !== -1) {
            setCurrentStep(currentStep + 1)
        }
    }, [pathname, steps])

    const handleStepClick = (stepKey: number) => {
        if (stepKey <= currentStep) {
            setCurrentStep(stepKey)
        }
    }

    return (
        <header className="mt-5">
            <ProgressBar currentStep={currentStep} />
            <nav className="flex justify-center items-center space-x-14">
                {steps?.map((step) => (
                    <StepItem
                        key={step.key}
                        number={step.key}
                        label={step.label}
                        href={step.href}
                        isActive={step.key === currentStep}
                        isClickable={step.key <= currentStep}
                        onClick={() => handleStepClick(step.key)}
                    />
                ))}
            </nav>
        </header>
    )
}

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
    const progress = (currentStep / 6) * 100
    return (
        <div className="relative mb-5 w-2/3 mx-auto mt-6">
            <Progress value={progress} />

        </div>
    )
}

const StepItem = (
    {
        label,
        number,
        href,
        isActive,
        isClickable,
        onClick,
        key }: { label: string, number: number, href: string, isActive: boolean, isClickable: boolean, key: number, onClick: () => void, }) => {
    return (
        <div
            className="flex flex-col items-center"
            onClick={isClickable ? onClick : undefined}
        >
            <Link
                href={isClickable ? href : "#"}
                className={cn("cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 transition-all duration-300", isActive ? "bg-myColor-100 text-white" : isClickable ? "hover:bg-gray-300 text-gray-900" : "bg-gray-200 text-gray-400 cursor-not-allowed")}>
                {number}
            </Link>
                <div
                    className={cn('mt-2 text-sm font-medium transition-colors duration-300', isActive ? "text-myColor-100" : isClickable ? "text-gray-700" : "text-gray-400")}
                >
                    {label}
                </div>
        </div>
    )
}

export default CatalogSiteMap