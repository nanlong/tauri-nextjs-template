# Tauri + Next.js Project

A desktop application built with Tauri and Next.js, combining Rust's performance with React's flexibility.

## Tech Stack

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Tauri (Rust)

## Prerequisites

- Node.js 16.x or later
- Rust toolchain
- System dependencies for Tauri (see [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites))

## Project Structure

.
├── src-nextjs/ # Next.js frontend
│ ├── app/ # Next.js app directory
│ ├── components/ # React components
│ └── styles/ # CSS styles
├── src-tauri/ # Tauri backend
│ ├── src/ # Rust source code
│ └── Cargo.toml # Rust dependencies
└── package.json # Node.js dependencies

## Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run tauri dev
```

## Building

Build the application:

```bash
npm run tauri build
```
