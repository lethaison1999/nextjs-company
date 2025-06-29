'use client';

import { useState } from 'react';
import { categories, products, ProductType } from '@/data';
import ProductCard from './ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductList() {
  const [selectedType, setSelectedType] = useState<ProductType>(ProductType.ALL);

  const filteredProducts = selectedType === ProductType.ALL
    ? products
    : products.filter(product => product.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Tabs defaultValue={ProductType.ALL} onValueChange={(value) => setSelectedType(value as ProductType)}>
        <TabsList className="grid grid-cols-4 lg:grid-cols-6">
          {categories.map(category => (
            <TabsTrigger
              key={category.label}
              value={category.label}
              className="text-sm"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={selectedType}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 