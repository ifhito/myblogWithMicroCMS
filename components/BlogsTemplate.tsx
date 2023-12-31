import React, {KeyboardEvent, useRef, useState } from 'react';
import HeadWrapper from './HeadWrapper';
import BlogItem from './BlogItem';
import SelectCategories from './SelectCategories';
import { BlogItemType, CategoryType } from '../types/index';

type BlogsTemplateType = {
    contents: BlogItemType[];
    categories: CategoryType[];
    categoryData: string;
}
const BlogsTemplate = ({contents, categories, categoryData}:BlogsTemplateType) => {
    const [endContent, setEndContent] = useState(5);
    const categoryName = categoryData === 'all' ? '' : categories.filter((category:CategoryType) => category.categoryId === categoryData)[0].categoryName;
    const lastResultRef = useRef<HTMLAnchorElement>(null);
    const handleClickLoadMore = () => {
        setEndContent(endContent+5);
    };
    const handleLoadMoreKeyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (lastResultRef.current && (event.key === 'Enter')){
        event.preventDefault();
        lastResultRef.current.focus();
        lastResultRef.current.blur();
        handleClickLoadMore();
        }
    };
  return (
    <>
      <HeadWrapper
        title={categoryData === 'all' ? 'Home' : `${categoryName}カテゴリー`}
        description={categoryData === 'all' ? 'このブログのホームです' : `${categoryName}カテゴリーのコンテンツのリストページです`}
        url={__filename}
        type='blog'
      />
      <main id='main'>
        <SelectCategories
          categories={categories}
          category={categoryData}
        />
        <div className="blog-container">
          <ul id="container-ul">
          {
            contents.slice(0,endContent).map(
              (item: BlogItemType, i:number) => {
                const isLastResult = i === endContent - 1;
                return (
                  <BlogItem
                    innerRef={isLastResult ? lastResultRef : undefined}
                    items={ item }
                    key={ item.id }
                  />
                );
              })
          }
          </ul>
          
          {
            contents.length > endContent ? (
              <div id="button-wrapper">
                <button type="button" id="more-button" onClick={handleClickLoadMore} onKeyDown={handleLoadMoreKeyboard}>もっと見る</button>
              </div>
            ):''
          }
        </div>
        <style jsx>{`
          #more-button {
            background-color: transparent;
            color: #2196F3;
            border-color: #CDDC39;
            border-radius: 0.9em;
            border-style: solid;
            font-size: 2.4rem;
            padding: 0.1rem 5rem;
          }
          #more-button:focus {
            background-color: #cddc39;
            color: #252525;
          }
          #more-button:hover {
            background-color: #cddc39;
            color: #252525;
          }
          #button-wrapper {
            text-align:center;
          }
          #container-ul {
            list-style: none;
            padding-left: 0;
          }
        `}</style>
      </main>
    </>
  )
}

export default BlogsTemplate;