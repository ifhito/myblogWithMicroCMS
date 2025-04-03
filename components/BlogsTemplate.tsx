'use client';

import React, { KeyboardEvent, useRef, useState } from 'react';
import BlogItem from './BlogItem';
import SelectCategories from './SelectCategories';
import styles from './BlogsTemplate.module.css';
import { BlogItemType, CategoryType } from '../types/index';

type BlogsTemplateType = {
  contents: BlogItemType[];
  categories: CategoryType[];
  categoryData: string;
};

const BlogsTemplate = ({contents, categories, categoryData}: BlogsTemplateType) => {
  const [endContent, setEndContent] = useState(5);
  const categoryName =
    categoryData === 'all'
      ? ''
      : categories.filter(
          (category: CategoryType) => category.categoryId === categoryData
        )[0].categoryName;
  const nextItemRef = useRef<HTMLAnchorElement>(null);

  const handleClickLoadMore = () => {
    setEndContent(endContent + 5);
    setTimeout(() => {
      const nextItem = document.querySelector(`a[href="/blogs/${contents[endContent].id}"]`);
      if (nextItem instanceof HTMLAnchorElement) {
        nextItem.focus();
      }
    }, 0);
  };

  const handleLoadMoreKeyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClickLoadMore();
    }
  };

  return (
    <>
      <main id="main">
        <SelectCategories categories={categories} category={categoryData} />
        <div id={styles.blogContainer}>
          <ul id={styles.containerUl}>
            {contents.slice(0, endContent).map((item: BlogItemType, i: number) => {
              return (
                <BlogItem
                  items={item}
                  key={item.id}
                  ref={i === endContent - 1 ? nextItemRef : undefined}
                />
              );
            })}
          </ul>

          {contents.length > endContent ? (
            <div id={styles.buttonWrapper}>
              <button
                type="button"
                id={styles.moreButton}
                onClick={handleClickLoadMore}
                onKeyDown={handleLoadMoreKeyboard}
                data-testid="more-button"
              >
                もっと見る
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  );
};

export default BlogsTemplate;