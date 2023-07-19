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

export function Productlist5() {
  const elements = [
    {
      model: 'Driver Power',
      bcds60: '5 hp',
      bcds80: '7.5 hp',
      bcds100: '10 hp',
      bcds120: '15 hp',
      bcds150: '20 hp',
      bcdduo60: '5 hp',
      bcdduo80: '7.5 hp',
      bcdduo100: '7.5 hp',
      bcdduo120: '10 hp',
      bcdduo150: '15 hp',
    },
    {
      model: 'Vibro Motor',
      bcds60: '1 hp x2',
      bcds80: '1.5 hp x2',
      bcds100: '2 hp x2',
      bcds120: '2 hp x2 ',
      bcds150: '3 hp x2',
      bcdduo60: '1.5 hp x2',
      bcdduo80: '1.5 hp x2',
      bcdduo100: '2 hp x2',
      bcdduo120: '2.5 hp x2',
      bcdduo150: '4 hp x2',
    },
    {
      model: 'Number of Products',
      bcds60: 1,
      bcds80: 1,
      bcds100: 1,
      bcds120: 1,
      bcds150: 1,
      bcdduo60: 1,
      bcdduo80: 1,
      bcdduo100: 1,
      bcdduo120: 1,
      bcdduo150: 1,
    },
    {
      model: 'Capacity tph',
      bcds60: 60,
      bcds80: 80,
      bcds100: 100,
      bcds120: 120,
      bcds150: 150,
      bcdduo60: 60,
      bcdduo80: 80,
      bcdduo100: 100,
      bcdduo120: 120,
      bcdduo150: 150,
    },
  ]

  const rows = elements.map((element) => (
    <tr key={element.model}>
      <td>{element.model}</td>
      <td>{element.bcds60}</td>
      <td>{element.bcds80}</td>
      <td>{element.bcds100}</td>
      <td>{element.bcds120}</td>
      <td>{element.bcds150}</td>
      <td>{element.bcdduo60}</td>
      <td>{element.bcdduo80}</td>
      <td>{element.bcdduo100}</td>
      <td>{element.bcdduo120}</td>
      <td>{element.bcdduo150}</td>
    </tr>
  ))

  const { classes } = useStyles()

  return (
    <Container size='lg' py='xl'>
      <Title order={2} className={classes.title} ta='left' mt='sm'>
        Bucket Wheel Classifier
      </Title>
      <div>
        <Image
          mx='auto'
          radius='md'
          src='https://www.promach.in/assets/images/product/Bucket_Classifier_With_Dewatering_LG.jpg'
          alt='Random image'
        />
        <p>
          Bucket Wheel Classifier is an equipment which gives better quality product than any other
          washing equipment. Effective and slow washing increases product quality. Bucket Wheel
          Classifiers have variants according to their capacities. Even though it is a slow washing
          process, the product quality from dewatering screen gives best result. The slow running
          spirals with high capacity rotating buckets give improved productivity. Bucket Wheel
          Classifiers need less driving power for high productivity with minimum maintenance cost.
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
              <th>BCD S60</th>
              <th>BCD S80</th>
              <th>BCD S100</th>
              <th>BCD S120</th>
              <th>BCD S150</th>
              <th>BCD DUO 60</th>
              <th>BCD DUO 80</th>
              <th>BCD DUO 100</th>
              <th>BCD DUO 120</th>
              <th>BCD DUO 150</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* </ScrollArea> */}
      </div>
    </Container>
  )
}
