# GB AUTOMATE AI

GB AUTOMATE AI is a web app for creating AI agents, chatting with them, and connecting everyday workflows to external services. It combines a React frontend with an Express API, MongoDB persistence, Firebase authentication, LangGraph-powered agents, and optional paid credit plans.

## Features

- Google sign-in using Firebase Authentication
- Create, manage, and chat with AI agents
- Agent workflows with tool approval and credit tracking
- Integrations for Google services and Instagram
- Razorpay credit purchases with server-side payment verification
- User profiles and agent state persisted in MongoDB

## Architecture

- `frontend/`: React 19, Vite, Redux Toolkit, Firebase client SDK, and Razorpay Checkout
- `backend/`: Node.js, Express, MongoDB/Mongoose, Firebase Admin, LangChain/LangGraph, and Razorpay
- The browser calls the API with credentialed requests; configure the frontend and API origins together for production.

## Local development

1. Install Node.js 22 or newer.
2. Install dependencies in `frontend/` and `backend/` with `npm install`.
3. Copy `frontend/.env.example` to `frontend/.env` and `backend/.env.example` to `backend/.env`.
4. Fill in the Firebase web API key, Firebase Admin service-account JSON, MongoDB URI, JWT secret, and the provider credentials for features you intend to use.
5. Start the API with `npm run dev` from `backend/`.
6. Start the UI with `npm run dev` from `frontend/`.

The frontend is served at `http://localhost:5173`; the API defaults to `http://localhost:8000`.

## Deployment

The frontend is deployed to GitHub Pages and the API runs on Render:

- Enable GitHub Pages for the repository with **GitHub Actions** as the build and deployment source. The workflow at `.github/workflows/deploy-pages.yml` publishes the frontend on pushes to `main`.
- Add these repository Actions variables under **Settings → Secrets and variables → Actions → Variables**: `VITE_FIREBASE_API_KEY`, `VITE_CLOUDINARY_CLOUD_NAME`, `VITE_CLOUDINARY_UPLOAD_PRESET`, and `VITE_SUPPORT_EMAIL`. Set `VITE_SERVER_URL` if the Render API uses a URL other than `https://gb-automate-ai-api.onrender.com`.
- Deploy `render.yaml` to create the Render API. Set its MongoDB, Firebase Admin, JWT, and provider credentials in Render's environment settings; never commit service-account files or `.env` files.
- The API's `CLIENT_URL` and `FRONTEND_URL` are configured for `https://gajanan-bhakade-11.github.io` and `https://gajanan-bhakade-11.github.io/gb-automate-ai-agent`. Update them if the repository owner or name changes.
- Add the GitHub Pages hostname to Firebase Authentication's authorized domains and configure external OAuth callback URLs to use the Render API.

The Render blueprint prompts for required environment values. Payment, OAuth, and AI integrations require their corresponding provider credentials to be configured before those features can be used.

## Environment variables

See `backend/.env.example` and `frontend/.env.example` for the variable names. Local `.env` files, build output, dependencies, and Firebase service-account keys are excluded from Git.

## Validation

```powershell
cd frontend
npm run build
npm run lint
```

```powershell
cd backend
npm start
```
