import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('post/index');
}
function getById(id)
{
    return httpAxios.get(`post/show/${id}`);
}
function create(post)
{
    return httpAxios.post('post/store',post);
}
function update(post,id)
{
    return httpAxios.post(`post/update/${id}`,post);
}
function remove(id)
{
    return httpAxios.delete(`post/destroy/${id}`);
}
//----------------------------------------------------------------
function getPostAll(limit){
    return httpAxios.get(`post_all/${limit}`);
}
function getPostNew(limit)
{
    return httpAxios.get(`post_list/${limit}`);
}
function getPostList(limit)
{
    return httpAxios.get(`post_list/${limit}`);
}

function getPostByTopicId(topic_id,limit)
{
    return httpAxios.get(`post_topic/${topic_id}/${limit}`);
}
function getPostBySlug(slug){
    return httpAxios.get(`post_detail/${slug}`);
}
//---------------------------
function trash(){
    return httpAxios.get(`post/trash`);

}
function status(id){
    return httpAxios.post(`post/status/${id}`);

}
function restore(id){
    return httpAxios.post(`post/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`post/delete/${id}`);

}
const postservice={
    getPostAll:getPostAll,
    getPostNew:getPostNew,
    getPostList:getPostList,
    getPostBySlug:getPostBySlug,
    getPostByTopicId:getPostByTopicId,
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
export default postservice;