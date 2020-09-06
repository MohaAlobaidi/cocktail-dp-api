import React,{useRef} from "react";
import { useEffect } from "react";

export default function SearchForm({setSearchTerm}) {

   const searchValue = useRef('')
   console.log(searchValue)

   useEffect(()=>{
    searchValue.current.focus()
   },[])

 const handleSubmit =(event)=>{
  event.preventDefault()

}

const searchCocktail = ()=>{
//console.log(searchValue.current.value)
setSearchTerm(searchValue.current.value)
}

  return <section className="section ">
<h2 className="section-title"> search cocktails</h2>
<form className="form search-form" onSubmit={handleSubmit}>
<div className="form-control">
  <label htmlFor="name">search your favorite cocktails</label>
  <input type="text" id="name" name="name" onChange={searchCocktail} ref={searchValue}/> 
</div>
</form>
  </section>
}
