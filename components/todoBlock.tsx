import styled from 'styled-components';
import { useRouter } from 'next/router';
import TodoCard from './todoCard';

const StyledTodoBlock = styled.section`
  background: #e6e6e6;
  height: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;

  & .title {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }

  & .list-wrap {
    overflow: auto;
    min-height: 0;
    margin-bottom: 0.75rem;
    flex: 1;
  }
`;

type TodoBlockProps = {
  title: string;
  value: string;
  tasks: [
    {
      id: string;
      title: string;
      status: string;
      description: string;
    }
  ];
};

function TodoBlock({ value, title, tasks }: TodoBlockProps) {
  const router = useRouter();
  return (
    <StyledTodoBlock>
      <h2 className="title">{title}</h2>
      <div className="list-wrap">
        {tasks.map((task) => {
          return <TodoCard key={task.id} data={task} />;
        })}
      </div>
      <div className="button-wrap">
        <button onClick={() => router.push(`/form?status=${value}`)}>
          Add Card
        </button>
      </div>
    </StyledTodoBlock>
  );
}

export default TodoBlock;
