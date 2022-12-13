import { StyleSheet, View, } from "react-native";
import { recipes } from "./data/recipes"
import { FlatList, Text } from "react-native";


export default function CategoryScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Kategorijos</Text>
            <FlatList
                data = {recipes}
                renderItem={({ item }) => (
                    <Text onPress={ () => 
                    {navigation.navigate("CategoryRecipes",{category : item.category});}}
                    style ={styles.textpressable}>
                        {item.category}
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