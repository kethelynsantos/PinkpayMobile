import { createNativeStackNavigator } from "@react-navigation/native-stack";

import First from "../pages/First";
import ToStart from "../pages/ToStart";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Address from "../pages/Address";
import UserImage from "../pages/UserImage";
import Welcome from "../pages/Welcome";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="First"
                component={First}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ToStart"
                component={ToStart}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Address"
                component={Address}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UserImage"
                component={UserImage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
