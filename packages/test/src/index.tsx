import React from "react";

export interface ITestProps
{
  name: string;
}

const Test = (props: ITestProps) => (
  <h1>Hello { props.name }!</h1>
);
export {
  Test
};