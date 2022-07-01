// console.log('connected');
// for testing
fetch('https://api.thedogapi.com/v1/breeds') //API load
    .then(res => res.json()) //.then method ta API theke je response ashe take json e convert kore 
    .then(data => console.log(data)) //json e convert korar por je data gula pelam shegulake console log kore dekhlam 
    //inspact korle ekta response pachii