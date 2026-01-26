# fs-lab-core-api-node

Core Node.js + TypeScript API for the fs-lab fullstack architecture.

**API Base URL:**  
https://fs-lab-core-api-node.onrender.com

---

## Purpose

This project serves as a **reference backend API** for experimenting with:

- frontend ↔ backend communication
- API contracts and response standardization
- environment-based configuration
- cloud hosting on a PaaS platform (Render)

The Node.js service acts as a **baseline implementation** that can be mirrored
by alternative backends (e.g. Python/FastAPI) to compare behavior, performance,
and deployment characteristics under real hosting conditions.

---

## Tech Stack

- Node.js
- Express
- TypeScript
- Render (PaaS)

---

## API Design Principles

- API-first approach
- Unified response contract for all endpoints
- Clear separation between application logic and environment configuration
- Frontend-agnostic backend (no frontend-specific assumptions)

### Unified Response Format

All endpoints return a consistent response structure:

```json
{
  "success": true,
  "data": {},
  "error": null,
  "meta": {
    "service": "fs-lab-core-api-node",
    "version": "0.1.0",
    "timestamp": "ISO-8601"
  }
}
```
