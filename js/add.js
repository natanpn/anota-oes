$(function(){
    var el = `<div class="box-note"><textarea placeholder="Sua anotação..."></textarea></div>`;
    $('.add-note').click(function(){
        $('.note').hide().fadeIn(500).append(el);
    })
})

