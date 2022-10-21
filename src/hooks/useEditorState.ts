import { useState, useRef } from 'react';
import { EditorState } from 'draft-js';

const useEditorState = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const editorRef = useRef<any>(null);

  const focusEditor = () => {
    editorRef?.current?.focus();
  };

  return {
    editorState,
    setEditorState,
    editorRef,
    focusEditor,
  };
};

export { useEditorState };
