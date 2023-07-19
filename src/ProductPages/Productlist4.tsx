import { createStyles, Title, Table, Image, Container, rem } from '@mantine/core'

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

export function Productlist4() {
  const elements = [
    { model: 'Effective length,mm', pfvm2008: 2000, pfvm2010: 2000, pfvm12070: 1200 },
    { model: 'Effective width,mm', pfvm2008: 800, pfvm2010: 1000, pfvm12070: 700 },
    { model: 'Power,KW', pfvm2008: '2 hp x 2', pfvm2010: '2.5 hp x 2', pfvm12070: '1.5 hp x 1' },
  ]

  const rows = elements.map((element) => (
    <tr key={element.model}>
      <td>{element.model}</td>
      <td>{element.pfvm2008}</td>
      <td>{element.pfvm2010}</td>
      <td>{element.pfvm12070}</td>
    </tr>
  ))

  const { classes } = useStyles()

  return (
    <Container size='lg' py='xl'>
      <Title order={2} className={classes.title} ta='left' mt='sm'>
        Pan feeders
      </Title>
      <div>
        <Image
          mx='auto'
          radius='md'
          src='https://www.promach.in/assets/images/product/pan-vibrating-feeder.jpg'
          alt='Random image'
        />
        <p>
          Pan feeders are designed to feed secondary stage or territory stage machines directly.
          They can be customized for your application to maximize performance and consistent
          operation. Our pan feeders can be widely utilized for example in aggregates production,
          mining operations, and recycling applications
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
              <th>Model</th>
              <th>PFVM2008</th>
              <th>PFVM2008</th>
              <th>PFVM12070</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* </ScrollArea> */}
      </div>
    </Container>
  )
}
