import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Index() {

  type Task = {
    id: number;
    title: string;
    done: boolean;
};


  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  const addTask = () =>{
    if(text === "") return;

    setTasks(tasks => [
      ...tasks,{
        id: Date.now(),
        title:text,
        done: false 
      }
    ]);
    setText("");
    
  }

  const toggleDone = (id:number) =>{
    setTasks(tasks => 
      tasks.map(task => 
        task.id === id 
        ? { ...task , done: !task.done} : task
      )
    );
  }

  const deleteTask = (id:number) =>{
    setTasks(tasks => tasks.filter(task=>task.id !== id))
  }

  return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Todo App</Text>

        <TextInput 
        value={text}
        onChangeText={setText}
        placeholder="Type Your Task.." 
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
        />

        <Button title="Add Task" onPress={addTask}/>

        <Text style={{ marginTop: 20 , marginBottom: 20}}>Tasks will appear here 👇</Text>


        {
          tasks.map(task => (
              <View key={task.id}>
                <Text>
                  {task.title} {task.done ? "✅" : "❌"}
                </Text>

                <Button
                  title={task.done ? "Undo" : "Done"}
                  onPress={() => toggleDone(task.id)}
                />

                <Button
                  title="Delete"
                  onPress={() => deleteTask(task.id)}
                />
              </View>
            ))

        }
      </View>
  );
}
