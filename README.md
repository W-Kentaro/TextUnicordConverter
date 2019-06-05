# unicode converter

---

## DEMO

https://w-kentaro.github.io/TextUnicordConverter/

---

## Reverse Method

if Hexadecimal

```
const UCC = array => {
  let data = {
    prime: '',
    second: '',
    third: ''
  };
  for(let i = 0; i < array.length; i++){
    data.prime += `${parseInt(array[i], String.fromCharCode(49) + String.fromCharCode(54))},`; // Hexadecimal
  }
  data.second = data.prime.slice(0,-1);
  data.second = data.second.split(String.fromCharCode(44));
  for(let i = 0; i < data.second.length; i++){
    data.third += String.fromCharCode(Number(data.second[i]));
  }
  return data.third;
};
```
