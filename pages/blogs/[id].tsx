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

const contentTitleStyle = {
  fontSize: 'calc(42 / 20 * 1rem)'
}

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <article className="content-color">
        <header>
          <h1 style={contentTitleStyle}>{ title }</h1>
          <p>{ formatDate(date)}</p>
        </header>
        <ReactMarkdown
          components={{ code: CodeBlock }}
        >
          {content}
        </ReactMarkdown>
      </article>
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