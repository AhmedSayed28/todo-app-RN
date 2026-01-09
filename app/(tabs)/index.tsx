import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const { tasks, addTask, toggleDone, deleteTask } = useTasks();
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>All Tasks</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
      />

      <Pressable onPress={() => {
        addTask(text);
        setText("");
      }}>
        <Text>Add</Text>
      </Pressable>

      {tasks.map(task => (
        <Text key={task.id}>
          {task.title}
        </Text>
      ))}
    </View>
  );
}
