import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';
async function Get_Affinitity_Data() {
    let endpoint = 'view-my-affinity-group';
    return HttpClient.get(endpoint);
}
async function Get_GetUserData_Data() {
    let endpoint = 'get-profile';
    return HttpClient.get(endpoint);
}
async function Post_HomePagePosts_Data(data) {
    let endpoint = 'user-add-post';
    return HttpClient.post(endpoint, data);
}

const PostService = {
    Get_Affinitity_Data,
    Get_GetUserData_Data,
    Post_HomePagePosts_Data
};

export default PostService;