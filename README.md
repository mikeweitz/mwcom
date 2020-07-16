# Weitzly.com

Simple React site utilizing NextJS API endpoints. The Spotify playlist data isn't highly dynamic and I'm only pulling in specific lists, so the JSON data are bundled with the build. I'll srape new data from Spotify from time to time when I add new playlist IDs to the archive.

## Dependencies

[NextJS](https://nextjs.org/)
[Styletron](https://github.com/rtsao/styletron).

## Install

clone the repo and run

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## How to use

[NextJS with Styletron](https://www.styletron.org/getting-started/#with-nextjs)

## Build for production

```bash
npm run build
```

## Hosting

I host on an Ubuntu cloud server running Nginx.
There's a static Angular app on the same server, setup under it's onw Nginx block. This site needs NodeJS for the SSR/API, so there's an additional handoff of requests to the Node instance.

Ths instance is watched by PM2 so it doesn't just go dark if the process crashes.
