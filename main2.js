// data
var students = [
    {
        nis : '170700801',
        name : 'Al-Azim',
        address : 'Padang Japang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700802',
        name : 'M.Lutfi',
        address : 'Tanjung Jati',
        moto : 'Ingin Membuat game',
        avatar : ''
    },
    {
        nis : '170700803',
        name : 'Khairul Mustafa',
        address : 'Mungka',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700804',
        name : 'Yoghie Lailahtul iqbal',
        moto : 'Ingin Menjadi Progamer',
        address : 'Jakarta',
        avatar : ''
    },
    {
        nis : '170700805',
        name : 'M.farid',
        address : 'Medan',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700806',
        name : 'Qolbiatul ',
        address : 'Taeh',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700807',
        name : 'widian sandiki',
        address : 'Talang Anau',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700808',
        name : 'Zandri',
        address : 'Limbanang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700809',
        name : 'Ridwan',
        address : 'Andiang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '17070090',
        name : 'Rehan',
        address : 'Padang Kandi',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '1707008901',
        name : 'Mizan',
        address : 'Suliki',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700902',
        name : 'Revan',
        address : 'Limbanang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700903',
        name : 'wafi',
        address : 'Tanjung Jati',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700904',
        name : 'Rizky F',
        address : 'Kubang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700905',
        name : 'Danol',
        address : 'Jauah',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700906',
        name : 'Rizky Ananda',
        moto : 'Ingin Menjadi Progamer',
        address : 'Kubang',
        avatar : ''
    },
    {
        nis : '170700907',
        name : 'Dika',
        address : 'Kubang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700908',
        name : 'Arif',
        address : 'Banje Laweh',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '170700909',
        name : 'Fuadi',
        address : 'Pincuran Botuang',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    },
    {
        nis : '1708000',
        name : 'Agustio',
        address : 'Ikan Banyak',
        moto : 'Ingin Menjadi Progamer',
        avatar : ''
    }
]

function cari() {
// ini untuk proses pencarian data ketika tombol di tekan    
    
var ketik = document.getElementById('search').value
for(var i = 0; i < students.length; i = i + 1){
    if (students[i].nis == ketik) {
        document.getElementById('tampilNama').textContent = 'Nama : '+ students[i].name
        document.getElementById('tampilAlamat').textContent = 'Alamat : ' + students[i].address
        document.getElementById('tampilMoto').textContent = 'Moto Belajar : ' + students[i].moto
    }
}
}