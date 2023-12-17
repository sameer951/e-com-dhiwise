import React from "react";
import { CheckBox } from "components";

export default {
  title: "jyotikanta_s_application3/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "square",
  color: "bluegray_100",
  size: "xs",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
