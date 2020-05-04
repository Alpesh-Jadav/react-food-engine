
import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'
import SearchIcon from './SearchIcon'




const App= () => {


    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY = process.env.REACT_APP_KEY

   
    
    
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')
      useEffect(() => {
        
        getRecipe()
        
      },[query])

       const getRecipe =async () =>{

        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

        const data = await  response.json()
        setRecipes(data.hits)
        console.log(data.hits);
        
      
        
        
       }

      const updateSearch = e => {

        setSearch(e.target.value)
        
        
        
      }
      const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
      }

    return (
      <div className="App">
      
           <h1 className="logo">Food Engine</h1>

      <form onSubmit={getSearch} className="search-form">

     
      <SearchIcon /><input type="text" placeholder="Search food name"  className="search-bar" value={search} onChange={updateSearch} />
      <button type="submit" className="search-button">Search</button>
      
      </form>
      <div className="recipes">
         {recipes.map((item,index) => (
         <Recipe 
          key={index}
          title={item.recipe.label}
          calories={item.recipe.calories} 
          image = {item.recipe.image}  
          healthLabels={item.recipe.healthLabels}
          />

      ))}
      </div>
     
      
    </div>
    )
}

export default  App


