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

3. Phân biệt path params trong Route với URL params trên đường dẫn

- User visits: /todos/123 => Path params là {todoId: 123}
- User vào đường dẫn: /todos?page=1&size=10 => URL params là phần sau dấu chấm hỏi

4. Dùng atribute exact thì có hai hướng:

- false thì đó Route sẽ match khi URL start with path
- true thì lúc đó Route se match khi path = URL

5. Dùng để filter url va2 cập nhật state len url params

- npm i -save query-string
- import queryString from "query-string"
- const location = useLocation()
- const history = useHistory()
- const match = useRouteMatch()
- const [filterStatus, setFilterStatus] = useState(() => {
  const params = queryString.pasre(location.search);
  return params.status || 'all';
  },[location.search])
- useEffect(() => {
  const params = queryString.pasre(location.search);
  setFilterStatus(params.status || "all")
  },[location.search])
- const handleShowAll = () => {
  const queryParams = {status: "all"}
  history.push({
  pathname: match.path,
  search: queryString.stringify(queryParams)
  })
  }
- const handleShowCompleted = () => {
  const queryParams = {status: "completed"}
  history.push({
  pathname: match.path,
  search: queryString.stringify(queryParams)
  })
  }
- const handleShowNew = () => {
  const queryParams = {status: "new"}
  history.push({
  pathname: match.path,
  search: queryString.stringify(queryParams)
  })
  }
