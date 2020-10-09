module.exports = function (git) {
    const prNumber = process.env.PR_NUMBER
    if (!prNumber) return

    return Promise.resolve().then(() => {
        return git.rm('pr/' + prNumber + '/**/*');
    });
}