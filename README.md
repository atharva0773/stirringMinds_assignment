<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Startup Benefits Platform</title>
</head>
<body>

  <h2>Startup Benefits Platform</h2>

  <p>
    A full-stack web application that helps early-stage startups discover and claim
    exclusive SaaS deals they typically cannot afford.
  </p>

  <p>
    This project focuses on clear system flow, clean architecture, strong UI/UX
    judgment, and correct authentication and authorization, rather than excessive
    features.
  </p>

  <h2>Business Context</h2>

  <p>
    Early-stage startups often lack access to premium SaaS tools due to cost
    constraints. This platform aggregates startup-only benefits across cloud
    services, analytics tools, marketing platforms, and productivity software.
  </p>

  <p>
    Some deals are publicly accessible, while others are restricted and require
    user authentication and eligibility checks.
  </p>

  <h2>Target Users</h2>

  <ul>
    <li>Startup founders</li>
    <li>Early-stage teams</li>
    <li>Indie hackers</li>
  </ul>

  <h2>End-to-End Application Flow</h2>

  <ol>
    <li>User lands on the homepage and explores the platform</li>
    <li>User registers or logs in</li>
    <li>User browses available deals</li>
    <li>Locked deals clearly indicate restricted access</li>
    <li>Authenticated users can claim eligible deals</li>
    <li>Claimed deals appear in the user dashboard with status tracking</li>
  </ol>

  <h2>Authentication & Authorization Strategy</h2>

  <ul>
    <li>JWT-based authentication is used</li>
    <li>JWT is issued on successful login or registration</li>
    <li>Token is stored on the client and attached to protected API requests</li>
    <li>Backend middleware validates JWT for protected routes</li>
  </ul>

  <p><strong>Authorization Rules:</strong></p>

  <ul>
    <li>Unauthenticated users cannot claim deals</li>
    <li>Locked deals cannot be claimed without authorization</li>
    <li>Dashboard and claim routes are protected</li>
  </ul>

  <h2>Core Backend Entities</h2>

  <h3>User</h3>
  <ul>
    <li>name</li>
    <li>email</li>
    <li>password (hashed)</li>
    <li>createdAt</li>
  </ul>

  <h3>Deal</h3>
  <ul>
    <li>title</li>
    <li>description</li>
    <li>category</li>
    <li>isLocked</li>
    <li>createdAt</li>
  </ul>

  <h3>Claim</h3>
  <ul>
    <li>user (reference)</li>
    <li>deal (reference)</li>
    <li>status (pending | approved | rejected)</li>
    <li>createdAt</li>
  </ul>

  <h2>Internal Claim Flow</h2>

  <ol>
    <li>User initiates a deal claim</li>
    <li>Backend validates JWT</li>
    <li>Backend checks:</li>
    <ul>
      <li>Deal existence</li>
      <li>Duplicate claims</li>
      <li>Access restrictions</li>
    </ul>
    <li>Claim is created with <strong>pending</strong> status</li>
    <li>Claim appears in the user dashboard</li>
  </ol>

  <h2>Frontend Overview</h2>

  <h3>Tech Stack</h3>
  <ul>
    <li>Next.js (App Router)</li>
    <li>TypeScript</li>
    <li>Tailwind CSS</li>
    <li>Framer Motion (animations)</li>
  </ul>

  <h3>Implemented Pages</h3>
  <ul>
    <li>Landing page with animated hero section</li>
    <li>Login page</li>
    <li>Register page</li>
    <li>Deals listing page</li>
    <li>Deal details page</li>
    <li>User dashboard</li>
  </ul>

  <h3>UI & Motion</h3>
  <ul>
    <li>Page transitions</li>
    <li>Micro-interactions on buttons and cards</li>
    <li>Clear visual distinction for locked content</li>
    <li>Subtle, usability-focused animations</li>
  </ul>

  <h2>Frontend ↔ Backend Interaction</h2>

  <ul>
    <li>REST APIs are used for all data communication</li>
    <li>Fetch API handles client requests</li>
    <li>JWT is passed via Authorization headers</li>
    <li>API responses drive UI state (loading, error, success)</li>
  </ul>

  <h2>Backend Overview</h2>

  <h3>Tech Stack</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB with Mongoose</li>
    <li>JWT authentication</li>
  </ul>

  <h3>Core API Endpoints</h3>
  <ul>
    <li>POST /api/auth/register</li>
    <li>POST /api/auth/login</li>
    <li>GET /api/deals</li>
    <li>GET /api/deals/:id</li>
    <li>POST /api/claims</li>
    <li>GET /api/claims/me</li>
  </ul>

  <h2>UI & Design Decisions</h2>

  <ul>
    <li>Manual HEX-based color system for consistency</li>
    <li>SaaS-style layout with clean visual hierarchy</li>
    <li>Motion used to enhance clarity, not distract</li>
    <li>Accessible contrast and readable typography</li>
  </ul>

</body>
</html>
