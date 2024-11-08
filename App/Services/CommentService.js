import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';

async function View_Comment_Data(data) {
    let endpoint = 'view-comment';
    return HttpClient.post(endpoint, data);
}
async function Add_Comment_Data(data) {
    let endpoint = 'add-comment';
    return HttpClient.post(endpoint, data);
}
async function Comment_Reply_Api(data) {
    let endpoint = 'add-reply';
    return HttpClient.post(endpoint, data);
}
async function Comment_Delete(id) {
    let endpoint = 'delete-comment/';
    return HttpClient.Delete(endpoint + id, {});
}
async function Update_Comment_Data(data, id) {
    let endpoint = 'update-comment/';
    return HttpClient.put(endpoint + id, data);
}
const CommentService = {
    View_Comment_Data,
    Add_Comment_Data,
    Comment_Reply_Api,
    Comment_Delete,
    Update_Comment_Data

};

export default CommentService;
