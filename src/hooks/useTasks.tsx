
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const MAX_TASKS = 3;

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('ceo-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 保存任务到本地存储
  useEffect(() => {
    localStorage.setItem('ceo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 每天0点清空任务
  useEffect(() => {
    const checkDate = () => {
      const lastCheck = localStorage.getItem('last-check-date');
      const today = new Date().toDateString();
      
      if (lastCheck !== today) {
        setTasks([]);
        localStorage.setItem('last-check-date', today);
      }
    };
    
    checkDate(); // 初始检查
    
    // 设置定时器每分钟检查一次
    const interval = setInterval(() => {
      const now = new Date();
      // 如果当前时间是00:00-00:01之间，执行清空操作
      if (now.getHours() === 0 && now.getMinutes() < 1) {
        checkDate();
      }
    }, 60000); // 每分钟检查一次
    
    return () => clearInterval(interval);
  }, []);

  const addTask = (text: string) => {
    if (tasks.length >= MAX_TASKS) {
      return false;
    }
    
    const newTask: Task = {
      id: uuidv4(),
      text,
      completed: false
    };
    
    setTasks(prev => [...prev, newTask]);
    return true;
  };

  const completeTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  const isTaskLimitReached = tasks.length >= MAX_TASKS;

  return {
    tasks,
    addTask,
    completeTask,
    isTaskLimitReached,
    MAX_TASKS
  };
};
