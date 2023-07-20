import {
  createStyles,
  Title,
  rem,
} from '@mantine/core'
// import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react'
import { primaryThemeColor } from '../../theme/themeColors'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    marginTop: rem(30),
    marginBottom: rem(30),

    fontWeight: 900,
    color: primaryThemeColor,
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },
}))

const SectionTitle = ({ title }: { title: string }) => {
  const { classes, theme } = useStyles()
  return (
    <Title order={2} className={classes.title} ta='center' mt='lg'>
      {title}
    </Title>
  )
}

export default SectionTitle
