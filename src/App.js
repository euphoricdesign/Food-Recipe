import {useState} from 'react';
import './App.css';
import Form from './components/Form/Form'
import axios from 'axios';
import RecipeTile from './components/RecipeTile/RecipeTile';


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  const [healthLabel, setHealthLabels] = useState("vegan")

  const your_app_id = "efda32eb"
  const your_app_key = "f255a5209c17ebb65d806cfb3480a419"

  let url = `https://api.edamam.com/search?q=${query}&app_id=${your_app_id}&app_key=${your_app_key}&health=${healthLabel}`;

  async function getRecipes() {
    let result = await axios.get(url)
    setRecipes(result.data.hits) // array de objetos 
    console.log(result.data.hits)
  }

  const onSubmit = e => {
    e.preventDefault();
    getRecipes()
  }

  return (
    <div className="app">
      <h1>Food Recipe Plaza 🥗</h1>
      <Form 
        query={query} 
        setQuery={setQuery} 
        onSubmit={onSubmit} 
        healthLabel={healthLabel} 
        setHealthLabels = {setHealthLabels}
      />

      <div className="app-recipes">
        {
          recipes.map(recipe => {
            return <RecipeTile recipe={recipe}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
