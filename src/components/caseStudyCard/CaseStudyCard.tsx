import { createStyles, Card, Image, Avatar, Text, Group, Flex } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}))

interface ArticleCardVerticalProps {
  image: string
  category: string
  title: string
}

export function CaseStudyCard({ image, category, title }: ArticleCardVerticalProps) {
  const { classes } = useStyles()
  return (
    <Card withBorder radius='md' p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Flex mih={50} gap='md' justify='center' align='center' direction='column' wrap='wrap'>
          <Image src={image} height={140} width={140} />
          <div className={classes.body}>
            <Text transform='uppercase' color='dimmed' weight={700} size='xs'>
              {category}
            </Text>
            <Text className={classes.title} mt='xs' mb='md'>
              {title}
            </Text>
          </div>
        </Flex>
      </Group>
    </Card>
  )
}
