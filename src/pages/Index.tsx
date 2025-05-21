
import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Index: React.FC = () => {
  const { tasks, addTask, completeTask, isTaskLimitReached, MAX_TASKS } = useTasks();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center app-container px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
            CEO 待办清单
          </h1>
          <p className="text-muted-foreground text-sm">
            聚焦三件重要事项，提高执行效率
          </p>
        </div>
        
        <TaskInput onAddTask={addTask} disabled={isTaskLimitReached} />
        
        <TaskList tasks={tasks} onCompleteTask={completeTask} />
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>{tasks.length} / {MAX_TASKS} 今日任务</p>
          <p className="mt-1 text-xs">每日 00:00 自动清空</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
