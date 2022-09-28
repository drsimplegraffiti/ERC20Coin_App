#### Install packages

> npm install apollo-server graphql nodemon mongoose jsonwebtoken bcryptjs

---

#### Auth

#### User SignUp

```graphql
mutation ($username: String!, $email: String!, $password: String!) {
  userSignUp(username: "test", email: "test@gmail.com", password: "1234") {
    username
    email
  }
}
```

#### User SignIn

```graphql
mutation ($email: String!, $password: String!) {
  userSignIn(email: "", password: "") {
    token
  }
}
```

---

#### Get all coins

```graphql
query {
  coins {
    id
    name
    symbol
    price
    priceChange
    priceChangePercent
    marketCap
    volume
    circulatingSupply
    totalSupply
    maxSupply
    ath
    athChange
    athChangePercent
    athDate
    lastUpdated
  }
}
```

#### Create a new coin

```graphql
mutation {
  createCoin(
    name: "ETH"
    symbol: "E"
    price: 90
    priceChange: 6
    priceChangePercent: 1
    marketCap: 1
    volume: 0
    circulatingSupply: 2
    totalSupply: 199
    maxSupply: 100
    ath: 1
    athChange: 2
    athChangePercent: 2
    athDate: "2000-10-10"
    lastUpdated: "2001-10-10"
  ) {
    name
    symbol
    price
    priceChange
    priceChangePercent
    marketCap
    volume
    circulatingSupply
    totalSupply
    maxSupply
    ath
    athChange
    athChangePercent
    athDate
    lastUpdated
  }
}
```

#### Delete a coin

```graphql
mutation ($deleteCoinId: ID!) {
  deleteCoin(id: "6333c286ddb54c8d43a66510") {
    name
  }
}
```

#### Update a coin

```graphql
mutation ($updateCoinId: ID!) {
  updateCoin(
    id: "6333c3bafa63a1adb5a81a4c"
    name: "ETH Updated"
    symbol: "E"
    price: 90
    priceChange: 6
    priceChangePercent: 1
    marketCap: 1
    volume: 0
    circulatingSupply: 2
    totalSupply: 199
    maxSupply: 100
    ath: 1
    athChange: 2
    athChangePercent: 2
    athDate: "2000-10-10"
    lastUpdated: "2001-10-10"
  ) {
    name
    symbol
    price
    priceChange
    priceChangePercent
    marketCap
    volume
    circulatingSupply
    totalSupply
    maxSupply
    ath
    athChange
    athChangePercent
    athDate
    lastUpdated
  }
}
```

##### Get all coins

```graphql
query {
  coins {
    id
    name
    symbol
    price
    priceChange
    priceChangePercent
    marketCap
    volume
    circulatingSupply
    totalSupply
    maxSupply
    ath
    athChange
    athChangePercent
    athDate
    lastUpdated
  }
}
```

##### Create a single coin

```graphql
query {
  coin(id: "6333c286ddb54c8d43a66510") {
    id
    name
    symbol
    price
    priceChange
    priceChangePercent
    marketCap
    volume
    circulatingSupply
    totalSupply
    maxSupply
    ath
    athChange
    athChangePercent
    athDate
    lastUpdated
  }
}
```
