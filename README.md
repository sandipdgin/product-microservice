# product-microservice

Product Microservice using Node.js and Express.js

# API Details

## Get all product

Request URL: http://localhost:3000/api/products
Method: GET

## Get product by Id

Request URL: http://localhost:3000/api/products/1207
Method: GET

## Create a product

Request URL: http://localhost:3000/api/products
Method: POST
Request Body:
{
name: "T-shirt",
price: 300,
description: "Half sleev and collar T-shirt with multiple colour", // not required
stock: 170,
}

## Update product using Id

Request URL: http://localhost:3000/api/products/1207
Method: PUT

Request Body:
{
name: "T-shirt",
price: 300,
description: "Half sleev and collar T-shirt with multiple colour", // not required
stock: 170,
}

## Delete product using Id

Request URL: http://localhost:3000/api/products/1207
Method: Delete
