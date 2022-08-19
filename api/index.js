//importamos express
import express from 'express';
import {getListProduct,  getProductByIdProduct, getdescriptiosByIdProduct} from '../models/index.js';
const appExpress = express();

//soportar el request json
appExpress.use(express.json());


// Add headers before the routes are defined
appExpress.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
    
});


/**APIS */
appExpress.get('/', (request, response) =>{
    response.send('<h1>hello wordl</h1>');
});

/**OBTENER TODOS LOS PRODUCTO */
appExpress.get('/api/items', async (request, response) =>{
    let text = request.query.q;
    let limit = request.query.limit;
    await getListProduct(text, limit).then(dataResponse =>{
        response.json({
            success: true,
            data: dataResponse
        });
    }).catch((e)=>{
        console.log('error '+ JSON.stringify(e));
        response.status(404).json({
            title: 'Error',
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
                response.json({
                    success: true,
                    data: productResponse
                });
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

export default appExpress;