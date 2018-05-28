# dotnet2018-vue
## VueJS

Modern web app on Azure with Typescript and VueJs.

An example application to list cities in the world and the weather in each of them.

<img src="https://i.imgur.com/wRAzxYi.png" width="600" title="Logo">

### Choose your favorite example
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/vue.png" width="125" title="Vuejs">](https://github.com/PlainConcepts/dotnet2018-vue/tree/vuejs)
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/nuxt.png" width="125" title="Nuxt">](https://github.com/PlainConcepts/dotnet2018-vue/tree/nuxtjs)

### Prerequisites

* [NodeJS](https://nodejs.org/es/) - The package manager to install dependencies
* [VSCode](https://code.visualstudio.com/Download) - To code the application
* [Git](https://git-scm.com/) - To get the code of the application

### Installing and Running

Install dependencies:

```
npm install
```

Run in development environment:

```
npm run start
```

Run in production environment:

```
npm run prod
```

## Deployment

Install **kuduscript** tool:

```
npm install kuduscript -g
```

Run to generate the two files needed for deployment ([.deployment](.deployment) and [deploy.cmd](deploy.cmd)):

```
kuduscript -y --node
```

Modify line 103 of the **.deploy.cmd** file to:

`call :ExecuteCmd !NPM_CMD! run prod`

Create a [web.config](web.config) file based on the following example [structure](https://github.com/projectkudu/kudu/wiki/Using-a-custom-web.config-for-Node-apps) and modify the **url** attribute in the **StaticContent** rule to link to your public folder.

```
<rule name="StaticContent">
    <action type="Rewrite" url="{publishing_directory}{REQUEST_URI}"/>
</rule>
```

where `{publishing_directory}` = your public folder

## Authors


| <img src="https://i.imgur.com/CcJ7vXL.jpg" width="150"><br>**Quique Fdez Guerra**<br>[👨‍💻](https://github.com/CKGrafico)[🌍](http://ckgrafico.com)[🐦](https://twitter.com/CKGrafico) | <img src="https://i.imgur.com/W8Ks7Ss.jpg" width="150"><br>**Juan Carlos**<br>[👨‍💻](https://github.com/jcarloslr10)[🌍](http://plainconcepts.com)[🐦](https://twitter.com/jcarloslr10)
| :---: | :---: |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details