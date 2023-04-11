import express from 'express';
import products from './api/routes/products'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use('/products', products)

app.listen(port, ()=>{
    console.log('server is listening on port'+ port)
})