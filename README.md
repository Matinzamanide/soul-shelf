# 📚 Soul Shelf

A beautiful, responsive book discovery platform built with **Next.js**, powered by **mood & emotion-based search**. Explore books from around the world, curated by country, trend, and best-seller status.

[🌍 Live Demo](https://soulshelf.netlify.app/)  
[📦 GitHub Repository](https://github.com/Matinzamanide/soul-shelf)

---

## ✨ Features

- 🌐 Explore books by **country**, with flags, descriptions, and unique color themes.
- 🔥 Highlighted **trending books** and **best sellers**.
- 💡 "Mood & Emotion Search" experience (inspired by whichbook.net).
- 🌈 Stylish design with gradients, hover animations, and dark overlays.
- ⚡ Optimized with **Next.js 15** and **TypeScript**.
- 🚀 Deployed with **Netlify**.

---

## 🖼 Screenshots

| Home Page                                                 | Country Page                                                 |
|-----------------------------------------------------------|--------------------------------------------------------------|
| ![Home](https://api.sarirniroo.ir/SoulShelf-home.png)     | ![Country](https://api.sarirniroo.ir/SoulShelf-countries.png)|


---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, TypeScript, TailwindCSS
- **Deployment:** Netlify
- **Assets:** Dynamic API from `sarirniroo.ir`

---

## 📁 Project Structure

src/
│
├── app/ # Next.js App directory
│ ├── home/ # Home page
│ ├── countries/ # Country listing & details
│ ├── best-sellers-item/ # Dynamic best-seller detail pages
│ └── ...
├── components/ # Reusable UI components
├── types/ # TypeScript interfaces
└── public/ # Static assets (optional screenshots etc.)


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Matinzamanide/soul-shelf.git
cd soul-shelf

---
Install Dependencies

npm install

 ---

 Run the App Locally

 npm run dev

 Then open http://localhost:3000 in your browser.

----



🌐 Deployment
This project is automatically deployed via Netlify.
You can easily connect your GitHub repo and trigger deploys from main branch.


📦 Environment Variables
If needed, create a .env.local file:
NEXT_PUBLIC_API_BASE=https://www.sarirniroo.ir/Mobile


📌 TODO & Ideas
 Add real-time search by book title

 Improve accessibility (a11y)

 Add loading skeletons

 SEO metadata improvements

 Add tests using Jest or Playwright

📄 License
MIT License © 2025 Matin Zamanideh