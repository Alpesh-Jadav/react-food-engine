import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,image,healthLabels,calories}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            
            <div className={style.fields}>
           
            <h3>Heath Labels :</h3>
            <ul>
                {healthLabels.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Calories :  {calories}</h3>
           
            
           
            </div>
           
            <img className={style.image} src={image} alt="Food" />
        </div>
    )
}

export default Recipe