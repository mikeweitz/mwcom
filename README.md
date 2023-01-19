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

To start NextJS node process
`pm2 start yarn --name "nextjs" --interpreter bash -- start`

To restart after deploying new files:
`pm2 restart nextjs`

## SSL cert

ssh into server to run certbot per domain - see note app for nginx block

Hosting specific details in Digitial Ocean docs on `certbot on ubuntu 18.04`

## fun stuff

Playlist date sorting
Background image hue-rotation filter on an interval hook
Said interval pauses when the document looses focus.
This is to prevent sudden color shifts when the user tabs away, we don't change the hue rotation.
