// eslint-disable-next-line no-unused-vars
import {getListProduct,getProductByIdProduct, getdescriptiosByIdProduct } from '../../models/index.js';

// eslint-disable-next-line no-undef
describe('GET - /api/' , () =>{  
    // eslint-disable-next-line no-undef
    describe('GET - /api/items busqueda mediante id model api ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const itemId ='MLA836748726';
            const response =  await getProductByIdProduct(itemId);

            const dataResponseExpect = {
                author: { name: 'Beatriz', lastname: 'Hernandez Hernandez' },
                item: {
                    id: 'MLA836748726',
                    title: '4 Banco Taburete Silla De Pino Natural 45cm Alto',
                    price: { currency: 'ARS', amount: 10875, decimals: 10875 },
                    picture: 'http://http2.mlstatic.com/D_624681-MLA46346557427_062021-I.jpg',
                    condition: 'new',
                    free_shipping: true,
                    sold_quantity: 25
                }
            };
        
            // eslint-disable-next-line no-undef
            expect(response).toEqual(dataResponseExpect);
        });
    });

    // eslint-disable-next-line no-undef
    describe('GET - /api/items - search model fail ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const text ='iphone';
            const limit = 4;
            const response =  await getListProduct(text, limit);

            const dataExpect = {'author':
             {'lastname': 'Hernandez Hernandez', 'name': 'Beatriz'}, 'categories': ['MLA1055', 'MLA1055', 'MLA1055', 'MLA1055'], 'items': [{'condition': 'new', 'free_shipping': true, 'id': 'MLA909922796', 'picture': 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg', 'price': {'amount': 232328, 'currency': 'ARS', 'decimals': 232328}, 'title': 'Apple iPhone 11 (128 Gb) - Negro'}, {'condition': 'new', 'free_shipping': true, 'id': 'MLA1150951347', 'picture': 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg', 'price': {'amount': 208117, 'currency': 'ARS', 'decimals': 208117}, 'title': 'Apple iPhone 11 (64 Gb) - Negro'}, {'condition': 'new', 'free_shipping': true, 'id': 'MLA932318794', 'picture': 'http://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg', 'price': {'amount': 169399, 'currency': 'ARS', 'decimals': 169399}, 'title': 'Apple iPhone SE (2da Generación) 128 Gb - Blanco'}, {'condition': 'new', 'free_shipping': true, 'id': 'MLA930793214', 'picture': 'http://http2.mlstatic.com/D_740855-MLA45719698644_042021-I.jpg', 'price': {'amount': 267999, 'currency': 'ARS', 'decimals': 267999}, 'title': 'Apple iPhone 12 (64 Gb) - Negro'}]};
            console.log(response);
            // eslint-disable-next-line no-undef
            expect(response).toEqual(dataExpect);
        });
    });

});


