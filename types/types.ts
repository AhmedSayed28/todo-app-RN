// /types/types.ts
export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};
