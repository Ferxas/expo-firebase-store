import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { getDocuments } from "../api/firestore";

const ProductsScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getDocuments("products");
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error.message);
            }
        };

        fetchProducts();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate("Details", { product: item })}
        >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
});

export default ProductsScreen;