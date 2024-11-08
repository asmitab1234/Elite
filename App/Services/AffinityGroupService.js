import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';

async function Get_Affinity() {
    let endpoint = 'view-affinity-group';
    return HttpClient.get(endpoint);
}
async function Get_Affinity_outher() {
    let endpoint = 'view-my-affinity-group';
    return HttpClient.get(endpoint);
}
async function Post_Afinity_Data(data) {
    let endpoint = 'add-affinity-group';
    return HttpClient.post(endpoint, data);
}
async function Get_Employee_List() {
    let endpoint = 'view-all-employees';
    return HttpClient.get(endpoint);
}
const AffinityGroupService = {
    Get_Affinity,
    Get_Affinity_outher,
    Post_Afinity_Data,
    Get_Employee_List
};

export default AffinityGroupService;
