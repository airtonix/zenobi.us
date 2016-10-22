define([
  'intern/dojo/node!fs',
  'intern/dojo/node!path',
  'intern/dojo/node!change-case',
  'intern/dojo/node!mkdirp',
], function(fs, path, changeCase, mkdirp) {

  class ScreenshotOnPass {

    constructor(config) {
      this.config = Object.assign({
        path: 'tests/screenshots'
      }, config);
    }

    save(test, buffer) {
      try {
        var folderName = changeCase.snakeCase(test.parent.name),
          fileName = changeCase.snakeCase(test.name),
          destination = path.join(this.config.path, folderName, `${fileName}-PASSED.png`);

        mkdirp(path.join(this.config.path, folderName), (err) => {
          if (err) {
            console.log(err);
          }
          fs.writeFileSync(destination, buffer);
        });

      } catch (err) {
        console.log(`Failed to take a screenshot: ${err}`);
      }

    }

    testPass(test) {
      return test.remote
        .takeScreenshot()
        .then((buffer) => this.save(test, buffer));
    }

  }

  return ScreenshotOnPass;
});