const urlToppings = "http://localhost:7002/api/toppings"

const getToppings = async()=>{
    try{
        const data = await fetch(`${urlToppings}/all`);
        const result = await data.json();
        return result;  
    }catch (error) {
        console.log(error);;
    };
};

export {getToppings};