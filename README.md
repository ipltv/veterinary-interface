# Veterinary Interface

A **simple veterinary interface** for managing animals and their medical events.  
The project is a full‑stack application split into a Node.js/Express backend and a React + Vite frontend.  
Users can register animals, record events (visits, treatments, observations) and download an Excel report of all events for a specific animal.

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, TypeScript, Redux Toolkit, Vite |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | PostgreSQL, Knex.js |
| **Excel Export** | ExcelJS |
| **Styling** | CSS, React inline styles |

--

## ⚙️ Installation and Running


### Prerequisites
1. Node.js (v18 or newer recommended).
2. PostgreSQL (local or remote).
3. pnpm/yarn/npm for dependency installation.
4. Git to clone the repository.

---

### 1. Clone the repository

```bash
git clone https://github.com/ipltv/veterinary-interface.git
cd veterinary-interface
```

### 2. Setup the backend

```bash
cd backend
npm install
npm run migrate
npm run seed
npm run dev
```

Backend runs on `http://localhost:3000` by default.

Environment variables are loaded from `.env` (create it manually if missing):

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=veterinary_db
```

### 3. Setup the frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

---

## 🧱 Project Structure

```
veterinary-interface/
├── backend/     # Node.js + TypeScript API
│   ├── knexfile.cjs     # Knex configuration:contentReference[oaicite:6]{index=6}
│   ├── migrations/      # Database migrations (animals and events tables)
│   ├── seeds/           # Seed data for development
│   └── src/
│       ├── app.ts       # Express app with middlewares & routes
│       ├── server.ts    # HTTP server entry point
│       ├── config/      # Environment & DB configuration
│       ├── routes/      # Express routes for animals & events
│       ├── controllers/ # Controllers delegating to services
│       ├── services/    # Business logic (animals, events, Excel export)
│       ├── model/       # Knex models (queries)
│       └── middleware/  # Error handling & ID validation
└── frontend/    # React + Vite client
    ├── src/
    │   ├── pages/       # Animals list & animal detail pages
    │   ├── components/  # Reusable UI components (forms, lists)
    │   ├── api/         # Axios API client
    │   ├── store/       # Redux Toolkit store & slice
    │   ├── hooks/       # Custom hooks for data loading
    │   └── utils/       # Helper functions (date formatting, age calculation)
    └── vite.config.ts  # Vite configuration

```

## 🧠 Technical Choices

1. **Express 5 (beta)** - modern routing and async error handling.
2. **TypeScript** - ensures type safety on both backend and frontend.
3. **Knex.js + PostgreSQL** - flexible SQL query builder and schema migrations.
4. **Redux Toolkit** - predictable state management for complex forms and API calls.
5. **Vite** - lightning-fast build and hot reload.
6. **ExcelJS** - for dynamic Excel file generation.
7. **Backend layered architecture** - Requests are routed to controllers which delegate to services and models. Models encapsulate database queries; services implement business logic (e.g., merging animal data with its events or exporting to Excel). Middleware handles errors and validates route parameters.
8. **Axios** - is used to communicate with the backend; a configured instance points at VITE_API_BASE_URL.

---

## 🚧 Known Limitations

- No authentication or user roles implemented yet.
- No file uploads (e.g., animal photos).
- Simple UI design with minimal styling.
- Excel export available per animal, not global summary.
- Requires manual PostgreSQL setup before running migrations.
- There are no unit or integration tests. The repository does not include CI pipelines.
- Errors are caught and return simple JSON messages via a global middleware. There is no structured error model or logging beyond console output in development.
- Basic checks ensure required fields and valid date formats, but there is no comprehensive validation (e.g., string lengths, allowed species). Malformed data may be inserted.
- For large workloads or concurrent users, additional patterns (e.g., pagination, connection pooling tuning) would be required.

---

## 📄 License

MIT License © 2025 Ilya Platovich
