- Cài đặt: npm i classnames

# Dùng package classnames để thêm class cho element nếu nó là true. Ví dụ

<ul>
    {todoListmap(todo => (
        <li key={todo.id} className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed'
        })}>{todo.title}</li>
    ))}
</ul>
