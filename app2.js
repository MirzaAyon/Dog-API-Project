
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds') //API load
        .then(res => res.json())
        .then(data => displayDog(data))
} //amra amdr code gulake ekta function er modhe niye ashchi
//json e pawa data gulake amra func e pass kore dichii
//data gula inspact e load hoyechee

const displayDog = (doglist) => {
    console.log(doglist);

}
//uporer func theke pathano data ei func e receive korlam
//inspact e dekhlam 10 no line theke data load hoise
//onclick func add kora hoise tai button e click korle data load hochee