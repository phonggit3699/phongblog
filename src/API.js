const URL_API = "http://localhost:3001/api/post";

const URL_API_CREATE = "http://localhost:3001/api/newPost";

const URL_API_LOGIN = "http://localhost:3001/api/findAuth";

const URL_API_SIGNUP = "http://localhost:3001/api/newAuth";
const URL_API_SPECIFIC_POST = "http://localhost:3001/api/post/";


export async function getPostFromAPI() {
    const abortC = new AbortController();

    const respones = await fetch(URL_API, { signal: abortC.signal });
    return respones.json();
}

export async function getSpecificPostFromAPI(id) {
    const abortC = new AbortController();
    const respones = await fetch(URL_API_SPECIFIC_POST + id, { signal: abortC.signal });
    return respones.json();
}

export async function createNewPostAPI(newPost) {

    const status = await fetch(URL_API_CREATE, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
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