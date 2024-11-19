import CatalogSiteMap from "../_components/CatalogSiteMap"

interface CatalogLayoutProps {
  children: React.ReactNode
}

const CatalogLayout = ({ children }: CatalogLayoutProps) => {
  return (
    <>
      <CatalogSiteMap />
      {children}
    </>
  )
}

export default CatalogLayout
