import { View, Text } from "react-native";
import { useTasks } from "../hooks/useTasks";

export default function Done() {
  const { tasks } = useTasks();

  const doneTasks = tasks.filter(t => t.done);

  return (
    <View style={{ padding: 20 }}>
      <Text>Done Tasks</Text>

      {doneTasks.map(task => (
        <Text key={task.id}>{task.title}</Text>
      ))}
    </View>
  );
}
