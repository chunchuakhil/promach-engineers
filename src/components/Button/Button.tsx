import React from 'react';
import { Button } from '@mantine/core';
// import { primaryThemeColor } from '../../theme/themeColors'

export function Btn({ name }: { name: string }) {
  return (
    <Button
      variant='gradient'
      gradient={{ from: '#1E5272', to: '#507891' }}
      size='lg'
      // style={{ backgroundColor: '#063f63' }}
      mt={40}
    >
      {name}
    </Button>
  );
}
