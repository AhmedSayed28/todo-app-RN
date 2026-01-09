// /screens/Index.tsx
import { useState, useCallback } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { Task } from "../types/types";
import { styles } from "../styles/styles";
import TaskItem from "../components/TaskItem";

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  const addTask = useCallback(() => {
    if (!text.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title: text.trim(), done: false }
    ]);
    setText("");
  }, [text]);

  const toggleDone = useCallback((id: number) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type your task..."
        style={styles.input}
      />

      <Pressable style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </Pressable>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleDone} onDelete={deleteTask} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet 👀</Text>}
      />
    </View>
  );
}
