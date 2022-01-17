import React from 'react';
import { NextPage } from 'next';
import { getBlogs, getCategories } from '../lib/getContent';
import BlogsTemplate from '../components/BlogsTemplate';
const Blogs: NextPage = (props: any) => {
  const { contents, categories } = props;
  
  return (
    <BlogsTemplate
      contents={contents}
      categories={categories}
      categoryData={'all'}
    />
  )
}

export const getStaticProps = async () => {
  const data = await getBlogs();
  const categoriesData = await getCategories();
  return { props: { contents: data.contents,categories: categoriesData.contents } };
}
export default Blogs;