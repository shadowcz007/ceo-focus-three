
import React from 'react';
import { cn } from "@/lib/utils";

interface TaskItemProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
  };
  onComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
  return (
    <div 
      className={cn(
        "task-container mb-3 cursor-pointer transition-all duration-200 ease-in-out",
        task.completed && "opacity-60"
      )}
      onClick={() => onComplete(task.id)}
    >
      <div className="flex items-center bg-card p-4 rounded-lg border border-border">
        <div className={cn(
          "w-6 h-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 transition-all duration-200",
          task.completed && "bg-primary border-primary"
        )}>
          {task.completed && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
        <p className={cn(
          "text-foreground text-lg transition-all duration-200",
          task.completed && "task-complete"
        )}>
          {task.text}
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
