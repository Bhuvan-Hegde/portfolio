import React from 'react'
import styles from './HeroStyles.module.css';
import heroimg from '../../assets/hero-img.png';
import twitterIcon from '../../assets/twitter-dark.svg';
import gitIcon from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.svg';
import cv from '../../assets/bhuvan-resume.pdf'
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    
  return (
    <section className={styles.container}>
        
        <div className={styles.info}>
            <h1>
            BHUVAN 
            <br />
            HEGDE
            </h1>
            <h2>
                Student
            </h2>
            <span>
                <a href='#twitter' target='blank'>
                    <img src={twitterIcon} alt="" />
                </a>
                <a href='#github' target='blank'>
                    <img src={gitIcon} alt="" />
                </a>
                <a href='#linkedIn' target='blank'>
                    <img src={linkedInIcon} alt="" />
                </a>
            </span>
            <p>
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
