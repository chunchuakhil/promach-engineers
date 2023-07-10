import { Grid, Skeleton, Container, Image,createStyles } from '@mantine/core';

const mockdata = [
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
];


const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows.md,
    },
  },

 
}))
export function GallerySection() {
  const { classes } = useStyles()

  return (
    <Container my="md">
      <Grid>
        {mockdata.map((item, index) => (
          <Grid.Col key={index} xs={6} className={classes.card}>
            <Image src={item.image} maw={500} radius="md" alt={item.title} />
            <h3>{item.title}</h3>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
