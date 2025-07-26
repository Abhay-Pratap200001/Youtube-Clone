import axios from "axios";// for making rquest to api

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY; //imprting api from env file
const BASE_URL="https://youtube138.p.rapidapi.com"// root endpoint for the YouTube API for using

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,//unique API key for authentication.
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'// The host name of the API you’re calling
	}
};



export const fetchData = async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);//fetching data from url
        return data;//accepting response from api
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}