import httpAxios from'../httpAxios';


function getProductAll(limit,page=1){
    return httpAxios.get(`product_all/${limit}/${page}`);
}
function getProductBySlug(slug){
    return httpAxios.get(`product_detail/${slug}`);
}
function getProductHome(limit,category_id){
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductByCategoryId(category_id,limit){
    return httpAxios.get(`product_category/${category_id}/${limit}`);
}
function getProductByBrandId(brand_id,limit){
    return httpAxios.get(`product_brand/${brand_id}/${limit}`);
}
function getProductNew(limit)
{
    return httpAxios.get(`product_list/${limit}`);
}
function getProductSale(limit)
{
    return httpAxios.get(`product_sale/${limit}`);
}
function getProductByName(name){
    return httpAxios.get(`product/${name}`);
}
//-----------------------------------
function getAll(){
    return httpAxios.get('product/index');
}
function getById(id){
    return httpAxios.get(`product/show/${id}`);
}
function create(product){
    return httpAxios.post('product/store',product);
}
function update(product,id){
    return httpAxios.post(`product/update/${id}`,product);
}
function remove(id){
    return httpAxios.delete(`product/destroy/${id}`);
}
//---------------------------
function trash(){
    return httpAxios.get(`product/trash`);

}
function status(id){
    return httpAxios.post(`product/status/${id}`);

}
function restore(id){
    return httpAxios.post(`product/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`product/delete/${id}`);

}
const productservice={
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductHome:getProductHome,
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getProductNew:getProductNew,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    trash:trash,
    status:status,
    restore:restore,
    deleted:deleted,
    getProductSale:getProductSale,
    getProductByName:getProductByName,
}
export default productservice;