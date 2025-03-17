import axios from "axios";

const X_API_KEY: string | undefined = process.env.X_API_KEY;

if (!X_API_KEY) {
  throw new Error("X_API_KEY is not defined. Please set it in your environment variables.");
}

const API_BASE_URL = "https://hotakeblog.microcms.io/api/v1";

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs`, {
      headers: {
        "Content-type": "application/json",
        "X-API-KEY": X_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return null;
  }
};

export async function getBlogBy(id: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs/${id}`, {
      headers: {
        "Content-type": "application/json",
        "X-API-KEY": X_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch blog post with ID ${id}:`, error);
    throw new Error(`Blog post with ID ${id} not found.`);
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category`, {
      headers: {
        "Content-type": "application/json",
        "X-API-KEY": X_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return null;
  }
};