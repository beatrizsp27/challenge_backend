import appExpress from './api/index.js';
//se pone un puerto libre
const PORT = 3001;
appExpress.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
