import React, {useRef, useState } from 'react';
import { NextPage } from 'next';
import HeadWrapper from '../components/HeadWrapper';
import BlogItem from './BlogItem';
import { getBlogs, getCategories } from '../lib/getContent';
import SelectCategories from '../components/SelectCategories';
import { useRouter } from 'next/router';
const Blogs: NextPage = (props: any) => {
  const { contents, categories } = props;
  const [endContent, setEndContent] = useState(5);
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
        title='Contents'
        description='ブログコンテンツのリストページ'
        url={__filename}
        type='blog'
      />
      <main id='main'>
        <SelectCategories
          categories={categories}
          category={'all'}
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
          @media (max-width: 767px){
            .category-select {
              width: 100%;
              height: 3rem;
              font-size: 2rem;
            }
          }
        `}</style>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getBlogs();
  const categoriesData = await getCategories();
  return { props: { contents: data.contents,categories: categoriesData.contents } };
}
export default Blogs;