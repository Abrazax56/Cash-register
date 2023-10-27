
const kasir = document.forms['kasir'];
const $kasir = document.forms['kasir'];
const tambah = document.querySelector('.tambah');
const input = document.querySelector('.inputny');
const li = document.querySelector('.detail');
const submit = document.querySelector('.submit');
const sabmit = document.querySelector('.sabmit');
const tanggal = document.querySelector('.tanggal');
const satu = document.querySelector('.satu');
const dua = document.querySelector('.dua');
const subjumlah = document.querySelector('.subjumlah');
dua.style.display = 'none';



submit.style.display = 'none';
//membuat form baru saat tombol tambah di klik
sabmit.addEventListener('click', () => {
  const $year = new Date().getFullYear();
  const $month = new Date().getMonth();
  const $date = new Date().getDate();
  const $hour = new Date().getHours();
  const $minute = new Date().getMinutes();

  const $time = `${$date}-${$month}-${$year} ${$hour}:${$minute}`;
  tanggal.innerHTML = `time : ${$time}`;
  const $nilaiNama = document.querySelector('.namany');
  const $nilaiJumlah = document.querySelector('.jumlah2');
  const $nilaiHarga = document.querySelector('.harga2');
  const $total = document.querySelector('.total');
  const $uang = document.querySelector('.uang');
  const $uang2 = document.querySelector('.uang2');
  const $kembalian = document.querySelector('.kembalian');
  const $namaBarang = document.querySelector('.nama');
  const $jumlahBarang = document.querySelector('.jumlah');
  const $hargaBarang = document.querySelector('.harga');
  const $select = document.querySelector('select');
  const $textNama = document.createTextNode($namaBarang.value);
  $nilaiNama.appendChild($textNama);
  $nilaiJumlah.innerHTML = `${$jumlahBarang.value} ${$select.value}`;
  $nilaiHarga.innerHTML = `Rp, ${$hargaBarang.value}`;
  $uang2.innerHTML = `Rp, ${$uang.value}`;
  const $hasil = $jumlahBarang.value * $hargaBarang.value;
  $total.innerHTML = `Rp, ${$hasil}`;
  $kembalian.innerHTML = `Rp, ${$uang.value - $hasil}`;
  dua.style.display = 'flex';
  satu.style.display = 'none';
  kasir.reset();
});
tambah.addEventListener("click", () => {
  submit.style.display = 'inline';
  sabmit.style.display = 'none';
  const addElement = {
    sub: [ document.createElement('div'), document.createElement('div'), document.createElement('div') ],
    label: [ document.createElement('label'), document.createElement('label'), document.createElement('label') ],
    formInput: [ document.createElement('input'), document.createElement('input'), document.createElement('input') ],
    Detail: document.createElement('div'),
    detail: [ document.createElement('div'), document.createElement('div'), document.createElement('div') ],
    select: document.createElement('select'),
    option: [ document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'), document.createElement('option'),  ]
  };
  addElement.label[0].innerHTML = 'Enter the Item Name : ';
  addElement.label[1].innerHTML = 'Enter the number of items : ';
  addElement.label[2].innerHTML = 'Enter Price (Rp) : ';
  addElement.formInput[0].classList.add('nama');
  addElement.formInput[1].classList.add('jumlah');
  addElement.formInput[2].classList.add('harga');
  addElement.formInput[0].setAttribute('type', 'text');
  addElement.formInput[1].setAttribute('type', 'number');
  addElement.formInput[2].setAttribute('type', 'number');
  addElement.option[0].innerHTML = 'stp';
  addElement.option[1].innerHTML = 'box';
  addElement.option[2].innerHTML = 'tube';
  addElement.option[3].innerHTML = 'tab';
  addElement.option[4].innerHTML = 'btl';
  addElement.option[5].innerHTML = 'dos';
  addElement.option[6].innerHTML = 'pcs';
  addElement.option[7].innerHTML = 'pack';
  addElement.option[8].innerHTML = 'bks';
  addElement.option.forEach(e => {
    addElement.select.appendChild(e);
  });
  addElement.formInput.forEach(e => {
    e.setAttribute('placeholder', 'input here...');
  });
  addElement.Detail.classList.add('inti');
  addElement.detail.forEach(e => {
    e.classList.add('sub-inti');
  });
  addElement.detail[0].classList.add('namany');
  addElement.detail[1].classList.add('jumlah2');
  addElement.detail[2].classList.add('harga2');
  li.appendChild(addElement.Detail);
  for (let i = 0; i < addElement.sub.length; i++) {
    input.appendChild(addElement.sub[i]);
    addElement.sub[i].appendChild(addElement.label[i]);
    addElement.sub[i].appendChild(addElement.formInput[i]);
    addElement.sub[1].appendChild(addElement.select);
    addElement.Detail.appendChild(addElement.detail[i]);
  }
  const nilaiNama = document.querySelectorAll('.namany');
  const nilaiJumlah = document.querySelectorAll('.jumlah2');
  const nilaiHarga = document.querySelectorAll('.harga2');
  const total = document.querySelector('.total');
  const uang = document.querySelector('.uang');
  const uang2 = document.querySelector('.uang2');
  const kembalian = document.querySelector('.kembalian');
  kasir.addEventListener('submit', function(e) {
    e.preventDefault();
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();

    const time = `${date}-${month}-${year} ${hour}:${minute}`;
    tanggal.innerHTML = `time : ${time}`;
    const namaBarang = document.querySelectorAll('.nama');
    const jumlahBarang = document.querySelectorAll('.jumlah');
    const hargaBarang = document.querySelectorAll('.harga');
    const selecter = document.getElementsByTagName('select');
    
    for (let i = 0; i < namaBarang.length; i++) {
      const nilaiNamaBarang = namaBarang[i];
      const nilaiJumlahBarang = jumlahBarang[i];
      const nilaiHargaBarang = hargaBarang[i];
      const nilaiSelect = selecter[i];
      const nilainm = nilaiNamaBarang.value;
      const nilaijml = nilaiJumlahBarang.value;
      const nilaihrg = nilaiHargaBarang.value;
      const nilais = nilaiSelect.value;
      const namaNilai = nilaiNama[i];
      const jumlahNilai = nilaiJumlah[i];
      const hargaNilai = nilaiHarga[i];
      namaNilai.textContent = nilainm;
      jumlahNilai.innerHTML = `${nilaijml} ${nilais}`;
      hargaNilai.innerHTML = `Rp, ${nilaihrg}`;
      uang2.innerHTML = `Rp, ${uang.value}`;
      const aray = [];
      for(let p = 0; p < hargaBarang.length; p++) {
        const q = hargaBarang[p];
        const s = jumlahBarang[p];
        const r = q.value * s.value;
        aray.push(r);
      }
      const hasilnya = aray.reduce((x, y) => x + y);
      total.innerHTML = `Rp, ${hasilnya}`;
      kembalian.innerHTML = `Rp, ${uang.value - hasilnya}`;
      
    }
    dua.style.display = 'flex';
    satu.style.display = 'none';
    kasir.reset();
  });
});



