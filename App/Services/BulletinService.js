import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';

async function Get_Bulletin() {
    let endpoint = 'view-all-bulletin-board';
    return HttpClient.get(endpoint);
}
const BulletinService = {
    Get_Bulletin,
};

export default BulletinService;
