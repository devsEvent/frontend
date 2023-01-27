"use client";

import React, { useState } from "react";

import Button from "./button";
import ConfirmCode from "./confirmCode";
import CreateEvent from "./createEvent";
import HoldingEvent from "./holdingEvent";
import CreateAccount from "./createAccount";
import HeaderBox from "../elements/headerBox";
import Header from "../elements/header";

function SignUpSection() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const sections = [
    <CreateAccount key={0} />,
    <ConfirmCode key={1} />,
    <CreateEvent key={2} />,
    <HoldingEvent key={3} />,
  ];

  const selectedComponentHandler = (index: number) => {
    setSelectedComponent(index);
  };

  return (
    <section className="mt-14 px-9 flex flex-col items-center">
      <HeaderBox>دو ایونت چگونه کار میکند؟</HeaderBox>

      <Header>ثبت نام در پلتفرم دو ایونت و ایجاد ایونت</Header>

      <div className="mt-8 w-full flex justify-center items-center flex-wrap gap-4">
        <Button
          index={0}
          title="۰۱ ساخت اکانت"
          activeComponent={selectedComponent}
          selectedComponentHandler={selectedComponentHandler}
        />
        <Button
          index={1}
          title="۰۲ تایید کد عضویت"
          activeComponent={selectedComponent}
          selectedComponentHandler={selectedComponentHandler}
        />
        <Button
          index={2}
          title="۰۳ ایجاد ایونت"
          activeComponent={selectedComponent}
          selectedComponentHandler={selectedComponentHandler}
        />
        <Button
          index={3}
          title="۰۴ برگزاری ایونت"
          activeComponent={selectedComponent}
          selectedComponentHandler={selectedComponentHandler}
        />
      </div>

      <div className="mt-8 w-full">{sections[selectedComponent]}</div>
    </section>
  );
}

export default SignUpSection;
