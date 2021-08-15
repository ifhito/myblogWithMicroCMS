import { NextPage } from 'next'
import Head from 'next/head';
import Nav from '../../components/nav';
import {getBlogBy, getBlogs} from '../../lib/getContent'
import CodeBlock from '../../components/CodeBlock'
import ReactMarkdown from 'react-markdown'
import formatDate from '../../components/FormatDate'
interface BlogItemType {
  title: string,
  date: string,
  content: string
}


const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <Head>
          <title>test</title>
      </Head>
      <Nav />
      <section>
        <h1>{ title }</h1>
        <p>{ formatDate(date)}</p>
        <ReactMarkdown
          components={{ code: CodeBlock }}
        >{content}</ReactMarkdown>
      </section>
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