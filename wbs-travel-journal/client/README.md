# WBS Travel Journal SPA

Starter code for authentication/authorization module at WBS Coding School

## Setup

- Fork repo
- Clone into your computer
- `cd` into working directory
- `npm i` to install dependencies
- create a `.env.development.local`:
  - `VITE_APP_TRAVEL_JOURNAL_API_URL` set to `http://localhost:8000` assuming your backend API is running on port 8000
- The server defaults to port `5173`, although you can override this in the script sections in `package.json`

## Commands

- `npm run dev`: Starts development server, pulling environment variables from `.env.development.local` file
- `npm run build`: Build app with enviroment set to `.env.production.local`
- `npm run preview`: Production server from build

## Usage

- The application has its entry point at `src/main.jsx`
- `App.jsx` returns a `RouterProvider`:
  - All the navigation is nested under a `RootLayout`. This is important becuase we'll implement some React Contexts
  - The `errorElement` prop is used at the entry point and again below the `RootLayout` to gracefully catch errors and render a custom error page.
- The code is organised as follows:
  - There's a path resolution alias `@/` => `.src/` to avoid relative paths in imports. This is setup in `vite.config.js` to inform Vite, and `jsconfig.json` to inform the TS compiler in the editor.
    - e.g:
    ```javascript
    // src/pages/Diary.jsx
    import { getPosts } from '@/data';
    // instead of
    import { getPosts } from '../data';
    ```
  - For organisation sake, components are grouped in directories, and imported and re-exported from an `index.js` file:
    ```javascript
    // src/pages/Diary.jsx
    // This allows us to do this
    import { PostCard, PostsSkeleton } from '@/components';
    // instead of this
    import PostCard from '@/components/PostCard';
    import PostsSkeleton from '@/components/PostsSkeleton';
    // Ain't nobody got time for that
    ```
  - `pages`: React components that are directly mapped to a route.
  - `components`: React components used in pages
  - `layouts`: React components that are used as layouts in routes and render `Outlet`
  - `data`: Functions that request data to external APIs
  - `TailwindCSS` and `DaisyUI` are configured for styles <3
