import { MantineProvider, Container } from '@mantine/core'
import { HEADER_HEIGHT, HeaderResponsive } from './components/HeaderResponsive'
import { appLinks } from './routes/Applinks'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderResponsive links={appLinks.links} />
      <body style={{ marginTop: HEADER_HEIGHT }}>
        <Container mih={'100vh'} bg={'gray'}>
          <h1>Home section</h1>
        </Container>
        <Container mih={'100vh'} bg={'blue'}>
          Default container
        </Container>
        <Container mih={'100vh'} bg={'green'}>
          Default container
        </Container>
        <Container mih={'100vh'} bg={'red'}>
          Default container
        </Container>
      </body>
    </MantineProvider>
  )
}
