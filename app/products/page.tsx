'use client';
import ProductList from '@/components/ProductList/ProductList';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sản phẩm của chúng tôi</h1>
          <p className="mt-2 text-gray-600">Khám phá các sản phẩm công nghệ hàng đầu với giá tốt nhất</p>
        </div>
        <ProductList />
      </div>
    </div>
  );
} 