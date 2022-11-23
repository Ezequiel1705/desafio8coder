const express = require('express');
const { Router } = express;

const app = express();
const productos = []; 
app.use('/static', express.static(__dirname + './public'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const routerProductos = new Router();

routerProductos.get('/', (req, res) => {
    res.send(productos)
});

routerProductos.post('/', (req, res) => {
    const productoscargar = productos.length;
    productos.push(req.body)

    res.json({'nuevo producto': nuevoProducto})
})

routerProductos.put('/products', (req, res) => {

})

routerProductos.delete('/products', (req, res) => {
    const prodEliminado = productos.splice(parseInt(id - 1), 1)
    res.json({'Borrado': producBorrado})
})

const PORT = 8080; 
const server = app.listen(PORT, () => {
    console.log('listening on port 8080' + PORT);
});

server.on('err', err => console.error(err));