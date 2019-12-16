
# One UI Web

**One UI Web** is a framework inspired by the Samsung One UI Interface.

The goal is simplify the creation of mobile web apps with the **One UI’s** user experience, as well as to optimise your web apps for Samsung mobile.

**One UI** aims to ensure a consistent user experience within a single device and also a unified user experience among different mobile devices. Even if the user’s new device runs on a different platform, they can be provided with the user experience optimised for the device.

**One UI** is built to to help you focus on what really matters, with hardware and software working in harmony to bring you what you need right when you need it.

## Installation / Usage

### Using the CDN
Here is a premade template that you can use to quickstart a project with One UI Web
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, world!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/samsunginternet/OneUI-Web/oui-css/oui.css">
  </head>
  <body>
    <main class="container">
      <div class="oui-viewing">
          <!-- Viewing area -->
      </div>
      <div class="oui-interaction">
          <!-- Interaction area -->
      </div>
    </main>
  </body>
</html>
```
[learn more about setting up One UI Web with a CDN](https://oneuiweb.dev/#/getting-started/quickstart)

### Using the source

1. Get One UI Web
	* ```git clone https://github.com/SamsungInternet/OneUI-Web.git``` 
	* [Download the latest release](https://github.com/SamsungInternet/OneUI-Web/releases/latest)
2. Add the `one-ui` folder to your project files
3. Include the CSS in your project

Please also check the **Getting started** part in the documentation: https://oneuiweb.dev/#/getting-started/quickstart


## Documentation

We've built a beautiful documentation just for you: https://oneuiweb.dev

This documentation is using [DocsifyJS](https://github.com/docsifyjs/docsify).
You can also run it locally by following the steps bellow.

* Install docsify ```npm i docsify-cli -g```
* Run the local server with  ```docsify serve``` in the gh-page branch
* Finnaly can preview the documentation in your browser on `http://localhost:3000`

## Bugs and feature request 

Found a Bug ? Have a feature request ?
You can [open a new issue](https://github.com/SamsungInternet/OneUI-Web/issues/new) and we will try our best to fix it.

Don't forget that you can also contribute <3

## Contributing

Pull requests are welcome :)
For major changes, please open an issue first to discuss what you would like to change.


## MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices.
Licensed works, modifications, and larger works may be distributed under different terms and without source code.

See the **[LICENSE](https://github.com/SamsungInternet/OneUI-Web/blob/master/LICENSE)** file to learn more.
