import { NextPage } from 'next'
import {getBlogBy, getBlogs} from '../../lib/getContent'
import CodeBlock from '../../components/CodeBlock'
import ReactMarkdown from 'react-markdown'
import formatDate from '../../components/FormatDate'
import HeadWrapper from '../../components/HeadWrapper';
interface BlogItemType {
  title: string,
  date: string,
  content: string
}

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <HeadWrapper
        title={title}
        description={content.split('。')[0]}
        url={__filename}
        type='article'
      />
      <main id="main">
        <article id="main-article"className="content-color">
          <h1 id="title" className="head-color">{ title }</h1>
          <p id="date" className="head-color">{ formatDate(date)}</p>
          <hr/>
          <ReactMarkdown
            components={{ code: CodeBlock }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <style jsx>{`
        @media (max-width: 767px){
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