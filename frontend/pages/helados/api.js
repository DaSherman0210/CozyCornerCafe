const urlHelados = "http://localhost:7002/api/helados"

const getHelados = async()=>{
    try{
        const data = await fetch(`${urlHelados}/all`);
        const result = await data.json();
        return result;  
    }catch (error) {
        console.log(error);;
    };
};

export {getHelados};