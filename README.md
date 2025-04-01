# County Revenue System

A comprehensive revenue collection system for counties, featuring a web dashboard and mobile applications.

## Project Structure

```
county-revenue-system/
├── services/
│   ├── web-dashboard/              # Web Dashboard Service
│   │   ├── src/
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── pages/             # Page components and routing
│   │   │   ├── hooks/             # Custom React hooks
│   │   │   ├── utils/             # Utility functions
│   │   │   ├── services/          # API integration services
│   │   │   └── store/             # State management
│   │   ├── public/                # Static assets
│   │   └── styles/                # Global styles and themes
│   │
│   ├── mobile-app/                # React Native Mobile App
│   │   ├── src/
│   │   │   ├── components/        # Shared UI components
│   │   │   ├── screens/          # Screen components
│   │   │   ├── navigation/       # Navigation configuration
│   │   │   ├── services/         # API integration services
│   │   │   ├── store/            # State management (Zustand)
│   │   │   └── utils/            # Utility functions
│   │   ├── ios/                  # iOS-specific code
│   │   ├── android/              # Android-specific code
│   │   └── shared/               # Shared code between platforms
│   │
│   └── backend/                   # Backend Service
│       ├── src/
│       │   ├── api/              # API routes and versioning
│       │   ├── config/           # Configuration files
│       │   ├── controllers/      # Request handlers
│       │   ├── models/           # Database models
│       │   ├── services/         # Business logic
│       │   ├── utils/            # Utility functions
│       │   └── middleware/       # Custom middleware
│       └── tests/                # Test files
```

## Services

### Web Dashboard
- Next.js-based web application
- Analytics and management interface
- Built with React, TailwindCSS, and Tremor

### Mobile App
- React Native application for iOS and Android
- Revenue collection features
- Offline-first architecture

### Backend
- Node.js/Express API server
- PostgreSQL database with Prisma ORM
- RESTful API endpoints

## Development

1. Install dependencies for each service:
```bash
# Web Dashboard
cd services/web-dashboard
npm install

# Mobile App
cd services/mobile-app
npm install

# Backend
cd services/backend
npm install
```

2. Start development servers:
```bash
# Web Dashboard
cd services/web-dashboard
npm run dev

# Mobile App
cd services/mobile-app
npm run ios     # For iOS
npm run android # For Android

# Backend
cd services/backend
npm run dev
```

## Environment Setup

Each service requires specific environment variables. Create `.env` files in each service directory:

### Web Dashboard
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Mobile App
```env
API_URL=http://localhost:4000
```

### Backend
```env
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/county_revenue
JWT_SECRET=your_jwt_secret_here
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is private and confidential. 