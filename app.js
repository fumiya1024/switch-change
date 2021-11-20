const imgSrc = new Array('https://3.bp.blogspot.com/-ZJk0UzWPyyQ/U1T4NG4FoTI/AAAAAAAAffc/qj3KZP_Im2c/s800/switch_off.png','https://3.bp.blogspot.com/-Si7ncDOvb2c/U1T4NTVuEQI/AAAAAAAAffg/FLR1mprCmaI/s800/switch_on.png' );

const btn = document.getElementById('switch-btn');
const backgroundColor = document.getElementById('image-area');
let num = 0;

btn.onclick = function() {
  num++;
  if(num == imgSrc.length) {
    num = 0;
  }
  btn.src = imgSrc[num];
  backgroundColor.classList.toggle('back-color');
}
