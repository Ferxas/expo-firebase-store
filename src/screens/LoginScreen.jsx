import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login({ email, password });
            console.log("Inicio de sesión exitoso");
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <Input
                label="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                placeholder="Introduce tu correo"
            />
            <Input
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                placeholder="Introduce tu contraseña"
                secureTextEntry
            />
            <Button title="Ingresar" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate("Register")} style={styles.link}>
                ¿No tienes cuenta? Regístrate aquí
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    link: {
        color: "#6200ee",
        textAlign: "center",
        marginTop: 10,
    },
});

export default LoginScreen;