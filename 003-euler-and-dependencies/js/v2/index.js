function getDependenciesWithVersion(dependencies) {
  dependencies = dependencies ||  {};
  var retArray = [];

  for (var key in dependencies) {
    var version = dependencies[key].version;
    retArray.push(key + "@" + version);
  }

  return retArray;
}

function getDependencies(package) {
  var result = getDependenciesWithVersion(package.dependencies);

  for (var key in package.dependencies) {
    var subPackage = package.dependencies[key];
    result = result.concat(getDependencies(subPackage));
  }

  return result;
}
