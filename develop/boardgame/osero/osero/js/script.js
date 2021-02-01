for (let i = 0; i < 8; i++) {
  // let jqer = $('.ban');
  // jqer.append('<tr class="y' + i + '"></tr>');
  for (let k = 0; k < 8; k++) {
    
  }
}


// for(var dan = 1; dan <= 9; dan++){
// 	for(var suji = 1; suji <= 9; suji++){
// 		var c = piece_board[board[dan][suji]].cloneNode(true); //駒画像の要素を複製
// 		c.style.left = 15 + ((suji - 1) * 46) + "px";         //位置を調節
// 		c.style.top = 13 + ((dan - 1) * 46) + "px"; 
// 		b.appendChild(c);                                //"board"に駒画像のノードを追加

// 		if(board[dan][suji] != EMPTY && board[dan][suji] != OUT_OF_BOARD){  //もしマスに駒があれば
		
// 			(function(){
// 				var _dan = dan, _suji = suji;    //danとsujiは1ずつ足されていくので覚えておく
// 				c.onclick = function(){   //クリックされたらこの関数が呼び出される
// 					(teban == BlackKoma(board[_dan][_suji]) && !PromotionWindowFlg) ? SelectSelfKoma(_dan,_suji) : SelectEnemyKoma(_dan,_suji);
// 				};
// 			})();
// 		}

// 		if(board[dan][suji] == EMPTY){    //もしマスに駒がなければ
// 			(function(){
// 				var _dan = dan, _suji = suji;
// 				c.onclick = function(){
// 					SelectEmptyCell(_dan,_suji);
// 					}
// 			})();
// 		}
// 	}
// 	}