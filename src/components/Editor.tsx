import { useState, useEffect } from "react";
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
import Select from "react-select";

const Editor = () => {
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "Javascript" },
    { value: "typescript", label: "Typescript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "golang", label: "GO" },
    { value: "rust", label: "Rust" },
    { value: "ruby", label: "Ruby" },
    { value: "csharp", label: "C#" },
    { value: "swift", label: "Swift" },
    { value: "php", label: "PHP" },
    { value: "mysql", label: "MySQL" },
  ];

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <>
      <Select
        options={options}
        closeMenuOnSelect={false}
        onChange={(selected: any) => setLanguage(selected.value)}
        value={options.find((option) => option.value === language)}
        required
      />
      <AceEditor
        mode={language}
        theme="monokai"
        onChange={handleCodeChange}
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
