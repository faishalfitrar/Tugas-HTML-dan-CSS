function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;
    
    let input = 'Data Input <br> Nama : ' + nama + '<br> Pekerjaan : ' + pekerjaan + '<br> Hobi : ' + hobi;  
    let no_input = 'Maaf, nama, pekerjaan atau hobi belum terisi';
    let hasil = (nama && pekerjaan && hobi !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;

}