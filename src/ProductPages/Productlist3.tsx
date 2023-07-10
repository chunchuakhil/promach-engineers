import {
  createStyles,
  Title,
  Table,
  Image,
  Container,
  rem,
} from '@mantine/core';


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

}));

export function Productlist3() {
  const elements = [
    { model: 'Effective length,mm', gfvm4010: 4000, gfvm4512: 4500},
    { model: 'Effective width,mm', gfvm4010: 1000, gfvm4512: 1200 },
    { model: 'Power,KW', gfvm4010: '6 hp x 2', gfvm4512: '7.5 hp x 2' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.model}>
      <td>{element.model}</td>
      <td>{element.gfvm4010}</td>
      <td>{element.gfvm4512}</td>
      
    </tr>
  ));

  const { classes} = useStyles();

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="left" mt="sm">
      Grizzly Feeders
      </Title>
      <div>
      <Image
        mx='auto'
        radius='md'
        src='https://www.promach.in/assets/images/product/grizzly_feeder.jpg'
        alt='Random image'
      />
      <p>
      Grizzly Feeders are engineered to combine the functions of feeding and scalping into one unit, reducing the cost of having two separate units. Grizzly Feeders are mainly used in primary applications feeding a primary crusher. The Grizzly Feeder provides a continuous feed rate under a variety of loading and material conditions. Grizzly Feeders are designed to take heavy shock loads from trucks, shovels and loaders. These type of feeders are used as associated systems to quarries in connection with mining and gravel operations. </p>
      
      {/* <ScrollArea w={250} scrollbarSize={20} > */}
      <Table striped highlightOnHover withBorder withColumnBorders horizontalSpacing='sm' verticalSpacing='xs'>
        <thead>
          <tr>
            <th>Model</th>
            <th>GFVM4010</th>
            <th>GFVM4512</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    {/* </ScrollArea> */}
    </div>

    </Container>
  );
}