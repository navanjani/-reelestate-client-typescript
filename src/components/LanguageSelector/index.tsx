import { ChangeEvent, useState } from "react";
import LANGUAGES from "../../config/languages";
import SelectComponent from "../SelectComponent";

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentLanguage(e.target.value);
  };

  return (
    <SelectComponent
      options={LANGUAGES.map((language) => ({
        value: language,
        label: language,
      }))}
      value={currentLanguage}
      onChangeHandler={handleLanguageChange}
    />
  );
}
