import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
function App() {
const [urlImages,setUrlImages] = useState([]);
const handleSubmit = async (term) =>{
    console.log('Do a search with term: '+term)
    const reponse = await searchImages(term)
    setUrlImages([...reponse])
    console.log(reponse)
}
  return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={urlImages}/>
    </div>
  )
}


export default App;