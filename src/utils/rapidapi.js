import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY; //imprting api from env file
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,//using api key
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};



export const fetchData = async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);//fetching data from url
        return data;
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}