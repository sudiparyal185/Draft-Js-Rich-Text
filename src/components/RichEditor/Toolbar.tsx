import React from 'react';
import { Box, Stack, Button } from '@mui/material';

const toolBarIcons: string[] = ['B', 'I', 'U'];

interface ToolbarProps {
  handleToolbarStyles: (style: string) => void;
}
const Toolbar = ({ handleToolbarStyles }: ToolbarProps) => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {toolBarIcons.map((item: string, index: number) => (
          <Button
            variant='contained'
            color='primary'
            sx={{ width: '8px', height: '32px', borderRadius: '99px' }}
            key={`toolbar-icons-${index}`}
            onClick={() => handleToolbarStyles(item)}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export { Toolbar };
