import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DefaultLayout from '../layouts/index';
import CardDetails from '../components/cardDetails';

const Main = styled.div`
  padding: 2rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { taskID, status } = router.query;
  const task = useSelector((state: any) =>
    state.todo.tasks.find((item: any) => item.id == taskID)
  );

  return (
    <DefaultLayout>
      <Head>
        <title>Add/Edit | Todo App</title>
        <meta name="description" content="Todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CardDetails data={task || { status }} />
      </Main>
    </DefaultLayout>
  );
};

export default FormPage;
