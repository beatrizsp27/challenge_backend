import appExpress from '../api/index.js';
import request from 'supertest';


// eslint-disable-next-line no-undef
describe('GET - /api/' , () =>{  
    // eslint-disable-next-line no-undef
    describe('GET - /api/items busqueda mediante id' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const itemId ='MLA836748726';
            const response =  await request(appExpress).get(`/api/items/${itemId}`).send();
            // eslint-disable-next-line no-undef
            expect(response.statusCode).toBe(200);
        });
    });

    // eslint-disable-next-line no-undef
    describe('GET - /api/items - search ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const text ='iphone';
            const response =  await request(appExpress).get(`/api/items/?q=${text}`).send();
            // eslint-disable-next-line no-undef
            expect(response.statusCode).toBe(200);
        });
    });

});


