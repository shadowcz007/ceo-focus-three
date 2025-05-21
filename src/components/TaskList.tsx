
import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask }) => {
  return (
    <div className="space-y-1">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onComplete={onCompleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
