// Công dụng: Hook useLocation() cho phép truy cập vào đối tượng location trong React Router. Đối tượng location chứa thông tin về địa chỉ hiện tại trong định tuyến.
import { useLocation } from 'react-router-dom';

export default function MyComponent() {
  const location = useLocation();

  return <div>Đường dẫn hiện tại: {location.pathname}</div>;
}
