import { createStyles, Container, Title, Text, Image, Button, rem, MediaQuery } from '@mantine/core'
// import { AboutPage } from './AboutPage';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),
    fontSize: rem(20),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
  img: {},
}))

const handleClick = () => {
  console.log('Read me')
  alert('AboutPage has to open')
}

export function AboutSection() {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Container size='lg'>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>About US</Title>
            <Text
              component='span'
              inherit
              variant='gradient'
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              Promach Engineers
            </Text>{' '}
            <Text className={classes.description} mt={30}>
              Promach, a company based in India, specializes in designing construction and mining
              equipment and accessories. With a focus on providing unique engineering solutions to
              the challenges encountered in the mining industry, Promach aims to develop accessories
              that are both efficient and affordable.
              {/* The company adopts a customer-centric approach, prioritizing the needs and requirements of its clients.
              Additionally, Promach is dedicated to maintaining the highest standards of quality,
              constantly striving to achieve unparalleled expertise in the field. By addressing the specific demands of the mining sector,
              Promach contributes to enhancing productivity, safety, and sustainability in this crucial industry.
            */}
            </Text>
            <Button
              variant='gradient'
              gradient={{ from: 'pink', to: 'yellow' }}
              size='xl'
              className={classes.control}
              mt={40}
              onClick={handleClick}
            >
              Read More
            </Button>
            {/* {showAboutPage && <AboutPage />} */}
          </div>

          {/* 2nd Div container In about section */}

          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <div className={classes.content}>
              <Image
                className={classes.img}
                maw={500}
                mx='auto'
                radius='md'
                src={'https://www.promach.in/assets/images/about3.jpg'}
                alt='Random image'
              />
            </div>
          </MediaQuery>
        </div>
      </Container>
    </div>
  )
}
