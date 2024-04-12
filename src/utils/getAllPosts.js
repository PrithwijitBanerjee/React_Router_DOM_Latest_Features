import { baseUrl } from "./baseUrl"

export const getAllPosts = async endPoints => {
    try{
        const response = await fetch(`${baseUrl}/${endPoints}`);
        const posts = await response?.json();
        return {posts}; // Return an object with posts data
    }catch(error)
    {
        throw new Error(error);
    }
}