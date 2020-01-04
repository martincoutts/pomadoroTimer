import React from "react";

const Header = () => {
  const BEM_BASE = "header";
  return (
    <div className={`${BEM_BASE} ${BEM_BASE}--container`}>
      <h1 className={`${BEM_BASE} ${BEM_BASE}--title`}>Study Timer</h1>
    </div>
  );
};

export default Header;
