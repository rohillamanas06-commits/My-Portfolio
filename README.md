# 🚀 Manas Rohilla - Portfolio

[![GitHub](https://img.shields.io/badge/GitHub-Portfolio-blue.svg)](https://github.com/rohillamanas06-commits)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5.svg)](https://www.linkedin.com/in/manas-rohilla-b73415338/)

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - Beautiful glass-effect UI with dynamic theming
- 🌓 **Theme Customization** - Multiple color themes with dark/light mode support
- 🤖 **AI Chatbot** - Integrated Gemini AI chatbot for visitor interaction
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Smooth Animations** - Powered by Framer Motion for fluid user experience
- 📧 **Contact Form** - Functional contact form with email integration
- 🎯 **Interactive UI** - Floating orbs, tech icons, and dynamic backgrounds
- 📊 **GitHub Stats Integration** - Real-time GitHub statistics display
- 🔄 **SPA Routing** - Smooth navigation with React Router

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** Radix UI primitives + shadcn/ui
- **Animations:** Framer Motion
- **State Management:** React Query
- **Form Handling:** React Hook Form + Zod validation
- **Routing:** React Router DOM

### Backend
- **Framework:** Flask (Python)
- **Email Service:** SMTP (Gmail)
- **CORS:** Flask-CORS
- **Deployment:** Render

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Version Control:** Git & GitHub

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Python 3.9+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rohillamanas06-commits/Portfolio.git
cd Portfolio
```

2. **Install frontend dependencies**
```bash
npm install
# or
bun install
```

3. **Install backend dependencies**
```bash
pip install -r requirements.txt
```

4. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env
```

Edit `.env` and add your credentials:
```env
# Backend API URL (local development)
VITE_API_URL=http://localhost:5000

# Gemini AI API Key
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Flask Configuration (in backend)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### Running Locally

**Frontend (Terminal 1):**
```bash
npm run dev
# or
bun dev
```

**Backend (Terminal 2):**
```bash
python myself.py
```

Visit `http://localhost:5173` to view the portfolio!

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Add environment variables:
   - `VITE_API_URL` - Your Render backend URL
   - `VITE_GEMINI_API_KEY` - Your Gemini API key
4. Deploy!

Or use Vercel CLI:
```bash
vercel --prod
```

### Backend (Render)
1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn myself:app`
4. Add environment variables (SMTP credentials)
5. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Chatbot.tsx   # AI chatbot component
│   │   ├── Navbar.tsx    # Navigation bar
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About me page
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Skills.tsx    # Skills & technologies
│   │   ├── Contact.tsx   # Contact form
│   │   └── Blogs.tsx     # Blog section (coming soon)
│   ├── contexts/         # React contexts
│   ├── data/            # Portfolio data
│   │   └── portfolio.ts # Personal info, projects, skills
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── App.tsx          # Main app component
├── public/              # Static assets
├── myself.py            # Flask backend
├── requirements.txt     # Python dependencies
├── package.json         # Node dependencies
├── vercel.json          # Vercel configuration
├── render.yaml          # Render configuration
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Features Breakdown

### Pages
- **Home** - Hero section with animated introduction
- **About** - Educational background and timeline
- **Projects** - Showcase of 4+ AI/ML projects with live demos
- **Skills** - Interactive skill bars and GitHub stats
- **Contact** - Functional contact form with social links
- **Blogs** - Coming soon section with email notifications

### Components
- **AI Chatbot** - Gemini-powered assistant for visitor queries
- **Theme Picker** - 6+ color themes + light/dark mode
- **Animated Background** - Dynamic gradient animations
- **Floating Tech Icons** - Interactive floating technology icons
- **Glass Cards** - Modern glassmorphism UI components
- **Progress Bars** - Animated skill level indicators

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rohillamanas06-commits/Portfolio/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Manas Rohilla**
- Website: [Portfolio](https://your-portfolio-url.vercel.app)
- GitHub: [@rohillamanas06-commits](https://github.com/rohillamanas06-commits)
- LinkedIn: [Manas Rohilla](https://www.linkedin.com/in/manas-rohilla-b73415338/)
- Instagram: [@manas_rohilla_](https://www.instagram.com/manas_rohilla_/)
- Email: rohillamanas06@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled UI primitives
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Google Gemini](https://deepmind.google/technologies/gemini/) - AI chatbot integration

---

<div align="center">
  <p>Made with ❤️ by Manas Rohilla</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
