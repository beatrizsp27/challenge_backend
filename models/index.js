/* eslint-disable indent */
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
        let url = `${BASE_URL}${CONTEXTO_SEARCH}?q=:query`;  
        if(textSearch && limit){
            url = `${BASE_URL}${CONTEXTO_SEARCH}?q=${textSearch}&limit=${limit}`;
        }
        if(textSearch){
            url = `${BASE_URL}${CONTEXTO_SEARCH}?q=${textSearch}`;
        }
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers:
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        })
            .then(response => { return response.json(); })
            .then(responseJson => {
                /**Se valida que el objeto sea difernete de null */
                if(responseJson){
                    /**variables */
                    let arrayProductTemp = [];
                    let  categoriaNameArray = [];
                    let categorias = [];

                    /**SE VALIDA QUE EL ARRAT DE FILTROS DISPONIBLES SEAN MAYORES A 0 */
                    if(responseJson.available_filters && responseJson.available_filters.length > 0){
                        /**SE BUSCAN LAS CATEGORIAS EN LOS FILTROS DISPONIBLES */
                        categorias = responseJson.available_filters.filter((filter)=>(filter.id === 'category'));
                        /**En caso se no ecnontralo se realiza la busqueda en los filtros */
                        if(categorias.length===0 && responseJson.filters && responseJson.filters.length > 0){
                            categorias = responseJson.filters.filter((filter)=>(filter.id === 'category'));
                        }
                    }else{
                        /**En caso se no ecnontralo se realiza la busqueda en los filtros */
                        categorias = responseJson.filters.filter((filter)=>(filter.id === 'category'));
                    }
                    /**SE VALIDA QUE EL ARRAY OBTENIDO CONTENGA VALORES */
                    if(categorias && categorias.length > 0){
                        categoriaNameArray = categorias[0].values.map((categoriaItem)=>{
                            /**SE VALIDA QUE SE ENCUNTRE EL ELEMTO */
                            if(categoriaItem.path_from_root && categoriaItem.path_from_root.length >0){
                                return categoriaItem.path_from_root.map((cat)=>{
                                    if(cat && cat.name){
                                        return cat.name;
                                    }
                                });
                            }else{
                                if(categoriaItem && categoriaItem.name){
                                    return  categoriaItem.name;
                                }
                            }
                            return null;
                      });
                    }
                    /**SE ARMA EL OBJETO */
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
                            arrayProductTemp.push(newProduct);
                        }
                    });
                    const objResponse = { ...dataObject, categories: categoriaNameArray.length==1 ? categoriaNameArray[0] : categoriaNameArray, items: arrayProductTemp };
                    resolve(objResponse);

                }else{
                    resolve({...dataObject});
                }
            })
            .catch(function (error) {
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
                reject(error);
            });
    });
    return promise;
};
