# 🛍️ Product Store — User Website

This is the **frontend user interface** for the Product Store platform.  
It allows customers to view and interact with products fetched directly from the **admin full-stack website**:  
👉 [https://product-store-zgez.onrender.com/](https://product-store-zgez.onrender.com/)

The user site does **not** have its own backend — it relies entirely on the deployed admin API for data.

---

## 🚀 Tech Stack

| Layer | Technology | Description |
|--------|-------------|-------------|
| **Framework** | [Next.js 13+ (App Router)](https://nextjs.org/) | Fast, modern React framework for SSR and SSG. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Adds type safety and better DX for React components. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for responsive design. |
| **Data Fetching** | [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Used to connect directly to the admin REST API. |
| **Routing** | [Next.js App Router](https://nextjs.org/docs/app) | Handles pages, dynamic routes, and navigation. |

---

## 🧩 Description

This **user website** is designed for customers to browse and view available products.  
All product information is served by the **admin backend**, which handles CRUD operations, authentication, database connections, and REST API endpoints.

The user website only performs **read operations** via `fetch()` calls to:


---


---

## 🔐 Authentication

Although the user website itself does not require login, it provides an **Admin Login page** (`/admin-login`) for authorized access to the admin panel.  

The login uses simple client-side validation to control redirection — no database authentication is performed within the user website.

### 🧾 **Admin Credentials**

Use the following credentials to access the admin dashboard:

> 🧑‍💼 **Name:** <span style="font-size: 1.2rem; font-weight: 700;">admin</span>  
> 🔒 **Password:** <span style="font-size: 1.2rem; font-weight: 700;">password</span>

✅ On successful login, you will be redirected to the admin dashboard:  
👉 [https://product-store-zgez.onrender.com/](https://product-store-zgez.onrender.com/)

> ⚠️ *Note:* This login is purely a **frontend redirect mechanism** — the real authentication and data management happen inside the admin backend.

---
