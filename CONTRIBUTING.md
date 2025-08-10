# Contributing to Movio

First off, thank you for considering contributing to Movio! It's people like you that make Movio such a great tool for anime enthusiasts.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Process

### Setting Up Your Development Environment

To set up your local development environment, follow these steps:

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/movio.git
   cd movio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your API keys
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

### Branch Naming Convention

Branch names should reflect their purpose and content. Examples:
- `feature/new-feature-name`
- `bugfix/issue-number-description`
- `hotfix/critical-bug-fix`

### Pull Request Guidelines

- **Rebase on main** before submitting
- **Ensure tests pass**
- **Keep commits small and focused**
- **Write clear commit messages**
- **Avoid force-pushing** unless necessary
- **Address feedback promptly**

### Coding Standards

- **JavaScript/React**: Follow the existing code style
- **Naming**: Use camelCase for variables and functions, PascalCase for components
- **Comments**: Write meaningful comments for complex logic
- **Commits**: Use conventional commit messages

#### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

Examples:
```
feat(search): add debounced search functionality
fix(api): handle network errors gracefully
docs(readme): update installation instructions
```

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage

```bash
# Run tests (when implemented)
pnpm test

# Run tests in watch mode
pnpm test:watch

# Check test coverage
pnpm test:coverage
```

### Code Review Process

1. All submissions require review
2. We may suggest changes, improvements, or alternatives
3. Make requested changes and push to your branch
4. Re-request review when ready
5. Once approved, merge into main

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── services/           # API services
├── contexts/           # React contexts
├── assets/             # Static assets
└── styles/             # Global styles
```

## Anime-Specific Contributions

We're particularly interested in contributions that enhance the anime experience:

### High Priority Features
- Episode tracking and progress
- Seasonal anime discovery
- Anime recommendation algorithms
- Character and studio databases
- Manga integration
- Anime news feeds

### UI/UX Improvements
- Anime-themed design elements
- Better mobile experience
- Accessibility improvements
- Performance optimizations

### Data & API Enhancements
- Additional anime data sources
- Better search algorithms
- Caching strategies
- Offline functionality

## Getting Help

- Join our [Discord community](https://discord.gg/movio)
- Check existing [GitHub Issues](https://github.com/yourusername/movio/issues)
- Read the [documentation](https://docs.movio.dev)

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special Discord roles for active contributors

Thank you for contributing to Movio! 🎬✨