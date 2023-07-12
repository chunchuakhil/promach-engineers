import { Grid, Skeleton, Container, Image, createStyles} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import React, { useState} from 'react';

const mockdata = [
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about13.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about13.jpg',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://www.promach.in/assets/images/about3.jpg',
  },
  // Rest of the data
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows.md,
    },
  },
}));

export function GallerySection() {
  const { classes } = useStyles();
  const [errorImages, setErrorImages] = useState<number[]>([]);

  const handleImageError = (index: number) => {
    setErrorImages((prevErrorImages: number[]) => [...prevErrorImages, index]);
  };

  const isLaptopL = useMediaQuery('(min-width: 1440px)');
  const isLaptopM = useMediaQuery('(min-width: 1024px) and (max-width: 1439px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobileL = useMediaQuery('(max-width: 425px)');
  const isMobileM = useMediaQuery('(max-width: 375px)');
  const isMobileS = useMediaQuery('(max-width: 320px)');

  return (
    <Container my="md">
      <Grid>
        {mockdata.map((item, index) => (
          <Grid.Col key={index} xs={6} className={classes.card}>
            {errorImages.includes(index) ? (
              <Skeleton
                width={isMobileS ? 288 : isMobileM ? 343 : isMobileL ? 394 : isTablet ? 360 : isLaptopM || isLaptopL ? 456 : 288}
                height={isMobileS ? 263 : isMobileM ? 263 : isMobileL ? 301 : isTablet ? 276 : isLaptopM || isLaptopL ? 349 : 221}
              />
            ) : (
              <>
                <Image
                  src={item.image}
                  maw={500}
                  radius="md"
                  alt={item.title}
                  onError={() => handleImageError(index)}
                />
                <h3>{item.title}</h3>
              </>
            )}
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
