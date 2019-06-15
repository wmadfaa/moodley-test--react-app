import React, { HTMLProps } from "react";
import styles from "./Heading.module.scss";
import classNames from "classnames";

interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
  type?: "title" | "subtitle";
  centered?: boolean;
}

const Heading: React.FC<IHeadingProps> = ({
  type = "title",
  centered = false,
  ...props
}) => {
  if (type === "subtitle")
    return (
      <h3
        className={classNames({ [styles.centered]: centered }, styles.subtitle)}
        {...props}
      >
        {props.children}
      </h3>
    );
  return (
    <h1
      className={classNames({ [styles.centered]: centered }, styles.title)}
      {...props}
    >
      {props.children}
    </h1>
  );
};

export default Heading;
