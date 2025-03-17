import React from 'react';
import BlogsTemplate from '../components/BlogsTemplate';
import { getBlogs, getCategories } from '../lib/getContent';

// app/blogs/page.tsx
export const metadata = {
  title: 'HotakesBlog - Home -',
  description: 'このブログのホームです',
  openGraph: {
    url: 'https://yourdomain.com/blogs',
    title: 'HotakesBlog - Home -',
    description: 'このブログのホームです',
    type: 'website',
    images: [
      {
        url: 'https://og-image-five-swart.vercel.app/Home.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ifhito",
    title: 'Home',
    description: 'このブログのホームです',
    images: ['https://og-image-five-swart.vercel.app/Home.png'],
  },
};

// Next.js 15 以降では viewport を個別にエクスポート
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function Blogs() {

  const data = await getBlogs();
  const categoriesData = await getCategories();

  if (!data) {
    return (
      <main id="main">
        <h2>Blog not found</h2>
        <p>Sorry, the requested blog post was not found.</p>
      </main>
    );
  }
  
  return (
    <BlogsTemplate
      contents={data.contents}
      categories={categoriesData.contents}
      categoryData={'all'}
    />
  );
}
