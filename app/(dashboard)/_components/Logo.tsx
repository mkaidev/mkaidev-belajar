import Image from "next/image";
import React from "react";

const Logo = () => {
  return <Image width={160} height={160} src={"/logo.svg"} alt="logo" />;
};

export default Logo;
