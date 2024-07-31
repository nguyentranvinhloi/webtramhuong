import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('slider/index');
}
function getById(id)
{
    return httpAxios.get(`slider/show/${id}`);
}
function create(slider)
{
    return httpAxios.post('slider/store',slider);
}
function update(slider,id)
{
    return httpAxios.post(`slider/update/${id}`,slider);
}
function remove(id)
{
    return httpAxios.delete(`slider/destroy/${id}`);
}
//--------------------
function getByPosition(position)
{
    return httpAxios.get(`slider_list/${position}`);
}
//---------------------------
function trash(){
    return httpAxios.get(`slider/trash`);

}
function status(id){
    return httpAxios.post(`slider/status/${id}`);

}
function restore(id){
    return httpAxios.post(`slider/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`slider/delete/${id}`);

}
const sliderservice={
    getByPosition:getByPosition,
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
export default sliderservice;