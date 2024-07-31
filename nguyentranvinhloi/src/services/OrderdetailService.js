import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('orderdetail/index');
}
function getById(id)
{
    return httpAxios.get(`orderdetail/show/${id}`);
}
function create(orderdetail)
{
    return httpAxios.post('orderdetail/store',orderdetail);
}
function update(orderdetail,id)
{
    return httpAxios.post(`orderdetail/update/${id}`,orderdetail);
}
function remove(id)
{
    return httpAxios.delete(`orderdetail/destroy/${id}`);
}
//---------------------------
function trash(){
    return httpAxios.get(`orderdetail/trash`);

}
function status(id){
    return httpAxios.post(`orderdetail/status/${id}`);

}
function restore(id){
    return httpAxios.post(`orderdetail/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`orderdetail/delete/${id}`);

}
const orderdetailservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    trash:trash,
    status:status,
    restore:restore,
    deleted:deleted
}
export default orderdetailservice;