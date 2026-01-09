import { View, Text, FlatList } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import TaskItem from "../../components/TaskItem";
import { styles } from "../../styles/styles";

export default function Done() {
  const { tasks, toggleDone, deleteTask } = useTasks();
  const doneTasks = tasks.filter(task => task.done);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Done Tasks</Text>

      <FlatList
        data={doneTasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleDone}
            onDelete={deleteTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nothing done yet 😴</Text>
        }
      />
    </View>
  );
}
