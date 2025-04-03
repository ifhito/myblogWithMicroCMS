import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BlogsTemplate from '../../components/BlogsTemplate';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';

// Next.jsのrouterをモック
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockContents = Array.from({ length: 20 }, (_, i) => ({
  id: `test-${i}`,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  publishedAt: '2024-01-01',
  revisedAt: '2024-01-01',
  title: `Test Title ${i}`,
  date: '2024-01-01',
  content: 'Test content',
  categories: [{
    id: 'test-category',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    revisedAt: '2024-01-01',
    categoryId: 'test-category',
    categoryName: 'Test Category'
  }]
}));

const mockCategories = [{
  id: 'test-category',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  publishedAt: '2024-01-01',
  revisedAt: '2024-01-01',
  categoryId: 'test-category',
  categoryName: 'Test Category'
}];

describe('BlogsTemplate', () => {
  let originalRequestAnimationFrame: typeof window.requestAnimationFrame;

  beforeEach(() => {
    originalRequestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = (cb: FrameRequestCallback): number => {
      setTimeout(() => cb(performance.now()), 0);
      return 1;
    };
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRequestAnimationFrame;
    jest.clearAllMocks();
  });

  it('「もっと見る」ボタンをクリックした後に次の要素にフォーカスが当たる', async () => {
    render(
      <BlogsTemplate 
        contents={mockContents} 
        categories={mockCategories} 
        categoryData="all"
      />
    );

    const loadMoreButton = screen.getByTestId('more-button');
    fireEvent.click(loadMoreButton);

    await waitFor(() => {
      const nextItem = document.querySelector(`a[href="/blogs/test-5"]`);
      expect(nextItem).toHaveFocus();
    }, { timeout: 1000 });
  });

  it('「もっと見る」ボタンをEnterキーで操作した後に次の要素にフォーカスが当たる', async () => {
    render(
      <BlogsTemplate 
        contents={mockContents} 
        categories={mockCategories} 
        categoryData="all"
      />
    );

    const loadMoreButton = screen.getByTestId('more-button');
    fireEvent.keyDown(loadMoreButton, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      const nextItem = document.querySelector(`a[href="/blogs/test-5"]`);
      expect(nextItem).toHaveFocus();
    }, { timeout: 1000 });
  });
}); 