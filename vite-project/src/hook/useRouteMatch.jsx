// Công dụng: Hook useRouteMatch() cho phép bạn kiểm tra xem một đường dẫn URL có khớp với một đường dẫn xác định hay không. Nó trả về một đối tượng match chứa thông tin về sự khớp của đường dẫn.
import { useRouteMatch } from 'react-router-dom';

export default function MyComponent() {
  const match = useRouteMatch('/products/:id');

  if (match) {
    console.log(match.params.id); // Truy cập giá trị tham số 'id'
  }

  return <div>Component</div>;
}
// Trong ví dụ trên, nếu đường dẫn URL hiện tại khớp với đường dẫn '/products/:id', match.params.id sẽ chứa giá trị của tham số id.
