import { createNativeStackNavigator } from "@react-navigation/native-stack";

import First from "../pages/First";
import ToStart from "../pages/ToStart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Address from "../pages/Address";
import UserImage from "../pages/UserImage";
import Welcome from "../pages/Welcome";
import Congratulations from "../pages/Congratulations";
import Home from "../pages/Home";
import Transfer from "../pages/Transfer";
import Statement from "../pages/Statement";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="First"
                component={First}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ToStart"
                component={ToStart}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen
                name="Login"
                component={Login}
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

            <Stack.Screen
                name="Congratulations"
                component={Congratulations}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Transfer"
                component={Transfer}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Statement"
                component={Statement}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
