function getDependencies(tree) {
  // TODO.
  console.log('--- START ---'); 
 
  console.log(tree);
  
  if (tree && tree.hasOwnProperty('dependencies')) {
    let dependencies = tree.dependencies;
    return dependencies;
    console.log('--- START DEPENDENCIES ---');
    console.log(dependencies);
    console.log('---  END DEPENDENCIES  ---');
    
  } else {
    return [];
  }
  
 // let dependenies = tree.dependencies;
 // console.log('--- START DEPENDENCIES ---');
 // console.log(dependencies);
 // console.log('---  END DEPENDENCIES  ---');

  console.log('---  END  ---');
}

module.exports = getDependencies;
