import Header from '../../../../components/Header';
import CategoryDetailClient from './CategoryDetailClient';

export async function generateStaticParams() {
  return [
    { id: '1', category: 'cleanliness' },
    { id: '1', category: 'accuracy' },
    { id: '2', category: 'cleanliness' },
    { id: '2', category: 'accuracy' }
  ];
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ id: string; category: string }> }) {
  const resolvedParams = await params;
  return (
    <div>
      <Header />
      <CategoryDetailClient id={resolvedParams.id} category={resolvedParams.category} />
    </div>
  );
}