import fetch from 'node-fetch';
import { BASE_URL, CONTEXTO_SEARCH, CONTEXT_PRODUCT, CONTEXT_DESCRIPTIONS} from '../utils/index.js';

const dataObject = {
    author : {
        name: 'Beatriz',
        lastname: 'Hernandez Hernandez'
    }
};

export const getListProduct = async (textSearch, limit) =>{
    const promise = await new Promise((resolve, reject)=>{
        fetch(`${BASE_URL}${CONTEXTO_SEARCH}?q=${textSearch}&limit=${limit}`, {
            method: 'GET',
            headers:
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        })
            .then(response => { return response.json(); })
            .then(responseJson => {
                let arrayProductTemp = [];
                let category = [];
                responseJson.results.forEach(product => {
                    if(product){
                        const newProduct = {
                            id:product.id,
                            title:product.title,
                            price:{
                                currency:product.currency_id,
                                amount:product.price,
                                decimals:product.price
                            },
                            picture:product.thumbnail,
                            condition:product.condition,
                            free_shipping:product?.shipping?.free_shipping
                        };
                        category.push(product.category_id);
                        arrayProductTemp.push(newProduct);
                    }
                });
                const objResponse = { ...dataObject, categories:category, items: arrayProductTemp };
                resolve(objResponse);
            })
            .catch(function (error) {
                console.log('Request failed', error);
                reject(error);
            });
    });
    return promise;
};


export const getProductByIdProduct = async (id) =>{
    const promise = await new Promise((resolve, reject)=>{
        fetch(`${BASE_URL}${CONTEXT_PRODUCT}${id}`, {
            method: 'GET',
            headers:
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        })
            .then(response => { return response.json(); })
            .then(productResponse => {
                if(productResponse){
                    const newProduct = {
                        id:productResponse.id,
                        title:productResponse.title,
                        price:{
                            currency:productResponse.currency_id,
                            amount:productResponse.price,
                            decimals:parseFloat(productResponse.price)
                        },
                        picture:productResponse.thumbnail,
                        condition:productResponse.condition,
                        free_shipping:productResponse?.shipping?.free_shipping,
                        sold_quantity: productResponse.sold_quantity,
                    };

                    const objResponse =  {...dataObject, item: newProduct};
                    resolve(objResponse);
                }else{
                    reject('No se encontro el elemento');
                }

            })
            .catch(function (error) {
                console.log('Request failed', error);
                reject(error);
            });
    });
    return promise;
};

export const getdescriptiosByIdProduct = async (id) =>{
    const promise = await new Promise((resolve, reject)=>{
        fetch(`${BASE_URL}${CONTEXT_PRODUCT}${id}${CONTEXT_DESCRIPTIONS}`, {
            method: 'GET',
            headers:
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        })
            .then(response => { return response.json(); })
            .then(productResponse => {
                const newProduct = {
                    description:productResponse.plain_text
                };
                resolve(newProduct);
            })
            .catch(function (error) {
                console.log('Request failed', error);
                reject(error);
            });
    });
    return promise;
};
