import React from "react";

import styles from "./Proposal.module.css";
import { getImageUrl } from "../../utils";

export const Proposal = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Ms. Meanpure,</h1>
        <p className={styles.description}>
          I would like to have a word with you, so just scroll down slowly...
        </p>
      </div>
      <img
        src={getImageUrl("sn1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};