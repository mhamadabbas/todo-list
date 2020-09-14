import React from 'react';
import styled from 'styled-components';

import { Todo } from '../types/todo';

const Sdiv = styled.div`
  padding: 2rem;
`;

let TodoItem = ({ todo }: { todo: Todo }) => {
  return <Sdiv className="container card">{todo.content}</Sdiv>;
};

export default TodoItem;
