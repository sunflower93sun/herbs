$(function(){

   /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.menu-button').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });

  function hamburger() {
  
    $('.menu-button').toggleClass('active');
  
    if ($('.menu-button').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加
      $('#navi').addClass('active');
    } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除
      $('#navi').removeClass('active');
    }
  }

  /*=================================================
  スライド
  ===================================================*/

  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
 
 /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/

  $(window).scroll(function(){
    $('.fadein').each(function(){
    // スクロールした距離
    let scroll =$(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinの要素が画面の下まできて200px通過したタイミングで要素を表示
     if(scroll > target - windowHeight + 300) {
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
     } 
    });
  });
});


