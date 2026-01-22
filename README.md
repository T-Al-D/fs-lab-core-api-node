# fs-lab-core-api-node

Core Node.js + TypeScript API for the fs-lab fullstack architecture.

**API Base URL:** https://fs-lab-core-api-node.onrender.com

## Purpose

This project serves as a minimal and extensible backend reference for experimenting
with API architecture, frontend integration, and deployment workflows.

## Tech Stack

- Node.js
- Express
- TypeScript

## API

Currently exposes a minimal health endpoint used for availability checks
and frontend integration testing:

GET /health  
Returns a simple status response.

## CI / Testing

This project uses GitHub Actions for Continuous Integration.
Automated tests are not implemented yet; however, the CI pipeline
is prepared and can be extended.

## Deployment

The service is automatically built and deployed via Render (Web Service) on every push to `main`.

Note: The API is hosted on Render’s free tier and may enter sleep mode after a period of inactivity.
The first request after inactivity can therefore experience a short delay (cold start).

## Status

Active development. Designed as a minimal, extensible API for fullstack experiments and integration testing.
