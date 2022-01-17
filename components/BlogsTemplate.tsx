import React, {useRef, useState } from 'react';
import { NextPage } from 'next';
import HeadWrapper from './HeadWrapper';
import BlogItem from './BlogItem';
import SelectCategories from './SelectCategories';
import { useRouter } from 'next/router';
type BlogsTemplateType = {
    contents: any;
    categories: any;
    categoryData: string;
}
const BlogsTemplate = ({contents, categories, categoryData}:BlogsTemplateType) => {
    const [endContent, setEndContent] = useState(5);
    const categoryName = categoryData === 'all' ? '' : categories.filter((category:{categoryId:'string';categoryName: 'string';}) => category.categoryId === categoryData)[0].categoryName;
    const lastResultRef = useRef<HTMLAnchorElement>(null);
    const handleClickLoadMore = () => {
        setEndContent(endContent+5);
    };
    const handleLoadMoreKeyboard = (e:any) => {
        if (lastResultRef.current && (e.key === 'Enter')){
        e.preventDefault();
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
          <ul>
          {
            contents.slice(0,endContent).map(
              (item: { id: React.Key; categories:{category:any}[]; }, i:number) => {
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
        `}</style>
      </main>
    </>
  )
}

export default BlogsTemplate;