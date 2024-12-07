import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Details" component={ProductDetailScreen} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
    );
};

export default MainNavigator;