import { MantineProvider } from '@mantine/core'
import { HEADER_HEIGHT, HeaderResponsive } from './components/HeaderResponsive'
import { appLinks } from './routes/Applinks'
import { CarouselCard } from './components/Caros/Caros'
import { AboutSection } from './pages/About/About'
import SectionContainer from './components/sectionContainer/SectionContainer'
import { Whyus } from './pages/Whyus/Whyus'
import {Productlist1} from './ProductPages/Productlist1'
import { Productlist2 } from './ProductPages/Productlist2'
import { Productlist3 } from './ProductPages/Productlist3'
import { Productlist4 } from './ProductPages/Productlist4'
import { Productlist5 } from './ProductPages/Productlist5'
import { Productlist6 } from './ProductPages/Productlist6'
import { GallerySection } from './pages/gallery/Gallery'
import ProductSection  from './pages/Product/ProductSection'
import { TestimonialSection } from './pages/TestimonialSection/TestimonialSection'
import { TestimonialSection1 } from './pages/TestimonialSection/Test'
import { ProductSection1 } from './pages/Product/ProductSection1'
// import { ProductSection } from './pages/Product/ProductSection'
// import {GallerySection1} from './pages/gallery/Gallery1'
// import { GallerySection1 } from './pages/gallery/Gallery1'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderResponsive links={appLinks.links} />
      <div style={{ marginTop: HEADER_HEIGHT }}>
        <SectionContainer>
          <CarouselCard />
        </SectionContainer>
        <SectionContainer>
          <AboutSection />
        </SectionContainer>
        <SectionContainer>
          <ProductSection1 />
        </SectionContainer>
        <SectionContainer>
        <SectionContainer>
          <GallerySection />
        </SectionContainer>
        <SectionContainer>
          <Whyus />
        </SectionContainer>
        {/* <SectionContainer>
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
        {/* <SectionContainer>
          <ProductSection />
        </SectionContainer> */}
        
        <TestimonialSection
        // avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        // title="Software engineer"
        // name="Robert Glassbreaker"
        />
        </SectionContainer>
        {/* <SectionContainer>
          <TestimonialSection1
          avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
          title="Software engineer"
          name="Robert Glassbreaker"
          />
        </SectionContainer> */}

      </div>
    </MantineProvider>
  )
}
