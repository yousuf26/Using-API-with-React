import React, { useState } from 'react'

 function SearchBar({onSubmit}) {

  const [term,setTerm] = useState('');

  const handleFormSubmit= (e) =>{
    console.log('I need to tell the parent about some data');
    onSubmit(term)
    e.preventDefault();
  }

  const getValue = (e) =>{
   console.log(e.target.value)
   setTerm(e.target.value)
  }

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
        <input value= {term} onChange={getValue}/>
        </form>
        
       </div>
  )
}


export default SearchBar;
