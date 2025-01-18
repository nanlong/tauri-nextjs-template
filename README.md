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

## Development

1. Set up pre-commit hooks:

```bash
# Install pre-commit
pip install pre-commit

# Install required cargo tools
cargo install cargo-nextest typos-cli git-cliff

# Install the pre-commit hooks at the root of the project
pre-commit install
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

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
