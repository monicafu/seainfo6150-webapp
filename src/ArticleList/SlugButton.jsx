import React from "react";
import styles from "./SlugButton.module.css";

const SlugButton = ({buttonText,slug}) => {
    return (
       <button className={styles.author} onClick={() => alert(`${slug}`)}>
        {buttonText}
        </button> 
    );
  };

export default SlugButton;