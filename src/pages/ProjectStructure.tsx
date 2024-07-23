import React from 'react';

const ProjectStructure: React.FC = () => {
  return (
    <main>
      <h1>Project Structure</h1>
      <pre>
        {`
IEEE-Hackathon/
├── frontend/
│   ├── public/
│   │   └── watertype.PNG
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.test.js
│   │   ├── App.tsx
│   │   ├── AuthProvider.tsx
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── main.tsx
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   └── vite-env.d.ts
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   └── tsconfig.json
├── backend/
│   ├── node_modules/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── uploads/
│   │   ├── authMiddleware.ts
│   │   └── index.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
        `}
      </pre>
      <p>
        The <strong>frontend</strong> directory contains all the client-side code, including components, services, and styles.
        The <strong>backend</strong> directory includes server-side code, middleware, and Prisma setup for database migrations.
        The <strong>public</strong> directory holds public assets like images.
        Each directory follows a clear structure to separate concerns and improve maintainability.
      </p>
    </main>
  );
};

export default ProjectStructure;
