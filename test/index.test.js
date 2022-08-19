import appExpress from '../api/index.js';
import request from 'supertest';

/**PRUEBAS UNITARIAS DE LAS APIS */
describe('GET - /api/' , () =>{  

    /**TEST DEL API DE RECUPERACION DE PRODUCTO MEDIANTE ID */
    describe('GET - /api/items busqueda mediante id' , () =>{  
        test('Deberia recuperar la informacion', async ()=>{
            const itemId ='MLA836748726';
            const response =  await request(appExpress).get(`/api/items/${itemId}`).send();
            expect(response.statusCode).toBe(200);
        });

        test('Deberia recuperar la informacion', async ()=>{
            const itemId = null;
            const response =  await request(appExpress).get(`/api/items/${itemId}`).send();
            expect(response.statusCode).toBe(400);
        });
    });

    /**TEST DEL API DE RECUPERACION DE LISTA DE ARCHIVOS */
    describe('GET - /api/items - search ' , () =>{  
        test('Deberia recuperar la informacion solo con el texto', async ()=>{
            const text ='iphone';
            const response =  await request(appExpress).get(`/api/items/?q=${text}`).send();
            expect(response.statusCode).toBe(200);
        });
        test('Deberia recuperar la informacion solo con el limite', async ()=>{
            const limit =4;
            const response =  await request(appExpress).get(`/api/items/?limit=${limit}`).send();
            expect(response.statusCode).toBe(200);
        });
        test('Deberia recuperar la informacion con el limite y el texto', async ()=>{
            const limit =4;
            const text ='iphone';
            const response =  await request(appExpress).get(`/api/items/?q=${text}&limit=${limit}`).send();
            expect(response.statusCode).toBe(200);
        });
        test('Deberia recuperar la informacion sin parametros', async ()=>{
            const response =  await request(appExpress).get('/api/items').send();
            expect(response.statusCode).toBe(200);
        });
    });

});


