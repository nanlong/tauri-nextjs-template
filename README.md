# Tauri + Next.js Project Template

A desktop application template built with Tauri and Next.js, combining Rust's performance with React's flexibility.

## Using this template

### Prerequisites

- [cargo-generate](https://github.com/cargo-generate/cargo-generate)
  ```bash
  cargo install cargo-generate
  ```

### Generate a new project

```bash
cargo generate nanlong/tauri-nextjs-template
```

You will be prompted to enter:

- Project name: The name of your application
- Window title: The title shown in the application window
- Project description: A brief description of your project

### Post-generation steps

1. Update the application metadata in:

   - `src-tauri/tauri.conf.json`
   - `package.json`
   - `src-tauri/Cargo.toml`

2. Replace the default icons in `src-tauri/icons/` with your application icons

## Tech Stack

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Tauri (Rust)

## Prerequisites

- Node.js 16.x or later
- Rust toolchain
- System dependencies for Tauri (see [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites))

## Project Structure

```text
.
├── src/          # Next.js frontend
│   ├── app/      # Next.js app directory
│   ├── components/# React components
│   └── styles/   # CSS styles
├── src-tauri/    # Tauri backend
│   ├── src/      # Rust source code
│   └── Cargo.toml# Rust dependencies
└── package.json  # Node.js dependencies
```

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

## License

This project is licensed under either of

- Apache License, Version 2.0 (LICENSE-APACHE)
- MIT License (LICENSE-MIT)

at your option.
