import React, { ReactNode } from 'react'
import { Container } from '@mantine/core'
import { secondaryThemeColor } from '../../theme/themeColors'

interface SectionContainerProps {
  children: ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <Container pl={0} pr={0} bg={secondaryThemeColor}>
      {children}
    </Container>
  )
}

export default SectionContainer
