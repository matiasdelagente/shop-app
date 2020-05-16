import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import COLORS from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const ProductsNavigator = createStackNavigator(
  {
    screen: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
