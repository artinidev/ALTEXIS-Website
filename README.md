# ALTEXIS — Industrial & Corporate Showcase Website

A modern, high-performance web platform for **ALTEXIS**, built with React 19, TypeScript, Tailwind CSS, Vite, Framer Motion, and full i18n support (English, French, Arabic with RTL).

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 20+
- npm or pnpm / yarn

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🐳 Deployment with Docker & Docker Compose

### 1. Run using Docker Compose (Recommended)
```bash
# Start container in detached mode (listens on port 80 by default)
docker compose up -d --build

# Or specify a custom port:
PORT=8080 docker compose up -d --build
```

Access the website at `http://localhost` (or `http://localhost:8080`).

To stop the containers:
```bash
docker compose down
```

### 2. Standalone Docker Build & Run
```bash
# Build the Docker image
docker build -t altexis-website .

# Run the container
docker run -d -p 80:80 --name altexis-web altexis-website
```

---

## 🛠️ Scripts

- `npm run dev`: Starts local Vite dev server with HMR
- `npm run build`: Type-checks and creates production build in `dist/`
- `npm run preview`: Previews production build locally
- `npm run lint`: Runs Oxlint linter
