import { StyleSheet, Button, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { recipes } from "./data/recipes"
import { FlatList, Text } from "react-native";

export default function CategoryRecipeScreen({navigation}) {
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{route.params.category}</Text>
            <FlatList
                data = {recipes}
                renderItem={({ item }) => (
                    
                    <Text onPress={ () => 
                    {navigation.navigate("Recipes",{name : item.name});}}
                    style ={styles.textpressable}>
                    {item.category == route.params.category && <>{item.name}</>}
                    </Text>

    )}
                keyExtractor={item => item.id}
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
    textpressable: {
        backgroundColor:'blue',
        fontSize: 15,
        fontWeight: 'bold',
    },
});