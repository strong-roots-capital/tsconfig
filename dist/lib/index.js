var fs = require('fs');
var path = require('path');

var projectFileName = 'tsproj.yml';

function getProjectsSync(pathOrSrcFile) {
    console.log(pathOrSrcFile);
    if (!fs.existsSync(pathOrSrcFile))
        throw new Error('Invalid Path');

    var dir = fs.lstatSync(pathOrSrcFile).isDirectory() ? pathOrSrcFile : path.dirname(pathOrSrcFile);

    var projectFile = '';
    while (fs.existsSync(dir)) {
        var potentialProjectFile = dir + '/' + projectFileName;
        if (fs.existsSync(potentialProjectFile)) {
            projectFile = potentialProjectFile;
        } else {
            dir = path.dirname(dir);
        }
    }

    return {
        projectFilePath: projectFileName,
        projects: []
    };
}
exports.getProjectsSync = getProjectsSync;

function getProjectsForFileSync(path) {
    return {
        projectFilePath: '',
        projects: []
    };
}
exports.getProjectsForFileSync = getProjectsForFileSync;

function createRootProjectSync(pathOrSrcFile, spec) {
    return;
}
exports.createRootProjectSync = createRootProjectSync;
