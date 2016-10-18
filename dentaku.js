

var totalVal = 0;   // 計算中のトータルの値
var inputNumVal = "0";  // 数字のボタンの値(文字列扱い)
var beforeVal = ""; // 1つ前にクリックされたボタンの値(文字列扱い)
var operator = "";  // 数字の後にクリックされた記号ボタンの値(文字列扱い)



/* Elements */
var output = document.getElementById("output");
var type = document.getElementById("type");


function clickBtn(btnVal) {
    // --- クリックしたボタンの値が数字だった場合 ---
    if (!isNaN(btnVal)) {
        /*
           条件分岐：
           ・ 1つ前にクリックされたボタンの値(引数)が数字の場合
            条件分岐：
            ・ 数字のボタンの値が0だった場合
            -> 数字のボタンの値に、クリックしたボタンの値(引数)を上書き (01のようにしない)
            ・ 数字のボタンの値が0以外だった場合
            -> 数字のボタンの値に、クリックしたボタンの値(引数)を連結 (99のように連結)
           ・ そうでない場合(記号の場合)
          -> 数字のボタンの値に、クリックしたボタンの値(引数)を上書き
        */
        if (!isNaN(beforeVal)) {
          if (inputNumVal == "0") {
            inputNumVal = btnVal;
          } else {
            inputNumVal = "" + btnVal + btnVal;
          }

        } else {
          inputNumVal = btnVal;
        }

        /* 計算結果が表示されるdiv要素部分 に 数字のボタンの値(引数)を出力 */
        document.getElementById("output").innerText = inputNumVal;

    // --- クリックしたボタンの値が記号(文字列)だった場合 ---
    } else {
      /*
         条件分岐：
         数字の後にクリックされた記号ボタンの値が空の場合
         -> 計算中のトータルの値 に 数字のボタンの値を代入
         数字の後にクリックされた記号ボタンの値が空ではない場合
          条件分岐：
          1つ前にクリックされたボタンの値が数字の場合
            条件分岐：
            ・ クリックしたボタンの記号が = だった場合
            -> 記号ボタンの値 に 1つ前にクリックされたボタンの値を代入(後の出力のため)
            ・ クリックしたボタンの記号が = 以外だった場合
            -> 計算中のトータルの値 に eval関数を使って計算式を作って代入する
          　  　-> ヒント：　計算中のトータルの値 = eval(計算中のトータルの値 + 記号 + 数字のボタンの値);
            -> 計算結果が表示されるdiv要素部分 に 計算中のトータルの値を代入

          // 数字のボタンの値 を初期化する("0"を代入)
      */


      // 数字の後にクリックされた記号ボタンの値 = operator
      if (!operator) {
        totalVal = inputNumVal;
      } else {
        if (!isNaN(beforeVal)) {
          if (operator == "=") {
            operator = beforeVal;
          } else {
            totalVal = eval(totalVal + operator + inputNumVal);
          }
        }

        document.getElementById("output").innerText = totalVal;
      }

      /* 数字の後にクリックされた記号ボタンの値 = 引数 */
      operator = btnVal;

  }

  /* 演算子の記号が表示されるdiv要素部分 に 記号ボタン の値を代入 */
    
  /* 演算子が*だった場合、表示する記号を×に変更 */
  if (operator == "*") {
    document.getElementById("type").innerText = "×";
  } else {
    document.getElementById("type").innerText = operator;
  }

  /* 1つ前にクリックされたボタンの値 = 引数 */
  beforeVal = btnVal;

}

if (operator == "=") {
    /* 計算中のトータルの値を初期化 */
    /* 数字の後にクリックされた記号ボタンの値を初期化 */
    totalVal = 0;
    operator = "";
}



function clearAll() {
    
  /* 変数を初期値に戻して表示を初期化 */
  totalVal = 0;
  inputNumVal = "0";
  beforeVal = "";
  operator = "";

  document.getElementById("output").innerText = "0";
  document.getElementById("type").innerText = "";
}
