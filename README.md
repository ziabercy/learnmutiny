we are using [Next.js](https://nextjs.org/)

## Set up environment

clone the repo from whichever branch you are assigned or the tests branch with the 'edits' tag & your handle.
_ex. 'edits-routes-learnmutiny' branch_ if you were working on routing and you were 'learnmutiny'.

cd into the learnmutiny directory & run the development server:

```bash
# in the terminal
npm run dev

```

open http://localhost:3000

## Code Structure

if you are unfamilar with Next.js, in it's 13.5.2 verison our entire application is served from the app directory. This means that all of our routing and rendering will be traversed through these paths.

our public directory allows for us to store all assets we would need for our page, not including the leaf node files of our routes. this includes all componenets, hooks, and images that will be used throughout our website and application. _(Also note that our application and website will be hosted from the same directory as of learnmutiny β1.0.0)_
