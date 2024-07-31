import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('category/index');
}
function getById(id)
{
    return httpAxios.get(`category/show/${id}`);
}
function create(category)
{
    return httpAxios.post('category/store',category);
}
function update(category,id)
{
    return httpAxios.post(`category/update/${id}`,category);
}
function remove(id)
{
    return httpAxios.delete(`category/destroy/${id}`);
}
//frontend
function getCategoryByParentId(parent_id)
{
    return httpAxios.get('category_list/index');
}
function getBySlug(slug){
    return httpAxios.get(`category/show/${slug}`);
}
function getShowHome()
{
    return httpAxios.get('category/showhome');
}
//---------------------------
function trash(){
    return httpAxios.get(`category/trash`);

}
function status(id){
    return httpAxios.post(`category/status/${id}`);

}
function restore(id){
    return httpAxios.post(`category/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`category/delete/${id}`);

}
const categoryservice={
    getBySlug:getBySlug,
    getCategoryByParentId:getCategoryByParentId,
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
export default categoryservice;