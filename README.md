# AgniArena

AgniArena is an **open-source, real-time sports platform** that enables live match scoring, live video streaming, and player auctions for sports tournaments.

Built for scalability, low latency, and transparency -- from grassroots tournaments to professional leagues.

Website: Coming Soon  
 Docs: Coming Soon
Core Concepts: Real-time | WebSockets | Scalable | OSS

# AgniArena Web Frontend

AgniArena Web Frontend is the **public-facing web application** for viewing live match scores, live streams, and real-time player auctions.

## Features

- Real-time live match scoring
- Live video streaming with score overlays
- Live auction participation
- SEO-friendly match pages
- Mobile-friendly UI (PWA-ready)

## Tech Stack

- Next.js 14 (App Router)
- React
- Tailwind CSS
- Redux Toolkit
- Socket.io Client
- HLS.js / Video.js

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### Installation

```bash
git clone https://github.com/rupeshbisen/agniarena-frontend.git
cd agniarena-frontend
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/    
  └── app/
      ├── layout.tsx        # Root layout component
      ├── page.tsx          # Home page
      ├── globals.css       # Global styles
      └── favicon.ico       # Favicon
public/                      # Static assets
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\git checkout -b feature/amazing-feature\)
3. Commit your changes (\git commit -m 'Add amazing feature'\)
4. Push to the branch (\git push origin feature/amazing-feature\)
5. Open a Pull Request

### Quality Checks

Before submitting your PR, run the quality checks locally:

```bash
npm run quality
```

This will run:
- Code formatting check (`npm run format:check`)
- Type checking (`npm run type-check`)
- Linting (`npm run lint`)

**Automated CI Checks:** When you open a PR, automated quality checks will run automatically. These same checks will be executed to ensure code quality.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- [Report a Bug](https://github.com/rupeshbisen/agniarena-frontend/issues)
- [Request a Feature](https://github.com/rupeshbisen/agniarena-frontend/issues)
- [Discussions](https://github.com/rupeshbisen/agniarena-frontend/discussions)
