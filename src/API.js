const URL_API = "http://localhost:5000/api/post";

const URL_API_CREATE = "https://phongallpostapi.herokuapp.com/api/newPost";

const URL_API_LOGIN = "https://phongallpostapi.herokuapp.com/api/findAuth";

const URL_API_SIGNUP = "https://phongallpostapi.herokuapp.com/api/newAuth";
const URL_API_SPECIFIC_POST = "https://phongallpostapi.herokuapp.com/api/post/";

const URL_API_COUNT = "http://localhost:5000/api/countPost";
export async function getPostFromAPI(offset) {

    const respones = await fetch(URL_API, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(offset)
    });
    return respones.json();
}

export async function getTotalPostFromAPI() {
    const respones = await fetch(URL_API_COUNT);
    return respones.json();
}

export async function getSpecificPostFromAPI(id) {
    const respones = await fetch(URL_API_SPECIFIC_POST + id);
    return respones.json();
}

export async function createNewPostAPI(specificPost) {

    const status = await fetch(URL_API_CREATE, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(specificPost)
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