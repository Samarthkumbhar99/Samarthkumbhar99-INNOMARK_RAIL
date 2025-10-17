# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Canonical Host and QR resolver

The app generates QR codes that point to a canonical resolver URL (for example: `https://railwayscm.in/view/<COMPONENT_ID>`).

- Server-side API uses `CANONICAL_HOST` (server env) as the canonical host when constructing resolver URLs returned by `POST /api/components`.
- Client-side QR rendering prefers the `url` returned by the server, and falls back to `NEXT_PUBLIC_CANONICAL_HOST` (client env) or `https://railwayscm.in` if not set.

Environment variables (example):

```
CANONICAL_HOST=https://railwayscm.in
NEXT_PUBLIC_CANONICAL_HOST=https://railwayscm.in
```

If you run locally and want API calls to use local host for QR URLs, set these accordingly.

API endpoints added:

- `POST /api/components` — create a new component (server generates `CMP-YYYYMMDD-XXXX` id) and returns `{ id, url }`.
- `GET /api/components/[id]` — fetch component by `id`.

