// /components/TaskItem.tsx
import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { TaskItemProps } from "../types/types";

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <View style={styles.taskItem}>
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
    </View>
  );
}
