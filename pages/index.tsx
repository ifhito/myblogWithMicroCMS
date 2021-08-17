import { NextPage } from 'next';
import Link from 'next/link'
import React, { useState } from 'react';
import { getBlogs } from '../lib/getContent';
import formatDate from '../components/FormatDate'
type BlogItemType = {
  items: any
}

const BlogItem: React.FC<BlogItemType> = props => {
  const item = props.items;

  return (
            <li className="content-color">
                <h2>
                  <Link href="/blogs/[id]" as={`/blogs/${item.id}`} passHref>
                    <a className="content-color">
                      { item.title }
                    </a>
                  </Link>
                </h2>
              <span className="content-color">{ formatDate(item.date) }</span>
              <style jsx global>{`
                h2 {
                  margin:0;
                }
              `}</style>
            </li>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props;
  const [endContent, setEndContent] = useState(5);
  const handlerClick = () => {
    setEndContent(endContent+5)
  }
  return (
    <div className="blog-container">
      <ul>
      {
        contents.slice(0,endContent).map( (item: { id: React.Key; }) => <BlogItem items={ item } key={ item.id } />)
      }
      </ul>
      {
        contents.length > endContent ? (
          <button onClick={handlerClick}>もっと見る</button>
        ):''
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