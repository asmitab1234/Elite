import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';

async function Get_Initiative_Data() {
    let endpoint = 'view-all-initiative';
    return HttpClient.get(endpoint);
}
async function Get_Initiative_Single_Data(id) {
    let endpoint = 'view-single-initiative/';
    return HttpClient.get(endpoint + id);
}

async function Initiative_Join_Post(data) {
    let endpoint = 'join-initiative';
    return HttpClient.post(endpoint, data);
}
async function Get_Project_Initiative_Data() {
    let endpoint = 'view-valid-initiative';
    return HttpClient.get(endpoint);
}
async function Get_Organizzation_Data() {
    let endpoint = 'view-initiative-type';
    return HttpClient.get(endpoint);
}
async function Initiative_Add_Post(data) {
    let endpoint = 'add-initiative';
    return HttpClient.post(endpoint, data);
}
const InitiativeService = {
    Get_Initiative_Data,
    Get_Initiative_Single_Data,
    Initiative_Join_Post,
    Get_Project_Initiative_Data,
    Get_Organizzation_Data,
    Initiative_Add_Post

};

export default InitiativeService;
