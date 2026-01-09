import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { Task } from "../hooks/useTasks";

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.taskItem}>
      <Text
        style={[
          styles.taskText,
          task.done && styles.taskDone
        ]}
      >
        {task.title}
      </Text>

      <View style={styles.actions}>
        <Pressable
          style={styles.doneBtn}
          onPress={() => onToggle(task.id)}
        >
          <Text style={styles.btnText}>
            {task.done ? "Undo" : "Done"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.deleteBtn}
          onPress={() => onDelete(task.id)}
        >
          <Text style={styles.btnText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}
