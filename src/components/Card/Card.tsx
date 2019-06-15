import React, { HTMLProps } from "react";
import styles from "./Card.module.scss";
interface ICardProps extends HTMLProps<HTMLDivElement> {}

const Card: React.FC = ({ ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
