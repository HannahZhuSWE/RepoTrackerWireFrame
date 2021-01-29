import axios from 'axios';

const getData = (searchValue, search) =>{
    axios.get("api.mocki.io/v1/b748fe57")
        .then(response =>{
            console.log(response.data)
            return ;
        })
        .catch(error =>{
            console.log(error);
        })
}

export default getData;