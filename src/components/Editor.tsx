import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = () => {
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LANGUAGE: ", language);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="language" placeholder="Enter Language ..." onChange={(e) => setLanguage(e.target.value)}></input>
        <button type="submit">Enter</button>
    </form>
      <AceEditor
        mode={language}
        theme="monokai"
        onChange={handleCodeChange}
        //   onPaste={()=>setCode()}
        value={code}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        enableSnippets={true}
        enableBasicAutocompletion
        enableLiveAutocompletion
        placeholder="Write your code here:"
        highlightActiveLine
        fontSize={15}
      />
    </>
  );
};

export default Editor;
