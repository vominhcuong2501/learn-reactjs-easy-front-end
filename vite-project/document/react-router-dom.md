# REACT ROUTER DOM

Cú pháp: npm i --save react-router-dom

1. Các component trong reat-router-dom

- Router: Component bao boc tất cả các component khác của routing
- Route: Render tất cả component khi match với path
- Switch: Chỉ render route đầu tiên match path
- Redirect: Từ path này sang path khác
- Link: Đi tới path tương ứng
- NavLink: Giống như Link nhưng có thêm activeClassName

2. Các Hook của react-router-dom

- useHistory(): Trả về HISTORY instance, dùng để navigate
  => thường để di chuyển qua trang khác.
- useLocation(): Trả về LOCATION object của URL hiện tại
  => thường xử lý với URL params.
- useParams(): Trả về PATH PARAMS object của URL hiện tại
  => khi muốn xử lý path params.
- useRouteMatch(): Trả về MATCH object của URL hiện tại
  => khi làm nested routing.

# Lưu ý rằng tất cả các hook này đều phải được sử dụng trong các thành phần React được bọc bởi một <Router> để có thể hoạt động.

3. Phân biệt path params trong Route với URL params trên đường dẫn

- User visits: /todos/123 => Path params là {todoId: 123}
- User vào đường dẫn: /todos?page=1&size=10 => URL params là phần sau dấu chấm hỏi

4. Dùng atribute exact thì có hai hướng:

- false thì đó Route sẽ match khi URL start with path
- true thì lúc đó Route se match khi path = URL
