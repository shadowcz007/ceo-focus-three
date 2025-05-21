
import React, { useState, KeyboardEvent } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
  disabled: boolean;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask, disabled }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="task-input"
        placeholder={disabled ? "已达到任务上限" : "添加新任务..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
    </div>
  );
};

export default TaskInput;
