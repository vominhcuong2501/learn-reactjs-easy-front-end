// Công dụng: Hook useParams() cho phép truy cập vào các tham số động trong URL. Thông qua hook này, bạn có thể trích xuất các tham số từ đường dẫn và sử dụng chúng trong các phần tử giao diện.
import { useParams } from 'react-router-dom';

export default function UserComponent() {
  const { id } = useParams();

  return <div>Thông tin người dùng có id: {id}</div>;
}
