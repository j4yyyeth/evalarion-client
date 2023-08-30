"use client";

import { useState } from "react";
import chroma from "chroma-js";
import axios from "axios";
import { LanguageOption, languageOptions, StateOption } from "./data";
import Select, { StylesConfig } from "react-select";

const colourStyles: StylesConfig<LanguageOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const SelectLanguagesBtn = ({endpoint}: {endpoint: string}) => {
  const [languages, setLanguages] = useState<StateOption | []>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(languages);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
        languages
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={languageOptions}
        styles={colourStyles}
        onChange={(selected: any) => setLanguages(selected)}
        value={languages}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SelectLanguagesBtn;
