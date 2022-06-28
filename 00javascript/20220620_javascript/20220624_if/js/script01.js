var userInput = prompt("가위,바위,보를 입력하세요")
console.log(userInput)

if(userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위,바위,보 중 하나를 입력하세요")
}else{
    //가위,바위,보를 넣으면 실행
    var num = Math.floor(Math.random()*10); //Math.random() 난수(0~1값)
    console.log(num)                        //math.floor() 소수점 버림

    var comInput = "";
    var result = "";

    //comInput
    if(num < 3){
    comInput = "가위";
    }else if(num < 6){
    comInput = "바위";
    }else{
    comInput = "보"
    }

    //result
    if(userInput == "가위"){
        if(comInput == "가위"){
            result = "비김";
        }else if(comInput == "바위"){
            result = "컴 이김"
        }else{
            result = "내가 이김"
        }
    }else if(userInput == "바위"){
        if(comInput == "가위"){
            result = "내가 이김";
        }else if(comInput == "바위"){
            result = "비김"
        }else{
            result = "컴 이김"
        }
    }else{//여기는 보
        if(comInput == "가위"){
            result = "컴 이김";
        }else if(comInput == "바위"){
            result = "내가 이김"
        }else{
            result = "비김"
        }
    }


console.log("내꺼 : " + userInput)
console.log("컴 : " + comInput)
console.log("결과 : " + result)
}

