import { NextPage } from 'next';
import Link from 'next/link'
import React from 'react';
import { getBlogs } from '../lib/getContent';
import formatDate from '../components/FormatDate'
type BlogItemType = {
  items: any
}

const BlogItem: React.FC<BlogItemType> = props => {
  const item = props.items;

  return (
            <li>
                <h3>
                  <Link href="/blogs/[id]" as={`/blogs/${item.id}`} passHref>
                    <a>
                      { item.title }
                    </a>
                  </Link>
                </h3>
              { formatDate(item.date) }
            </li>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props;

  return (
    <div className="blog-container">
      <ul>
      {
        contents.map( (item: { id: React.Key; }) => <BlogItem items={ item } key={ item.id } />)
      }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getBlogs();
  console.log("コンテンツ", data.contents)
  return { props: { contents: data.contents } };
}

export default Blogs;