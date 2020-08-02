import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1; /*flex 아이템 기본 크기*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`;

function TodoList(){
    const todos = useTodoState();
    
    return (
        <TodoListBlock>
            {todos.map(todo => (
             <TodoItem           
             key={todo.id}
             id={todo.id}
             text={todo.text}
             done={todo.done} />
             ))}
            </TodoListBlock>
);
}
//반복함수 map으로 배열 출력
export default TodoList;