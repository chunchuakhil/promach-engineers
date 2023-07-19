import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core'

const mockdata = [
  {
    title: 'Silica Series',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
  {
    title: 'Construction Sand',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
]

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: 'center',
    fontSize:20
  },
}))

const ProductSection = () => {
  const { classes } = useStyles()

  const cards = mockdata.map((article) => (
    <Card
      shadow='sm'
      withBorder
      key={article.title}
      p='0'
      radius='md'
      component='a'
      href='#'
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} my={20}>
        {article.title}
      </Text>
    </Card>
  ))

  return (
    <Container py='xl'>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}
export default ProductSection
