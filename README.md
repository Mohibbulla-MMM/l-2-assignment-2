# Express TypeScript MongoDB and mongoose project

This is an Express.js API built with TypeScript and MongoDB for managing products and orders. It includes endpoints for product management, order management, inventory management, and validation using Zod.

<hr/>

## Product Management

1. ### Create a New Product

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products`**
- **Method: `POST`**
- **Sample Request Body**:

```json
{
  "title": "Inception",
  "description": "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
  "releaseDate": "2010-07-16",
  "genre": "Thriller",
  "isDeleted": false,
  "viewCount": 0,
  "reviews": [
    {
      "email": "example1@example.com",
      "rating": 5,
      "comment": "One of the most mind-bending and visually stunning films I've ever seen!"
    },
    {
      "email": "example2@example.com",
      "rating": 4,
      "comment": "Impressive storyline and great performances, though a bit complex to follow."
    }
  ]
}
```

2. Retrieve a List of All Products

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products`**
- **Method: `GET`**

3. Retrieve a Specific Product by ID

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products/:productId`**
- **Method: `GET`**

4. Update Product Information

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products/:productId`**
- **Method: `GET`**
- **Sample Request Body**

5. Delete a Product

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products/:productId`**
- **Method: `DELETE`**

6. Search a product

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/products?searchTerm=iphone`**
- **Method: `GET`**
- **Search term matching name,tags,category or description**

<hr/>

## Order Management

1. Create a New Order

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/orders`**
- **Method: `POST`**
- **Simple Request Body**

```json
{
  "email": "level2@programming-hero.com",
  "productId": "5fd67e890b60c903cd8544a3",
  "price": 999,
  "quantity": 1
}
```

2. Retrieve All Orders

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/orders`**
- **Method: `GET`**

3. Retrieve Orders by User Email

- **Endpoint `https://assignment-2-nu-one.vercel.app/api/orders?email=level2@programming-hero.com`**
- **Method: `GET`**

# Error Handling/Message

- I am using your error messages.
- In some cases custom error messages are provided. Try sending a message to match the error
- `ZOD` validation error messages are all custom made or default

<hr>

<p style='text-align:center'>
     <i> feel free to contact me `rockychain1020@gmail.com`</i>
</p>
