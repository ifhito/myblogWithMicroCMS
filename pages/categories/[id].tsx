import React, {useRef, useState } from 'react';
import { NextPage } from 'next';
import HeadWrapper from '../../components/HeadWrapper';
import BlogItem from '../BlogItem';
import { getBlogs, getCategories } from '../../lib/getContent';
import SelectCategories from '../../components/SelectCategories';
import { useRouter } from 'next/router';
const Blogs: NextPage = (props: any) => {
  const { contents, categories, categoryData } = props;
  const [endContent, setEndContent] = useState(5);
  const router = useRouter();
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
  const handleSetContents = (e:any)=>{
    if(e.target.value === 'all'){
      router.push('/')
    }else{
      router.push('/categories/'+e.target.value)
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
          category={categoryData}
          handleSetContents={handleSetContents}
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
                    handleSetContents={handleSetContents}
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

export const getStaticPaths = async () => {
    const data = await getCategories();
    const paths = data.contents.map((item:{categoryId:string}) => `/categories/${item.categoryId}`);
    return {
      paths,
      fallback: false
    }
  }

export const getStaticProps = async (category:{params:{id:string}}) => {
    const currentCategory = category.params.id;
    const data = await getBlogs();
    console.log(category);
    const categoriesData = await getCategories();
    const newContents = data.contents.filter((content:any) => content.categories.map((category:any)=> category.categoryId).includes(currentCategory));
    return { props: { contents: newContents, categories: categoriesData.contents, categoryData:currentCategory } };
}
export default Blogs;