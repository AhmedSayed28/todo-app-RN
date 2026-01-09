import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList
} from "react-native";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";
import { styles } from "../styles/styles";

export default function Home() {
  const { tasks, addTask, toggleDone, deleteTask } = useTasks();
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Tasks</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type your task..."
        style={styles.input}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => {
          addTask(text);
          setText("");
        }}
      >
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </Pressable>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleDone}
            onDelete={deleteTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet 👀</Text>
        }
      />
    </View>
  );
}
