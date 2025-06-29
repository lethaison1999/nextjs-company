export enum ProductType {
  ALL = 'all',
  PHONE = 'phone',
  LAPTOP = 'laptop',
  ACCESSORY = 'accessory'
}

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  image?: string;
  description?: string;
}

export interface Category {
  type: ProductType;
  label: string;
}

export const categories: Category[] = [
  { type: ProductType.ALL, label: 'Tất cả' },
  { type: ProductType.PHONE, label: 'Điện thoại' },
  { type: ProductType.LAPTOP, label: 'Laptop' },
  { type: ProductType.ACCESSORY, label: 'Phụ kiện' },
];

export const products: Product[] = [
  { 
    id: 1, 
    name: 'iPhone 13', 
    type: ProductType.PHONE, 
    price: 23990000,
    description: 'iPhone 13 với chip A15 Bionic mạnh mẽ, camera kép cải tiến và pin lâu hơn.',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S21', 
    type: ProductType.PHONE, 
    price: 20990000,
    description: 'Samsung Galaxy S21 với màn hình Dynamic AMOLED 2X, camera chuyên nghiệp và hiệu năng vượt trội.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'MacBook Pro', 
    type: ProductType.LAPTOP, 
    price: 35990000,
    description: 'MacBook Pro với chip M1, màn hình Retina tuyệt đẹp và thời lượng pin đến 20 giờ.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Dell XPS 13', 
    type: ProductType.LAPTOP, 
    price: 32990000,
    description: 'Dell XPS 13 với màn hình InfinityEdge, bộ vi xử lý Intel thế hệ mới nhất và thiết kế cao cấp.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 5, 
    name: 'AirPods Pro', 
    type: ProductType.ACCESSORY, 
    price: 5990000,
    description: 'AirPods Pro với chống ồn chủ động, âm thanh không gian và chống nước IPX4.',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 6, 
    name: 'Samsung Galaxy Buds', 
    type: ProductType.ACCESSORY, 
    price: 3990000,
    description: 'Samsung Galaxy Buds với âm thanh AKG, thời lượng pin dài và thiết kế thoải mái.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop'
  },
]; 