const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

array = str.split('<li');
console.log(array)
let listaObj = [];
 array.map(function(str,i) {
   let pos =  str.indexOf('"');
   let linea = str.substr(pos+1)
   let pos2 =  linea.indexOf('"');
   let tiempo = linea.substr(0,pos2);
   linea = linea.substr(pos2+2);
   let pos3 = linea.indexOf('<');
   let nombrevideo = linea.substr(0,pos3);
   let item = {
     time: tiempo, video: nombrevideo
   }
   listaObj.push(item);
})
listaObj.shift();
console.log(listaObj);
let total;
for (let i = 0; i < listaObj.length; i++) {
  const element = listaObj[i];
  if (element.video =='Redux Video') { 
  let pos = element.time.indexOf(':')
   let horas = element.time.substr(0,pos);
   let minutos = element.time.substr(pos+1);
   total = horas*60 + minutos;
   
  }
}
console.log(total);

 

 