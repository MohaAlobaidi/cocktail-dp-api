import React,{useState,useEffect} from "react";
import SearchForm  from './../components/SearchForm'
import CocktailList from './../components/CocktailList'

export default function Home() {
  const [loading,setLoading] = useState(false)
  const [searchTerm,setSearchTerm] = useState('a')
  const [cocktails , setCocktails] = useState([])
  
  useEffect(()=>{

    setLoading(true)
    async function getDrinks(){
     try{
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      
      const data = await response.json()
 
      //console.log(data)
    const {drinks} = data
   // console.log(drinks)
      if(drinks){
        const newCocktails = drinks.map(item=>{
          const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })
        setCocktails(newCocktails)
      }else{
        //console.log( 'no drinks')
        setCocktails([])
      }

     }
      catch(error){
        console.log(error)
      }
    }
    setLoading(false)

 getDrinks()
  },[searchTerm])
  return <main>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <CocktailList loading={loading} cocktails={cocktails}/>
   </main>;
}
