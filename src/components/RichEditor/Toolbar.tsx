import React from 'react';
import { Box, Stack, Button } from '@mui/material';

const toolBarIcons: string[] = ['B', 'I', 'U'];
const Toolbar = () => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {toolBarIcons.map((item, index) => (
          <Button
            variant='contained'
            color='primary'
            sx={{ width: '8px', height: '32px', borderRadius: '99px' }}
            key={`toolbar-icons-${index}`}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export { Toolbar };
