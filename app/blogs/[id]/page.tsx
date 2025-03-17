import { getBlogBy, getBlogs } from '../../../lib/getContent';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';
import formatDate from '../../../lib/FormatDate';
import { Components } from "react-markdown";

const markdownComponents: Components = {
  code: CodeBlock
};
export const revalidate = 60; 
// revalidate every 60 seconds (optional)

export async function generateStaticParams() {
  const data = await getBlogs();
  return data.contents.map((item: { id: string }) => ({ id: item.id }));
}

export async function generateMetadata({params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const data = await getBlogBy(id);
  return {
    title: `HotakesBlog - ${data.title} -`,
    description: data.description || "ブログの詳細ページです。",
    openGraph: {
      url: `https://yourdomain.com/blogs/${id}`,
      title: data.title,
      description: data.description,
      type: data.type || "article",
      images: [
        {
          url: `https://og-image-five-swart.vercel.app/${encodeURIComponent(data.title)}.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ifhito",
      title: data.title,
      description: data.description,
      images: [`https://og-image-five-swart.vercel.app/${encodeURIComponent(data.title)}.png`],
    },
  };
}

// Next.js 15 以降では viewport を個別にエクスポート
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function BlogItemPage({params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const data = await getBlogBy(id);

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