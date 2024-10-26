const express = require ('express');
const productsRouter = require ('./src/routes/productsRouter');
const cartsRouter = require ('./src/routes/cartsRouter');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
