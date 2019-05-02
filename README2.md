<h1 align="center">WEBPT2 AutoInvoicer App</h1>

<div align="center"><h2>Brought to you by:</h2>

<a href="#">Abdiel Fernandez</a>

<a href="#">Andrés Rivera Toro</a>

<a href="#">Dewayne Lindsay</a>

<a href="#">Jorge Osto</a>

<a href="#">Paul Apivat Hanvongse</a>

</div>

# MyAutoInvoicer

# Description

MyAutoInvoicer allows users to easily generate, track, analyze, save and send invoices to their customers. With our App, users can easily keep track of all invoices to understand all of their customers. MyAutoInvoicer helps small businesses ensure that sales turns into cashflow.

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
  - [Frontend Built Using](#frontend-built-using)
  - [Backend Built Using](#backend-built-using)
  - [Reasoning](#reasoning)
- [Security](#security)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Form Validation](#form-validation)
- [Testing](#testing)
- [Improving Performance](#improving-performance)
- [Installation Instructions](#installation-instructions)
  - [Environment Variables](#environment-variables)
  - [Using the Application](#using-the-application)
- [Contributing](#contributing)
- [Documentation](#documentation)
  - [Database](#database)
    - [Models](#models)
      - [Company Model](#company-model)
      - [Customer Model](#customer-model)
      - [User Model](#user-model)
      - [Invoice Model](#invoice-model)
      - [Item Model](#item-model)
  - [GraphQL](#graphql)
    - [Queries](#queries)
      - [On Company Model](#on-company-model)
      - [On Customer Model](#on-customer-model)
      - [On User Model](#on-user-model)
      - [On Invoice Model](#on-invoice-model)
      - [On Item Model](#on-item-model)
    - [Mutations](#mutations)
      - [Company Mutations](#company-mutations)
        - [Create Company](#create-company)
        - [Edit Company](#edit-company)
        - [Delete Company](#delete-company)
      - [Customer Mutations](#customer-mutations)
        - [Create Customer](#create-customer)
        - [Edit Customer](#edit-customer)
        - [Delete Customer](#delete-customer)
      - [User Mutations](#user-mutations)
        - [Create User](#create-user)
        - [Edit User](#edit-user)
        - [Delete User](#delete-user)
      - [Invoice Mutations](#invoice-mutations)
        - [Create Invoice](#create-invoice)
        - [Edit Invoice](#edit-invoice)
        - [Delete Invoice](#delete-invoice)
      - [Item Mutatons](#item-mutations)
        - [Create Item](#create-item)
        - [Edit Item](#edit-item)
        - [Delete Item](#delete-item)
  - [Stripe](#stripe)
  - [Free vs Premium](#free-vs-premium)
  - [Styles and Theming](#styles-and-theming)

## Tech Stack

### Frontend built using:

- React.js
- Material UI
- GraphQL
- Netlify

Deployed [here](https://www.myautoinvoicer.com)

### Backend built using:

- GraphQL
- MongoDB/Mongoose
- Node & Express

Deployed [here](https://www.myautoinvoicer.com)

### Reasoning:

- React.js / Context

  - We selected React as our frontend framework because we wanted a fast and efficient framework to help us manage many reusable components interacting with each other. We are using Context to allow us to manage state, without the setup required in Redux.

* Material UI

  - Our application targets small businesses so we wanted a styling framework that would be straight-forward, clean and minimal. Material UI allows us to style our application to give our users a professional experience.

- GraphQL

  - Our team has been excited to make this application with GraphQL from the start. We wanted to provide our users with a wealth of information regarding their invoices so we knew they would need to make multiple requests to the server. GraphQL allows us to query the data more efficiently. Moreover, data would change over time and editing queries and mutations in GraphQL is much simpler than rewriting REST endpoints.

* Netlify

  - Given that we were already experimenting with newer technologies on the backend (GraphQL, Mongoose), we wanted to deploy using a platform we were familiar with.

- GraphQL

  - We knew we wanted to provider users, busy business owners, with a seamless experience by making it easy for them to save and query customer and company data. Using GraphQL in lieu of REST has made the communication between client and server more efficient.

* MongoDB/Mongoose

  - We wanted a database that would allow us to store information as JSON objects for efficient querying. MongoDB allow our application to scale, if that is necessary in the future.

* Node & Express

  - We are with Node and Express and it works well with GraphQL.

---

# Security

### Authentication:

Our application has users authenticate with Google and Facebook Login. These are secure authentication systems that enabled our users, small business owners to sign in with their Google or Facebook account. As an added bonus, premium users will also to send information from the application to their Google accounts.

### Authorization:

Authorization is handled on the model level, with each model query checking to see if the requesting party is a free or premium user, restricting access certain privileges, and filtering responses to limit access to only those items the particular requesting party has created.

### Form Validation

Form validation is handled at the component level with Material-UI.

## Testing

TBD

## Improving Performance

TBD

# Installation Instructions

### Environment Variables

The `SECRET_KEY` needed include:

- `SESSION_SECRET`
- `COOKIE_SECRET`
- `GOOGLE_CLIENT_SECRET`
- `FACEBOOK_APP_SECRET_KEY`
- `STRIPE_SECRET`
- `STRIPE_CHECKOUT_SECRET_KEY`

### Using the application

The following APIs are needed:

- Postmark: `POSTMARK_API`
- TaxJar: `TAX_API`
- ZipCode: `ZIPCODE_API`, `CLIENT_KEY`
- Google Calendar: `CLIENT_ID`, `DISCOVERY_DOCS`, `SCOPES`

MongoDB Atlas:

- `DB_NAME`, `DB_USER`, `DB_PASSWORD`

Dependencies needed on Frontend:

- Material-UI/Core
- Material-UI/Icons
- Material-UI/Styles
- Material-UI/Labs
- Material-UI-Pickers
- Axios
- React
- React-Router-Dom
- Recharts
- Styled-Components
- React-Testing-Library

Dependencies needed on Backend:

- Node
- Express
- Express-GraphQL
- GraphQL
- Helmet
- Mongoose
- Passport

- Once you have those dependencies:
- Fork and clone repo
- Add environment variables to a `.env` folder at the root of the project folder. Please see [Environment Variables](#environment-variables) section for how to configure envrionment variables for this project. This file will be ignored by git unless you modify the .gitignore
  ...
- From there, run `yarn` or `npm install` command to install node_modules required for the project.
- Type `yarn start` to start the React application.
- Type `yarn run dev` to start the server.

# Contributing

(note: change links)

If you would like to contribute to the project, please see our <a href=".github/CONTRIBUTING.md">Contributing Guidelines</a> which include issue templates for submitting <a href=".github/ISSUE_TEMPLATE/feature_request.md">feature requests</a>, <a href=".github/ISSUE_TEMPLATE/bug_report.md">bug fixes</a>, and a template for submitting <a href=".github/pull_request_template.md">pull requests</a>.

Please read our <a href="CODE_OF_CONDUCT.md">Code of Conduct</a> before contributing!

# Documentation

### Models

#### Company Model

Fields added to Company model:

```
- name
- email
- phone_num
- country_code
- address_1
- address_2
- city
- state
- postal_code
- country
- unlimited_tier
- credits
- users
- customers
- invoices

```

#### Customer Model

Fields added to Customer model:

```
- name
- email
- phone_num
- country_code
- address_1
- address_2
- city
- state
- postal_code
- country
- companies
- invoices
```

#### User Model

Fields added to User model:

```
- email
- name
- phone_num
- companies
- invoices
- googleId
- facebookId
```

#### Invoice Model

Fields added to Invoice model:

```
- invoiceNumber
- invoiceDescription
- selectionDate
- invoiceDueDate
- company
- addressFrom
- cityTo
- stateTo
- zipCodeTo
- addressTo
- emailTo
- subtotal
- discount
- tax
- shipping
- total
- amountPaid
- balanceDue
- notes
- terms
- paid
- companyID
- companyName
- userID
- userName
- customerID
- invoiceItems
```

#### Item Model

Fields added to Item model:

```
- description
- quantity
- rate
- amount
```

## GraphQL

### Queries

#### On Company Model:

- company(companyID: `${companyID}`) query will search for a single company with id and return to the client with that company.
- `companies` query will return all companies

#### On Customer Model:

- customer(customerID: `${customerID}`) query will search for a single customer with id and return to the client with that customer.
- `customers` query will return all customers

#### On User Model:

- user(user: `${userID}`) query will search for a single user with id and return to the client with that user.
- `users` query will return all users

#### On Invoice Model:

- invoice(invoice: `${invoiceID}`) query will search for a single invoice with id and return to the client with that invoice.
- `invoices` query will return all invoices

#### On Item Model:

- TBD

### Mutations:

#### Company Mutations:

##### Create Company

```
const CreateCompany = async (companyInput, returnedData) => {
  const result = inputToString(companyInput)

  const CreateCompany = {
    query: `
      mutation {
        createCompany(companyInput: {${result}} ) {
          ${returnedData}
        }
      }
    `
  };

  const newCompany = await Post(CreateCompany)
  return newCompany.data.data
}
```

##### Edit Company

```
const EditCompany = async (companyID, editedData, returnedData) => {
editedData = inputToString(editedData)

    const EditCompany = {
      query: `
        mutation {
          editCompany(companyID: "${companyID}", editCompanyInput: {${editedData}}) {
            ${returnedData}
          }
        }
      `
    };

    const editedCompany = await Post(EditCompany)
    return editedCompany.data.data
}
```

##### Edit Company (Buy Plan or Credits)

```
const BuyPlanOrCredits = async (companyID, quantity, returnedData) => {
  const BuyPlanOrCredits = {
    query: `
      mutation {
        buyPlanOrCredits(companyID: "${companyID}", quantity: ${quantity}) {
          ${returnedData}
        }
      }
    `
  };

  const updatedCompany = await Post(BuyPlanOrCredits)
  return updatedCompany.data.data
}
```

#### Customer Mutations:

##### Create Customer

```
const CreateCustomer = async (customerInput, returnedData) => {
  const result = inputToString(customerInput);

  const CreateCustomer = {
    query: `
      mutation {
        createCustomer(customerInput: {${result}}) {
          ${returnedData}
        }
      }
    `
  };
  const newCustomer = await Post(CreateCustomer);
  return newCustomer.data.data;
};
```

##### Edit Customer

```
const EditCustomer = async (customerID, editedData, returnedData) => {
  inputToString(editedData);

  const EditCustomer = {
    query: `
      mutation {
        editCustomer(customerID: "${customerID}", editCustomerInput: {${editedData}}) {
          ${returnedData}
        }
      }
    `
  };
  const editedCustomer = await Post(EditCustomer);
  return editedCustomer.data.data;
};
```

##### Edit Customer (Add Customer to Company)

```
const AddCustomerToCompany = async (
  customerID,
  companyID,
  returnedData
) => {
  const AddCustomerToCompany = {
    query: `
      mutation {
        addCustomerToCompany(customerID: "${customerID}", companyID: "${companyID}") {
          ${returnedData}
        }
      }
    `
  };
  const returnedCustomer = await Post(AddCustomerToCompany);
  return returnedCustomer.data.data;
};

```

#### User Mutations:

##### Create User

```
const CreateUser = async (userInput, returnedData) => {
  inputToString(userInput)

  const CreateUser = {
    query: `
      mutation {
        createUser(userInput: {${userInput}} ) {
          ${returnedData}
        }
      }
    `
  };

  const newUser = await Post(CreateUser)
  return newUser.data.data
}
```

##### Edit User

```
const EditUser = async (userID, editedData, returnedData) => {
  editedData = inputToString(editedData)

    const EditUser = {
      query: `
        mutation {
          editUser(userID: "${userID}", editUserInput: {${editedData}}) {
            ${returnedData}
          }
        }
      `
    };

    const editedUser = await Post(EditUser)
    return editedUser.data.data
}
```

##### Edit User (Add User to Company)

```
const AddUserToCompany = async (userID, companyID, returnedData) => {
  const AddUserToCompany = {
    query:  `
      mutation {
        addUserToCompany(userID: "${userID}", companyID: "${companyID}") {
          ${returnedData}
        }
      }
    `
  }

  const returnedCompany = await Post(AddUserToCompany);
  return returnedCompany.data.data
}
```

#### Invoice Mutations:

##### Create Invoice

```
const CreateInvoice = async (invoiceInput, returnedData) => {
  const result = inputToString(invoiceInput);
  console.log("invoice input:", result);
  const CreateInvoice = {
    query: `
            mutation {
                createInvoice(invoiceInput: {${result}}) {
                    ${returnedData}
                }
            }
        `
  };
  console.log("create invoice", CreateInvoice);
  const newInvoice = await Post(CreateInvoice);
  console.log("new invoice", newInvoice);
  return newInvoice.data.data;
};
```

##### Edit Invoice

```
const EditInvoice = async (invoiceID, editedData, returnedData) => {
  editedData = inputToString(editedData);

  const EditInvoice = {
    query: `
            mutation {
                editInvoice(invoiceID: "${invoiceID}", editInvoiceInput: {${editedData}}) {
                    ${returnedData}
                }
            }
        `
  };
  const editedInvoice = await Post(EditInvoice);
  return editedInvoice.data.data;
};
```

##### Edit Invoice (Add Invoice to Company)

```
const AddInvoiceToCompany = async (
  invoiceID,
  companyID,
  returnedData
) => {
  const AddInvoiceToCompany = {
    query: `
            mutation {
                addInvoiceToCompany(invoiceID: "${invoiceID}", companyID: "${companyID}") {
                    ${returnedData}
                }
            }
        `
  };
  const returnedInvoice = await Post(AddInvoiceToCompany);
  return returnedInvoice.data.data;
};
```

#### Item Mutations:

##### Create Item

```
const CreateItem = async (itemInput, returnedData) => {
  const result = inputToString(itemInput);

  const CreateItem = {
    query: `
      mutation {
        createItem(itemInput: {${result}}) {
          ${returnedData}
        }
      }
    `
  };
  const newItem = await Post(CreateItem);
  return newItem.data.data;
};

```

##### Edit Item

```
TBD
```

##### Delete Item

```
TBD
```

## Stripe:

We are using Stripe in order to accept payments from users of the application. We are utilizing `stripe`, `passport-stripe` and `react-stripe-elements` in order to accomplish this. When the user completes checkout, a request is then sent to the server with BuyPlanOrCredits mutation and the type of subscription the user selected.

## Free vs Premium

Free users of the application are allowed to create unlimited invoices.

Premium plans cost \$6.00 per month. The perks of such a membership include unlimited invoices for unlimited companies and customers. Moreover users have the ability to save all company and customer data for future convenience.

## Styles and Theming

This project uses the Material Ui theme provider which cascades the defined theme down to all material ui components.

The theme choice is saved on localstorage and localstorage is checked for a theme choice on reload.