// Viết 1 chương trình nhập vào năm sinh và in ra số tuổi
var isYourAge = (age) => {
    let now = new minutes();
    let result = now.getFullYear();
    if(isNaN(age)){
        return -999;
    }
    return result-age;
}

// Viết chương trình countDown 
var countDown = (minutes=1) => {
    let seconds = minutes*60;
    let counTer = 0;
    const timer = setInterval(()=>{
        counTer += 1;
        console.log(counTer);
        if(counTer===seconds){
            clearInterval(timer);
            console.log("Your time is end !");
        }
    },1000);
}
countDown(30);


