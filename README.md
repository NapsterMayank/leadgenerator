# 🚀 Lead Generation SaaS Platform

A modern, full-featured lead generation SaaS platform built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features a beautiful glassmorphism design system and comprehensive dashboard functionality.

## ✨ Features

### 🎯 **Core Functionality**
- **Lead Management**: Comprehensive lead tracking and management system
- **Campaign Management**: Create and manage lead generation campaigns
- **Analytics Dashboard**: Real-time analytics and insights
- **Template System**: Customizable email and message templates
- **Scheduling**: Advanced scheduling capabilities for campaigns
- **Integration Management**: Connect with popular third-party services

### 🔐 **Authentication & Security**
- Secure authentication system with context-based state management
- Protected routes for dashboard and admin areas
- Role-based access control (User/Admin)
- Session management with localStorage persistence

### 🎨 **Design System**
- **Glassmorphism UI**: Modern glass effect design with backdrop blur
- **Dark Mode Support**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **shadcn/ui Components**: Beautiful, accessible component library
- **Custom Animations**: Smooth transitions and micro-interactions

### 📱 **Pages & Layouts**
- **Landing Page**: Marketing-focused homepage
- **Authentication**: Login/Signup with form validation
- **Dashboard**: Comprehensive admin panel with sidebar navigation
- **Admin Panel**: Advanced administrative features
- **404 Page**: Custom error handling

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library

### **State Management**
- **TanStack Query** - Server state management
- **React Context** - Client state management
- **React Hook Form** - Form state and validation

### **Styling & UI**
- **Tailwind CSS** - Responsive design system
- **next-themes** - Dark/light mode switching
- **Radix UI** - Accessible primitive components
- **Custom CSS Variables** - Dynamic theming system

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **VS Code Integration** - Optimized development experience

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NapsterMayank/leadgenerator.git
   cd leadgenerator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # Client-side providers
│   ├── globals.css       # Global styles
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # Dashboard pages
│   └── admin/            # Admin pages
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   └── layout/      # Layout components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities and configs
│   └── pages/           # Page components
├── public/              # Static assets
└── ...config files
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Modern purple gradient
- **Secondary**: Warm amber tones
- **Accent**: Cyan highlights
- **Glassmorphism**: Transparent overlays with backdrop blur

### **Typography**
- **Primary**: Geist font family
- **Headings**: Satoshi font family
- **Body**: Inter font family

### **Components**
All components follow the glassmorphism design pattern with:
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders and shadows
- Smooth animations and transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📦 Key Dependencies

```json
{
  "next": "^14.2.33",
  "react": "^18.3.1",
  "typescript": "^5.8.3",
  "tailwindcss": "^3.4.17",
  "@tanstack/react-query": "^5.83.0",
  "next-themes": "^0.4.6",
  "lucide-react": "^0.544.0"
}
```

## 🌟 Key Features Explained

### **Glassmorphism Design**
- Custom CSS variables for consistent theming
- Backdrop blur effects throughout the UI
- Semi-transparent cards and overlays
- Modern gradient backgrounds

### **Authentication System**
- Context-based state management
- Protected route components
- Automatic redirection logic
- Persistent session storage

### **Dashboard Layout**
- Responsive sidebar navigation
- Dynamic route highlighting
- User profile management
- Admin panel access control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mayank Napster**
- GitHub: [@NapsterMayank](https://github.com/NapsterMayank)

---

<div align="center">
  <p>Built with ❤️ using Next.js and modern web technologies</p>
</div>