import React from 'react'
import styles from './cards.module.css'
import image1 from '../../images/Data-Warehousing.jpg'
import image2 from '../../images/cdn.jpg'
import image3 from '../../images/managed_compute.png'

function Cards() {

    const cards = [
        {
          image: `${image1}`,
          title: 'Data warehouse',
          desc: 'Run analytics'
        },
        {
          image: `${image2}`,
          title: 'Content delivery network',
          desc: 'Cloud CDN'
        },
        {
          image: `${image3}`,
          title: 'Managed compute',
          desc: 'Run stateless container'
        }
    ]

  return (
    <div className={styles.cards_container}>
      {cards.map((value, index) => 
        <div className={styles.card} key={index}>
          <img src={value.image} alt='Google cloud images'></img>
          <div className={styles.card_content}>
            <h4>{value.title}</h4>
            <p>{value.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cards