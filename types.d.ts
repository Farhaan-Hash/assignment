type Description = {
  "bookId": number
  "id": number,
  "name": string,
  "author": string,
  "description": string,
  "author": string,
  "price": number,
  "discount": number,
}

type Book = {
  "id": number,
  pages:number,
  "name": string,
  "username": string,
  "discount": number,
  "email": string,
  "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
          "lat": string,
          "lng": string
      }
  },
  "phone": string,
  "website": string,
  "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
  }
}