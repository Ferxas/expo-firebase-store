import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.styles";

const Button = ({ title, onPress, style, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;