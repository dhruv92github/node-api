import { error } from "console";

const storage = require('node-persist');


export const ordersData = [];



storage.init()
.then(()=> {
    console.log('STORAGE INITIATED')
    initializeData();
})


async function initializeData() {
    let products = await storage.getItem('products');
    
}
export const getAllData = async(type)=>{
   return await storage.getItem(type); 
    
}


export const addData = async(type : string, newItem)=>{
    const data = await storage.getItem(type)
    data.push(newItem);
    return await storage.setItem(type,data); 
    
}
export const findById = async(type : string, id : number)=>{
    try{
        const data = await storage.getItem(type)
        const databyID = data.find( item =>item.id === Number(id))
        if (!databyID) {
            throw error();
        }
        return databyID;

    }catch{
        return Promise.reject("Some error occured. Please try after some time");
    }
   
 }

export const deleteDataById = async(type, id)=>{
    try{
    const data = await storage.getItem(type);
    let dataTobeDeleted = data && data.find(item => item.id === Number(id))
    
        if (dataTobeDeleted) {
            const newData = data.filter( item => item.id !== Number(id));
           return await storage.setItem('products', newData); 
        }
        return Promise.reject("Can't find data to delete");
    }catch{
        return Promise.reject("Some error occured. Please try after some time");
    }
  
}