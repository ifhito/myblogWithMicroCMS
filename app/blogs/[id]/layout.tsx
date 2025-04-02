import { getBlogBy } from '../../../lib/getContent';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const data = await getBlogBy(id);

  if (!data) {
    return {
      title: 'Blog not found',
      description: 'ブログが見つかりませんでした。',
    };
  }

  return {
    title: `HotakesBlog - ${data.title} -`,
    description: data.description || "ブログの詳細ページです。",
    openGraph: {
      url: `https://yourdomain.com/blogs/${id}`,
      title: data.title,
      description: data.description,
      type: "article",
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 