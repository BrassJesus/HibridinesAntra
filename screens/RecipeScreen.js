import { StyleSheet, TextInput, View, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { recipes } from "./data/recipes"
import { FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect} from "react";

// Nuskaityti komentara
// Ideti i masyva, susikurti objekta
// objekte privalo buti unikalus identifikatorius



export default function RecipeScreen({navigation}) {
    const route = useRoute();
    const [commentArray, setCommentArray] = useState([]);
    const [comment, setComment] = useState('');
    //var arr = [];

    /*
        const saveComment = async () => {
        
            try {
              const commentArray={
                id: v4(),
                key: route.params.name, 
                comment: comment
              }
              const jsonValue=JSON.stringify([...commentArray, comment] );
              await AsyncStorage.setItem('@storage_Key',jsonValue)
              setCommentArray(JSON.parse(jsonValue))
            } catch (error) {
              console.log(error)
            }
           
    }
    */

    const saveComment = async () => {
        try {
            return await AsyncStorage.setItem(route.params.name, JSON.stringify(comment));
        } catch (error) {
             console.error(error.message);
        }
    }

    const loadComment = async () => {
        console.log(route.params.name)
        AsyncStorage.getItem(route.params.name).then (
            (value) => setComment(value)
        );
    }

    const deleteComment = async () => {
        AsyncStorage.removeItem(route.params.name);
    }

    useEffect(() => {
        loadComment(route.params.name);
    }, []);


    return(
        <View style={styles.container}>
            <Text style={styles.text}>{route.params.name}</Text>
            <FlatList
                data = {recipes}
                renderItem={({ item }) => (
                    <Text
                    style ={styles.textpressable}>
                     {item.name == route.params.name && <>{item.steps}</>}
                    </Text>
                   // keyExtractor={item => item.id}
                )}

            />
            
            <TextInput style={styles.commentbox}
            placeholder = "Input comment"
            onChangeText={value => setComment(value)}>
            </TextInput>
            <View style={styles.container}>
                <Button title="Issaugoti komentara" onPress={saveComment}> </Button>
                <Button title="Istrinti komentara" onPress={deleteComment}> </Button>
                <Button title="Perkrauti komentara" onPress={loadComment}> </Button>
            </View>
            <Text style={styles.text}>{comment}</Text>
        </View>
)}

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
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
    },
    commentbox: {
        height:40,
        padding: 5,
    },
    comment: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    },
    button: {
        height: 20,
        width: 20,
        top: 0,
    },
    
    
}); 