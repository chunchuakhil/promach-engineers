import {
  Container,
  SimpleGrid,
  rem,
  Card,
  Group,
  Text,
  Spoiler,
  Rating,
  Blockquote,
} from '@mantine/core'
const PRIMARY_COL_HEIGHT = rem(300)

export function TestimonialSection() {
  const CardTemplete = (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Group noWrap ml={20} mt={20}>
          <img
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt='Avatar'
            style={{ borderRadius: '50%', width: '74px', height: '74px' }}
          />
          <div>
            <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
              Software Engineer
            </Text>
            <Text fz='lg' fw={500}>
              Extra small text
            </Text>
          </div>
        </Group>
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>It is a great Experience</Text>
        <Rating defaultValue={4.5} />
      </Group>
      <Text size='sm' color='dimmed'>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway. With Fjord Tours you can explore more of the
        magical fjord landscapes with tours and activities on and around the fjords of Norway. With
        Fjord Tours you can explore more of the magical fjord landscapes with tours and activities
        on and around the fjords of Norway
      </Text>
    </Card>
  )
  return (
    <Container my='md'>
      <SimpleGrid cols={3} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {[1, 2, 3].map(() => {
          return CardTemplete
        })}
      </SimpleGrid>
    </Container>
  )
}
