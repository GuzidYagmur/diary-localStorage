let diary = [];
if(localStorage.diary){
    diary = JSON.parse(localStorage.diary);
}

const diarytxt = prompt("Günlüğünüze ne yazmak istersiniz?");
const diarydate = prompt("Yazdığınız tarihi giriniz. (DD.MM.YY formatında)");

diary.push({
    txt:diarytxt,
    date:diarydate
});

localStorage.diary= JSON.stringify(diary);
console.log(diary);