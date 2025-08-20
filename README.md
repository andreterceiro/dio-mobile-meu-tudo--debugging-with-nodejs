# Repository related to the classes

[link](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/11-debug)


# Slides related to the classes

[link](https://hermes.dio.me/files/assets/fa353c56-279e-4fe8-a4d3-ef83fd0c3439.pptx)


# Steps of the first test

```sh
npm init -y
npm install -D typescript tsup tsx
echo "node_modules" > .gitignore
npx tsc --init
```

This will create the file tsconfig.json. Please see [this link](https://github.com/andreterceiro/dio-mobile-meu-tudo--how-to-configure-typescript-in-projects-node-js) to see what configurations you have to put in this file.

Teacher also suggested to add the configuration **type: "module"** to the file package.json.

As a second last step teacher suggested to create the file src/index.ts with this content

```
console.log("ola");
```

As the last step teacher suggested to create the script **start:dev** to initialize the application:

![script start:dev](images/script-start-dev.png)


# Running an application in debug mode through package.json (in VSCode)

![debbugging an application through package.json](images/debbugging-an-application-through-package-json.png)