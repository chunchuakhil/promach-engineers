// import { createStyles, Avatar, Text, Group } from '@mantine/core';
// // import { IconPhoneCall, IconAt } from '@tabler/icons-react';

// const useStyles = createStyles((theme) => ({
//   icon: {
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
//   },

//   name: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//   },
// }));

// interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   title: string;
// }

// export function TestimonialSection({ avatar, name, title }: UserInfoIconsProps) {
//   const { classes } = useStyles();
//   return (
//     <div>
//       <Group noWrap>
//       <img src={avatar} alt="Avatar" style={{ borderRadius: '50%', width: '74px', height: '74px' }} />

//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>

//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//         </div>
//       </Group>
//     </div>
//   );
// }

import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, Card, Image, Group, Text, Badge, Button,Spoiler,Title,Rating, Blockquote  } from '@mantine/core';
const PRIMARY_COL_HEIGHT = rem(300);

export function TestimonialSection() {
  
  return (
    <Container my="md">
      <center><h1>TestimonialSection</h1>
      <Text size="sm" color="dimmed" lineClamp={5}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours
        </Text>
      </center>
      <br />
      <span />
      <span />
      <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Group noWrap>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" alt="Avatar" style={{ borderRadius: '50%', width: '74px', height: '74px' }} />
                <div>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Software Engineer
                  </Text>
                  <Text fz="lg" fw={500} >
                    Extra small text
                  </Text>
                </div>
              </Group>
            </Card.Section>
              <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>It is a great Experience</Text>
            <Rating defaultValue={4.5} />
              </Group>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide"  color="dimmed">
              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
              {/* <Blockquote cite="– Forrest Gump">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
    </Blockquote> */}
              </Text>
            </Spoiler>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Group noWrap>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" alt="Avatar" style={{ borderRadius: '50%', width: '74px', height: '74px' }} />
                <div>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Software Engineer
                  </Text>
                  <Text fz="lg" fw={500} >
                    Extra small text
                  </Text>
                </div>
              </Group>
            </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
              </Group>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide"  color="dimmed">
              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </Spoiler>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Group noWrap>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" alt="Avatar" style={{ borderRadius: '50%', width: '74px', height: '74px' }} />
                <div>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Software Engineer
                  </Text>
                  <Text fz="lg" fw={500} >
                    Extra small text
                  </Text>
                </div>
              </Group>
            </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
              </Group>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide"  color="dimmed">
              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway.
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </Spoiler>
        </Card>
      </SimpleGrid>
    </Container>
  );
}



