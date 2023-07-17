import { Card, Image, Text, Badge, Button, Group, SimpleGrid, Container } from '@mantine/core';

export function ProductSection1() {
  
  return (
    <Container size="md" >
      <center><h1>Product Section</h1></center>
      <SimpleGrid cols={2}>
         <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={260}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Vertical Shaft Impactor</Text>
      </Group>

      <Text size="sm" color="dimmed">
      Vertical Shaft Impactor (VSI) crushers are designed to be used in tertiary or quaternary stage crushing.
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
      Vertical Shaft Impactor
      </Button>
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
        
        src='https://www.promach.in/assets/images/about3.jpg'      
        // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={260}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Vibrating Screens</Text>
      </Group>

      <Text size="sm" color="dimmed">
      Vibrating Screens are the most important screening machines primarily utilised in the mineral processing industry.
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
      Vibrating Screens
      </Button>
    </Card>
    </SimpleGrid>
  </Container>
    

  );
}