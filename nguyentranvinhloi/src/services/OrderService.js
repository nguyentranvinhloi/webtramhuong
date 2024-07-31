import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('order/index');
}
function getById(id)
{
    return httpAxios.get(`order/show/${id}`);
}
function create(order)
{
    return httpAxios.post('order/store',order);
}
function update(order,id)
{
    return httpAxios.post(`order/update/${id}`,order);
}
function remove(id)
{
    return httpAxios.delete(`order/destroy/${id}`);
}

function getChart()
{
    return httpAxios.get('order/chart');
}
//---------------------------
function trash(){
    return httpAxios.get(`order/trash`);
}
// function history(){
//     return httpAxios.get(`order/history`);
// }
function orderuser(id){
    return httpAxios.get(`order/trash/${id}`);

}
function status(id){
    return httpAxios.post(`order/status/${id}`);

}
function restore(id){
    return httpAxios.post(`order/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`order/delete/${id}`);
}
function checkout(info){
    return httpAxios.post(`online_checkout`, info);
}

const orderservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    trash:trash,
    remove:remove,
    getChart:getChart,
    orderuser:orderuser,
    status:status,
    restore:restore,
    deleted:deleted,
    checkout:checkout,
}
export default orderservice;