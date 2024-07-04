import React from 'react'
import styles from './FooterStyles.module.css'
import logo from '../../assets/logo.png'

import twitterIcon from '../../assets/twitter-dark.svg';
import gitIcon from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.svg';
import discord from '../../assets/discord-icon.webp'

function footer() {
  return (
    <span className={styles.mainFooter}>

      <div className={styles.footerElems}>
        <div>
          <img className={styles.logo} src={logo} alt="" />
        </div>


        <div className={styles.details}>
          <p className={styles.footerText}>Connect With Me</p>
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
                <a href="https://discord.gg/Wsuy2FhzT2">
                  <img src={discord} alt="" />
                </a>
          </span>

        </div>
      </div>


    </span>
  )
}
export default footer