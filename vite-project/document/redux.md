# GIỚI THIỆU TỔNG QUAN VỀ REDUX

# 1. Redux là gì ? Kiến trúc của nó ra sao?

- Thư viện js quản lý state, mà state này có thể dự đoán được
- Sử dụng kiến trúc uni-directional data flow (có nghĩa là đi đúng 1 chiều duy nhất)

# 2. Khi nào cần sử dụng redux?

- Dữ liệu được sử dụng ở nhiều nơi
- Có hỗ trợ chức năng undo/redo
- Cần cache dữ liệu để tái sử dụng cho những lần sau
  -> Nếu app chạy tốt mà không có redux, vậy có thể appp đó k cần tới redux

# 3. Redux có phải chỉ để dùng với ReactJS hay không?

- Không bạn nhé, nó được sử dụng cho các javascript apps
- Vậy có thể là: ReactJS, Angular, VueJS, Pure javascript App, Other javascript App...

# 4. Các thư viện làm việc với redux

- Redux Logger: https://github.com/evgenyrodionov/redux-logger
- Redux Persist: rt2zz/redux-persist
- Redux Undo: https:github.com/omnidan/redux-undo
- And many more: https://redux.js.org/introduction/ecosystem
