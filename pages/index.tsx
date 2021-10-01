import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DefaultLayout from '../layouts/index';
import TodoBlock from '../components/todoBlock';

const Main = styled.div`
  max-height: calc(100% - 2rem);
  padding: 2rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGrid = styled.section`
  max-height: 100%;
  max-width: 75rem;
  width: 100%;
  flex: 1;
  display: flex;
  gap: 3rem;
`;

const Home: NextPage = () => {
  const tasks = useSelector((state: any) => state.todo.tasks);
  let taskStatusList = [
    {
      name: 'To Do',
      value: 'todo',
    },
    {
      name: 'Doing',
      value: 'doing',
    },
    {
      name: 'Done',
      value: 'done',
    },
  ];

  return (
    <DefaultLayout>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <StyledGrid>
          {taskStatusList.map((taskStatus) => {
            return (
              <TodoBlock
                key={taskStatus.value}
                value={taskStatus.value}
                title={taskStatus.name}
                tasks={tasks.filter(
                  (task: { status: string }) => task.status == taskStatus.value
                )}
              />
            );
          })}
        </StyledGrid>
      </Main>
    </DefaultLayout>
  );
};

export default Home;
