
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds') //API load
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = (doglist) => {
    // console.log(doglist);
    const main = document.getElementById('main');
    console.log(main);
    //div ta inspact e peye gesi bhul thakle null show krto

}
