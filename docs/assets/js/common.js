'use strict';

$(window).on('load', function () {
  $('.unicode_convert').on('click', function () {
    var text = $('.unicode').val();

    var converted = '';
    for (var i = 0; i < text.length; i++) {
      converted += text.charCodeAt(i) + ',';
    }
    converted = converted.slice(0, -1);

    $('.unicode_converted').val(converted);
    $('.hexadecimal').val(converted);
  });
  $('.hexadecimal_convert').on('click', function () {

    var num = $('select[name="number"]').val();

    var unicode = $('.hexadecimal').val();
    unicode = unicode.split(',');

    var hexadecimal = '';
    for (var i = 0; i < unicode.length; i++) {
      hexadecimal += Number(unicode[i]).toString(num) + ',';
    }
    hexadecimal = hexadecimal.slice(0, -1);
    $('.hexadecimal_converted').val(hexadecimal);
    $('.hexadecimal_text').html('converted ' + num + '\u9032\u6570');
  });
});