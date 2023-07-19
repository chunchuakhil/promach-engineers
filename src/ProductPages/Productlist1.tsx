import { createStyles, Title, Table, Image, Container, rem } from '@mantine/core'
import { FooterLinks } from './footer'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export function Productlist1() {
  const elements = [
    {
      power: 'Number of drives',
      power75: 1,
      power110: 1,
      power150: 1,
      power187: 1,
      power225: 1,
      power300: 2,
      power375: 2,
      power440: 2,
    },
    {
      power: 'Rotor diameter (mm)',
      power75: 730,
      power110: 730,
      power150: 730,
      power187: 840,
      power225: 840,
      power300: 840,
      power375: 840,
      power440: 840,
    },
    {
      power: 'Recommended feed size (mm)',
      power75: '<32',
      power110: '<32',
      power150: '<32',
      power187: '<32',
      power225: '<32',
      power300: '<32',
      power375: '<32',
      power440: '<32',
    },
    {
      power: 'Throughput capacity tph',
      power75: 60,
      power110: 90,
      power150: 120,
      power187: 150,
      power225: 180,
      power300: 240,
      power375: 300,
      power440: 360,
    },
  ]

  const rows = elements.map((element) => (
    <tr key={element.power}>
      <td>{element.power}</td>
      <td>{element.power75}</td>
      <td>{element.power110}</td>
      <td>{element.power150}</td>
      <td>{element.power187}</td>
      <td>{element.power225}</td>
      <td>{element.power300}</td>
      <td>{element.power375}</td>
      <td>{element.power440}</td>
    </tr>
  ))

  const { classes } = useStyles()
  const footerLinksData = [
    {
      title: 'Section 1',
      links: [
        { label: 'Home', link: '../Whyus' },
        { label: 'Link 2', link: '/link2' },
      ],
    },
    {
      title: 'Section 2',
      links: [
        { label: 'Link 3', link: '/link3' },
        { label: 'Link 4', link: '/link4' },
      ],
    },
  ]

  return (
    <Container size='lg' py='xl'>
      <Title order={2} className={classes.title} ta='left' mt='sm'>
        Vertical Shaft Impactor
      </Title>
      <div>
        <Image
          mx='auto'
          radius='md'
          src='https://www.promach.in/assets/images/about3.jpg'
          alt='Random image'
        />
        <p>
          Vertical Shaft Impactor (VSI) crushers are designed to be used in tertiary or quaternary
          stage crushing. The crushers are suitable for a wide range of applications including the
          production of high quality manufactured sand, well formed aggregates and industrial
          minerals. Crushers can also be used for shaping or removal of soft stone from aggregate.
          Advanced alternatives with open table designs, multi-port rotor and larger bearings than
          many other VSI crushers are the main reasons for our crushers to provide high value
          solutions and deliver high performance.
        </p>

        {/* <ScrollArea w={250} scrollbarSize={20} > */}
        <Table
          striped
          highlightOnHover
          withBorder
          withColumnBorders
          horizontalSpacing='sm'
          verticalSpacing='xs'
        >
          <thead>
            <tr>
              <th>Power, kW (hp)</th>
              <th>75 (100)</th>
              <th>110 (150)</th>
              <th>150 (200)</th>
              <th>187 (250)</th>
              <th>225 (300)</th>
              <th>300 (400)</th>
              <th>375 (400)</th>
              <th>440 (600)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* </ScrollArea> */}
        <FooterLinks data={footerLinksData} />
      </div>
    </Container>
  )
}
