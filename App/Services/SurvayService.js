import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';
async function Get_Survey_Banner() {
    let endpoint = 'get-profile';
    return HttpClient.get(endpoint);
}
async function Get_Survey_Name_Data() {
    return HttpClient.get('view-current-survey-Name');
}
async function Get_Survey_Status_Data(data) {
    let endpoint = 'get-survey';
    return HttpClient.post(endpoint, data);
}
async function CommentGetOnbord() {
    let endpoint = '';
    return HttpClient.get(endpoint);
}

async function StarSubmitOnbord(data) {
    let endpoint = 'add-survey-ratings';
    return HttpClient.post(endpoint,data);
}
async function CommentAddOnbord(data) {
    let endpoint = 'add-question';
    return HttpClient.post(endpoint, data);
}
// async function Thoughts_Post_API(data) {
//   let endpoint = 'add-share-thought';
//   return HttpClient.post(endpoint, data);
// }
const SurvayService = {
    Get_Survey_Banner,
    Get_Survey_Name_Data,
    Get_Survey_Status_Data,
    CommentGetOnbord,
    StarSubmitOnbord,
    CommentAddOnbord,
    //   Get_Banner_Data,
    //   Thoughts_Post_API
};

export default SurvayService;
