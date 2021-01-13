// 데이터
const userDataList = [
    { name: '곰', age: 18 },
    { name: '여우', age: 27 },
    { name: '사자', age: 32 },
    { name: '얼룩말', age: 41 },
    { name: '기린', age: 56 }
  ];
  
const buttons = document.getElementsByClassName('btn');

buttons.forEach(element => {
      element.item().addEventListener('click',(event) => {onPrint(event);});
});

function onPrint(event){
    const btn = event.target;
    
    const result = userDataList.filter((data) => data.age >= btn.dataset.age);
    let listHtml = '';

    for(const data of result){
        listHtml += `<li>${data.name} : ${data.age}</li>`;
    }

    document.getElementById('result').innerHTML = listHtml;
}