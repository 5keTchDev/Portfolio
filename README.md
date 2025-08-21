# 🚀 Personal Portfolio Website

This is a **modern portfolio website** built with [Next.js](https://nextjs.org) and TypeScript to showcase projects, skills, and experience. The site is designed to be responsive, fast, and SEO-friendly, making it ideal for professional presentation.  

---

## ✨ Features

- ⚡ **Next.js 14 with App Router** – optimized for performance and scalability  
- 🎨 **Tailwind CSS / Custom Styling** – responsive design for all devices  
- 📂 **Modular Components** – clean, reusable UI components (`HeroSection`, `AboutSection`, `Projects`, `Skills`, etc.)  
- 🖼️ **Optimized Assets** – images served from `public/` with Next.js Image optimization  
- 📧 **Contact Form** with [EmailJS](https://www.emailjs.com/) integration (configurable via environment variables)  
- 🌙 **Lightweight & Fast** – ideal for personal branding and professional use  

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS (or global CSS, depending on your config)  
- **Email Service**: EmailJS  
- **Deployment**: [Vercel](https://vercel.com)  

---

## 📂 Project Structure

```
portfolio/
 ├── app/                 # Next.js app router pages
 │   ├── globals.css      # Global styles
 │   ├── layout.tsx       # Root layout
 │   ├── page.tsx         # Homepage entry
 │   └── not-found.tsx    # 404 page
 │
 ├── components/          # Reusable UI sections
 │   ├── HeroSection.tsx
 │   ├── AboutSection.tsx
 │   ├── ProjectSection.tsx
 │   ├── Skill.tsx
 │   ├── ContactSection.tsx
 │   ├── Navbar.tsx
 │   └── Footer.tsx
 │
 ├── public/              # Static assets
 │   ├── assets/
 │   ├── favicon.ico
 │   └── images
 │
 ├── node_modules/
 └── README.md
```

---

## ⚙️ Getting Started

First, install dependencies:  

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:  

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 🔑 Environment Variables

For the contact form (EmailJS integration), create a `.env.local` file in the root directory:  

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🚀 Deployment

This project is deployed with [Vercel](https://vercel.com).  

1. Push your code to GitHub/GitLab/Bitbucket.  
2. Import the repository to [Vercel](https://vercel.com/new).  
3. Set environment variables in **Vercel → Project Settings → Environment Variables**.  
4. Deploy 🎉  

For more details, check the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).  

---

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – official docs  
- [Learn Next.js](https://nextjs.org/learn) – interactive tutorial  
- [Vercel Deployment Guide](https://vercel.com/docs)  

---

## 👨‍💻 Author

Developed with ❤️ by **M0H1T**  
📧 Reach me at: Sharma18mohit2018@gmail.com  
🌐 Portfolio: https://m0hit-portf0li0.vercel.app  
