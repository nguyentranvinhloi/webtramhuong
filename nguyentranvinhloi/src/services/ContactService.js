import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('contact/index');
}
function getById(id)
{
    return httpAxios.get(`contact/show/${id}`);
}
function create(contact){
    return httpAxios.post('contact/store',contact);
}
function update(contact,id)
{
    return httpAxios.post(`contact/update/${id}`,contact);
}
function remove(id)
{
    return httpAxios.delete(`contact/destroy/${id}`);
}
//---------------------------
function trash(){
    return httpAxios.get(`contact/trash`);

}
function status(id){
    return httpAxios.post(`contact/status/${id}`);

}
function restore(id){
    return httpAxios.post(`contact/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`contact/delete/${id}`);

}
const contactservice={
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
export default contactservice;