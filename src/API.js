const URL_API = "http://localhost:3001/api/post";

const URL_API_CREATE = "http://localhost:3001/api/newPost"

export async function getPostFromAPI() {
    const respones = await fetch(URL_API);
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