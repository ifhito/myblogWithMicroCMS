import { NextPage } from 'next'
import {getBlogBy, getBlogs} from '../../lib/getContent'
import CodeBlock from '../../components/CodeBlock'
import ReactMarkdown from 'react-markdown'
import formatDate from '../../components/FormatDate'
import Head from 'next/head'
interface BlogItemType {
  title: string,
  date: string,
  content: string
}

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <article id="main-article"className="content-color">
        <header>
          <h1 id="title" className="head-color">{ title }</h1>
          <p id="date" className="head-color">{ formatDate(date)}</p>
        </header>
        <hr/>
        <ReactMarkdown
          components={{ code: CodeBlock }}
        >
          {content}
        </ReactMarkdown>
      </article>
      <style jsx global>{`
        @media (max-width: 767px){
          #main-article {
            margin: 0 25px;
          }
          h1#title {
            margin-bottom:0;
          }
          p#date {
            margin-bottom: 0;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}
export const getStaticPaths = async () => {
  const data = await getBlogs();
  const paths = data.contents.map((item:{id:string}) => `/blogs/${item.id}`);
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }:any) => {
  const id = params.id;
  const data = await getBlogBy(id);
  return { props: data}
}

export default BlogsItemPage;