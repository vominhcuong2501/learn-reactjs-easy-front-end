# QUERY STRING

- Thư viện query-string trong JavaScript được sử dụng để phân tích và xây dựng các chuỗi truy vấn URL. Nó cung cấp các phương thức để trích xuất thông tin từ chuỗi truy vấn URL và tạo chuỗi truy vấn URL từ một đối tượng dữ liệu.

- Dưới đây là một số cách bạn có thể sử dụng query-string để làm việc với các chuỗi truy vấn URL:

1. Trích xuất thông tin từ chuỗi truy vấn URL: Bạn có thể sử dụng query-string để trích xuất thông tin từ chuỗi truy vấn URL. Ví dụ, nếu URL là https://example.com/products?category=electronics&page=1, bạn có thể sử dụng query-string để trích xuất giá trị của category và page:

import queryString from 'query-string';

const url = 'https://example.com/products?category=electronics&page=1';
const parsed = queryString.parseUrl(url);

console.log(parsed.query.category); // 'electronics'
console.log(parsed.query.page); // '1'

2. Tạo chuỗi truy vấn URL từ một đối tượng dữ liệu: Bạn có thể sử dụng query-string để tạo chuỗi truy vấn URL từ một đối tượng dữ liệu. Ví dụ, nếu bạn có một đối tượng chứa thông tin về trang và danh mục, bạn có thể tạo chuỗi truy vấn URL như sau:

import queryString from 'query-string';

const params = {
category: 'electronics',
page: 1,
};

const queryString = queryString.stringify(params);
console.log(queryString); // 'category=electronics&page=1'

- Bạn có thể sử dụng chuỗi truy vấn URL này để thêm vào một URL hiện có hoặc để tạo một URL mới.

- Thư viện query-string rất hữu ích trong việc làm việc với các chuỗi truy vấn URL trong ứng dụng web. Nó giúp bạn dễ dàng trích xuất thông tin từ URL và xây dựng các chuỗi truy vấn URL từ đối tượng dữ liệu.
