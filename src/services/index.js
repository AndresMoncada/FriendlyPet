import axios from 'axios';

const baseURL= process.env.REACT_APP_CRUD_API_ENDPOINT;
export async function getPets() {
    try {
        const response = await axios.get(`${baseURL}/Mascota`);
        return response;
    } catch (e) {
        console.log(e);
    }
}

export async function postPets(petData) {
    try {
        // console.log(petData);
        const postData ={
            "nombre":petData.nombre,
            "especie":petData.especie,
            "edad":petData.edad,
          };
        const response = await axios.post(`${baseURL}/Mascota`, postData);
        return response;
    } catch (e) {
        console.log(e);
    }
}

export async function deletePets(id){
    try{
        const response= await axios.delete(`${baseURL}/Mascota/`+id);
        return response;
        // console.log(`${baseURL}/pets/`+id);
    }catch(e){
        console.log(e);
    }
}

export async function updatePet(petData){
    try{
        // console.log(petData);
        // console.log(`${baseURL}/pets/`+petData._id);
        const updateData ={
            "nombre":petData.nombre,
            "especie":petData.especie,
            "edad":petData.edad,
          };
        const response = await axios.put( `${baseURL}/Mascota/`+petData._id , updateData);
        return response;
    }catch(e){
        console.log(e);
    }
}
