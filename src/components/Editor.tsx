"use client";

import { useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import SelectCodeBlockLanguage from "./selectLanguagesBtn/SelectCodeBlockLanguage";

type CodeBlockData = {
  language: string;
  code: string;
};

const Editor = () => {
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const codeData: CodeBlockData = {
        language,
        code,
      };
      console.log(codeData);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/add-code-block`,
        codeData
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectCodeBlockLanguage language={language} setLanguage={setLanguage} />
      <div className="p-20">
        <AceEditor
          height="500px"
          width="700px"
          mode={language}
          theme="monokai"
          onChange={handleCodeChange}
          value={code}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          enableBasicAutocompletion
          enableLiveAutocompletion
          highlightActiveLine
          fontSize={15}
        />
      </div>
      <button type="submit">Submit Code</button>
    </form>
  );
};

export default Editor;
