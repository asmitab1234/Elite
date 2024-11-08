import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";


const getAccount = async () => {
    return Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function setToken(data) {
    return await Storage.set('token', data);
}

async function login(data) {
    let endpoint = 'endpoint';
    return HttpClient.post(endpoint, data);
}
async function uploadProfileImage(data) {
    console.log('data==========', data)
    let endpoint = 'image-upload';
    return HttpClient.newFileUpload(endpoint, data, {});
}

const AuthService = {
    getAccount,
    setAccount,
    setToken,
    login,
    uploadProfileImage
}

export default AuthService;