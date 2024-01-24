import React from 'react'
import styles from './Timeline.module.css'
import { getImageUrl } from "../../utils";

export const TimelineItem = ({d}) => {
  return (
    <div className={styles.timelineitem}>
        <div className={styles.timelineitemcontent}>
            <time>{d.date}</time>
            <p>{d.text}</p>
            {d.imag !== 'null' && (
                <div className={styles.timelineimg}>
                  <img src={getImageUrl(d.imag)} />
                  </div>
            )}
            <p>{d.content}</p>
            <span className={styles.circle} />
        </div>
    </div>
  )
}

