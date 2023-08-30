import Select from "react-select";

const SelectCodeBlockLanguage = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "Javascript" },
    { value: "typescript", label: "Typescript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "php", label: "PHP" },
    { value: "golang", label: "GO" },
    { value: "swift", label: "Swift" },
    { value: "ruby", label: "Ruby" },
    { value: "rust", label: "Rust" },
    { value: "csharp", label: "C#" },
    { value: "mysql", label: "MySQL" },
  ];
  return (
    <Select
      options={options}
      closeMenuOnSelect={true}
      onChange={(selected: any) => setLanguage(selected.value)}
      value={options.find((option) => option.value === language)}
      required
    />
  );
};

export default SelectCodeBlockLanguage;
