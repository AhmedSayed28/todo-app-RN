import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task ={
    id:number,
    title:string,
    done: boolean
};

const STORAGE_KEY = "TASKS";

export function useTasks(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    // load Tasks
    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try{
            const saved =await AsyncStorage.getItem(STORAGE_KEY);
            if(saved){
                setTasks(JSON.parse(saved));
            }
        }catch(e){
            console.log("Load Error",e)
        }finally{
            setLoading(false)
        }
    };

    const saveTasks = async (newTasks: Task[])=>{
        setTasks(newTasks);
        await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(newTasks));
    };

    const addTask = async(title: string) => {
        if(!title.trim()) return;

        const newTasks = [
            ...tasks,
            {id:Date.now(),title: title.trim(),done:false}
        ];

        await saveTasks(newTasks);
    };

    const toggleDone = async (id:number) =>{
        const newTasks = tasks.map(t => 
            t.id === id ? {...t,done: !t.done} : t
        );
        await saveTasks(newTasks);
    };

    const deleteTask = async (id: number) => {
    const newTasks = tasks.filter(t => t.id !== id);
    await saveTasks(newTasks);
  };

  return {
    tasks,
    loading,
    addTask,
    toggleDone,
    deleteTask
  };

}