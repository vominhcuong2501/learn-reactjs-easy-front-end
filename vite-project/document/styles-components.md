# 5 cách để thêm styles cho React Components

1. Inline styles

- Style conflict: NO
- Hạn chế sử dụng, chỉ dùng khi cần thay đổi styles theo props

2. CSS

- Style conflict: YES
- Ít sử dụng, chuyển sang dùng SCSS để code gọn, đẹp và nhanh hơn

3. SCSS + BEM

- Style conflict: YES
- Cá nhân mình thích kiểu này nhìn code dễ hiểu

4. CSS Module

- Style conflict: NO
- Tạo ra unique class bằng cách thêm các chuỗi ký tựu vào tên class

5. Styled Component

- Style conflict: NO
- CSS-in-JS viết CSS ngay trong JS, nó sẽ tự tạo ra class unique ho mình
- npm install --save styled-components

6. Material Styles

- Style conflict: NO
- CSS-in-JS do Material tạo ra

--> Mỗi dự án có một cách tiếp cận styles khác nhau, thảo luận và thống nhất cách mà team thấy phù hợp
