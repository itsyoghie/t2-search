// variable
var name = "Yoghie Lailahtul Iqbal"
var old = 87
var ras ="asia"

console.log('Nama Saya ' + name + 'usia saya' + old + 'Ras saya' + ras)

//operasi Aritmatika
var x = 60
var y = 20

console.log( 'x + y', x + y )
console.log( 'x - y',  x - y )
console.log( 'x / y', x / y )
console.log( 'x x y', x* y )

// array

var lokers = ['anton', 'siti', 'anita', 'doni', 'joko', 'dimas', 'john doe']

console.log(lokers[5])
console.log(lokers[6])

// cara mengetahu jumlah array
console.log(lokers.length)

// cara mencari nilai array yang teraki ketika tidak tau julah array
console.log(lokers[lokers.length - 1])

// perulangan array(lupping)

var usia = '18'
var uang = '50000'

if (uang == 50000 && usia >= 18 ) {
    console.log('Satu Botol Boy')
} 
else if (uang >= 100000 && usia >= 18) {
    console.log("Dua Botol Boy")
} 
else if (usia <= 18) {
    console.log("Pulang lah Boy nantik mamah marah")
}
else { //else tidak boleh ada kondisi
    console.log("Anda Kere boy")
}
//melakukan perulangan pada loker atau array
for(var i = 0; i<lokers.length; i = i + 1 ){
    console.log(lokers[i])
} 

//object (sama dengan array tapi tidak array)

var students = [
    {
        name: 'John doe',
        address: 'Padang Japang'
    },
    {
        name: 'Anita',
        address: 'Padang Japang'
    },
    {
        name: 'Dimas',
        address: 'Padang Manganti'
    },
]

console.log(students[0].name)

for (var i = 0; i < students.length; i = i + 1){
    console.log('Nama :', students[i].name)
    console.log('Alamat :', students[i].address)
}