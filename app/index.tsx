import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Index() {

  type Task = {
    title: string;
    done: boolean;
};


  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  const addTask = () =>{
    if(text === "") return;

    setTasks([...tasks,{title: text , done: false}])
    setText("");
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
          tasks.map((task,index)=>(
              <Text key={index}>{task.title}</Text>
          ))
        }

      </View>
  );
}
