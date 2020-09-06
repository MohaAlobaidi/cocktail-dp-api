import React from "react";
import Cocktail from './Cocktail'


export default function CocktailList({loading,cocktails}) {
  if(loading){
    return <h2 className="section-title">loading ...</h2>
  }
 if(cocktails.length === 0){
   return <h2 className="section-title">no cocktails matched your search criteria </h2>
 }
  return <section className="section">
<h2 className="section-title">cocktail</h2>;

<div className="cocktails-center">
  {cocktails.map(item=>{
    return(
      <Cocktail key={item.id} {...item}/>
    )
  })}
</div>
  </section> 
}
