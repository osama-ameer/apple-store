## Apple Store - NextJS, TypeScript, Sanity.io, Stripe API, Redux Toolkit, Tailwind CSS, SSR 

### Deployment
  - https://applestore-project.netlify.app/

### Initialize Next app with tailwind CSS by executing the following commnad
``` bash
npx create-next-app --example with-tailwindcss your-app-name
```
### Sanity.io
- Sanity.io is a CMS which is used as a Admin Panel to manipulate your website products.
- First install sanity cli
  ```bash
  npm install -g @sanity/cli
  ```
- Login in sanity 
  - create new project
  - Then run command
  ```bash
  sanity init
  ```
  - Select template for pre defined schemas and then make ammendmants according to your requirments
  - 
- Add this code into you root schema file in sanity to add users and account to your sanity studio with next auth

  ```bash
  import { user, account } from "next-auth-sanity/schemas";
  export const schemaTypes = [  blockContent, product, category , user, account]
  ```
  
 - To build and deploy your sanity project navigate to your sanity directory and run this commands
 - 
 ```bash
 sanity build
 ```
 ```bash
 sanity deploy
 ```
 
### .env.local
- NEXT_PUBLIC_BASE_URL = http://localhost:3000/
- NEXT_PUBLIC_SANITY_DATASET = production 
- NEXT_PUBLIC_SANITY_PROJECT_ID = 755u8o2l
- SANITY_API_TOKEN = 
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 
- STRIPE_SECRET_KEY = 
- STRIPE_SIGNING_SECRET = 
- GOOGLE_CLIENT_ID = 
- GOOGLE_CLIENT_SECRET = 
- NEXTAUTH_URL = http://localhost:3000/
- NEXTAUTH_SECRET = ffe20cef7eda4a136284bc1be9c7b639

- Set the origin in your sanity studio and google cloud console 

### Deploy Next App to Netlify
- Import Repo from GitHub
- set all env variables
- deploy !
 

