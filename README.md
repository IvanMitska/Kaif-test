# KAIF - Jungle Club & Spa Website

A modern, responsive website for KAIF - Jungle Club & Spa in Phuket, Thailand. This website showcases the four main service areas of the complex: Restaurant, SPA, Sports facilities, and Beauty Salon.

## Features

- **Multilingual Support**: Russian, English, and Thai language options
- **Responsive Design**: Optimized for web and mobile devices
- **Modern UI**: Elegant, minimalist aesthetic with smooth animations
- **Service Sections**: Dedicated pages for each of the four main service areas
- **Booking Systems**: Integrated booking functionality for all services
- **Location Integration**: Google Maps integration for easy navigation
- **Promotions**: Special offers and deals showcase

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Styled Components & Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Animations**: Framer Motion
- **Internationalization**: i18next
- **Form Handling**: Formik + Yup
- **Build Tool**: Vite.js

## Color Palette

- **Primary**: Mint/Sage Green (#B5C4B1)
- **Secondary**: White (#FFFFFF)
- **Accent Colors**:
  - Soft Orange (#E8C0A8)
  - Light Blue (#A1C5D1)
  - Pale Green (#B0C5A4)
  - Muted Lavender (#CAB5C8)
- **Text**: Black (#000000)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd kaif-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, fonts)
├── components/      # Reusable UI components
│   ├── common/      # Common UI elements
│   └── layout/      # Layout components (Header, Footer)
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── locales/         # Translation files
│   ├── en/          # English translations
│   ├── ru/          # Russian translations
│   └── th/          # Thai translations
├── pages/           # Page components
└── utils/           # Utility functions
```

## Deployment

The website is configured for deployment on Netlify or Vercel.

## License

This project is proprietary and confidential.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
