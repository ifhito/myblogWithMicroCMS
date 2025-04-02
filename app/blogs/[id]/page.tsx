import { getBlogBy, getBlogs } from '../../../lib/getContent';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';
import formatDate from '../../../lib/FormatDate';
import { Components } from "react-markdown";

const markdownComponents: Components = {
  code: CodeBlock
};

// 60秒ごとに再検証
export const revalidate = 60;

// 静的パラメータの生成
export async function generateStaticParams() {
  const data = await getBlogs();
  return data.contents.map((item) => ({ id: item.id }));
}

// データフェッチング関数
async function getData(id: string) {
  try {
    return await getBlogBy(id);
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return null;
  }
}

// Next.js 15 以降では viewport を個別にエクスポート
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function BlogItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getData(id);

  if (!data) {
    return (
      <main id="main">
        <h2>Blog not found</h2>
        <p>Sorry, the requested blog post was not found.</p>
      </main>
    );
  }
  
  return (
    <main id="main">
      <article id="main-article" className="content-color">
        <h2 id="title" className="head-color">{data.title}</h2>
        <p id="date" className="head-color">{formatDate(data.date)}</p>
        <hr />
        <ReactMarkdown components={markdownComponents}>
          {data.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}