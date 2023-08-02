const urlPostres = "http://localhost:7002/api/postres"

const getPostres = async()=>{
    try{
        const data = await fetch(`${urlPostres}/all`);
        const result = await data.json();
        return result;  
    }catch (error) {
        console.log(error);;
    };
};

export {getPostres};