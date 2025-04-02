import axios, { AxiosInstance } from "axios";
import { BlogItemType, CategoryType } from "../types";

const X_API_KEY: string | undefined = process.env.X_API_KEY;

if (!X_API_KEY) {
  throw new Error("X_API_KEY is not defined. Please set it in your environment variables.");
}

const API_BASE_URL = "https://hotakeblog.microcms.io/api/v1";

// APIクライアントの作成
const createApiClient = (): AxiosInstance => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-type": "application/json",
      "X-API-KEY": X_API_KEY,
    },
  });
};

const apiClient = createApiClient();

// 型定義
export interface BlogResponse {
  contents: BlogItemType[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface CategoryResponse {
  contents: CategoryType[];
  totalCount: number;
  offset: number;
  limit: number;
}

// エラーハンドリング用のカスタムエラークラス
class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// キャッシュ用の変数
let blogsCache: BlogResponse | null = null;
let categoriesCache: CategoryResponse | null = null;
let blogCache: Map<string, BlogItemType> = new Map();

// ブログ一覧の取得
export const getBlogs = async (): Promise<BlogResponse> => {
  // キャッシュがある場合はそれを返す
  if (blogsCache) {
    return blogsCache;
  }

  try {
    const response = await apiClient.get<BlogResponse>("/blogs");
    blogsCache = response.data;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        `Failed to fetch blogs: ${error.message}`,
        error.response?.status
      );
    }
    throw new ApiError("Failed to fetch blogs: Unknown error");
  }
};

// 個別ブログの取得
export const getBlogBy = async (id: string): Promise<BlogItemType> => {
  // キャッシュがある場合はそれを返す
  if (blogCache.has(id)) {
    return blogCache.get(id)!;
  }

  try {
    const response = await apiClient.get<BlogItemType>(`/blogs/${id}`);
    blogCache.set(id, response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new ApiError(`Blog post with ID ${id} not found.`, 404);
      }
      throw new ApiError(
        `Failed to fetch blog post: ${error.message}`,
        error.response?.status
      );
    }
    throw new ApiError("Failed to fetch blog post: Unknown error");
  }
};

// カテゴリー一覧の取得
export const getCategories = async (): Promise<CategoryResponse> => {
  // キャッシュがある場合はそれを返す
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    const response = await apiClient.get<CategoryResponse>("/category");
    categoriesCache = response.data;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        `Failed to fetch categories: ${error.message}`,
        error.response?.status
      );
    }
    throw new ApiError("Failed to fetch categories: Unknown error");
  }
};

// キャッシュをクリアする関数
export const clearCache = () => {
  blogsCache = null;
  categoriesCache = null;
  blogCache.clear();
};