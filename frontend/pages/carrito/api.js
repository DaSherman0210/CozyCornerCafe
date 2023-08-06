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

const postToppings = async(toppings)=>{
    try {
        await fetch(`${urlToppings}/add`,{
            method: "POST",
            body: JSON.stringify(toppings),
            headers:{
                "Content-Type":"application/json"
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export {getToppings ,postToppings};