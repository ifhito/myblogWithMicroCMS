import { getBlogs, getCategories } from '../../../lib/getContent';
import BlogsTemplate from '../../../components/BlogsTemplate';
import { CategoryType, BlogItemType } from '../../../types/index';

// (Optional) Revalidate the page every 60 seconds
export const revalidate = 60;
export const dynamicParams = true; // or false
/**
 * Replaces getStaticPaths.
 * Next.js uses this to statically generate each route at build time.
 */
export async function generateStaticParams() {
  const categories = await getCategories();
  // Return an array of { id } objects for each dynamic segment
  return categories.contents.map((item: { categoryId: string }) => ({
    id: item.categoryId,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const currentCategory = id;

  return {
    title: `HotakesBlog - ${currentCategory} -`,
    description: `カテゴリー「${currentCategory}」の記事一覧`,
    openGraph: {
      url: `https://yourdomain.com/blogs/${currentCategory}`,
      title: currentCategory,
      description: `カテゴリー「${currentCategory}」の記事一覧`,
      type: "article",
      images: [
        {
          url: `https://og-image-five-swart.vercel.app/${currentCategory}.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ifhito",
      title: currentCategory,
      description: `カテゴリー「${currentCategory}」の記事一覧`,
      images: [`https://og-image-five-swart.vercel.app/${currentCategory}.png`],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

/**
 * This is our dynamic route page.
 * Replaces getServerSideProps (data is fetched directly in the server component).
 */
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  // Fetch data for this category
  const currentCategory = id;
  const [data, categoriesData] = await Promise.all([
    getBlogs(),
    getCategories(),
  ]);

  if (!data) {
    return (
      <main id="main">
        <h2>Blog not found</h2>
        <p>Sorry, the requested blog post was not found.</p>
      </main>
    );
  }
  
  // Filter to match the current category
  const newContents = data.contents.filter((blog: BlogItemType) =>
    blog.categories.map((cat: CategoryType) => cat.categoryId).includes(currentCategory),
  );

  return (
    <BlogsTemplate
      contents={newContents}
      categories={categoriesData.contents}
      categoryData={currentCategory}
    />
  );
}