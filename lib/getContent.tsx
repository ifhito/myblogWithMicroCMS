import axios from "axios";
const X_API_KEY: string = process.env.X_API_KEY || '';
export const getBlogs = async () => {
    const return_content = await axios.get('https://hotakeblog.microcms.io/api/v1/blogs', { headers: {
        'Content-type': 'application/json',
        'X-API-KEY': X_API_KEY
      }})
    return return_content.data
}

export const getBlogBy = async (id:String) => {
    const return_content = await axios.get('https://hotakeblog.microcms.io/api/v1/blogs/' + String(id), { headers: {
        'Content-type': 'application/json',
        'X-API-KEY': X_API_KEY
      }})
    return return_content.data
}