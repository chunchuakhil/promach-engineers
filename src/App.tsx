import { MantineProvider, Text } from '@mantine/core';
import { HeaderResponsive } from './components/AppBar';
interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const AppBarLinks: HeaderResponsiveProps = {
  links: [
    {
      link: 'https://mantine.dev',
      label: 'Mantine',
    },
    {
      link: 'https://mantine.dev/docs',
      label: 'Docs',
    },
    {
      link: 'https://github.com/mantine/mantine',
      label: 'GitHub',
    },
  ],
}
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderResponsive links={AppBarLinks.links}/>
    </MantineProvider>
  );
}