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

export function Productlist2() {
  const elements = [
    { model: 'VS 480 150', len: 4800, width: 1500 },
    { model: 'VS 480 180', len: 4800, width: 1800 },
    { model: 'VS 550 180', len: 5500, width: 1800 },
    { model: 'VS 600 180', len: 6000, width: 1800 },
  ]

  const rows = elements.map((element) => (
    <tr key={element.model}>
      <td>{element.model}</td>
      <td>{element.len}</td>
      <td>{element.width}</td>
    </tr>
  ))

  const { classes } = useStyles()

  return (
    <Container size='lg' py='xl'>
      <Title order={2} className={classes.title} ta='left' mt='sm'>
        Vibrating Screens
      </Title>
      <div>
        <Image
          mx='auto'
          radius='md'
          src='https://www.promach.in/assets/images/product/vibrating_screen_LG.jpg'
          alt='Random image'
        />
        <p>
          Vibrating Screens are the most important screening machines primarily utilised in the
          mineral processing industry. They are used to separate feeds containing solid and crushed
          ores down to approximately 200μm in size, and are applicable to both perfectly wetted and
          dried feed.
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
              <th>Length</th>
              <th>Width</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* </ScrollArea> */}
      </div>
    </Container>
  )
}
