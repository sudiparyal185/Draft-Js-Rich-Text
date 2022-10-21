import React, { useEffect } from 'react';
import { Editor } from 'draft-js';
import { Box } from '@mui/material';
import { useEditorState } from '../../hooks';

const RichEditor = () => {
  const { editorState, setEditorState, editorRef, focusEditor } =
    useEditorState();

  useEffect(() => {
    focusEditor();
  }, [focusEditor]);
  return (
    <Box
      ref={editorRef}
      sx={{
        border: '1px solid black',
        maxWidth: '800px',
        minHeight: '500px',
        ml: 5,
      }}
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        spellCheck={true}
      />
    </Box>
  );
};

export { RichEditor };
