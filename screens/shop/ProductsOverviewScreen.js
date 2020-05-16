import React from "react";
import { Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((store) => store.product.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemList) => <Text>{itemList.item.title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;
