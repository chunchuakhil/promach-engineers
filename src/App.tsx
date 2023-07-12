import { MantineProvider } from '@mantine/core'
import { HEADER_HEIGHT, HeaderResponsive } from './components/HeaderResponsive'
import { appLinks } from './routes/Applinks'
import { CarouselCard } from './components/Caros/Caros'
import { AboutSection } from './pages/About/About'
import SectionContainer from './components/sectionContainer/SectionContainer'
import { FeaturesCards } from './pages/Whyus/Whyus'
import {Productlist1} from './ProductPages/Productlist1'
import { Productlist2 } from './ProductPages/Productlist2'
import { Productlist3 } from './ProductPages/Productlist3'
import { Productlist4 } from './ProductPages/Productlist4'
import { Productlist5 } from './ProductPages/Productlist5'
import { Productlist6 } from './ProductPages/Productlist6'
import { GallerySection } from './pages/gallery/Gallery'
import ProductSection  from './pages/Product/ProductSection'
// import { ProductSection } from './pages/Product/ProductSection'
// import {GallerySection1} from './pages/gallery/Gallery1'
// import { GallerySection1 } from './pages/gallery/Gallery1'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderResponsive links={appLinks.links} />
      <div style={{ marginTop: HEADER_HEIGHT }}>
        {/* <SectionContainer>
          <CarouselCard />
        </SectionContainer>
        <SectionContainer>
          <AboutSection />
        </SectionContainer> */}
        <SectionContainer>
          <GallerySection />
        </SectionContainer>
        {/* <SectionContainer>
          <FeaturesCards />
        </SectionContainer>
        <SectionContainer>
          <Productlist1 />
        </SectionContainer>
        <SectionContainer>
          <Productlist2 />
        </SectionContainer>
        <SectionContainer>
          <Productlist3 />
        </SectionContainer>
        <SectionContainer>
          <Productlist4 />
        </SectionContainer>
        <SectionContainer>
          <Productlist5 />
        </SectionContainer>
        <SectionContainer>
          <Productlist6 />
        </SectionContainer> */}
        <SectionContainer>
          <ProductSection />
        </SectionContainer>
      </div>
    </MantineProvider>
  )
}
