import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = () => {
    const [ code, setCode ] = useState('');
    const handleChange = () => {
        console.log(AceEditor)
    }
  return (
    <AceEditor
      mode="typescript"
      theme="monokai"
      onChange={()=>console.log()}
    //   onPaste={()=>setCode()}
      value=''
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      enableSnippets={true}
      enableBasicAutocompletion
      enableLiveAutocompletion
      placeholder='Write your code here:'
      highlightActiveLine
      fontSize={15}
    />
  );
};

export default Editor;
