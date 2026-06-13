# Rotider Website — Đặc tả tính năng triển khai

> Tài liệu được xây dựng dựa trên file báo giá thiết kế **[Báo giá] Rotider Website.pdf** (ngày lập: 12/06/2026).  
> Phạm vi gốc của báo giá là **thiết kế giao diện**; tài liệu này chuyển đổi các màn hình/section trong design thành **yêu cầu triển khai kỹ thuật** cho website.

---

## 1. Tổng quan dự án

| Hạng mục | Mô tả |
|---|---|
| **Tên dự án** | Rotider Website |
| **Khách hàng** | Rotider |
| **Loại website** | Website giới thiệu dịch vụ chỉnh sửa ảnh/video & trực quan hóa bất động sản |
| **Số trang chính** | 10 nhóm trang (Homepage, 3 trang dịch vụ, Portfolio, About, Contact, Career, Pricing, Blog) |
| **Thành phần dùng chung** | Header, Footer |
| **CMS** | GraphQL Headless CMS — toàn bộ content quản lý trên Admin Panel |
| **Responsive** | Desktop (1760 / 1600 / 1440px), Tablet (1280 / 1024 / 768px), Mobile (390px) |

### Mục tiêu website

- Giới thiệu thương hiệu Rotider và các dịch vụ chỉnh sửa ảnh, video, property visualization cho thị trường bất động sản.
- Trưng bày portfolio, case study để chứng minh năng lực.
- Thu hút lead qua form liên hệ, CTA và trang Pricing.
- Xây dựng niềm tin qua About, testimonial, guarantee, FAQ.
- Hỗ trợ tuyển dụng (Career) và content marketing (Blog).

---

## 2. Thành phần dùng chung (Global)

### 2.1. Header

| Tính năng | Mô tả triển khai |
|---|---|
| Logo & branding | Logo Rotider, link về Homepage |
| Navigation menu | Menu điều hướng tới các trang chính: Dịch vụ (Photo / Video / Property Visualization), Portfolio, About, Pricing, Blog, Contact, Career |
| CTA trên header | Nút kêu gọi hành động (ví dụ: "Get a Quote", "Contact Us") |
| Responsive menu | Hamburger menu trên tablet/mobile; menu collapse/expand mượt |
| Sticky header (nếu có trong design) | Header cố định khi scroll |

### 2.2. Footer

| Tính năng | Mô tả triển khai |
|---|---|
| Thông tin công ty | Tên, mô tả ngắn, địa chỉ |
| Quick links | Liên kết nhanh tới các trang chính |
| Dịch vụ | Danh sách link tới 3 trang dịch vụ |
| Social media | Icon/link mạng xã hội |
| Copyright & legal | Bản quyền, điều khoản (nếu có) |
| Newsletter / CTA phụ (nếu có trong design) | Form đăng ký hoặc nút liên hệ |

---

## 3. Trang chủ — Homepage

| Section | Tính năng cần triển khai |
|---|---|
| **Intro** | Hero banner: headline, subtext, CTA chính, hình ảnh/video nền hoặc slider |
| **Why choose us** | Grid/card liệt kê lý do chọn Rotider (icon + tiêu đề + mô tả) |
| **Service** | Giới thiệu 3 dịch vụ chính (Photo-editing, Video-editing, Property Visualization) với link tới trang chi tiết |
| **How work** | Quy trình làm việc theo bước (step-by-step timeline hoặc numbered flow) |
| **Customer testimonials** | Carousel hoặc grid đánh giá khách hàng (avatar, tên, nội dung, rating) |
| **Client logo section** | Logo các đối tác/khách hàng (marquee hoặc grid tĩnh) |
| **Conversion section** | CTA chuyển đổi: form nhanh hoặc nút dẫn tới Contact / Pricing |

---

## 4. Trang dịch vụ

Ba trang dịch vụ chia sẻ cấu trúc tương tự nhưng nội dung khác nhau. Mức độ chi tiết theo báo giá:

| Trang | Mức độ thiết kế |
|---|---|
| Photo-editing | Đầy đủ tất cả section |
| Video-editing | Một phần section (bỏ Guarantee, Try more, CTA & FAQ, Ready to work) |
| Property Visualization | Một phần section (bỏ Sample, Guarantee, CTA & FAQ, Ready to work; giữ Try more) |

### 4.1. Các section dùng chung

| Section | Tính năng cần triển khai |
|---|---|
| **Intro** | Hero riêng cho từng dịch vụ: tiêu đề, mô tả, CTA, media minh họa |
| **The impact of photo editing in real estate listings** | Section nội dung giáo dục: số liệu/thống kê, infographic hoặc before-after |
| **Why your listing photos need professional editing** | Lý do cần chỉnh sửa chuyên nghiệp — bullet points hoặc card |
| **Service: HDR, day to dusk, item remove** | Chi tiết sub-service: HDR blending, Day-to-Dusk, Item Removal — mỗi loại có mô tả + hình ảnh demo |
| **Sample project** | Gallery before/after hoặc slider showcase dự án mẫu |
| **Our Guarantee** | Cam kết chất lượng: icon + text (chỉ Photo-editing có đầy đủ) |
| **Try more our service** | Cross-sell: gợi ý dịch vụ khác của Rotider |
| **Conversion CTA & FAQ** | CTA kết hợp accordion FAQ (chỉ Photo-editing) |
| **Ready to work with us** | Section CTA cuối trang dẫn tới form liên hệ |

### 4.2. Yêu cầu kỹ thuật riêng cho trang dịch vụ

- **Before/After slider**: Component so sánh ảnh trước-sau (quan trọng cho Photo-editing & Property Visualization).
- **FAQ accordion**: Mở/đóng câu hỏi, hỗ trợ SEO schema FAQ (nếu cần).
- **Dynamic content**: Nội dung section quản lý qua **GraphQL CMS Admin** — thêm/bớt/reorder blocks mà không cần developer.

---

## 5. Portfolio

| Section | Tính năng cần triển khai |
|---|---|
| **Hero** | Banner giới thiệu portfolio với headline và CTA |
| **Filter tabs** | Tab lọc theo loại dự án (Photo / Video / Visualization / All) — filter client-side hoặc server-side |
| **Featured Projects** | Grid/card dự án nổi bật với thumbnail, tên, loại dịch vụ |
| **Built for High-Volume Real Estate Work** | Section nội dung: năng lực xử lý khối lượng lớn |
| **Quality Control Promise** | Cam kết kiểm soát chất lượng |
| **Portfolio Gallery** | Gallery lưới ảnh có lazy load, lightbox xem chi tiết, phân trang hoặc infinite scroll |
| **What Makes Us Different** | Điểm khác biệt so với đối thủ |
| **Case Study Spotlight** | 1–2 case study chi tiết: mô tả dự án, kết quả, before/after |
| **CTA** | Kêu gọi liên hệ / xem thêm |

### Yêu cầu kỹ thuật Portfolio

- Hệ thống **filter/tag** cho dự án.
- **Lightbox/modal** xem ảnh full-size.
- Hỗ trợ **video embed** trong gallery (nếu có dự án video).
- Dữ liệu portfolio quản lý qua **GraphQL CMS** (thêm/sửa/xóa dự án, tag, hình ảnh).

---

## 6. About Us

| Section | Tính năng cần triển khai |
|---|---|
| **Hero** | Banner giới thiệu công ty |
| **What does Rotider mean & our mission** | Giải thích ý nghĩa tên thương hiệu + sứ mệnh |
| **Why choose us** | Lý do chọn Rotider (có thể tái sử dụng component từ Homepage) |
| **Our Foundation & Core Pillars** | Các trụ cột cốt lõi: giá trị, văn hóa, cam kết — layout card/timeline |
| **Co/founder** | Profile đồng sáng lập: ảnh, tên, bio |
| **Gallery of Rotider** | Gallery ảnh hoạt động nội bộ / team / văn phòng |
| **CTA** | Kêu gọi hợp tác hoặc liên hệ |

---

## 7. Contact Us

| Section | Tính năng cần triển khai |
|---|---|
| **Hero** | Banner trang liên hệ |
| **Form** | Form liên hệ đầy đủ: Họ tên, Email, Phone, Loại dịch vụ (dropdown), Tin nhắn, Upload file (ảnh mẫu — tùy design) |
| **Other contact** | Thông tin liên hệ bổ sung: email, phone, social links |
| **Location** | Địa chỉ + **Google Maps embed** hoặc bản đồ tương tác |
| **FAQ** | Câu hỏi thường gặp liên quan liên hệ / dịch vụ |
| **CTA** | Nút/khối CTA phụ |

### Yêu cầu kỹ thuật Contact

- **Form validation** client-side + server-side.
- **Gửi email notification** tới admin khi có submission.
- **Spam protection** (reCAPTCHA hoặc honeypot).
- **Thank you / confirmation** sau khi gửi thành công.
- Lưu submission vào database hoặc CRM (tùy yêu cầu nghiệp vụ).

---

## 8. Career

| Section | Tính năng cần triển khai |
|---|---|
| **Career Body** | Danh sách vị trí tuyển dụng: tiêu đề, phòng ban, địa điểm, mô tả ngắn |
| **Expand** | Accordion mở rộng chi tiết từng vị trí: JD đầy đủ, yêu cầu, quyền lợi, nút Apply |

### Yêu cầu kỹ thuật Career

- Accordion expand/collapse cho từng job posting.
- Nút **Apply** dẫn tới form ứng tuyển hoặc email `careers@`.
- Nội dung job quản lý qua **GraphQL CMS Admin**.

---

## 9. Pricing

| Section | Tính năng cần triển khai |
|---|---|
| **Price & plan** | Bảng giá theo gói/plan: tên gói, giá, danh sách tính năng, nút CTA (Get Started / Contact) |
| **Our Guarantee** | Cam kết hoàn tiền / revision policy |
| **FAQ** | Câu hỏi về giá, thanh toán, revision |

### Yêu cầu kỹ thuật Pricing

- Hỗ trợ **toggle** monthly/one-time (nếu có trong design).
- Highlight gói **recommended/popular**.
- CTA trên mỗi plan dẫn tới Contact form (pre-fill loại dịch vụ).

---

## 10. Blog

### 10.1. Blog List

| Tính năng | Mô tả triển khai |
|---|---|
| Danh sách bài viết | Grid/list bài blog: thumbnail, tiêu đề, excerpt, ngày đăng, tác giả |
| Phân trang | Pagination hoặc load more |
| Tìm kiếm / lọc (nếu cần) | Filter theo category/tag |

### 10.2. Blog Post Detail

| Section | Tính năng cần triển khai |
|---|---|
| **Detail post** | Nội dung bài viết đầy đủ: title, meta (date, author, category), featured image, rich text body |
| **About the author** | Card tác giả: avatar, bio, social links |
| **Was this article helpful** | Widget feedback Yes/No hoặc rating |
| **Most recent** | Sidebar/section bài viết mới nhất (3–5 bài) |

### Yêu cầu kỹ thuật Blog

- **GraphQL CMS** quản lý bài viết (rich text editor), tác giả, SEO metadata.
- **SEO**: meta title, description, OG image, structured data Article.
- **Social share** buttons.
- **Related posts** (gợi ý bài liên quan).

---

## 11. Responsive & UX

Theo báo giá, website cần tối ưu cho các breakpoint sau:

| Breakpoint | Thiết bị | Ghi chú triển khai |
|---|---|---|
| **1760px** | Desktop lớn | Layout full, spacing rộng |
| **1600px** | Desktop | Điều chỉnh container width |
| **1440px** | Desktop / Laptop | Layout chuẩn desktop |
| **1280px** | Tablet ngang | Giảm cột, điều chỉnh typography |
| **1024px** | Tablet | Navigation chuyển sang mobile menu |
| **768px** | Tablet dọc | Stack layout, gallery 1–2 cột |
| **390px** | Mobile | Single column, touch-friendly CTA |

### Yêu cầu UX chung

- **Performance**: Lazy load ảnh, tối ưu WebP/AVIF, Core Web Vitals.
- **Accessibility**: Alt text, keyboard navigation, contrast ratio.
- **Animation**: Scroll reveal, hover effect theo design (không ảnh hưởng performance).
- **Cross-browser**: Chrome, Safari, Firefox, Edge (phiên bản mới nhất).

---

## 12. Tính năng hệ thống (đề xuất triển khai)

Các tính năng không nằm trực tiếp trong báo giá design nhưng **cần thiết** để website vận hành:

| # | Tính năng | Mức ưu tiên | Ghi chú |
|---|---|---|---|
| 1 | **GraphQL CMS / Admin Panel** | Cao | Quản lý toàn bộ content: trang, Blog, Portfolio, Career, FAQ, Pricing, Testimonials, media, global settings |
| 2 | **SEO cơ bản** | Cao | Sitemap, robots.txt, meta tags, canonical URL |
| 3 | **Analytics** | Cao | Google Analytics 4 / GTM |
| 4 | **Form backend** | Cao | API xử lý Contact form, email notification |
| 5 | **Media management** | Trung bình | Upload qua CMS Admin → sync CDN (R2) cho ảnh before/after |
| 6 | **Multi-language (i18n)** | Tùy chọn | Nếu Rotider phục vụ thị trường đa quốc gia |
| 7 | **Cookie consent** | Trung bình | GDPR/privacy compliance |
| 8 | **404 / Error pages** | Trung bình | Trang lỗi thân thiện |
| 9 | **SSL & Security** | Cao | HTTPS, CSP headers, form sanitization |

### 12.1 GraphQL CMS — Quản lý nội dung tập trung

Toàn bộ nội dung website được đẩy lên **GraphQL Headless CMS** (không dùng WordPress). Team marketing quản lý qua **CMS Admin Panel**:

| Loại content | Quản lý trên Admin |
|---|---|
| Trang marketing | Homepage, 3 dịch vụ, About, Pricing, Contact, Career — theo section/block |
| Blog | Bài viết, tác giả, danh mục, SEO |
| Portfolio | Dự án, before/after, tags, case study |
| Global | Header, Footer, testimonials, client logos, FAQ, pricing plans |
| Media | Upload ảnh/video, tự động đẩy CDN |
| Settings | Logo, social links, contact info, SEO defaults |

**Luồng hoạt động:** Editor chỉnh sửa trên CMS Admin → Publish → Webhook → Website Next.js cập nhật cache → Khách thấy nội dung mới.

---

## 13. Sơ đồ cấu trúc trang

```
Rotider Website
├── Homepage
├── Services
│   ├── Photo-editing
│   ├── Video-editing
│   └── Property Visualization
├── Portfolio
├── About Us
├── Pricing
├── Blog
│   ├── Blog List
│   └── Blog Post Detail
├── Contact Us
├── Career
└── Global Components
    ├── Header
    └── Footer
```

---

## 14. Phạm vi & giả định

### Trong phạm vi (theo design)

- 10 nhóm trang với toàn bộ section đã liệt kê trong báo giá.
- Responsive 7 breakpoint.
- Component tái sử dụng: Header, Footer, CTA, FAQ, Testimonial, Before/After slider.

### Ngoài phạm vi design (cần xác nhận thêm)

- Hệ thống thanh toán online trên trang Pricing.
- Tài khoản khách hàng / dashboard upload ảnh.
- Live chat / chatbot.
- Đa ngôn ngữ.
- Tích hợp CRM bên thứ ba (HubSpot, Salesforce...).

---

## 15. Thứ tự triển khai đề xuất

> **Timeline: 4 tuần (1 tháng)** — phù hợp scope landing page marketing, không có logic nghiệp vụ phức tạp.

| Tuần | Hạng mục | Mô tả |
|---|---|---|
| **Tuần 1** | Nền tảng + Homepage | Setup Next.js, GraphQL CMS schema, Header/Footer, PageRenderer, Homepage, staging |
| **Tuần 2** | Toàn bộ trang | 3 dịch vụ, About, Pricing, Contact, Career, Portfolio, Blog + shared components |
| **Tuần 3** | CMS + QA + SEO | Nhập content CMS, responsive 7 breakpoint, sitemap, performance |
| **Tuần 4** | Launch | QA cuối, go-live, hướng dẫn CMS Admin cho marketing |

---

*Tài liệu tham chiếu: [Báo giá] Rotider Website.pdf | [ARCHITECTURE.md](./ARCHITECTURE.md) — Kiến trúc: Next.js + GraphQL Headless CMS*
