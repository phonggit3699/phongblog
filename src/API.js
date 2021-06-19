import axios from 'axios';

const URL_API = "https://phongallpostapi.herokuapp.com/api/post";

const URL_API_CREATE = "https://phongallpostapi.herokuapp.com/api/newPost";

const URL_API_LOGIN = "https://phongallpostapi.herokuapp.com/api/findAuth";

const URL_API_SIGNUP = "https://phongallpostapi.herokuapp.com/api/newAuth";

const URL_API_SPECIFIC_POST = "https://phongallpostapi.herokuapp.com/api/post/";

const URL_API_CATEGORY_POST = "https://phongallpostapi.herokuapp.com/api/category/";

const URL_API_COUNT = "https://phongallpostapi.herokuapp.com/api/countPost";



export async function getPostFromAPI(offset) {
    const respones = await axios.get(URL_API+'/'+ offset.skip + '/' + offset.limit);
    return respones;
    
}

export async function getTotalPostFromAPI() {
    const respones = await axios.get(URL_API_COUNT);
    return respones;
}


export async function getCategoryPostFromAPI(category) {
    const respones = await axios.get(URL_API_CATEGORY_POST + category);
    return respones;
}

export async function getSpecificPostFromAPI(id) {
    const respones = await axios.get(URL_API_SPECIFIC_POST + id);
    return respones;
}

export async function createNewPostAPI(specificPost) {

    const status = await axios({
        method: 'POST',
        url: URL_API_CREATE,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(specificPost)
    });
    return status.json();

}


export async function authLoginAPI(dataAuth) {
    
    const status = await axios({
        method: 'POST',
        url: URL_API_LOGIN,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(dataAuth)
    });

    return status;
}


export async function authSignUpAPI(dataAuth) {

    const status = await axios({
        method: 'POST',
        url: URL_API_SIGNUP,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(dataAuth)
    });

    return status;
}