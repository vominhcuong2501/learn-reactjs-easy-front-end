# GIỚI THIỆU TỔNG QUAN VỀ REDUX TOOLKIT

- Slice được biên soạn: https://redux-toolkit.js.org/introduction/quick-start

# A. Redux Toolkit (RTK) là gi và tại sao phải có nó ?

- npm install @reduxjs/toolkit
- RTK là một thư viện giúp mình viết Redux tốt hơn, dễ hơn và đơn giản hơn. (tiêu chuẩn để viết Redux)
- Ba vấn đề làm nền tảng ra đời RTK:
  - Configuring a Redux store is too complicated
  - I have to add a lot of packages to get Redux to do anything useful
  - Redux required too much boilerplate code.

# B. RTK bao gồm nhưng gì ?

1. configureStore()

- Có sẵn Redux DevTools
- Có sẵn redux-thunk để thực hiện async actions
  // store.js
  import {configureStore} from '@reduxjs/toolkit'
  import rootReducer from './reducer'
  const store = configureStore({reducer: rootReducer})

2. createReducer()

- Mỗi key là một case
- Không cần handle default case
  const counterReducer = createReducer(0, {
  - increment: (state, action) => state + action.payload,
  - decrement: (state, action) => state - action.payload,
    })
- Bản chất bên dưới họ sử dụng thư viện Immersjs
  const todoReducer = createReducer([], {
  - addTodo: (state, action) => {
    - state.push(action.payload) // 1. Có thể mutate data trực tiếp, khoong có return
      },
  - addTodoWithoutImmerjs: (state, action) => {
    - const newState = [...state];
    - newState.push(action.payload);
    - return newState // 2. phải trả về state mới
      }
      })

3. createAction()

const increment = createAction('counter/increment')

const action = increment(3)
// return {type: 'counter/increment', payload: 3}

4. createSlice()

# => Set up todoSlice.js

const todoSlice = createSlice({

- name: 'todos',
- initialState: [],
- reducer: {
  - addTodo(state, action) {
    - state.push(action.payload)
      },
  - removeTodo(state, action) {
    - state.splice(action.payload,1)
      }
      }
      })
- const {action, reducer} = todoSlice;
- export const {addTodo, removeTodo} = actions;
- export default reducer

# => Set up store.js

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from 'features/todos/todoSlice'

- const store configureStore({
  - reducer: {
    - todos: todoReducer
      }
      })

# => Bind Redux Provider to App

import {Prvider} from 'react-redux'
import store from './store'
import App from './App'

function Main() {
return (
<Provider store={store}><App /><Provider>
)
}

# => Using Redux in todo.jsx

import {useDispatch, useSelector} from 'react-redux'
import {removeTodo} from 'features/todos/todoSlice'

function Todo() {

- const dispatch = useDispatch()
- const todoList = useSelector(state => state.todos)
- const handleTodoClick = (todo, index) => {
  - const action = removeTodo(index)
  - dispatch(action)
    }
    }
- return (
  <ul>
  {todoList.map((todo, index) => (
  <li key={todo.id} onCLick={() => handleTodoClick(index)}>{todo.title}</li>
  ))}
  </ul>
  )
}

5. createAsyncThunk()
