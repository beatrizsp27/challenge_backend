// eslint-disable-next-line no-unused-vars
import {getListProduct,getProductByIdProduct, getdescriptiosByIdProduct } from '../../models/index.js';

// eslint-disable-next-line no-undef
describe('GET - /api/' , () =>{  
    // eslint-disable-next-line no-undef
    describe('Consulta de servicio para obtener la respuesta esperada id - model api ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const itemId ='MLA836748726';
            const response =  await getProductByIdProduct(itemId);

            const dataResponseExpect = {
                author: { name: 'Beatriz', lastname: 'Hernandez Hernandez' },
                item: {
                    id: 'MLA836748726',
                    title: '4 Banco Taburete Silla De Pino Natural 45cm Alto',
                    price: { currency: 'ARS', amount: 10985, decimals: 10985 },
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
    describe('Searh moder para realizar la busqueda de produto mediante id ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
            const text ='iphone';
            const limit = 4;
            const response =  await getListProduct(text, limit);
            const dataExpect = {
                'success': true,
                'data': {
                    'author': {
                        'name': 'Beatriz',
                        'lastname': 'Hernandez Hernandez'
                    },
                    'categories': [
                        'Celulares y Teléfonos',
                        'Celulares y Smartphones'
                    ],
                    'items': [
                        {
                            'id': 'MLA1150951347',
                            'title': 'Apple iPhone 11 (64 Gb) - Negro',
                            'price': {
                                'currency': 'ARS',
                                'amount': 208999,
                                'decimals': 208999
                            },
                            'picture': 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg',
                            'condition': 'new',
                            'free_shipping': true
                        },
                        {
                            'id': 'MLA1141300590',
                            'title': 'Apple iPhone 11 (128 Gb) - (product)red',
                            'price': {
                                'currency': 'ARS',
                                'amount': 233761,
                                'decimals': 233761
                            },
                            'picture': 'http://http2.mlstatic.com/D_724631-MLA46114990506_052021-I.jpg',
                            'condition': 'new',
                            'free_shipping': true
                        },
                        {
                            'id': 'MLA932318794',
                            'title': 'Apple iPhone SE (2da Generación) 128 Gb - Blanco',
                            'price': {
                                'currency': 'ARS',
                                'amount': 173266,
                                'decimals': 173266
                            },
                            'picture': 'http://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg',
                            'condition': 'new',
                            'free_shipping': true
                        },
                        {
                            'id': 'MLA930793214',
                            'title': 'Apple iPhone 12 (64 Gb) - Negro',
                            'price': {
                                'currency': 'ARS',
                                'amount': 267999,
                                'decimals': 267999
                            },
                            'picture': 'http://http2.mlstatic.com/D_740855-MLA45719698644_042021-I.jpg',
                            'condition': 'new',
                            'free_shipping': true
                        }
                    ]
                }
            };
            // eslint-disable-next-line no-undef
            expect(response).not.toEqual(dataExpect);
        });
    });

    // eslint-disable-next-line no-undef
    describe('recuperar producto mediante id para obtener la descripción ' , () =>{  
        // eslint-disable-next-line no-undef
        test('Deberia recuperar la informacion', async ()=>{
         
            const itemId ='MLA836748726';
            const response =  await getdescriptiosByIdProduct(itemId);
            const dataExpect = {
                'description':'ESPECIFICACIONES:\n\n- Banqueta alta taburete DE 45 CM Aprox al asiento\n- En NATURAL listas para pintar.\n- Las medidas son aproximadas, pueden variar unos mm.\n\n- - - SOMOS FABRICANTES - - -\n\n- FORMAS DE ENTREGA -\nHacemos envíos a todo el país, todos los días hábiles. Utilizamos Mercado Envíos en todas nuestras ventas. Podes calcular los tiempos y costos de envío ingresando tu código postal en la sección ENVIOS, a la derecha de las fotos del producto.\n\nSi la opción de envío es ENVIO RAPIDO A DOMICILIO, significa que recibirás tu compra EN EL DIA (siempre y cuando la realices antes de las 13 horas). La franja horaria de entrega es de 10 a 21 horas. ( en caso de que no se encuentren en el domicilio en el horario indicado, deben informarnos para coordinarlo, Si la persona que recibe el producto no se encuentra en el domicilio sin haber avisado previamente antes de que el producto se despache, SE RECOORDINARA LA ENTREGA Y LA EMPRESA DE LOGISTICA LE COBRARÀ NUEVAMENTE EL ENVIO).\n\n* CONTAMOS CON PRECIOS MAYORISTAS Y MINORISTAS *\n\n* QUERI ACCESORIOS *'
            };
            // eslint-disable-next-line no-undef
            expect(response).toEqual(dataExpect);
        });
    });

});


