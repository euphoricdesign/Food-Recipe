import React from 'react';

const Form = (props) => {
    return (
        <form className="app-search-form" onSubmit={props.onSubmit}>
            <input 
                type="text" 
                className="app-input"
                placeholder="Enter ingredient" 
                value={props.query} 
                onChange={e => props.setQuery(e.target.value)} 
            />
            <input className="app-submit" type="submit" value="Search" />

            <select className="app-healthLabels">
                <option onClick={() => props.setHealthLabels("vegan")}>vegan</option>
                <option onClick={() => props.setHealthLabels("vegetarian")}>
                    vegetarian
                </option>
                <option onClick={() => props.setHealthLabels("paleo")}>
                    paleo
                </option>
                <option onClick={() => props.setHealthLabels("dairy-free")}>
                    dairy-free
                </option>
                <option onClick={() => props.setHealthLabels("gluten-free")}>
                    gluten-free
                </option>
                <option onClick={() => props.setHealthLabels("wheat-free")}>
                    wheat-free
                </option>
                <option onClick={() => props.setHealthLabels("low-sugar")}>
                    low-sugar
                </option>
                <option onClick={() => props.setHealthLabels("egg-free")}>
                    egg-free
                </option>
                <option onClick={() => props.setHealthLabels("peanut-free")}>
                    peanut-free
                </option>
                <option onClick={() => props.setHealthLabels("tree-nut-free")}>
                    tree-nut-free
                </option>
                <option onClick={() => props.setHealthLabels("soy-free")}>
                    soy-free
                </option>
                <option onClick={() => props.setHealthLabels("fish-free")}>
                    fish-free
                </option>
                <option onClick={() => props.setHealthLabels("shellfish-free")}>
                    shellfish-free
                </option>
            </select>
        </form>
    );
};

export default Form;