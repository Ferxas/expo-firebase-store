import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useCart } from "../contexts/CartContext";

const CartScreen = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
            <View style={styles.buttonRow}>
                <Button title="+" onPress={() => addToCart(item)} />
                <Button title="-" onPress={() => removeFromCart(item.id)} />
            </View>
        </View>
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <Button title="Vaciar Carrito" onPress={clearCart} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemContainer: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        color: "#6200ee",
    },
    quantity: {
        fontSize: 16,
        marginTop: 5,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    total: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
    },
});

export default CartScreen;