const Deconvert = array => {
  let data = {
    prime: '',
    second: '',
    third: ''
  };
  for(let i = 0; i < array.length; i++){
    data.prime += `${parseInt(array[i], String.fromCharCode(49) + String.fromCharCode(54))},`; //16進数
  }
  data.second = data.prime.slice(0,-1);
  data.second = data.second.split(String.fromCharCode(44));
  for(let i = 0; i < data.second.length; i++){
    data.third += String.fromCharCode(Number(data.second[i]));
  }
  return data.third;
};


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

    let num = $('select[name="number"]').val();

    let unicode = $('.hexadecimal').val();
    unicode = unicode.split(',');

    let hexadecimal = '';
    for(let i = 0; i < unicode.length; i++){
      hexadecimal += `'${Number(unicode[i]).toString(num)}',`;
    }
    hexadecimal = hexadecimal.slice(0, -1);
    $('.hexadecimal_converted').val(hexadecimal);
    $('.hexadecimal_text').html(`converted ${num}進数`);
  });
});