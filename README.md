# generator-manati-theme

> [Yeoman](http://yeoman.io) generator to create a base Drupal 7 Theme developed by [Estudio Manatí](http://www.estudiomanati.com/)

## Note
This is a very new generator and needs some more testing and work, so please use at your own risk, PRs welcome.

## Install
To install generator-manati-theme from npm, run:

```bash
npm install -g generator-manati-theme
```

## Usage
Go to your Drupal `sites/all/themes/` folder and run

```bash
yo manati-theme
```

You'll have to provide a theme name and a description, you can use plain text for the name and we'll do everything else.

You'll get a nice Live Reload installed, served by grunt and understood by drupal to react to changes in your localhost dev enviroment.  You can opt out of this feature when you run the generator.

If you don't want yeoman to run npm install for you, use the `--skipInstall` option

```bash
yo manati-theme --skipInstall
```

## License

MIT
