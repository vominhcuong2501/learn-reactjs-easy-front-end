# React Hook Form: chỉ re-render field đang thay đổi

1. useForm
2. Controller
3. ErrorMessage

# Formik: re-render hết các field ảnh hưởng performance

# Redux Form : Đưa form lên redux quản lý

1. Cách tổ chức Form Module

- Package: React Hook Form
- Form Validation: Yup là để làm validation
- Helper: Validation Resolver
- Error Message: ErrorMessage

2. Install

- npm install --save react-hook-form yup @hookform/resolvers @hookform/error-message

3. Nguyên tắc cần nhớ

- 1 form gồm nhiều form field
- Form field là cầu nối giữa form và UI control, giúp bind form values vào UI control
- UI control là các thẻ input, select hay các custom component của UI lib

# LINK: https://react-hook-form.com/
