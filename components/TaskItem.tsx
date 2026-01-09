// /components/TaskItem.tsx
import { useEffect, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { styles } from "../styles/styles";
import { TaskItemProps } from "../types/types";

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  // Animation عند ظهور العنصر
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.taskItem, { opacity: fadeAnim }]}>
      <Text style={[styles.taskText, task.done && styles.taskDone]}>
        {task.title} {task.done ? "✅" : "⏳"}
      </Text>

      <View style={styles.actions}>
        <Pressable style={styles.doneBtn} onPress={() => onToggle(task.id)}>
          <Text style={styles.btnText}>{task.done ? "Undo" : "Done"}</Text>
        </Pressable>

        <Pressable style={styles.deleteBtn} onPress={() => onDelete(task.id)}>
          <Text style={styles.btnText}>Delete</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
