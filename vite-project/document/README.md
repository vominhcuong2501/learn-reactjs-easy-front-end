# CÁCH CÀI ĐẶT DỰ ÁN REACT MỚI NĂM 2023

- Không dùng npm create-react-app nũa nó lâu và tốn nhiều thời gian

- Dùng Vite Next Generation Frontend Tooling

- Link cú pháp install: https://vitejs.dev/guide/
  => npm: npm create vite@latest
  => yarn: yarn create vite
  => pnpm: pnpm create vite

- Link docs: https://react.dev/learn/start-a-new-react-project

# Bật chế độ auto format on save

1. File -> Preferences -> Settings hoặc Ctrl + dấu ,
2. Tìm kiếm Format on save
3. Check vào ô checkbox

# ÔCài một số extension hữu ích

1. ReactJS code snippets (code reactjs nhanh hơn với nippets)
2. Javascript (ES6) code snippets (code js nhanh với snippets)
3. Material Icon Theme (sử dụng bộ icon đẹp cho folders, file)
4. SCSS Formatter (format styles: css, scss)
5. Bracket Pair Colorizer 2 (tô màu khác nhau cho dấu ngoặc)
6. ESLint (báo lỗi khi code vi phạm best practices / rules)
7. https://github.com/tonsky/FiraCode (thiết lập ký tự)

# Cách chia component trong ReactJS: Có 2 loại

1. Container: Smart component

- Quản lý xử lý dữ liệu
- Không quan tâm render UI ntn
- Chỉ quan tâm render cái gì
- Có thể chứa container và các components con

2. Component: Dumb component

- Cho gì render đó
- Không biết dữ liệu đến từ đâu
- Thường chỉ có Props, không có state
- Tái sử dụng, với props khác nhau, render khác nhau

# PROPS, STATE và GLOBAL STATE

1. Props

- Không thay đổi được
- Được truyền từ component cha
- Tạo sự đa dạng cho component

2. State

- Thay đổi được
- Dùng khi chỉ được sử dụng bởi MỘT component hiện tại
- Ví dụ: dữ liệu từ API chỉ dùng trong component, currentSecond trong count down

3. Global state (redux)

- Thay đổi được
- Nếu được dùng bởi NHIỀU component
- Ví dụ: loading, thông tin logged in user, thông tin giỏ hàng

# Life cycle của component trong ReactJS là gì?

Với component trong ReactJS, life cycle gồm 3 giai đoạn:

- Được tạo ra (Mounting)
- Qua nhiều thay đổi (Updating)
- Hủy bỏ (Unmounting)

# Các modules trong dự án ReactJS

1. State Management: quản lý state
   => Tổ chức state sai sẽ dẫn đến việc bạn sẽ sửa rất nhiều chỗ sau này
2. Form Module: quản lý form

- Một dự án có khá khá nhiều form
- Các form đều quản lý những vấn đề sau: default values, validation, submit form, form errors...
  => Nếu quản lý không tốt, bạn sẽ khá cực khi làm việc với form

3. API Module: tương tác với server
4. Routing Module: setup đường dẫn cho feature, layout
5. UI Library: Bootstrap, Material, Ant-design...

# JAVASCRIPT

1. Ưu điểm

- Thoải mái khi sử dụng, không bị ràng buộc kiểu dữ liệu
- Đỡ tốn thời gian setup ban đầu, vào dự án là có thể code liền dc
- Code một mình là bao sướng

2. Nhược điểm

- Lâu lâu quay lại, không nhớ tên thuốc tính hay phương thức phải tra cứu lại
- Phải hiểu cách hoạt dộng của JS, nhiều lúc nó hơi ma thuật. Điều này gây hơi khó khăn tí cho mấy bạn mới

3. Nên dùng cho:

- Dự án vừa và nhỏ
- Team ít người (1-5 người)
- Có kinh nghiệm làm việc với JS

# TYPESCRIPT

1. Ưu điểm

- Nhắc code tuyệt vời
- Truyền sai kiểu dữ liệu nó chửi
- Lâu lâu quay lai code hoặc người kahcs code cho mình thì đều được nhắc tên thuộc tính, phương thức => đỡ khổ phải ngời tra cứu lại

2. Nhược điểm

- Tốn thời gian setup ban đầu + khai báo kiểu dữ liệu
- Đôi khi việc khai báo kiểu dữ liệu nhiều quá khiến code trở nên gườm rà
- Giữ phần khia báo dữ liệu up to date

3. Nên dùng cho

- Dự án lớn
- Team có nhiều ng code (> 5 người)
- Chưa quen làm việc với kiểu dynamic type của JS

# Truyền dữ liệu

1. Truyền dữ liệu từ cha xuống con: Props
2. Truyền dữ liệu giữa component ngang hàng: để state trên component cha, rồi từ cha truyền ngược xuống component con
3. Truyền dữ liệu giữ các trang khác nhau: Redux
