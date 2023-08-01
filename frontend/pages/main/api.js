const urlBebidas = "http://localhost:7002/api/bebidas"

const getBebidas = async()=>{
    try{
        const data = await fetch(`${urlBebidas}/all`);
        const result = await data.json();
        return result;  
    }catch (error) {
        console.log(error);;
    };
};

export {getBebidas};