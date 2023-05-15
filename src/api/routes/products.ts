import express from 'express';
import { addData, deleteDataById, findById, getAllData } from '../model/data';

const router = express.Router();

router.get('/', (req, res, next)=>{
    getAllData('products').then((data)=>{
        res.status(200).json({
            message:'products fetched successfully!',
            data
        })
    })
    
})

router.get('/:productId', (req, res, next)=>{
    const {productId} = req.params;
    findById('products', Number(productId)).then(data => {
        res.status(200).json({
            message:'product found',
            data
        })
    })
    .catch(err => {
        res.status(404).json({
            message:'Product not found! '+err,
            productId
        })
    })

   
})

router.post('/',(req, res, next)=>{
    // console.log('req: ', req);
    const {name, price} = req.body;
    console.log(name,price);
    const product = {
        productId: Date.now(),
        productName:name,
        price: Number(price)
    }
    addData('products', product).then(()=>{
        res.status(201).json({
            message:'product added successfully!',
            data: product
        })
    })

})

router.delete('/:productId', (req, res, next)=>{
    let {productId} = req.params;
    
    deleteDataById('products', productId).then(()=>{
        console.log('inside then delete');
        res.status(200).json({
            message:'product deleted successfully',
            productId
        })
    })
    .catch(err =>{
        res.status(404).json({
            message: err,
            productId
        })
    })
})

export default router;

