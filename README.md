# LMS Project & Linear Integration

Dự án Hệ thống Quản lý Học tập (Learning Management System - LMS) tích hợp công cụ quản lý tiến độ và nhiệm vụ Linear (https://linear.app).

## 🚀 Cấu trúc thư mục

```text
├── .env.example        # File mẫu cấu hình biến môi trường
├── .gitignore          # Cấu hình bảo vệ file bí mật không bị lộ lên Git
├── package.json        # Danh mục thư viện và scripts của dự án
├── test-connection.js  # Script kiểm tra kết nối với Linear API
└── README.md           # Tài liệu hướng dẫn dự án
```

## 🛠️ Hướng dẫn cài đặt & Khởi chạy

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Cấu hình Linear API Key
1. Tạo một bản sao file `.env` từ file mẫu:
   ```bash
   cp .env.example .env
   ```
2. Điền Personal API Key của bạn lấy từ Linear (Settings -> Account -> Security & Access -> Personal API keys) vào file `.env`:
   ```env
   LINEAR_API_KEY=lin_api_xxxxxxxxxxxxxxxxxxxx
   ```

### 3. Kiểm tra kết nối Linear
```bash
npm run test:linear
```
