var recipes = {prop: "1"}

function updateObjectWithKeyAndValue(obj,key,value) {
  
  return Object.assign({}, obj, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}