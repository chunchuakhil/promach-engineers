import { MantineProvider } from '@mantine/core'
import { HEADER_HEIGHT, HeaderResponsive } from './components/HeaderResponsive'
import { appLinks } from './routes/Applinks'
import { CarouselCard } from './components/Caros/Caros'
import { AboutSection } from './pages/About/About'
import SectionContainer from './components/sectionContainer/SectionContainer'
import { GallerySection } from './pages/gallery/GallerySection'

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
          <GallerySection />
        </SectionContainer>
        <SectionContainer>Default container</SectionContainer>
      </div>
    </MantineProvider>
  )
}
