let frm = document.getElementById('karyawan');

let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilihan Jabatan -----</option>`;

let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilihan Status -----</option>`;

for (let p in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[p]}">${jabatanPilihan[p]}</option>`;
}

for (let p in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[p]}">${statusPilihan[p]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;

function ambil(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gaji;

    //tunjangan

    if (jabatan == 'Manager') gaji = 15000000;
    else if(jabatan == 'Asisten Manager') gaji = 10000000;
    else if(jabatan == 'Staff') gaji = 5000000
    else diskon = 0.1 * hargaKotor;

    let tunjangan = 0.15 * gaji;
    let bpjs = 0.1 * gaji;
    let tuker = (status == 'Menikah') ? 0.2 * gaji : 0;

    let totalgaji = gaji + tunjangan + bpjs + tuker;

swal(`
        Nama Pegawai : ${nama} 
        Jabatan : ${jabatan} 
        Statis : ${status}
        Gaji Pokok : Rp ${gaji}
        Tunjangan Jabatan : Rp ${tunjangan}
        Tunjangan BPJS : Rp ${bpjs}
        Tunjangan Keluarga : Rp ${tuker} 
        Total Gaji : Rp ${totalgaji}
    `);
}