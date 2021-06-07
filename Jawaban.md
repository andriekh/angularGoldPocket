### 1. 
dengan cara identifier, identifier adalah sebutan untuk nama, nama ini terdiri dari nama variabel, atau nama fungsi, example :
let x = 1
let y = 2

### 2.
konstanta adalah variabel yang nilainya bersifat tetap dan tidak dapat diubah sepanjang kode program, biasanya konstanta digunakan untuk nilai yang tidak akan berubah contohnya phi = 3.14 atau  22/7
const 
phi = 3.14 ;

### 3.
null = kondisi ketika variabel tidak memiliki nilai.value
undfined = variable yang sudah di deklarasikan tapi tidak berisi apa apa, alias kosong
### 4.  11
### 5. -1, -1
### 6. 1, 3
### 7. 2, 1
tadinya error karena menggunakan const, konstanta harusnya tidak bisa diubah 
### 8. 1, terjadi error karena pendeklarasian x diletakan sebelum let x, karena let pendeklarasian variabel
### 8.  
let dadu = Math.floor(Math.random() * (6)) + 1;
let dadu2 = Math.floor(Math.random() * (6)) + 1;
let hasil = dadu2-dadu

console.log(`Dadu 1 bernilai `+dadu)
console.log(`Dadu 2 bernilai `+dadu2)
console.log(`Selesih kedua nilai dadu ` +Math.abs(hasil))
### 9. 
let telurA = 24;
let telurB = 27;
let telurC = 56;
let telurD = 67;
let telurE = 73;

function print(string) {
    process.stdout.write(`${string}`);
  }

  function hitungTelur(telur) {
      let habisDibagi = Math.floor(telur/12)
      let sisaBagi = telur%12

console.log(`anda memiliki ${habisDibagi} lusin dan ${sisaBagi} sisa telur ${telur}` );
  }

  hitungTelur(telurA)
  
### 10.  
let telurA = 144;
let telurB = 1342;
let telurC = 4675;
let telurD = 8723;
let telurE = 9394;

function print(string) {
    process.stdout.write(`${string}`);
  }

  function hitungTelur(telur){
      let hitungGros = Math.floor(telur/144)
      let sisaBagiGros = telur%144
      let hitungHabisTelur = Math.floor(sisaBagiGros/144)
      let sisaModular = sisaBagiGros%144 

      console.log(`anda memiliki ${hitungGros} gros, ${sisaBagiGros} lusin, ${hitungHabisTelur}, jumlah telur ${telur}`);
  }

  hitungTelur(telurA)
  
  ### 11.  
  function deretBootcamp(n){
      for(let i=n; i>=1; i--){
          if(i%4===0 && i%6===0){
              process.stdout.write(`BOOTCAMP `)
          } else if(i%4===0){
              process.stdout.write(`BOOT `)
          } else if(i%6===0){
              process.stdout.write(`CAMP `)
          } else {
              process.stdout.write(`${i} `)
          }
      }
  }
  deretBootcamp(15)

### 12. 
function rightPiramyd(n){
    for (let i=1;i<=n;i++){
        for (let j=1;j<=i;j++){
            process.stdout.write(`${j} `)
        }
        process.stdout.write(`\n`);
    }
}
rightPiramyd(5)

### 13. 
function rightPiramyd(n){
    for (let i=1;i<=n;i++){
        for (let j=1;j<=i;j++){
            process.stdout.write(`${i} `)
        }
        process.stdout.write(`\n`);
    }
}
rightPiramyd(5)

### 14. 
let n = 5;
for (let x = 1; x <= 5; x++) {
  for (let y = n; y <= 5; y++) {
    process.stdout.write(`${n} `);
  }
  process.stdout.write(`\n`);
  n--;
}

### 15. 
function jajargenjang(n){
    for(let i = 0; i < n; i++) {   
        for(let k = n; k > i; k--) {     
            process.stdout.write(` `);
        }   
        for(let j = 0; j < n; j++) {     
            process.stdout.write(` *`); 
        }   
        process.stdout.write(`\n`);
    }
}
jajargenjang(5)

### 16.
function samakaki(i) {
    for (let i=1;i<=5;i++){
        for (let j=i;j<=5;j++){
            process.stdout.write(" ");
        }
        for (let k=1;k<=i;k++){
            process.stdout.write("*");
        }
        for (let l=1;l<=i-1;l++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

samakaki(10)

### 17.
function print(string) {
    process.stdout.write(`${string}`);
}

function println(string) {
    process.stdout.write(`${string}\n`);
}

let string = "kosong adalah isi, isi adalah kosong"
let reversed = " "

for (i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
}

process.stdout.write(reversed);

### 18.
let arrayA = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
let arrayB = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16] // 55
let arrayC = [8, 7, 6, 5, 4, 3, 2, 1] // 20
let arrayD = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7]

function penjumlahan(array) {
    hasil = 0
    for (i = 0; i <= array.length; i++) {
        if (array[i] % 2 == 0) {
            if(array[0] % 2 == 0) {
                hasil += array[i]
            }
        } else {
            if (array[0] % 2 != 0){
                hasil += array[i]
            }
        }
    }
    process.stdout.write(`${hasil} hasil dari ${array}`);
}
penjumlahan(arrayC)
