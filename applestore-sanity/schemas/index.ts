import blockContent from './blockContent'
import category from './category'
// import post from './post'
// import author from './author'
import product from './product'
import { user, account } from "next-auth-sanity/schemas";


export const schemaTypes = [  blockContent, product, category , user, account]
