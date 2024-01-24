import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>You are...</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("sn2.jpg")} alt="Dumbo" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Dumbo</h3>
              <p>
                You're stupid, baby. You're dumbo when you think I'll change; I would always be the guy you fall for with more skills and money ;)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("sn3.jpg")} alt="Crazy" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Crazy</h3>
              <p>
                I love it when you get crazy, when you let your inner kid out. I love to pamper you. Xoxo
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("sn4.jpg")} alt="Beautiful" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>Beautiful</h3>
              <p>
                I just can't describe how beautiful and gorgeous you are, not only from outside but also from inside &lt;3
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("sn5.jpg")} alt="Dumbo" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>"Never Giving Up" attitude</h3>
              <p>
                Whatever happens, you never step back from any challenge. I absolutely love this. This is the most ATTRACTIVE quality of yours!!
              </p>
            </div>
          </li>
        </ul>
      </div><br></br>
      <h3 className={styles.title2}>These just few of your qualities baby, there is so much more to you...</h3>
      
    </section>
  );
};