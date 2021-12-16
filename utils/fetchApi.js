import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '945daa4f02msh57048d8e1d5525dp1eb233jsne04156d40c88'
//   }

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '945daa4f02msh57048d8e1d5525dp1eb233jsne04156d40c88'
          }
    })

    return data;
}