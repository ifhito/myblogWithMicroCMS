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
            <li id="page-li" className="content-color">
                <h2>
                  <Link href="/blogs/[id]" as={`/blogs/${item.id}`} passHref>
                    <a className="content-color link-border-none">
                      { item.title }
                    </a>
                  </Link>
                </h2>
              <span id="date" className="content-color">{ formatDate(item.date) }</span>
              <style jsx global>{`
                h2 {
                  margin:0;
                  border-bottom: 3px solid;
                  line-height: 1;
                }
                a {
                  width:100%;
                }
                #page-li {
                  margin-bottom: 30px;
                }
                @media (max-width: 767px){
                  // #date {
                  //   font-size: 20px
                  // }
                  // h2 {
                  //   margin:0;
                  //   font-size: 50px;
                  // }
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
          <div id="button-wrapper">
            <button type="button" id="more-button" onClick={handlerClick}>もっと見る</button>
          </div>
        ):''
      }
      <style jsx global>{`
        #more-button {
          background-color: transparent;
          color: #2196F3;
          border-color: #CDDC39;
          border-radius: 0.9em;
          border-style: solid;
          font-size: 20px;
          padding: 5px 40px;
        }
        #more-button:hover {
          background-color: #cddc39;
          color: #252525;
        }
        #button-wrapper {
          text-align:center;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getBlogs();
  console.log("コンテンツ", data.contents)
  return { props: { contents: data.contents } };
}

export default Blogs;