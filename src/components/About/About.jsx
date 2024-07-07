import React from 'react'
import styles from './AboutStyles.module.css'
import mainpic from '../../assets/bhu.png'
import catgif from '../../assets/Transparent Calico Gif.gif'
import htmllogo from '../../assets/html-logo.png'
import csslogo from '../../assets/css-logo.png'
import reactlogo from '../../assets/react-logo.png'
import bootstlogo from '../../assets/boots.png'
import pscclogo from '../../assets/PSCC-logo.webp'


function About() {
  return (
    <>
    <span className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.heading}>ABOUT ME!</h1>
            <img className={styles.gif} src={catgif} alt="" />
        </div>
        <div className={styles.maindiv}>
            <img className={styles.mypic} src={mainpic} alt="" />

            <div className={styles.firstP}>
            <p>
            Hello! I'm Bhuvan, a dedicated student and self-taught graphic designer with a passion for creativity and visual storytelling. My journey into the world of design started as a hobby, and it has grown into a rewarding pursuit where I continually hone my skills and push my boundaries.
            <br/>
            <br/>
            When I'm not immersed in my studies or working on a design project, you'll likely find me exploring the latest video games, seeking inspiration, and enjoying the art and storytelling they offer. I believe that design and gaming both require a unique blend of creativity, strategy, and problem-solving, and I love bringing these elements together in my work.
            </p>
            </div>
        
        </div>
        <div className={styles.skill}>
            <h2 className={styles.serviceText}>SKILLSET</h2>
            <div className={styles.skillgrid}>
                <a className={styles.logobg} href="#">
                    <img className={styles.logoimg} src={htmllogo} alt="" />
                </a>
                <a className={styles.logobg} href="#">
                    <img className={styles.logoimg} src={csslogo} alt="" />
                </a>
                <a className={styles.logobg} href="#">
                    <img className={styles.logoimg} src={reactlogo} alt="" />
                </a>
                <a className={styles.logobg} href="#">
                    <img className={styles.logoimg} src={pscclogo} alt="" />
                </a>
                <a className={styles.logobg} href="#">
                <img className={styles.logoimg} src={bootstlogo} alt="" />
                </a>

            </div>
        </div>
    </span>
    </>
  )
}

export default About
