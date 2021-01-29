import getData from '../external/getData/getData';
import axios from 'axios';

//constants for actions 
export const LOGIN = 'LOGIN';
export const SEARCH = 'SEARCH';


export const search = (articleData, repoData) =>{
    return {
        type : SEARCH,
        articleData : articleData,
        repoData : repoData
    }
}

export const searchAsync = (searchValue) => {
    return  (dispatch) => {

        axios.get("https://api.mocki.io/v1/3d155826")
        .then(response =>{
            const data = response.data;
            
            console.log(data);
            dispatch(search(data.articleData, data.repoData));
        })
        .catch(error =>{
            console.log(error);
        })

        
    }
    
    
};
