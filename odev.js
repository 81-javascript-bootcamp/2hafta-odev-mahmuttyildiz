/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

const car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}

const myCarDetails = car.displayDetails;
myCarDetails.call(car)



/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  if (typeof name !== "string") return false;
  if (name.length === 0 || name.length === 1 || Number(name) === 0) return false;
  const splittedArray = name.trim().split(" ")
  return !splittedArray.some(item => item.length === 1);
}



/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: "dystopian",
  year: "1932",
  bookSentence: function () {
    console.log(`${this.title} was written by ${this.author}. It is a ${this.genre} novel written in ${this.year}.`)
  }
}

const summary = (genre, year) => {
  const books = book.bookSentence;
  books.call(book);
  return books;
}

summary();




