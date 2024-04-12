import { baseUrl } from "./baseUrl"

export const getSinglePostData = async (endPoints, id) => {
        try{
            const response = await fetch(`${baseUrl}/${endPoints}/${id}`);
            const post = await response.json();
            // return post;
            return {post}; // returns post object which contains data ...
        }catch(error)
        {
            throw new Error(error);
        }
}