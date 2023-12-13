# Weitzly.com

NextJS App with a Spotify API integration and data from Google Sheets.

Since the Playlist are a subset of my user lists, the IDs are stored in Google Sheets, with list data retrieved on demand.

## Install

Clone the repo and run

```bash
nvm use # v16.19.0

# then
npm install
npm run dev
# or
yarn
yarn dev
```

## How to use

See the NextJS docs

## Build for production

```bash
npm run build
```

## Hosting

I used to run on an Ubuntu cloud server running Nginx, so there was a much more complicated CI/CD with Circle CI

I've singed migrated to AWS Amplify and it's wildly simple, cheap, and stable.

Both Develop and Main branches have Amplify apps connected.

Push branch to github:

-   MR to Develop
    -   Github actions push to Amplify development App
-   MR to Main
    -   Github actions push to production app
