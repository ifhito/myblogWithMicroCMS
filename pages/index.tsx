import { NextPage } from 'next';
import Link from 'next/link'
import React from 'react';
import { getBlogs } from '../lib/getContent';
import Head from 'next/head';
import Nav from '../components/nav';
import formatDate from '../components/FormatDate'
type BlogItemType = {
  items: any
}

const BlogItem: React.FC<BlogItemType> = props => {
  const item = props.items;

  return (
        <Link href="/blogs/[id]" as={`/blogs/${item.id}`} passHref>
          <a>
            <div>
                { formatDate(item.date) } 
                { item.title }
            </div>
          </a>
        </Link>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props;

  return (
    <div className="blog-container">
      <Head>
        <title>test</title>
      </Head>
      <Nav />
      {
        contents.map( (item: { id: React.Key; }) => <BlogItem items={ item } key={ item.id } />)
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getBlogs();
  console.log("コンテンツ", data.contents)
  return { props: { contents: data.contents } };
}

export default Blogs;