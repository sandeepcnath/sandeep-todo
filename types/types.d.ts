export type StatusType = 'todo' | 'doing' | 'done';

export interface Task {
  id: string;
  title: string;
  status: StatusType;
  description?: string;
}
