import React from 'react'
import { TimelineItem } from './TimelineItem'
import styles from './Timeline.module.css'

const data = [
    {
        date: 'December 03 2023',
        text: 'We matched and started talking on Hinge',
        imag: 'ss2.jpg',
        content: 'It was kind of weird xD'

    },
    {
        date: 'December 07 2023',
        text: 'Connected on Instagram',
        imag: 'ss1.jpg',
        content: 'Not gonna lie, I was astonished!'
        
    },
    {
        date: 'December 09 2023',
        text: 'First Videocall',
        imag: 'v1.jpg',
        content: 'Not expected to connect so much with you on our first call'
    },
    {
        date: 'December 16 2023',
        text: 'First Date',
        imag: 'fd1.jpg',
        content: "Cozy and magical. It didn't feel like we are meeting for the first time"
    },
    {
        date: 'December 19 2023',
        text: 'Second Date',
        imag: 'sd1.jpg',
        content: 'I got you sunflowers finally! You were looking absolutely gorgeous'
    },
    {
        date: 'December 28 2023',
        text: 'Started Dating',
        imag: 'd2.jpg',
        content: 'Beach, sunset and YOU. Best Date Ever!!!'
    },
    {
        date: 'January 15 2024',
        text: 'Our First Time in Bed ;) Iykyk',
        imag: 'null',
        content: 'I hate uh for not having any pics of this day'
    },
    {
        date: 'January 23 2024',
        text: 'I officially PROPOSED you to be my GF',
        imag: 'p1.jpg',
        content: 'Well I wanted it to be a physical proposal and not virtual, but your reaction made the proposal WORTH IT'
    },
    {
        date:'January 26 2024',
        text: 'First time staying together 0.0',
        imag: 'h1.jpg',
        content: 'I miss this day yaar, aur kaafi content that daalne ko but tere friends ko nahi dikhana mujhe vo pics or maybe I should? ;))'
    },
    {
        date: 'January 30 2024',
        text: 'Late anniversary celebration:/ but WORTH IT',
        imag: 'h2.jpg',
        content: 'Mujhe bhaga dia tha tumhe, reh jaata na me raatko. I love talking to you about intellectual stuff xo!'
    },
    {
        date:'Feb 7 2024',
        text: 'Rose DAY!!!!!!!!!',
        imag: 'sn6.jpg',
        content: 'Hi DOST, kasey kaiiii. Kya hi masti yaar xD. Aur bhi ache pics the but this was my favourite xoxo'
    },
    {
        date:'Feb 14 2024',
        text: "First Valentine's Day and first time in my BED ;)",
        imag: 'sn7.jpg',
        content: 'CUTU hai bhai!! Baki pics nahi daal sakta tha 0.0'
    },

]

export const Timeline = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>TimeLine</h2>
    {data.length > 0 && (
        <div className={styles.timelinecontainer}>
            {data.map((d, i) => (
                <TimelineItem d = {d} key = {i} />
            ))}
        </div>    )}
        </section>
  )
}

