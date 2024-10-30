import Footer from "./_components/Footer"
import Header from "./_components/Menu/Header"

interface RoutesLayoutProps {
  children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">{children}</div>
      <Footer />
    </>
  )
}

export default RoutesLayout
