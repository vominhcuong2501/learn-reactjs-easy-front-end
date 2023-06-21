import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  // mỗi khi li click thì sẽ gọi hàm handleTodoClick được truyền vào hai tham số là todo và index
  const handleTodoClick = (todo, index) => {
    // check xem props có tồn tại không
    if (!onTodoClick) return;
    // nếu có sẽ thực hiện props này
    onTodoClick(todo, index);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed',
          })}
          onClick={() => handleTodoClick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
