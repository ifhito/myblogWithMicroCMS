// This server-compatible BlogItem doesn't use RefObjects or "innerRef"
import React from 'react';
import formatDate from '../lib/FormatDate';
import Link from 'next/link';
import styles from './BlogItem.module.css';
import { BlogItemType, CategoryType } from '../types/index';

type BlogTitleItemType = {
  items: BlogItemType;
};

const BlogItem: React.FC<BlogTitleItemType> = ({
  items = {
    id: 'dummy',
    createdAt: 'dummy',
    updatedAt: 'dummy',
    publishedAt: 'dummy',
    revisedAt: 'dummy',
    title: 'dummy',
    date: 'dummy',
    content: 'dummy',
    categories: [
      {
        id: 'dummy',
        createdAt: 'dummy',
        updatedAt: 'dummy',
        publishedAt: 'dummy',
        revisedAt: 'dummy',
        categoryId: 'dummy',
        categoryName: 'dummy',
      },
    ],
  },
}) => {
  return (
    <>
      <li key={items.id} className={styles.pageLi}>
        <h2 id={styles.h2} className="content-color">
          <Link id={styles.a} className="link-border-none" href="/blogs/[id]" as={`/blogs/${items.id}`} passHref>
            {items.title}
          </Link>
        </h2>
        <div className={styles.subData}>
          <span id="date" className="content-color">{formatDate(items.date)}</span>
          <span id="categories" className="categories content-color">
            Categories：
            {items.categories.map((category: CategoryType, i: number) => (
              <span key={category.id}>
                {i === 0 ? '' : '/'}
                <Link
                  href={`/categories/${category.categoryId}`}
                  title={`クリックすると${category.categoryName}カテゴリーに飛びます。`}
                  id={styles.a}
                  passHref
                >
                  {category.categoryName}
                </Link>
              </span>
            ))}
          </span>
        </div>
      </li>
    </>
  );
};

export default BlogItem;