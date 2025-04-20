# Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier

### Other scripts

Docker steps
docker build -t mjw-app .
docker run -itd \
 --name mjw_app_container \
 --network mjw_network \
 -p 3000:3000 \
 mjw_app

TODO- Under / home page try to common/generalise all caraousel and cards
TODO- Under / home page try generalise style as there is dupicacy in tailwind css style applied all over section try to have them common

## Environment variables order(overridden as it goes from top to bottom)

- `.env`(mostly for local development)
- `.env.docker.mjwapp` (mostly for docker on oci where this file will be created via terraform)
- env from Docker Compose
