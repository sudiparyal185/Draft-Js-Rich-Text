import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const RichEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
};

export { RichEditor };
