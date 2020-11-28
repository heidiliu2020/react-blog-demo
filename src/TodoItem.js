import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";

const TodoItemWrapper = styled.div`
  max-width: 80%;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid #eee;
`;

const TodoButtonWrapper = styled.div``;

const Button = styled.button`
  padding: 4px;
  color: #232332;
  border: 1px solid #ddd;

  &:hover {
    color: #666;
  }
  & + & {
    margin-left: 4px;
  }
`;

const RedButton = styled(Button)`
  background: ${(props) => props.theme.colors.primary_400};
  color: #eee;
`;

const TodoContent = styled.div`
  font-size: 26px;
  color: ${(props) => props.theme.colors.primary_300};

  ${(props) =>
    props.$isDone &&
    `
    text-decoration: line-through;
  `}

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary_400};
  }

  ${MEDIA_QUERY_LG} {
    font-size: 12px;
    color: ${(props) => props.theme.colors.primary_500};
  }
`;

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleTogglerIsDone,
}) {
  const handleTogglerClick = () => {
    handleTogglerIsDone(todo.id);
  };

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <TodoItemWrapper data-todo-id={todo.id}>
      <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleTogglerClick}>
          {todo.isDone && "已完成"}
          {!todo.isDone && "未完成"}
        </Button>
        <RedButton onClick={handleDeleteClick}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
