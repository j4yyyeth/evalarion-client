export interface LanguageOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const languageOptions: readonly LanguageOption[] = [
  { value: "html", label: "HTML", color: "#F16529" },
  { value: "css", label: "CSS", color: "#2965f1" },
  { value: "javascript", label: "Javascript", color: "#F0DB4F" },
  { value: "typescript", label: "Typescript", color: "#007ACC" },
  { value: "python", label: "Python", color: "#306998" },
  { value: "java", label: "Java", color: "#F89820" },
  { value: "php", label: "PHP", color: "#787CB5" },
  { value: "go", label: "GO", color: "#29BEB0" },
  { value: "swift", label: "Swift", color: "#FE6E00" },
  { value: "ruby", label: "Ruby", color: "#D51F06" },
  { value: "rust", label: "Rust", color: "#CE412B" },
  { value: "c", label: "C", color: "#919198" },
  { value: "c++", label: "C++", color: "#165CAA" },
  { value: "c#", label: "C#", color: "#682876" },
  { value: "sql", label: "SQL", color: "#00758F" },
];

export interface StateOption {
  readonly value: string;
  readonly label: string;
}

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly LanguageOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Languages",
    options: languageOptions,
  },
];
