import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../actions';
import { Task, StatusType } from '../types/types';

import styled from 'styled-components';

const StyledCardDetails = styled.section`
  height: 100%;
  width: 100%;
  max-width: 720px;
  padding: 1rem;
  border-radius: 0.25rem;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;

  & .title,
  & select,
  & textarea {
    background: unset;
    padding: 0;
    border: none;
  }

  & .title-wrap {
    margin-bottom: 0.5rem;
  }

  & .title {
    font-weight: 700;
    font-size: 1.375rem;
    width: 100%;
  }

  & .status,
  & .status-value,
  & .label-description {
    font-size: 1rem;
    color: #666;
    font-weight: 700;
  }

  .status {
    margin-bottom: 1rem;
  }

  .status-value {
    appearance: none;
    text-decoration: underline;
  }

  & textarea {
    width: 100%;
  }

  & .description-wrap {
    margin-bottom: 2rem;
  }

  & .label-description {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

type CardDetailsProps = {
  data: Task;
};

function CardDetails({ data }: CardDetailsProps) {
  const { title, description, status } = data;
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setDescription] = useState(description);
  const [taskStatus, setTaskStatus] = useState(status);
  const [errorTitle, toggleTitleError] = useState(false);
  const dispatch = useDispatch();

  const submitTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (taskTitle) {
      if (data.id) {
        dispatch(
          editTodo({
            id: data.id,
            title: taskTitle,
            status: taskStatus,
            description: taskDescription,
          })
        );
      } else {
        dispatch(
          addTodo({
            id: Date.now().toString(),
            title: taskTitle,
            status: taskStatus,
            description: taskDescription,
          })
        );
      }
      router.push('/');
    } else {
      toggleTitleError(true);
    }
  };

  const onDelete = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(deleteTodo(data.id));
    router.push('/');
  };

  return (
    <StyledCardDetails>
      <form onSubmit={submitTodo}>
        <div className="title-wrap">
          <label htmlFor="todo-title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            id="todo-title"
            className="title"
            value={taskTitle}
            autoFocus
            placeholder="Title"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          {errorTitle && <small className="error">This is required</small>}
        </div>
        <h4 className="status">
          In list
          <label htmlFor="todo-status" className="sr-only">
            Title
          </label>
          <select
            className="status-value"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value as StatusType)}
          >
            <option id="todo-status" value="todo">
              To Do
            </option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </h4>
        <div className="description-wrap">
          <label className="label-description" htmlFor="todo-description">
            Description
          </label>
          <textarea
            id="todo-description"
            placeholder="Enter description"
            rows={4}
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="button-wrap">
          <button type="submit" className="button_primary">
            {data.id ? 'Save Card' : 'Add Card'}
          </button>
          {data.id ? (
            <button
              type="reset"
              className="button_secondary"
              onClick={onDelete}
            >
              Delete Card
            </button>
          ) : (
            ''
          )}
        </div>
      </form>
    </StyledCardDetails>
  );
}

export default CardDetails;
