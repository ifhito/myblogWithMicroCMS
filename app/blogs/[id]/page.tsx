import { getBlogBy, getBlogs } from '../../../lib/getContent';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';
import formatDate from '../../../lib/FormatDate';
export const revalidate = 60; 
// revalidate every 60 seconds (optional)

export async function generateStaticParams() {
  const data = await getBlogs();
  return data.contents.map((item: { id: string }) => ({ id: item.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Retrieve blog data from the API
  const data = await getBlogBy((await Promise.resolve(params)).id);
  return {
    title: `HotakesBlog - ${data.title} -`,
    description: data.description || "ブログの詳細ページです。",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      url: `https://yourdomain.com/blogs/${(await Promise.resolve(params)).id}`,
      title: data.title,
      description: data.description,
      type: data.type || "article",
      images: [
        {
          url: `https://og-image-five-swart.vercel.app/${data.title}.png`,
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
      images: [`https://og-image-five-swart.vercel.app/${data.title}.png`],
    },
  };
}

export default async function BlogItemPage({ params }: { params: { id: string } }) {
  const data = await getBlogBy((await Promise.resolve(params)).id);

  return (
    <main id="main">
      <article id="main-article" className="content-color">
        <h2 id="title" className="head-color">{ data.title }</h2>
        <p id="date" className="head-color">{ formatDate(data.date)}</p>
        <hr/>
        <ReactMarkdown
          components={{ code: CodeBlock }}
        >
          {data.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}