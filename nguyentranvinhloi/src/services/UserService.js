import httpAxios from'../httpAxios';


function getAll()
{
    return httpAxios.get('user/index');
}
function getById(id)
{
    return httpAxios.get(`user/show/${id}`);
}
function create(user)
{
    return httpAxios.post('user/store',user);
}
function update(user,id)
{
    return httpAxios.post(`user/update/${id}`,user);
}
function remove(id)
{
    return httpAxios.delete(`user/destroy/${id}`);
}
function AddUser(user)
{
    return httpAxios.post(`user/adduser/${user}`);
} 
function Login(user)
{
    return httpAxios.post('user/login',user);
} 
function LoginAdmin(user)
{
    return httpAxios.post('user/loginadmin',user);
} 
function find(username)
{
    return httpAxios.get(`user/find/${username}`);
} 

function findUser(email)
{
    return httpAxios.get(`user/find_user/${email}`);
} 
// const loginApi=(username,password)=>{
//     return httpAxios.post('user/login',username,password);
// }
//---------------------------
function trash(){
    return httpAxios.get(`user/trash`);

}
function status(id){
    return httpAxios.post(`user/status/${id}`);

}
function restore(id){
    return httpAxios.post(`user/restore/${id}`);

}
function deleted(id){
    return httpAxios.post(`user/delete/${id}`);

}
const userservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    Login:Login,
    AddUser:AddUser,
    trash:trash,
    status:status,
    restore:restore,
    deleted:deleted,
    find:find,
    findUser:findUser,
    LoginAdmin:LoginAdmin
}
export default userservice;