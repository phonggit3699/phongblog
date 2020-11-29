import axios from 'axios';

const URL_API = "https://phongallpostapi.herokuapp.com/api/post";

const URL_API_CREATE = "https://phongallpostapi.herokuapp.com/api/newPost";

const URL_API_LOGIN = "https://phongallpostapi.herokuapp.com/api/findAuth";

const URL_API_SIGNUP = "https://phongallpostapi.herokuapp.com/api/newAuth";
const URL_API_SPECIFIC_POST = "https://phongallpostapi.herokuapp.com/api/post/";

const URL_API_COUNT = "https://phongallpostapi.herokuapp.com/api/countPost";



export async function getPostFromAPI(offset) {
    const respones = await axios({
        method: 'POST',
        url: URL_API,
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(offset)
    });
    return respones;
    
}

export async function getTotalPostFromAPI() {
    const respones = await axios.get(URL_API_COUNT);
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


export async function authLoginAPI(data) {

    const status = await fetch(URL_API_LOGIN, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return status.json();
}


export async function authSignUpAPI(data) {

    const status = await fetch(URL_API_SIGNUP, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return status.json();
}