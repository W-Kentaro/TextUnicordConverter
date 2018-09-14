$(window).on('load', () => {
  $('.unicode_convert').on('click', () => {
    let text = $('.unicode').val();

    let converted = '';
    for(let i = 0; i < text.length; i++){
      converted += `${text.charCodeAt(i)},`;
    }
    converted = converted.slice(0, -1);

    $('.unicode_converted').val(converted);
    $('.hexadecimal').val(converted);
  });
  $('.hexadecimal_convert').on('click', () => {
    let unicode = $('.hexadecimal').val();
    unicode = unicode.split(',');

    let hexadecimal = '';
    for(let i = 0; i < unicode.length; i++){
      hexadecimal += `${Number(unicode[i]).toString(16)},`;
    }
    hexadecimal = hexadecimal.slice(0, -1);
    $('.hexadecimal_converted').val(hexadecimal);
  });
});