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

## Solution with global state
- I chose jotai for global state implementation, but doesn't really matter
- The loadMore component uses global state vs local `useState`
- The delete button adjusts the global state and removes the rendered item (identified by it's key)
- First page is not in the global store and the item will be removed as usual (through the partial page refresh)