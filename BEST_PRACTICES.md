# 📘 Project Best Practices

## 1. Project Purpose
Movio is a React-based movie discovery application that allows users to search for movies using The Movie Database (TMDB) API. The app features trending movies tracking through Appwrite backend, debounced search functionality, and a responsive UI built with Tailwind CSS and Flowbite React components.

## 2. Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Individual movie display component
│   ├── Search.jsx      # Search input component
│   └── Spinner.jsx     # Loading indicator component
├── pages/              # Page-level components
│   ├── Home.jsx        # Main landing page
│   ├── Login.jsx       # User authentication
│   └── Register.jsx    # User registration
├── assets/             # Static assets (images, icons)
├── appwrite.js         # Backend service integration
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── App.css             # Component-specific styles
└── index.css           # Global styles
```

- **Components**: Small, reusable UI pieces with single responsibilities
- **Pages**: Full page components that compose multiple components
- **Services**: External API integrations (appwrite.js for backend, TMDB API calls in App.jsx)
- **Public**: Static assets accessible via public URLs

## 3. Test Strategy
- **Current Status**: No testing framework currently implemented
- **Recommended**: Jest + React Testing Library for unit and integration tests
- **Test Structure**: Create `__tests__` folders alongside components or use `.test.jsx` suffix
- **Coverage**: Focus on component rendering, user interactions, and API integration points

## 4. Code Style

### Language-Specific Rules
- Use ES6+ features (arrow functions, destructuring, template literals)
- Prefer `const` over `let`, avoid `var`
- Use async/await for asynchronous operations
- Implement proper error handling with try/catch blocks

### Naming Conventions
- **Components**: PascalCase (e.g., `MovieCard.jsx`, `Search.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables/Functions**: camelCase (e.g., `searchTerm`, `fetchMovies`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`, `API_KEY`)

### Component Structure
- Use functional components with hooks
- Destructure props in function parameters when possible
- Group related state variables together
- Place useEffect hooks after state declarations

### Error Handling
- Always wrap API calls in try/catch blocks
- Set user-friendly error messages in state
- Log detailed errors to console for debugging
- Provide fallback UI for error states

## 5. Common Patterns

### State Management
- Use useState for local component state
- Implement debouncing for search inputs using `react-use` library
- Separate loading, error, and data states

### API Integration
- Centralize API configuration (base URL, headers, options)
- Use environment variables for sensitive data (API keys, endpoints)
- Implement proper error handling and loading states
- Use async/await pattern consistently

### Component Composition
- Keep components small and focused on single responsibility
- Pass data down via props, functions up via callbacks
- Use conditional rendering for different UI states
- Implement proper key props for list items

### Styling Approach
- Use Tailwind CSS for utility-first styling
- Leverage Flowbite React for pre-built components
- Keep custom CSS minimal and component-specific
- Use semantic class names for custom styles

## 6. Do's and Don'ts

### ✅ Do's
- Use environment variables for all API keys and sensitive configuration
- Implement debouncing for search functionality to reduce API calls
- Provide loading states and error handling for all async operations
- Use semantic HTML elements and proper alt text for accessibility
- Keep components pure and predictable
- Use proper key props when rendering lists
- Implement proper error boundaries for production apps

### ❌ Don'ts
- Don't hardcode API keys or sensitive data in source code
- Don't make API calls without proper error handling
- Don't forget to handle edge cases (empty states, network failures)
- Don't use inline styles when Tailwind utilities are available
- Don't create overly complex components that handle multiple concerns
- Don't forget to clean up side effects in useEffect
- Don't commit .env files with sensitive data

## 7. Tools & Dependencies

### Core Dependencies
- **React 19.1.0**: UI library with latest features
- **Vite**: Fast build tool and dev server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **Flowbite React**: Pre-built React components

### External Services
- **TMDB API**: Movie data source
- **Appwrite**: Backend-as-a-Service for data persistence

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **pnpm**: Package manager (preferred over npm/yarn)

### Setup Instructions
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run linter
pnpm lint
```

## 8. Other Notes

### Environment Configuration
- All environment variables must be prefixed with `VITE_` to be accessible in client-side code
- Store sensitive configuration in `.env.local` (gitignored)
- Provide `.env.example` template for required variables

### Performance Considerations
- Implement debouncing for search to reduce API calls
- Use proper loading states to improve perceived performance
- Consider implementing image lazy loading for movie posters
- Cache trending movies data when possible

### Accessibility
- Always provide alt text for images
- Use semantic HTML elements
- Ensure proper color contrast ratios
- Implement keyboard navigation support

### LLM Code Generation Guidelines
- When adding new components, follow the established folder structure
- Use the same error handling patterns as existing code
- Implement proper TypeScript types if migrating to TypeScript
- Follow the established naming conventions and code style
- Always include proper error states and loading indicators for new features
- Use Tailwind classes consistently with the existing design system