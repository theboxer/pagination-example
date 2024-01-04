## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Steps to reproduce
- Delete any item on first page, the card will disappear
- Hit Load More and delete the item from the newly loaded page, the card will stay in the view

## Expected flow
- Card will disappear even from 2+ page