# UI Library Starter

A modern, feature-rich starter kit for building React component libraries with TypeScript, Storybook, and TailwindCSS.

## Tech Stack

- **React 19**: Latest React version with improved performance
- **TypeScript**: For type safety and better developer experience
- **Storybook 8**: Component documentation and development environment
- **TailwindCSS**: Utility-first CSS framework
- **Vitest**: Fast test runner compatible with Jest
- **Unbuild**: Performant bundler built on top of rollup
- **ESLint/TypeScript**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (v10.5.2+ recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Mutesa-Cedric/ui-library-starter.git
cd ui-library-starter

# Install dependencies
pnpm install
```

### Development Workflow

Start the development server with auto-reloading:

```bash
pnpm dev
```

Run Storybook for component development:

```bash
pnpm storybook
```

Storybook will be available at http://localhost:6006

## Working with Components

Components are organized in the src/components directory using Atomic Design principles:
- `/atoms` - Basic building blocks (buttons, inputs, etc.)
- `/molecules` - Combinations of atoms (form fields, etc.)
- `/organisms` - Complex UI sections

### Creating a New Component

1. Create a new directory with your component name
2. Add the following files:
   - `component-name.tsx` - Component implementation
   - `component-name.test.tsx` - Tests
   - `component-name.stories.tsx` - Storybook documentation
3. Export your component in the nearest index.ts file

Example component structure:
```
src/components/atoms/
└── button/
    ├── button.tsx
    ├── button.test.tsx
    ├── button.stories.tsx
    └── index.ts
```

## Testing

Run tests with:

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## Building the Library

Build the library for distribution:

```bash
pnpm build
```

This creates optimized output in the `dist` directory.

## Release Process

To publish a new version:

1. Update the version in package.json
2. Run the release script:

```bash
pnpm release
```

This will:
- Bump the version using bumpp
- Build the library
- Publish to npm

## Documentation

Component documentation is automatically generated from Storybook. Build the static Storybook site:

```bash
pnpm build-storybook
```

## Project Structure

```
ui-library-starter/
├── .storybook/         # Storybook configuration
├── src/
│   ├── components/     # UI components
│   │   ├── atoms/      # Basic components
│   │   ├── molecules/  # Composite components
│   │   └── organisms/  # Complex UI sections
│   ├── lib/            # Utilities and helpers
│   └── index.ts        # Main entry point
├── dist/               # Build output (generated)
├── README.md           # Project documentation
└── package.json        # Project configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
