import { useState, useRef } from 'react';
import { EditorState, RichUtils } from 'draft-js';

const useEditorState = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const editorRef = useRef<any>(null);

  const focusEditor = () => {
    editorRef?.current?.focus();
  };

  //TODO: FIX A ISSUE WHEN THE STYLES ARE NOT RESETTING plus bunch of bugs
  const handleToolbarStyles = (style: string) => {
    if (style === 'B') {
      let nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
      setEditorState(nextState);
    }
    if (style === 'I') {
      let nextState = RichUtils.toggleInlineStyle(editorState, 'ITALIC');
      setEditorState(nextState);
    }
    if (style === 'I') {
      let nextState = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE');
      setEditorState(nextState);
    }
  };

  return {
    editorState,
    setEditorState,
    editorRef,
    focusEditor,
    handleToolbarStyles,
  };
};

export { useEditorState };
