import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('topic/index');
}
function getById(id)
{
    return httpAxios.get(`topic/show/${id}`);
}
function create(topic)
{
    return httpAxios.post('topic/store',topic);
}
function update(topic,id)
{
    return httpAxios.post(`topic/update/${id}`,topic);
}
function remove(id)
{
    return httpAxios.delete(`topic/destroy/${id}`);
}
// function getBySlug(slug){
//     return httpAxios.get(`topic/show/${slug}`);
// }
//---------------------------
function trash(){
    return httpAxios.get(`topic/trash`);

}
function status(id){
    return httpAxios.post(`topic/status/${id}`);

}
function restore(id){
    return httpAxios.post(`topic/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`topic/delete/${id}`);

}
const topicservice={
    //getBySlug:getBySlug,
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
export default topicservice;