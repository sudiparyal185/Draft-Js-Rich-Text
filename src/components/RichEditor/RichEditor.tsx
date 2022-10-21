import React, { useState, useEffect, useRef } from 'react';
import { Editor, EditorState } from 'draft-js';
import { Box } from '@mui/material';

const RichEditor = () => {
  const editorRef = useRef<any>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const focusEditor = () => {
    editorRef?.current?.focus();
  };
  useEffect(() => {
    focusEditor();
  }, []);
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
