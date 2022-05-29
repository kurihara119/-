//id="resut"の要素を取得
let result = document.getElementById("result");
//1回前に入力したものを判別 0:数字 1:演算子
let myFlg;

//数字を押した時
function numClick(terget){
  //数字を入力したので0
  myFlg = 0;
  //変数numberに押下した数字を入れる
  let number = terget.innerHTML;
  //.を入力
  if (number == "."){
    result.innerHTML = result.innerHTML + ".";
  //.以外の数字を入力
  }else {
    //表示値が0の場合
    if (result.innerHTML == "0") {
      result.innerHTML = number;
    //表示値が0以外場合
    }else {
      result.innerHTML += number;
    }
  }
}

//演算子を押した時
function operatorClick(terget){
  let operator = terget.innerHTML;
  //myFlgが数字かつ演算子が=以外の場合
  if (myFlg == 0 && operator != "="){
    //演算子を押したので1
    myFlg = 1;
    //演算子を表示
    result.innerHTML += operator;
  //myFlgが数字かつ演算子が=の場合
　}else if (myFlg == 0) {
    //演算子を押したが数字が残るので0。=の後もそのまま計算できる
    myFlg = 0;
    //表示されている計算式を処理したものを表示
    result.innerHTML = eval(result.innerHTML);
  }//myFlgが演算子の場合
}

//ACを押した時
function clearClick(terget){
  //0を表示
  result.innerHTML = 0;
}