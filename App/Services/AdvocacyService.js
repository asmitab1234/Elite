import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';
async function Post_Advocay_Data(data) {
    let endpoint = 'add-advocacy';
    return HttpClient.post(endpoint, data);
}
async function Get_Advocay_Category_Data() {
    let endpoint = 'view-advocacy-category';
    return HttpClient.get(endpoint);
}
async function Get_Advocay_Category_List(id) {
    let endpoint = 'view-approved-advocacy-by-category/';
    return HttpClient.get(endpoint + id);
}
async function Get_Advocay_Category_Single(id) {
    let endpoint = 'view-advocacy-single-page/';
    return HttpClient.get(endpoint + id);
}
async function Get_All_Advocay_Data() {
    let endpoint = 'view-approved-advocacy';
    return HttpClient.get(endpoint);
}
const AdvocacyService = {
    Post_Advocay_Data,
    Get_Advocay_Category_Data,
    Get_Advocay_Category_List,
    Get_Advocay_Category_Single,
    Get_All_Advocay_Data
};

export default AdvocacyService;