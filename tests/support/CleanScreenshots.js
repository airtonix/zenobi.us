define([
  'intern/dojo/node!path',
  'intern/dojo/node!del',
], function(path, del) {

  return new Promise((resolve, reject) => {
    let directory = 'tests/screenshots';
    del(path.join(directory, '**/*'))
      .then(resolve)
      .catch(reject);
  });

});