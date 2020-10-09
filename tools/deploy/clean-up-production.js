module.exports = function (git) {
    return Promise.resolve().then(() => {
        return git.rm('**/*', ':(exclude)pr/**/*');
    });
}