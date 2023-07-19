import React from "react";

const FooterList = ({ link, text,cname}) => {
  return (
    <li >
      <a href={link} className={cname}>{text}</a>
    </li>
  );
};

export default FooterList;
