
function kirimWA(){
const nama=document.getElementById('nama').value;
const alamat=document.getElementById('alamat').value;
const pesan=`Halo, saya ingin daftar IndiHome.%0ANama: ${nama}%0AAlamat: ${alamat}`;
window.open('https://wa.me/6281388097209?text='+pesan,'_blank');
}
