# CareSync360

A modern, responsive patient intake and appointment UI built with Next.js and TypeScript. CareSync360 provides patient registration, appointment scheduling, and a simple admin entry point — intended as the frontend for a small clinic or practice to capture patient details and book appointments.

## Key features
- Patient registration form with support for identity documents and consents (components/forms/PatientForm.tsx)
- Appointment booking UI (components/forms/AppointmentForm.tsx)
- Admin passkey modal and admin entry (PassKeyModal component; accessible via /?admin=true)
- File upload support for identification documents (components/FIleUploader.tsx)
- Reusable UI components and badges (components/StatCard.tsx, StatusBadge.tsx)
- Configurable static lists and constants (constants/index.ts includes GenderOptions, IdentificationTypes, Doctors, StatusIcon)

## Tech stack
- Languages: TypeScript, JavaScript
- Framework: Next.js (App Router)
- UI / Styling: Tailwind CSS, shadcn components, radix UI
- State & forms: react-hook-form, zod (validation)
- Important libraries: @tanstack/react-table, lucide-react, libphonenumber-js
- Backend integration: node-appwrite (dependency included — configure Appwrite or swap for your backend)

## Quickstart — run locally
1. Clone the repo
   git clone https://github.com/kingpin9292/CareSync360.git
   cd CareSync360

2. Install dependencies
   npm install
   # or
   yarn
   # or
   pnpm install

3. Run the development server
   npm run dev
   # Opens at http://localhost:3000

4. Build and start for production
   npm run build
   npm run start

(These scripts are defined in package.json: `dev`, `build`, `start`.)

## Environment variables
If you integrate with Appwrite or another backend, add environment variables to `.env.local`. Suggested variables (adjust to your backend and naming conventions):
- NEXT_PUBLIC_APPWRITE_ENDPOINT — Appwrite endpoint (if using Appwrite)
- NEXT_PUBLIC_APPWRITE_PROJECT_ID — Appwrite project ID
- APPWRITE_API_KEY — server API key (do NOT commit)
- NEXT_PUBLIC_API_BASE_URL — or any base URL used by your API

Prefix public values with NEXT_PUBLIC_ as required by Next.js. The repository includes a `node-appwrite` dependency which suggests optional Appwrite integration; update code and env keys to match your actual backend.

## Project layout (top-level)
app/
  page.tsx            — landing + patient form, admin query param
  layout.tsx          — global layout
  globals.css         — global styles

components/
  forms/              — PatientForm.tsx, RegisterForm.tsx, AppointmentForm.tsx
  ui/                 — design-system pieces (shadcn/radix based)
  PassKeyModal.tsx    — admin passkey modal
  FIleUploader.tsx    — file upload component
  theme-provider.tsx  — theme context/provider
constants/
  index.ts            — GenderOptions, IdentificationTypes, Doctors, StatusIcon

public/
  assets/             — images and icons used across the app

lib/
types/
package.json
next.config.ts
tailwind.config.js
tsconfig.json

## How it fits together
The app's entry (app/page.tsx) renders the PatientForm UI and conditionally shows the PassKeyModal when the query param `admin=true` is present. Forms live under components/forms and rely on react-hook-form + zod for validation. Visuals and theming are driven by Tailwind and UI primitives (shadcn/radix/lucide). Static data (doctor list, id types, status icons) are defined in constants/index.ts and consumed by form components.

## Development notes
- Forms use react-hook-form and zod schemas; look at components/forms/* for validation rules and field mappings.
- Static assets live in `public/assets/`. Update references there when replacing images/icons.
- Tailwind is configured in tailwind.config.js; global styles in app/globals.css.
- If you plan to persist data, implement API routes, or wire up Appwrite (or another backend), ensure secure server-side handling of API keys and file uploads.

## Testing & linting
- Linting is set up (eslint); run:
  npm run lint

- Add tests as needed; there are no test scripts in package.json at present.

## Deployment
- The app is compatible with Vercel (Next.js recommended platform). Add environment variables on your deployment target and `npm run build`/`start` will run the production build.

## Contributing
1. Fork the repository.
2. Create a feature branch: git checkout -b feat/your-feature
3. Make changes, run linters, and commit.
4. Open a pull request with a clear description of the change.

Please include screenshots or short descriptions for UI/UX changes.

## License
Add a license of your choice (MIT is common). Example: MIT License — add a LICENSE file to the repo.

## Contact
Maintainer: @kingpin9292 (GitHub)  
For questions or collaboration, open an issue or PR on the repository.

---
Thank you for using CareSync360 — a focused UI foundation for patient intake and scheduling. If you want, I can also:
- Add an example `.env.local` with recommended keys,
- Draft a CONTRIBUTING.md or ISSUE_TEMPLATE,
- Scaffold Appwrite API wiring for patient creation and appointment endpoints.
