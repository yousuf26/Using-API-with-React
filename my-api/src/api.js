import axios from 'axios';

const searchImages = async (term) =>{

    const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID NpxxS0NL3DtaR2h0zqKXCHaiLn3x1cSbPsUKwn2O1Q8'
        },
        params:{
            query:term
        }
    })
    //console.log(response.data.results)
    return response.data.results;
}

export default searchImages;