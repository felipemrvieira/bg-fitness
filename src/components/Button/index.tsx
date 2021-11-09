import React, { useState, useCallback } from "react";
// import Link from "next/link";

import button from "./button.module.scss";

interface Props {
  label: string;
  style?: React.CSSProperties;
}

const Button: React.FC<Props> = ({ label, style }) => {
  return (
    <div style={style} className={button.button}>
      {label}
    </div>
  );
};

export default Button;
