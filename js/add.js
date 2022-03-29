$(function(){
    var el = `<div class="box-note"><textarea placeholder="Sua anotação..."></textarea></div>`;
    $('.add-note').click(function(){
        $('.note').hide().fadeIn(500).append(el);

        var textArea = $('.box-note').last().find('textarea');
        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();

        var finalTime = hh+":"+mm;
        textArea.html("Nova anotação em: "+finalTime);
    })
})

