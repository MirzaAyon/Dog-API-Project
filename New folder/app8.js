
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds') //API load
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = (doglist) => {
    // console.log(doglist);
    const main = document.getElementById('main');
    // console.log(main);
    //div ta inspact e peye gesi bhul thakle null show krto

    //172 tar modhe 20 ta data nibo ei jonno slice use krbo

    const first20data = doglist.slice(0, 20);
    // console.log(first20data);
    //20 ta data show kortese
    // const div = document.createElement('div');
    // console.log(div);
    //hae inspact e div ta create hoise
    //div take 1 bar create korle hbe na karon 20 ta data ache tai eke for loop er vitore create krbo
    for (const dog of first20data) {
        // console.log(dog);
        //inspact e prottekta data ke loop kore ber kore ante parsi
        //data gula object akare ache 
        // console.log(dog.name);
        //shob gula name show korse

        //ekhn div er modhe data gulake dekhabo
        const div = document.createElement('div');
        div.className = 'col-lg-4 ';
        //class created

        // console.log(dog.name);
        // console.log(dog);
        // console.log(dog.image.url);
        // console.log(dog.temperament);
        // console.log(dog.weight.imperial);
        // console.log(dog.image);
        div.innerHTML = `
        <h2>${dog.name}</h2>
        <p> ${dog.temperament} </p>
        <h4>${dog.weight.imperial} </h4>
        

        <img width = "400px" height = "250px" src="${dog.image.url}" />
        `
        console.log(div); //button e click korle dekha jabe div gulake pachee
        main.appendChild(div);//ekta khali dog show krbe 
        //html er vitore js likar jonoo templete string ta nilam


    }

}
//use of slice

// const arr = [2, 3, 4, 5, 6, 7];
// arr.slice(0, 3);
// console.log(arr); //2,3,4 show korbe
