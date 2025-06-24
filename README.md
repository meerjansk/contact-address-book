# contact-address-book

# About Project

Functional details:
Displays first 5 contacts from https://api.randomuser.me.
Each contact card display the profile picture, name, address and phone number of the contact.
Use pagination above / below the contacts to browse through remaining contacts (implemented pagination at client side as server returns random data on each request).
Use drop down at the top to switch between ascending and descending order of contacts. By default data will be displayed in ascending order.

Technical details:
Used Semantic HTML for better SEO and accessibility
Used Vue 3 and composition as the frontend framework
Integrated Jest for Unit Testing
Verified lint errors with Eslint
Verified code for performance, Accessibility, Best practices and SEO with chrome dev tools
Ignored performance as we cannot use CDN for images or improve API response which is not in scope of this assessment

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
