const myDate = new Date();
console.log(typeof myDate);
console.log(myDate);
console.log("--------------------toString--------------------");
console.log(myDate.toString());
console.log("--------------------toDateString--------------------");
console.log(myDate.toDateString());
console.log("--------------------toTimeString--------------------");
console.log(myDate.toTimeString());
console.log("--------------------toISOString--------------------");
console.log(myDate.toISOString());
console.log("--------------------toJSON--------------------");
console.log(myDate.toJSON());
console.log("--------------------toLocaleDateString--------------------");
console.log(myDate.toLocaleDateString());
console.log("--------------------toLocaleTimeString--------------------");
console.log(myDate.toLocaleTimeString());
console.log("--------------------toLocaleString--------------------");
console.log(myDate.toLocaleString());

//----------------------------------adding any date other than the now instance--------------------------------

//we can use any other date also in the new Date if we want, like we are declaring it below, here the list of
//arguments would be like this : new Date(YYYY,M,D,Min,sec,ms)

const otherDate = new Date(2025, 0, 25, 22, 10, 50);

console.log(otherDate.toLocaleString());

//adding date in a certain format of YYYY-MM-DD

const formattedDate = new Date("2023-01-23");
console.log(formattedDate.toLocaleString());

//Date.now - getting TimeStamp -This always comes in unit of ms compared from 01-01-1970

let TimeStamp = Date.now();
console.log(TimeStamp);

let myDeclaredDateTimeStampStart = new Date("1970-01-01").getTime();
console.log(myDeclaredDateTimeStampStart);

let myDeclaredDateTimeStamp = new Date("1977-01-01").getTime();
console.log(myDeclaredDateTimeStamp);

//current timestamp converted to seconds = in ms/1000

let TimeStampSec = Math.floor(Date.now() / 1000);
console.log(TimeStampSec);

//--------------function to get the Date and Time--------------

function getDate() {
  return (
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getFullYear()
  );
}

console.log(getDate());

//--------------------------some options of customizing calender-----------------------------------------

const today = new Date();
const formatttedDate = today.toLocaleString("default", {
  calendar: "gregory",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

console.log(formatttedDate);

const date1 = formatttedDate.toString().replaceAll("/", "-");
console.log(date1);
