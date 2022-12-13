import HomeScreen from "./screens/HomeScreen"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryRecipeScreen from "./screens/CategoryRecipeScreen";
import RecipeScreen from "./screens/RecipeScreen";
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Naminis langas"}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{title: "Kategoriju langas"}}
        />
        <Stack.Screen
          name="CategoryRecipes"
          component={CategoryRecipeScreen}
          options={{title: "Kategoriju receptu langas"}}
        />
        <Stack.Screen
          name="Recipes"
          component={RecipeScreen}
          options={{title: "Receptas"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
