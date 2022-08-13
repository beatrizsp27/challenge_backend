//importamos express
import express from 'express';
import {getListProduct,  getProductByIdProduct, getdescriptiosByIdProduct} from './service/index.js';
const appExpress = express();

//soportar el request json
appExpress.use(express.json());

/**APIS */
appExpress.get('/', (request, response) =>{
    response.send('<h1>hello wordl</h1>');
});

/**OBTENER TODOS LOS PRODUCTO */
appExpress.get('/api/items', async (request, response) =>{
    console.log('obteniendo productos');
    let text = request.query.q;
    console.log(text);
    const limit = 4;
    /**validaciones */
    if(text=== null || text === 'null'){
        return response.status(400).json({
            error: 'El texto de busqueda no puede ser nullo'
        });
    }

    await getListProduct(text, limit).then(dataResponse =>{
        response.json(dataResponse);
    }).catch((e)=>{
        console.log('error '+ JSON.stringify(e));
        response.status(404).json({
            error: 'No se recupero información del servicio'
        });
    });
});

/**OBTENER PRODCUCTO MEDIANTE ID */
appExpress.get('/api/items/:id', async (request, response) =>{
    //validaciones
    const id = request.params.id;
    if(id=== null || id === 'null'){
        return response.status(400).json({
            error: 'El identificador no puede ser nullo'
        });
    }
    await getProductByIdProduct(id).then(async (productResponse)=>{
        await getdescriptiosByIdProduct(id).then((product)=>{
            if(product){
                productResponse.item = {...productResponse.item, description: product.description};
                response.json(productResponse);
            }else{
                response.status(404).json({
                    title: 'Error',
                    error: `El recurso con ${id} no fue encontrado.`
                });
            }
        }).catch((e)=>{
            console.log(e);
            response.status(404).json({
                title: 'Error',
                error: `El recurso con ${id} no fue encontrado.`
            });
        });
    }).catch((e)=>{
        console.log(e);
        response.status(404).json({
            title: 'Error',
            error: `El recurso con ${id} no fue encontrado.`
        });
    });
});

//se pone un puerto libre
const PORT = 3001;
appExpress.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
