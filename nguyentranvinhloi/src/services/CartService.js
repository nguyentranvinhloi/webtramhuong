import httpAxios from'../httpAxios';


// function getCart(id){
//     return httpAxios.get(`addcart/${id}`);
// }
function get(){
    return httpAxios.post(`online_checkout`);
}

const cartservice={
    get:get
}
export default cartservice;