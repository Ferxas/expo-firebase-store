import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#6200ee",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});