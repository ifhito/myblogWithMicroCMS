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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const currentCategory = (await Promise.resolve(params)).id;

  return {
    title: `HotakesBlog - ${currentCategory} -`,
    description: `カテゴリー「${currentCategory}」の記事一覧`,
    viewport: "width=device-width, initial-scale=1.0",
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

/**
 * This is our dynamic route page.
 * Replaces getServerSideProps (data is fetched directly in the server component).
 */
export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch data for this category
  const currentCategory = (await Promise.resolve(params)).id;
  const [data, categoriesData] = await Promise.all([
    getBlogs(),
    getCategories(),
  ]);

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