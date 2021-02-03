// falsy:
// 0
// ''
// undefined
// null
// NaN
// false

// truthy:
// ' '
// 4
// '0'
// []
// {}
// "false"
const name = 0;
if (name || name == 0) {
    console.log('condition is truth');
}else{
      console.log('condition is false');
}