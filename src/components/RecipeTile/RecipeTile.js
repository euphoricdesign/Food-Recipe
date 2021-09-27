import React from 'react';
import './RecipeTile.css'

const RecipeTile = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpge|jpg|gif|png)$/)
        != null && (
        <div className="recipeTile" onClick={() => {
            window.open(recipe["recipe"]["url"])
        }}>
            <img className="recipeTile-img" src={recipe["recipe"]["image"]} alt=""/>
            <p className="recipeTile-name">{recipe["recipe"]["label"]}</p>
        </div>
    )
    );   
}

export default RecipeTile;