import { createStyles, Title, Image, Container, rem } from '@mantine/core'

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

export function Productlist6() {
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
          src='https://www.promach.in/assets/images/product/Bucket_Classifier_With_Dewatering_LG.jpg'
          alt='Random image'
        />
        <p>Conveyor accessories are the integral part of mining and crushing industries.</p>
        <p>
          The usual practice is the use of C channel for conveyor accessories , but we are are using
          bended plates instead of c channel. This helps the whole conveyorsystem to be relatively
          light weight and more attractive.
        </p>
        <p>
          We use black abrasion rubber as conveyor belts its a brand new quality rubber exclusively
          using for conveyor accessories which will gradually decrease the depreciation rate of
          conveyor belt.
        </p>
        <p>
          We also use imported Monoblock gearbox which is a compact form of gearbox perfectly
          suiting for crushing and mining Industries. Monoblock gearbox are maintenance free.
        </p>
      </div>
    </Container>
  )
}
