// Công dụng: Hook useHistory() cho phép truy cập vào đối tượng history trong React Router. Đối tượng history cung cấp các phương thức để điều hướng, quay lại và thay đổi lịch sử trình duyệt.

import { useHistory } from 'react-router-dom';

export default function MyComponent() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/dashboard'); // Chuyển hướng đến đường dẫn '/dashboard'
  };

  return (
    <div>
      <button onClick={handleClick}>Đi đến Dashboard</button>
    </div>
  );
}
