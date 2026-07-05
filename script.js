const p=[
['Aadhaar','https://myaadhaar.uidai.gov.in/check-aadhaar'],
['PAN Portal','https://ictpanagency.com/portallogin/index'],
['Digital Suvidha','https://digitalsuvidhakendra.org.in/login.aspx'],
['Samagra','https://samagra.gov.in/'],
['eShram','https://register.eshram.gov.in/#/user/self'],
['Voter ID','https://voters.eci.gov.in/login'],
['Resize PDF','https://pdf.pi7.org/resize-pdf']];
function r(q=''){g.innerHTML='';p.filter(x=>x[0].toLowerCase().includes(q.toLowerCase())).forEach(x=>{let d=document.createElement('div');d.className='card';d.innerHTML='<h3>'+x[0]+'</h3><button>Open</button>';d.querySelector('button').onclick=()=>location.href=x[1];g.appendChild(d);});}
function f(){r(document.getElementById('s').value)};r();