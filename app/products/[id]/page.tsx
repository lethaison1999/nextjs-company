'use client';
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data";


export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách sản phẩm
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-96 bg-gray-100">
                <Image
                  src={product.image || '/images/product-placeholder.jpg'}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 capitalize">
                  {product.type}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Thông số kỹ thuật
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-32">Mã sản phẩm:</span>
                      <span className="font-medium">{product.id}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32">Danh mục:</span>
                      <span className="font-medium capitalize">{product.type}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Giá bán</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {product.price.toLocaleString('vi-VN')} ₫
                      </p>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center"
                      onClick={() => alert("Đã thêm vào giỏ hàng!")}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
