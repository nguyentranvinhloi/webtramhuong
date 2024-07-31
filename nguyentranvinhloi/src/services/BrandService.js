import httpAxios from'../httpAxios';


function getAll(){
    return httpAxios.get('brand/index');
}
function getById(id){
    return httpAxios.get(`brand/show/${id}`);

}
function create(brand){
    return httpAxios.post('brand/store',brand);
}
function update(brand,id){
    return httpAxios.post(`brand/update/${id}`,brand);

}
function remove(id){
    return httpAxios.delete(`brand/destroy/${id}`);

}
function getShowHome(){
    return httpAxios.get('brand/showhome');
}
//---------------------------
function trash(){
    return httpAxios.get(`brand/trash`);

}
function status(id){
    return httpAxios.post(`brand/status/${id}`);

}
function restore(id){
    return httpAxios.post(`brand/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`brand/delete/${id}`);

}
const brandservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    trash:trash,
    status:status,
    restore:restore,
    deleted:deleted,
    getShowHome:getShowHome
}
export default brandservice;