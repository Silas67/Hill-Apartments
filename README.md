# 🏢 OG Winners Homes Real Estate Website

**OG Winners Homes** is a modern and responsive real estate website built to showcase residential properties in a stylish and user-friendly format. Designed with smooth animations and thoughtful structure, it offers users a seamless browsing experience across all devices.

## ⚙️ Setup

The contact form and newsletter send email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in the three variables before running the site, otherwise both forms will return an error:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set the same variables in your hosting provider for production.

> 🌐 Live Preview: [hill-apartments.vercel.app](https://hill-apartments.vercel.app)

---

## ✨ Key Features

- 🖼️ Fullscreen hero slider with parallax effect
- 📱 Fully responsive design (mobile-first)
- 🎞️ Smooth transitions using Framer Motion
- 🔢 Animated numbers for property statistics
- 📄 Property detail page (currently one shared template — per-listing pages are not built yet)
- 🧑‍💼 About, Blog, Services, and Contact pages
- 🧭 Sticky and dynamic header navigation
- 📩 Contact form integration with email support
- 💡 Scroll-based animation using Lenis and GSAP

---

## 🛠 Tech Stack

- **[Next.js](https://nextjs.org/)** – React Framework
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** – Animation library
- **[Swiper.js](https://swiperjs.com/)** – Image sliders
- **[Lenis](https://lenis.studiofreight.com/)** – Smooth scrolling
- **[GSAP](https://gsap.com/)** – Scroll-based animations
- **[Iconify](https://iconify.design/)** – Icon system
- **[Vercel](https://vercel.com/)** – Hosting & deployment
