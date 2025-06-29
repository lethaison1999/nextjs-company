'use client';
import Link from 'next/link';

export default function ProductEventPage() {
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
          <div className="relative h-64 bg-gradient-to-r from-red-500 to-pink-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center px-4">
                Chương Trình Khuyến Mãi Đặc Biệt
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Nhận Quà Hấp Dẫn
                </h2>
                <p className="text-gray-600 mb-4">
                  Khi mua sắm tại cửa hàng của chúng tôi, bạn sẽ có cơ hội nhận được những phần quà giá trị:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">
                      Giảm giá trực tiếp 10% cho đơn hàng từ 5 triệu đồng
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">
                      Tặng phiếu mua hàng 500.000đ cho đơn hàng từ 10 triệu đồng
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">
                      Bảo hành mở rộng thêm 6 tháng cho tất cả sản phẩm
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Điều Kiện Áp Dụng
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Chương trình áp dụng cho tất cả khách hàng mua sắm tại cửa hàng</li>
                  <li>Thời gian áp dụng: Từ ngày 01/04/2024 đến 30/04/2024</li>
                  <li>Không áp dụng đồng thời với các chương trình khuyến mãi khác</li>
                  <li>Mỗi khách hàng chỉ được nhận một lần quà tặng trong thời gian diễn ra chương trình</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Mua sắm ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 