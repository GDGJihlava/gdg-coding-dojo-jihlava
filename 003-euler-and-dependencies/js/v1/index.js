function getDependencies(package) {

  var dependencies = package.dependencies || {};
  var packages = [];

  for(var key in dependencies) {
    packages.push(key);
    Array.prototype.push.apply(packages, getDependencies(dependencies[key]));
  }

  return packages;
}
