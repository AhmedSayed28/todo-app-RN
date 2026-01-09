import { Tabs } from "expo-router";
import { COLORS } from "../../styles/styles";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "All Tasks"
        }}
      />

      <Tabs.Screen
        name="done"
        options={{
          title: "Done"
        }}
      />
    </Tabs>
  );
}
