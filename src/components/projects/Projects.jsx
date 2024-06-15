import React from 'react'
import styles from './ProjectStyles.module.css'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className={styles.projectTitle}>PROJECTS</h1>
        <div className={styles.projectsContainer}>
          <div className={styles.cardText}>
            <h2 className={styles.recent}>Recent Works</h2>
            <p className={styles.paragraph}>
                I design thumbnails and posters usually related to gaming. Mostly includes BGMI and Valorant. 
            </p>

          </div>

          <div className={styles.cardImages}>
            <img className={styles.image} src={img1} alt="" />
            <img className={styles.image} src={img6} alt="" />
            <img className={styles.image} src={img2} alt="" />
            <img className={styles.image} src={img7} alt="" />
            <img className={styles.image} src={img9} alt="" />
            <img className={styles.image} src={img5} alt="" />
            
          </div>
          <a href="https://pin.it/3NZy4fZ8z" target='blank'>
              <button className={styles.projectBtn}>SEE MORE</button>
            </a>


        </div>



    </section>
  )
}

export default Projects
