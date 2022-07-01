
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
    const div = document.createElement('div');
    // console.log(div);
    //hae inspact e div ta create hoise
    for (const dog of first20data) {
        console.log(dog);
        //inspact e prottekta data ke loop kore ber kore ante parsi
        //data gula object akare ache 


    }

}
