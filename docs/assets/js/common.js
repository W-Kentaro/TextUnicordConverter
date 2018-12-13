'use strict';

var Deconvert = function Deconvert(array) {
  var data = {
    prime: '',
    second: '',
    third: ''
  };
  for (var i = 0; i < array.length; i++) {
    data.prime += parseInt(array[i], String.fromCharCode(49) + String.fromCharCode(54)) + ','; //16進数
  }
  data.second = data.prime.slice(0, -1);
  data.second = data.second.split(String.fromCharCode(44));
  for (var _i = 0; _i < data.second.length; _i++) {
    data.third += String.fromCharCode(Number(data.second[_i]));
  }
  return data.third;
};

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
      hexadecimal += '\'' + Number(unicode[i]).toString(num) + '\',';
    }
    hexadecimal = hexadecimal.slice(0, -1);
    $('.hexadecimal_converted').val(hexadecimal);
    $('.hexadecimal_text').html('converted ' + num + '\u9032\u6570');
  });
});