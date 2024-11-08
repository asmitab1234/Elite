// import Storage from '@Utils/Storage'
import { MAIN_BASE_URL } from './EnvVariables';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs'
import Storage from './Storage';

// const BASE_URL = `http://52.66.120.170:4049/api/v1/user/`;
const BASE_URL = `https://companyadmin.fractalselite.com/api/v1/user/`;




async function getToken() {
    return await Storage.get('token');
}
function get(endpoint, params) {
    return request(endpoint, params);
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

function Delete(endpoint, params) {
    return request(endpoint, params, "DELETE");
}

async function request(endpoint, params = null, method = 'GET') {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '*/*');
        xmlRequest.setRequestHeader('Content-Type', 'application/json');
        xmlRequest.setRequestHeader('usertype', 'User');
        // xmlRequest.setRequestHeader('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiUm95IiwidXNlclR5cGUiOiJBZG1pbiIsImVtYWlsIjoicm95OTY4MTA1MzQ1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsInBob25lTm8iOiI3MDAzNzQ2MzgwIiwiaWF0IjoxNjkyNzc4NjgyLCJfaWQiOiI2NGU1YzBiYTEzMDFhNGNmZTg0M2RhN2IifQ.83Ib_2XiKkafViWcGlPuZMg4GWBpxQhRzisfOxha3ck');
        xmlRequest.setRequestHeader('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiUm95IiwidXNlclR5cGUiOiJBZG1pbiIsImVtYWlsIjoicm95OTY4MTA1MzQ1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsInBob25lTm8iOiI3MDAzNzQ2MzgwIiwiaWF0IjoxNjkyNzc4NjgyLCJfaWQiOiI2NGU1YzBiYTEzMDFhNGNmZTg0M2RhN2IifQ.83Ib_2XiKkafViWcGlPuZMg4GWBpxQhRzisfOxha3ck');

        if (method == 'GET') {
            xmlRequest.send();
        } else {
            xmlRequest.send(JSON.stringify(params));
        }

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            // console.log("xmlRequest.response",xmlRequest.response)  
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })

}

const FileUpload = async (url, file, object_get = {}) => {
    return new Promise(async function (resolve, reject) {
        let token = await getToken();
        let apiUrl = BASE_URL + url;

        console.log("apiUrl", apiUrl)

        var data = new FormData();

        let objArray = Object.keys(object_get);

        objArray.forEach((element) => {
            data.append(element, object_get[element]);
        });

        if (file.path != '') {
            let get_originalname = await getOriginalname(file.path);
            console.log('originalnam', get_originalname);

            data.append('video', {
                uri: file.path,
                type: file.mime,
                name: get_originalname,
            });
        }
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
            console.log("xhr.response", xhr.response)
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
                resolve(JSON.parse(xhr.response));
            } else if (xhr.status == 0 && xhr.readyState === XMLHttpRequest.DONE) {
                reject('notupload')
            }
        };

        xhr.open('POST', apiUrl);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.setRequestHeader('Authorization', token);

        xhr.send(data);
    });
}

const newFileUpload = async (url, file, object_get = {}) => {
    let token = await getToken();
    return new Promise(async function (resolve, reject) {
        let apiUrl = BASE_URL + url;

        console.log("apiUrl", apiUrl)

        var data = new FormData();

        let objArray = Object.keys(object_get);

        objArray.forEach((element) => {
            data.append(element, object_get[element]);
        });

        if (file.path != '') {
            let get_originalname = await getOriginalname(file.path);
            console.log('originalname', get_originalname);
            data.append('image', {
                uri: file.path,
                type: file.mime,
                name: get_originalname,

            });
        }
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
            console.log("xhr.response", xhr.response)
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
                resolve(JSON.parse(xhr.response));
            }
            else if (xhr.status == 0 && xhr.readyState === XMLHttpRequest.DONE) {
                reject('notupload')
            }
        };

        xhr.open('POST', apiUrl);
        xhr.setRequestHeader('Accept', '/');
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.setRequestHeader('usertype', 'User');
        // xhr.setRequestHeader('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiUm95IiwidXNlclR5cGUiOiJBZG1pbiIsImVtYWlsIjoicm95OTY4MTA1MzQ1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsInBob25lTm8iOiI3MDAzNzQ2MzgwIiwiaWF0IjoxNjkyNzc4NjgyfQ.ZRUS32trHtb8aXOrdlM2OYKb3rRV_Iq0B1yviigjldQ');
        xhr.setRequestHeader('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiUm95IiwidXNlclR5cGUiOiJBZG1pbiIsImVtYWlsIjoicm95OTY4MTA1MzQ1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsInBob25lTm8iOiI3MDAzNzQ2MzgwIiwiaWF0IjoxNjkyNzc4NjgyLCJfaWQiOiI2NGU1YzBiYTEzMDFhNGNmZTg0M2RhN2IifQ.83Ib_2XiKkafViWcGlPuZMg4GWBpxQhRzisfOxha3ck');
        xhr.send(data);
    });
}

const musicFileUpload = async (url, file, object_get = {}) => {
    let token = await getToken();
    let apiUrl = BASE_URL + url;

    console.log("apiUrl", apiUrl, url)

    let Base64Image = await RNFS.readFile(file.abPath, 'base64')
    return new Promise((resolve, reject) => {
        // console.log("`data:${file.type};base64,${Base64Image}`", `data:${file.type};base64,${Base64Image}`)
        RNFetchBlob.fetch('POST', apiUrl, {
            "Accept": '/',
            'Content-Type': 'application/octet-stream',
            'cache-control': 'no-cache',
            'Authorization': token,
            'originalname': file.name,
            'minetype': `${file.type}`,
            'replacetype': `data${file.type}base64`
        }, `data:${file.type};base64,${Base64Image}`)
            .then((result) => {
                try {
                    console.log("JSON.parse(result.data)", JSON.parse(result.data))
                    resolve(JSON.parse(result.data));
                } catch (error) {
                    console.log("error", error)
                    reject(error);
                }
            })
            .catch((error) => {
                console.log("error", error)

                reject(error);
            })
    })
}


async function multiupload(endpoint, method, files = [], object_get = {}) {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    var data = new FormData();

    let objArray = Object.keys(object_get);
    objArray.forEach((element) => {
        data.append(element, object_get[element]);
    });

    files.forEach(async (element) => {
        let get_originalname = await getOriginalname(element.path);
        data.append(element.key, {
            uri: element.path,
            type: felementile.mime,
            name: get_originalname,
        });
    })

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '/');
        xmlRequest.setRequestHeader('Content-Type', 'multipart/form-data');
        xmlRequest.setRequestHeader('cache-control', 'no-cache');
        xmlRequest.setRequestHeader('Authorization', token);

        xmlRequest.send(data);

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })
}

export async function getOriginalname(data) {
    console.log("video", data);
    let arr = data.split("/");
    let lent = Number(arr.length - 1);
    return arr[lent];
}

const HttpClient = {
    get,
    post,
    put,
    Delete,
    multiupload,
    newFileUpload,
    FileUpload,
    musicFileUpload
}

export default HttpClient