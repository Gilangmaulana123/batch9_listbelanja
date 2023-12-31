
// tangkap beberapa element html

let modal = document.getElementById("modal");
let floating_button = document.getElementById("floating_button");
let modal_bg = document.getElementById("modal_bg");
let addlist_form = document.getElementById("addlist_form");
let root = document.getElementById("root");
let subtitle = document.getElementById("subtitle");

// tambahkan date ke subtitle
subtitle.innerHTML = new Date().toLocaleDateString();

// data list belanja
let data_list_belanja = [];

// meannmbahkan event listener ke floating button
floating_button.addEventListener("click", ()=>{

 // munculkan modal
 if(modal.style.display == "none"){
   showModal();
   return
 }

 // sembunyikan kembali
   hideModal();
})

// menambahkan event listener ke modal bg
modal_bg.addEventListener("click", ()=> {
    // sembunyikan kembali
    hideModal();
})

// tambahkan event listener submit ke addlist form
addlist_form.addEventListener("submit", (event)=>{

  // stop form reload page
  event.preventDefault();

  // tangkap value dari masing masing input field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  // push data ke data list belanja
  data_list_belanja.push({
    nama_barang : barang,
    harga_barang : harga,
    tanggal : new Date().toLocaleDataString()
  });

  console.info(data_list_belanja);

  // clear input field
  event.target.barang.value = "";
  event.target.harga.value ="";

  hideModal();
  renderToHtml();

  // show modal
  function showModal(){
  modal.style.display = "flex";
  floating_button.style.backgroundColor = 'gray'; 
  floating_button.style.transform = 'rotate(45deg)';
  }

  // hide modal
  function hideModal(){
  modal.style.display = "none";
  floating_button.style.backgroundColor = '#F280B6';
  floating_button.style.transform = 'rotate(0deg)';
  }
})

  // render function
  data_list_belanja.forEach((e, i)=>{

    root.innerHTML +=
    <div class="card">
      <small> ${e.tanggal} </small>
      <div>
       ${e.nama_barang} <span> Rp. ${e.harga_barang} </span>
      </div>
      <button onclick="handleDelete(${})">Selesai</button>
    </div>
  });



// // function untuk delete item pada arrah datalistbelanja
// function handleDelete(index){

//   data_list_belanja
// }
