import { MantineProvider } from '@mantine/core'
import { HEADER_HEIGHT, HeaderResponsive } from './components/HeaderResponsive'
import { appLinks } from './routes/Applinks'
import { CarouselCard } from './components/Caros/Caros'
import { AboutSection } from './pages/About/About'
import SectionContainer from './components/sectionContainer/SectionContainer'
import { FeaturesCards } from './pages/Whyus/Whyus'
import GallerySection from './pages/gallery/Gallery'
import ProductSection from './pages/Product/ProductSection'
import './App.css'
import SectionTitle from './components/sectionTitle/SectionTitle'
import { TestimonialSection } from './pages/TestimonialSection/TestimonialSection'
import { ContactSection } from './sections/contact/ContactSection'
import CaseStudySection from './sections/caseStudy/CaseStudySection'
import { FooterSection } from './sections/footer/FooterSection'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderResponsive links={appLinks.links} />
      <div style={{ marginTop: HEADER_HEIGHT }}>
        {/* <SectionContainer>
          <CarouselCard />
        </SectionContainer>  */}
        <SectionContainer>
          <AboutSection />
        </SectionContainer>
        <SectionContainer>
          <div className='products-container'>
            <SectionTitle title='Our Products' />
            <ProductSection />
          </div>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title='Case Study' />
          <CaseStudySection />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title='Gallery' />
          <GallerySection />
        </SectionContainer>
        <SectionContainer>
          <FeaturesCards />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title='Testimonials' />
          <TestimonialSection />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title='Contact us' />
          <ContactSection />
        </SectionContainer>
        <SectionContainer>
          <FooterSection />
        </SectionContainer>
      </div>
    </MantineProvider>
  )
}
