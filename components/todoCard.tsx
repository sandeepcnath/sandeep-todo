import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';
import styled from 'styled-components';

import iconClose from '../images/cancel.svg';

const StyledTodoCard = styled.div`
  background: #ffffff;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  & h5 {
    font-weight: 400;
    margin: 0 0.75em 0 0;
    flex: 1;
  }

  & button {
    background: transparent;
    padding: 0.125rem;
    border: none;
  }
`;

type TodoCardProps = {
  data: {
    id: string;
    title: string;
    status: string;
    description: string;
  };
};

function TodoCard({ data: { id, title } }: TodoCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const onDelete = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  return (
    <StyledTodoCard onClick={() => router.push(`/form?taskID=${id}`)}>
      <h5>{title}</h5>
      <button className="button_icon" onClick={onDelete}>
        <Image src={iconClose} alt="Delete" width={16} height={16} />
      </button>
    </StyledTodoCard>
  );
}

export default TodoCard;
