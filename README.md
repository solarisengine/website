# Solaris Engine Website

This is the official website for **Solaris Engine**, a boutique consultancy focused on helping organizations unlock efficiency and innovation through practical automation and AI solutions.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express + SendGrid (for contact form)
- **Routing:** React Router DOM

## Features

- Responsive landing page with smooth scroll navigation
- Contact form with SendGrid email integration
- About Us page with team bios
- Custom 404 "nerdy" page
- Mobile-friendly hamburger menu
- Nerdy/techy branding and fonts

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npm run dev
```

### 3. Start the backend server

```sh
node server.js
```

### 4. Environment Variables

Create a `.env` file in the root with:

```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM=your_verified_sender@domain.com
```

## Customization

- **Fonts:** Uses [ProggyClean Nerd Font](https://github.com/ryanoasis/nerd-fonts) for the logo. Place the font in `/public/fonts` and ensure it is loaded in your CSS.
- **Contact Form:** Update recipient and sender emails in `server.js` and `.env`.

## Credits

Built by Bruno Araujo and Gabriel Alonso.

---

*This project was bootstrapped with [Vite](https://vitejs.dev/) and uses [React](https://react.dev/).*
