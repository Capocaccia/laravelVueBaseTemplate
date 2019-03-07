## Laravel 5.8 + Vue 3 Application Template
### You will need to have a Homstead or Valet already set up to run this repo.

To get started: 

```
 Clone Repo
```

```
 In the directory root run: composer install
```

```
 Copy of the contents of the example env file to a .env file: 
 
 cp .env.example .env
```

```
 CD frontend
```

```
 Take a look at the vue.config.js file. 
 Change the dev server proxy to either the Valet URL of your app
 -OR-
 Change the dev server proxy to the IP address of your vagrant 
```

```
 Run the following command from the frontend directory:
 npm run serve
```

```
 In a web browser go to the localhost address output by the previous command
```

```
 Done.  Click the two buttons to make sure your proxy to your Laravel app is functional and get to work
```