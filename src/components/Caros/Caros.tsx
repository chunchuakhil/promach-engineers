import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
// import { IconStar } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 1,
  },

  carouselIndicator: {
    width: rem(5),
    height: rem(5),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}))

const images = [
  'https://w0.peakpx.com/wallpaper/210/48/HD-wallpaper-m249-saw-squat-automatic-weapon-gun-m249-08-machine-2011-31.jpg',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
]

export function CarouselCard() {
  const { classes } = useStyles()

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        onClick={(e) => {
          e.stopPropagation()
        }}
        fit="cover"
        src={image}
        mah={'90vh'}
        width={'100vw'}
      />
    </Carousel.Slide>
  ))

  return (
    // <Card  withBorder>
    //   <Card.Section>
    <Carousel
      withIndicators
      loop
      // speed={1}
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
      }}
    >
      {slides}
    </Carousel>
    //   </Card.Section>
    // </Card>
  )
}
