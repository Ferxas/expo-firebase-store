import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { CartProvider } from "./src/contexts/CartContext";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
