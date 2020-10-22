![](https://img.shields.io/github/package-json/v/kaskadi/products-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/products-api?color=blue)

**GitHub Actions workflows status**

[![Deploy status](https://img.shields.io/github/workflow/status/kaskadi/products-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/products-api/actions?query=workflow%3Adeploy)
[![Build status](https://img.shields.io/github/workflow/status/kaskadi/products-api/build?label=build&logo=mocha)](https://github.com/kaskadi/products-api/actions?query=workflow%3Abuild)
[![Syntax check status](https://img.shields.io/github/workflow/status/kaskadi/products-api/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/products-api/actions?query=workflow%3Asyntax-check)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/products-api/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/products-api/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/products-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/products-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/products-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/products-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/products-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/products-api)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/products-api?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/products-api/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The origin and root path for this API is: `https://api.klimapartner.net/products`

The following endpoints are defined in this API:
- [/](#/)
- [/search](#/search)
- [/{id}](#/{id})

## `/` <a name="/"></a>

Supported methods:
- [GET](#/-GET)
- [POST](#/-POST)
- [DELETE](#/-DELETE)

### `GET` (target lambda → [products-root-handler](#products-root-handler)) <a name="/-GET"></a>

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product data retrieval.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/products/

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  400

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Path parameter for product ID missing... (/products/{id})"
  }
```
</details>

### `POST` (target lambda → [products-root-handler](#products-root-handler)) <a name="/-POST"></a>

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product data update.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
POST https://api.klimapartner.net/products/

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  400

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Path parameter for product ID missing... (/products/{id})"
  }
```
</details>

### `DELETE` (target lambda → [products-root-handler](#products-root-handler)) <a name="/-DELETE"></a>

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product deletion.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
DELETE https://api.klimapartner.net/products/

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  400

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Path parameter for product ID missing... (/products/{id})"
  }
```
</details>

## `/search` <a name="/search"></a>

Supported methods:
- [GET](#search-GET)

### `GET` (target lambda → [search-products](#search-products)) <a name="search-GET"></a>

**Description:**

This endpoint allows client to perform a product search via a query. Results are paginated.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

| Key | Default | Description                                                                                                                                                                                                        |
| :-: | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `p` |         | Request a specific page of the search results.                                                                                                                                                                     |
| `s` |   `10`  | Amount of search results returned per page.                                                                                                                                                                        |
| `q` |         | Query used to perform the product search. This follows [ElasticSearch query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/products/search?p=1&s=50&q=*

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  In here will be an array (Object[]) which reflects the 50th to 100th products found (p=1&s=50) while searching for all products (q=*).
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/products/search?p=1&s=50

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  400

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Query string parameter q is missing... Please provide a valid query for your search."
  }
```
</details>

## `/{id}` <a name="/{id}"></a>

Supported methods:
- [DELETE](#{id}-DELETE)
- [GET](#{id}-GET)
- [POST](#{id}-POST)

### `DELETE` (target lambda → [delete-product](#delete-product)) <a name="{id}-DELETE"></a>

**Description:**

This endpoint allows client to delete a specific product via its ID.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
DELETE https://api.klimapartner.net/products/valid_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Product with ID valid_id successfully deleted!"
  }
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
DELETE https://api.klimapartner.net/products/non_existant_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  404

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Product not found..."
  }
```
</details>

### `GET` (target lambda → [get-product](#get-product)) <a name="{id}-GET"></a>

**Description:**

This endpoint allows client to retrieve data of a specific product via its ID.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/products/valid_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "product-data-1": "some product data",
    "product-data-2": "another product data field",
    "product-data-N": "the last field of data for this product"
  }
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/products/non_existant_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  404

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Product not found..."
  }
```
</details>

### `POST` (target lambda → [save-product](#save-product)) <a name="{id}-POST"></a>

**Description:**

This endpoint allows client to update data of a specific product via its ID. The request body should contain the new product data.

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

|        Key        | Default | Description                                                 |
| :---------------: | :-----: | :---------------------------------------------------------- |
| `example-field-1` |         | A data field to write in the database for the given product |
| `example-field-N` |         | A data field to write in the database for the given product |

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
POST https://api.klimapartner.net/products/product_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN

Body:
  {
    "product-data-1": "some product data",
    "product-data-2": "another product data field",
    "product-data-N": "the last field of data for this product"
  }
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Product with ID product_id successfully saved!"
  }
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
POST https://api.klimapartner.net/products/product_id

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  400

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Request body missing: no product data to save..."
  }
```
</details>

# API resources

The following lambda functions are used in this API:
- [delete-product](#delete-product)
- [get-product](#get-product)
- [search-products](#search-products)
- [save-product](#save-product)
- [products-root-handler](#products-root-handler)

The following layers are used in this API:
- [products-api-layer](#products-api-layer)

## delete-product <a name="delete-product"></a>

|      Name      | Sources                | Timeout |                        Handler                        | Layers                                                      |
| :------------: | :--------------------- | :-----: | :---------------------------------------------------: | :---------------------------------------------------------- |
| delete-product | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/delete-product/delete-product.js) | <ul><li>[products-api-layer](#products-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## get-product <a name="get-product"></a>

|     Name    | Sources                | Timeout |                     Handler                     | Layers                                                      |
| :---------: | :--------------------- | :-----: | :---------------------------------------------: | :---------------------------------------------------------- |
| get-product | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/get-product/get-product.js) | <ul><li>[products-api-layer](#products-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## search-products <a name="search-products"></a>

|       Name      | Sources                | Timeout |                         Handler                         | Layers                                                      |
| :-------------: | :--------------------- | :-----: | :-----------------------------------------------------: | :---------------------------------------------------------- |
| search-products | <ul><li>HTTP</li></ul> |   30s   | [handler](./lambdas/search-products/search-products.js) | <ul><li>[products-api-layer](#products-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## save-product <a name="save-product"></a>

|     Name     | Sources                | Timeout |                      Handler                      | Layers                                                      |
| :----------: | :--------------------- | :-----: | :-----------------------------------------------: | :---------------------------------------------------------- |
| save-product | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/save-product/save-product.js) | <ul><li>[products-api-layer](#products-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## products-root-handler <a name="products-root-handler"></a>

|          Name         | Sources                                          | Timeout |                               Handler                               | Layers                                                      |
| :-------------------: | :----------------------------------------------- | :-----: | :-----------------------------------------------------------------: | :---------------------------------------------------------- |
| products-root-handler | <ul><li>HTTP</li><li>HTTP</li><li>HTTP</li></ul> | default | [handler](./lambdas/products-root-handler/products-root-handler.js) | <ul><li>[products-api-layer](#products-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## products-api-layer <a name="products-api-layer"></a>

### Description

Layer for products-api

### Dependencies

- `aws-es-client`, version: `1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
- `products-api-utils` (local utility)

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value        |
| :----------- | :----------- |
| app          | kaskadi      |
| service      | products-api |
| logical-unit | products     |
| type         | http         |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->