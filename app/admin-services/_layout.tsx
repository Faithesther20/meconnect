import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="manage_customers" />
      <Stack.Screen name="manage_machines" />
      <Stack.Screen name="manage_services" />
    </Stack>
  );
}
