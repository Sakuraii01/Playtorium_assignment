# Frontend 

### React + TypeScript + Vite

Pages
- Home : List of Product (item) this page has no fuction
- Login : have to add user in db first , use only Username to login
- Cart : the main function to call api to calculate the discount and product in cart

PATH of project
can check all path of project `/src/constant/path.route.ts`
path of API `/src/constant/api.route.ts`

Fetching API
`/src/service/*`

# Backend

### Nodejs + Express.js

use Prisma for ORM

example of configs of discount
- use json for config of discount because avoid to create new table for new type of discount
`/configs/discount.json`

# Database

### postgreSQL

Schema of db
`/prisma/schema.prisma`

Use Dockercompose for db server