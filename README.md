# TechPeople project - Next.js & Cypress.js

> Practice app for E2E Cypress and GitHub action testing
> App that connects IT tech with Nature 😎

## Full Stack App - Using Next.js, Next-auth.js, NextUI, Cypress.js, Node.js

### MongoDB setup

Setup local MongodDB or create MongodDB cluster
Connect it with the app with your MongoDB credentials
Installing & setup local MongoDB server tutorial - https://www.youtube.com/watch?v=FwMwO8pXfq0

### Env Variables

Add your config variables values in the .env.local file

- database variables
- OAuth credentials

### Install Dependencies

```
npm install
```

### Seed Database

Use the following commeand to put some dummy games in that database. Run it in the root folder.

```
npm run seed
```

## Getting Started

First, run the development server:

```
npm run dev
```

If using local MongoDB

```
mongod
```

## Testing

```
npm run cypress:open
```
