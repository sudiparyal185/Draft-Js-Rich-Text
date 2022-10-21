import { useEffect } from 'react';
import { Editor } from 'draft-js';
import { Box } from '@mui/material';
import { useEditorState } from '../../hooks';
import { Toolbar } from './Toolbar';
import { styled, Paper } from '@mui/material';

const StyledEditorContainer = styled(Paper)`
  div.DraftEditor-root {
    min-height: 500px;
    max-height: 600px;
    padding: 1.55rem;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
    font-weight: 500;
    font-family: Lato, Sans-Serif;
    font-style: normal;
    font-size: 0.875rem;
    color: #222648;
    overflow-y: auto;
  }
  div.DraftEditor-editorContainer,
  div.public-DraftEditor-content {
    height: 90%;
  }
  div.public-DraftEditorPlaceholder-root {
    width: 95%;
  }
`;

const RichEditor = () => {
  const { editorState, setEditorState, editorRef, focusEditor } =
    useEditorState();

  useEffect(() => {
    focusEditor();
  }, [focusEditor]);
  return (
    <StyledEditorContainer
      ref={editorRef}
      elevation={3}
      sx={{
        border: '1px solid #E2F2FF',
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
      <Toolbar />
    </StyledEditorContainer>
  );
};

export { RichEditor };
