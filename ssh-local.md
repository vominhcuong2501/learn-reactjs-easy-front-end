# Tạo SSH key

1. Mở Git bash
2. Chạy lệnh: ssh-keygen -t rsa -b 4096 -C "your-email"
3. Chọn nơi lưu folder còn k thì enter
4. cd ~ (đi tới folder home)
5. cd .ssh/ (đi tới ssh)
6. ls -al (show các file đang có)
7. cat id_tên folder.pub (log nội dung public key ra)

# Add ssh key to ssh-agent

1. Chạy ssh-agent: eval $(ssh-agent -s)
2. Thêm ssh key vào ssh agent: ssh-add ~/.ssh/id_tên folder
   => Nếu thấy Identity added: ... là thành công

# Thêm SSH vào Github account

1. Copy SSH public key vào clipboard: clip < ~/.ssh/id_tên folder.pub => check thì chỉ paste nó hiện ra id là ok
2. Vào Github thêm mới một SSH key

- Vào tài khoản Github --> Settings
- Vào mục SSH và GPS keys
- Thêm mới một SSH và paste cái SSh key vừa mới copy xong. Đặt title cho SSH đề biết SSH key này là của máy tính nào
- Xác nhận thêm SSH key thành công bằng cách chạy lệnh: ssh -T git@github.com

# Push code lên Github repo

1. Tạo một Github repository
2. Mở git bash nhớ di vào folder chứa project
3. Kiềm tra có git remote nào k? git remote -v
4. Thêm git remote vào local project:
   => git remote add origin git@github.com:[tên tk]/[tên repo].git
5. Check: git remote -v

# Deloy Github repository lên Vercel

1. Đăng nhập Vercel với tài khoản Github
2. Import Project
