$(document).ready(function(){
  menu()
  // slideInit()
  // slide()
  $('#slide_contents').bxSlider({
    auto:true,
    pause:2000,
    speed:1000,
    mode:'fade',
  })
  tab()
  popup()
})

function menu(){
  $('.gnb>li').hover(
    function(){
      // 마우스 올려놨을떄
      var index =$(this).index()
      // console.log(index)
      $('.gnb>li').eq(index).find('.lnb').stop().slideDown(250)
      // find함수 써서 선택한 영역의 내부에서 lnb class를 찾는다
      // -> gnb의 n번쨰 li중 class가 lnb인 태그를 슬라이드한다.
      // 중첩 방지를 위해 stop()해주고 슬라이드
    },
    function(){
      // 마우스 나갔을떄
      var index =$(this).index()
      $('.gnb>li').eq(index).find('.lnb').stop().slideUp(250)
    }
  )
}

function slide(){
  setInterval(slideFade,3000)
}
function slideInit(){
  $('#slide_contents>img').fadeOut(1000)
  $('#slide_contents>img').eq(i+1).fadeIn(1000)
}
let i = 0

function slideFade(){
  // 스르륵 사라졌다가, 스르륵 나온다, 번갈아가면서
  $('#slide_contents>img').eq(i).fadeOut(1000)
  if(i==2){
    $('#slide_contents>img').eq(0).fadeIn(1000)
    i=0
  }
  else{
    $('#slide_contents>img').eq(i+1).fadeIn(1000)
    i++
  }
  
}

function tab(){
  $('.tab_btn>a').click(function(){
    var index = $(this).index()
    // a의 인덱스 번호가 리턴됨.

    $('.tab_contents>div').hide()
    $('.tab_contents>div').eq(index).show()
  })
}

function popup(){
  $('.pop').click(function(){
    $('#popup').show()
  })
  $('#closeBtn').click(function(){
    $('#popup').hide()
  })
}