# CommonsHub Mockup

This repository contains mockup implementations of the CommonsHub platform.

## HTML Mockups

The original HTML mockups are located in the root directory:
- `index.html` - Landing page
- `setup.html` - Plan selection
- `setup-basics.html` - Community setup form
- `setup-launch.html` - Launch confirmation
- `dashboard.html` - Community dashboard
- `setup-wizard.html` - Guided setup wizard
- `community-funding.html` - Public funding page
- And more...

## React + TypeScript Implementation

The React + TypeScript version is located in `apps/web/`.

### Tech Stack
- **Framework**: Next.js 16
- **Language**: TypeScript (strict mode)
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS + CSS Variables
- **Quality**: ESLint + Prettier

### Running Locally

```bash
cd apps/web
npm install
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build

```bash
cd apps/web
npm run build
```

### Linting

```bash
cd apps/web
npm run lint
```

### Format Code

```bash
cd apps/web
npm run format
```

### Type Checking

```bash
cd apps/web
npx tsc --noEmit
```

### Project Structure

```
apps/web/
├── app/                          # Next.js app directory (routes)
│   ├── page.tsx                  # Landing page
│   ├── setup/                    # Setup flow pages
│   ├── dashboard/                # Dashboard page
│   └── ...
├── components/                   # React components
│   ├── layout/                   # Layout components
│   ├── sections/                 # Page sections
│   ├── setup/                    # Setup flow components
│   ├── dashboard/                # Dashboard components
│   └── ui/                       # Shadcn UI components
├── lib/                          # Utility functions
└── types/                        # TypeScript type definitions
```

### Quality Standards

This implementation follows strict quality standards:
- ✅ TypeScript strict mode enabled
- ✅ No `any` types
- ✅ ESLint passes with zero warnings
- ✅ Clean production build
- ✅ Typed props for all components
- ✅ Consistent design system using CSS variables

