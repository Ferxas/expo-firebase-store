import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../api/auth";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(email, password, name, birthdate);
            console.log("Usuario registrado y datos guardados en Firestore");
            navigation.navigate("Login"); // Redirigir al login después de registrarse
        } catch (error) {
            console.error("Error en el registro:", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <Input
                label="Nombre Completo"
                value={name}
                onChangeText={setName}
                placeholder="Introduce tu nombre"
            />
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
            <Input
                label="Fecha de Nacimiento"
                value={birthdate}
                onChangeText={setBirthdate}
                placeholder="YYYY-MM-DD"
            />
            <Button title="Registrarse" onPress={handleRegister} />
            <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
                ¿Ya tienes cuenta? Inicia sesión aquí
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

export default RegisterScreen;