const url = "https://rickandmortyapi.com/api/character"

const getApi = async()=>{
    try{
        const data = await fetch(url);
        const result = await data.json();
        return result;  
    }catch (error) {
        console.log(error);;
    };
};

export default getApi