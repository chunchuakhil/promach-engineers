import React, { ReactNode } from 'react'
import { Container } from '@mantine/core'

interface SectionContainerProps {
  children: ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <Container mih={'100vh'} miw={'100vw'} pl={0} pr={0}>
      {children}
    </Container>
  )
}

export default SectionContainer
