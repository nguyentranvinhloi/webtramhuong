import httpAxios from'../httpAxios';


function getAll(){
    return httpAxios.get('menu/index');
}
function getById(id){
    return httpAxios.get(`menu/show/${id}`);

}
function create(menu){
    return httpAxios.post('menu/store',menu);
}
function update(menu,id){
    return httpAxios.post(`menu/update/${id}`,menu);

}
function remove(id){
    return httpAxios.delete(`menu/destroy/${id}`);

}
//frontend
function getByParentId(position,parent_id)
{
    return httpAxios.get(`menu_list/${position}/${parent_id}`);

}
//---------------------------
function trash(){
    return httpAxios.get(`menu/trash`);

}
function status(id){
    return httpAxios.post(`menu/status/${id}`);

}
function restore(id){
    return httpAxios.post(`menu/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`menu/delete/${id}`);

}
const menuservice={
    getByParentId:getByParentId,
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
export default menuservice;