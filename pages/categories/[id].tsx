import React from 'react';
import { NextPage } from 'next';
import { getBlogs, getCategories } from '../../lib/getContent';
import BlogsTemplate from '../../components/BlogsTemplate';
import { CategoryType, BlogItemType } from '../../types/index';

type PropsType = {
    contents: BlogItemType[];
    categories: CategoryType[];
    categoryData: string;
}
const Blogs: NextPage<PropsType> = (props) => {
    const { contents, categories, categoryData } = props;
    return (
        <BlogsTemplate
            contents={contents}
            categories={categories}
            categoryData={categoryData}
        />
    )
}

export const getStaticPaths = async () => {
    const data = await getCategories();
    const paths = data.contents.map((item:{categoryId:string}) => `/categories/${item.categoryId}`);
    return {
      paths,
      fallback: false
    }
  }

export const getStaticProps = async (category:{params:{id:string}}) => {
    const currentCategory = category.params.id;
    const data = await getBlogs();
    const categoriesData = await getCategories();
    const newContents = data.contents.filter((content:BlogItemType) => content.categories.map((category:CategoryType)=> category.categoryId).includes(currentCategory));
    return { props: { contents: newContents, categories: categoriesData.contents, categoryData:currentCategory } };
}
export default Blogs;