var enkripsi =
  "'1Afkt'02qv{ng'1F'00fkqrnc{'1Clmlg'00'1G'1Ac'02jpgd'1F'00jvvr'1C--3ngcpl,kp'00'1G'w2400'w2467'w246:'w2410'w2416'02'w2415'w2413'w2405'w240F'w24AA'02'w2411'w2405'w24AA'w240C'02'w246:'02'w240:'w2413'w2464'w2405'w2467'w2465'02'w2464'w246:'w24AA'w2411'w24AA'1A-c'1G'1A-fkt'1G";
teks = "";
teksasli = "";
var panjang;
panjang = enkripsi.length;
for (i = 0; i < panjang; i++) {
  teks += String.fromCharCode(enkripsi.charCodeAt(i) ^ 2);
}
teksasli = unescape(teks);
document.write(teksasli);
