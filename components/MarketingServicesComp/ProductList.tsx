import React from "react";
import { View, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import images from "@/constants/images";
import { Product } from "@/types";
import { router } from "expo-router";


interface ProductListProps {
    products: Product[] // Replace `Promotion` with the correct Product type
  
  }

// const productData = [
//   { id: "1", name: "Air Conditioning System", image: images.aircondition },
//   { id: "2", name: "Air Conditioning System", image: images.aircondition },
//   { id: "3", name: "Washing Machine", image: images.aircondition },
// ];

const  ProductList: React.FC<ProductListProps> = ({ products }) => {
  const handleDelete = (id: string) => {
    console.log(`Delete product with id: ${id}`);
  };

  const handleEdit = (id: string) => {
    //console.log(`Edit product with id: ${id}`);
     router.push({ pathname: "/marketing-services/product/edit/[id]", params: { id } });
  };
  const handleProductClicked= (id: string) => {
    //console.log(`Edit product with id: ${id}`);
     router.push({ pathname: "/marketing-services/product/detail/[id]", params: { id } });
  };

  return (
    <FlatList
    className="py-3 px-1"
      data={products}
      keyExtractor={(item) => item.id}
      horizontal
    ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
      renderItem={({ item }) => (
        <ProductCard
          id={item.id}
          name={item.name}
          image={item.image}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onProductClick={handleProductClicked}
        />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductList;
