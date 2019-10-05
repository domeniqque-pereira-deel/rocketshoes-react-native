# Rocketshoes

## Bootcamp ReactNative Rocketseat

A simple tennis ecommerce made with React Native, Redux and Redux Saga. For learning purposes.

<table>
  <tr>
    <td><img src="./docs/home.png" width="250"/></td>
    <td><img src="./docs/home_alert.png" width="250"/></td>
    <td><img src="./docs/cart.png" width="250"/></td>
  </tr>
</table>

### Start Your Aplication

The aplication consumes a API to list products. You can start an fake api with your `json-server`.

Install `json-server`

> yarn add json-server -D

After, start your server to consume the file `db.json` in the project root:

> json-server db.json -p 3333 -w

Copy `.env.example` file to `.env` file and install the dependencies:

> `cp .env.example .env && yarn`

And run the project:

> `yarn ios` or `yarn android`
