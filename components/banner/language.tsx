import React from "react";

type Props = {
  language: string;
  defaultLanguage: boolean;
};

function Language({ language, defaultLanguage }: Props) {
  return (
    <div className="bg-secondary flex items-center justify-center">
      <input
        type="radio"
        id={language}
        name="language"
        value={language}
        defaultChecked={defaultLanguage}
        className={"peer hidden"}
      />
      <label
        htmlFor={language}
        className="py-[.3rem] w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[.5rem] md:text-[.75rem] text-primary border-primary border-2 cursor-pointer rounded-md lg:rounded-xl text-center leading-none lg:leading-5 peer-checked:bg-primary peer-checked:text-white"
      >
        {language}
      </label>
    </div>
  );
}

export default Language;
