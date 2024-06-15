import React from 'react'
import styles from './HeroStyles.module.css';
import heroimg from '../../images/main-ezgif.com-crop.gif';
import twitterIcon from '../../assets/twitter-dark.svg';
import gitIcon from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.svg';
import cv from '../../assets/bhuvan-resume.pdf'
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    
  return (
    <section className={styles.container}>
        <img className={styles.mainImg} src={heroimg} alt="" />
        
        
        <div className={styles.info}>
            <h1 className={styles.nameText}>
            BHUVAN  HEGDE
            </h1>
            <h2 className={styles.nameText}>
                Student
            </h2>
            <span>
                <a href='https://x.com/i/flow/login ' target='blank'>
                    <img src={twitterIcon} alt="" />
                </a>
                <a href='https://github.com/Bhuvan-Hegde' target='blank'>
                    <img src={gitIcon} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/bhuvan-hegde-348b48254/' target='blank'>
                    <img src={linkedInIcon} alt="" />
                </a>
            </span>
            <p className={styles.paragraph}>
                A passionate graphic designer and developer
            </p>
            <a href={cv} download>
                <button className='hover' >Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
