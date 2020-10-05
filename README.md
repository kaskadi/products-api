![](https://img.shields.io/github/package-json/v/kaskadi/products-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/products-api?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/products-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/products-api/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/products-api/build?label=build&logo=mocha)](https://github.com/kaskadi/products-api/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/products-api/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/products-api/actions?query=workflow%3Asyntax-check)

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

The following endpoints are defined in this API:
- [/{id}](#/{id})
- [/{id}](#/{id})
- [/search](#/search)
- [/{id}](#/{id})
- [/](#/)

## `/{id}` (target lambda → [delete-product](#delete-product)) <a name="/{id}"></a>

Supported methods:
- [DELETE](#DELETE)

### `DELETE`

**Description:**

This endpoint allows client to delete a specific product via its ID.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
DELETE /{id}
```

## `/{id}` (target lambda → [get-product](#get-product)) <a name="/{id}"></a>

Supported methods:
- [GET](#GET)

### `GET`

**Description:**

This endpoint allows client to retrieve data of a specific product via its ID.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /{id}
```

## `/search` (target lambda → [search-products](#search-products)) <a name="/search"></a>

Supported methods:
- [GET](#GET)

### `GET`

**Description:**

This endpoint allows client to perform a product search via a query. Results are paginated.

**Query string parameters:**

| Key | Default | Description                                                                                                                                                                                                         |
| :-: | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `p` |         | Request a specific page of the search results.                                                                                                                                                                      |
| `s` |   `10`  | Amount of search results returned per page.                                                                                                                                                                         |
| `q` |         | Query used to perform the product search. This follows [E]lasticSearch query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /search?p=p_value&s=s_value&q=q_value
```

## `/{id}` (target lambda → [save-product](#save-product)) <a name="/{id}"></a>

Supported methods:
- [POST](#POST)

### `POST`

**Description:**

This endpoint allows client to update data of a specific product via its ID. The request body should contain the new product data.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

|        Key        | Default | Description                                                 |
| :---------------: | :-----: | :---------------------------------------------------------- |
| `example-field-1` |         | A data field to write in the database for the given product |
| `example-field-N` |         | A data field to write in the database for the given product |

_Example request:_

```HTTP
POST /{id}

{
  "example-field-1": "example-field-1_value",
  "example-field-N": "example-field-N_value"
}
```

## `/` (target lambda → [products-root-handler](#products-root-handler)) <a name="/"></a>

Supported methods:
- [GET](#GET)
- [POST](#POST)
- [DELETE](#DELETE)

### `GET`

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product data retrieval.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /
```

### `POST`

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product data update.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
POST /
```

### `DELETE`

**Description:**

This endpoint is a fallback for when client forgets to provide an ID for product deletion.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
DELETE /
```

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

- `aws-es-client`, version: `^1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
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