# Vue.js Todo App

A simple and elegant todo application built with Vue.js 3, TypeScript, and the Composition API.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Double-click to edit todo text
- ✅ Clear completed todos
- ✅ Beautiful, responsive UI
- ✅ Built with Vue 3 Composition API
- ✅ TypeScript support
- ✅ Pinia state management

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Composition API** - Vue 3's new API for organizing component logic
- **Pinia** - State management for Vue
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── TodoItem.vue    # Individual todo item component
│   └── TodoList.vue    # Main todo list component
├── stores/
│   └── todo.ts         # Pinia store for todo state management
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## Usage

1. **Add a Todo**: Type in the input field and press Enter or click "Add"
2. **Complete a Todo**: Click the checkbox next to any todo
3. **Edit a Todo**: Double-click on the todo text to edit it
4. **Delete a Todo**: Click the "×" button next to any todo
5. **Clear Completed**: Click "Clear completed" to remove all completed todos

## Deployment

This project is configured for deployment to Cloudflare Pages. The build output is in the `dist` directory.

### Deploy to Cloudflare Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Cloudflare Pages through the Cloudflare dashboard or using Wrangler CLI.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
