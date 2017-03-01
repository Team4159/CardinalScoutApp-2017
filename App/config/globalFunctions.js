export const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = "";
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ch
  }
  return str;
}
export const dataKeys = (d) =>{
  var index = d.indexOf('dataSource');
  var newData = d.slice(0, index);
  return newData;
}
export const dataToRender = (d, id) =>{

  var renderData = d.find((value) =>{
    return value.id === id;
  }).data;
  return renderData;
}
export const csv = (d, uid, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = uid + ',';
  for(var i = 0; i < names.length; i++){
    str += data[i] + ch
  }
  return str;
}
