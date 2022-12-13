import { StyleSheet, Button, View } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Button
                title = "Receptai"
                onPress={() => navigation.navigate("Categories")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
    },
});