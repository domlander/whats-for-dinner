## What's for dinner?

What's for dinner? is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) using [SASS](https://sass-lang.com/), [CSS Modules](https://github.com/css-modules/css-modules) and [Material-UI](https://material-ui.com/), which allows you to search for recipes given a list of ingredients. Gets data from a free-to-use public API.

For example, If you've bought a whole chicken and you want to use up the garlic and the mushrooms you have in your cupboard, this website will help you find recipes that feature all these ingredients.

## Running the application locally

First, clone or download the solution.

To be able to see results when running the application, you will need to sign up to a free account from [Edamam](https://developer.edamam.com/edamam-recipe-api). Fill in the form for the free developer tier, head to the [applications page](https://developer.edamam.com/admin/applications) and click "view" to see your Application ID and Application key which you will need for the next step.

Create a file in the root directory called `.env` and add the following to the file:

```
APPLICATION_ID="{YOUR_APPLICATION_ID}"
APPLICATION_KEY="{YOUR_APPLICATION_KEY}"
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
