import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useCart } from "../contexts/CartContext";

const ProductDetailScreen = ({ route }) => {
    const { product } = route.params;
    const { addToCart } = useCart();

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button
                title="Añadir al Carrito"
                onPress={() => addToCart(product)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: "#6200ee",
        marginBottom: 20,
    },
});

export default ProductDetailScreen;