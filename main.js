  const nameinput = document.querySelector('#namer');
  const heightminput = document.querySelector('#heightm');
  const weightkinput = document.querySelector('#weightkg');
  const buttoninput = document.querySelector('#button');
  const errormgs = document.querySelector('.erromsg');
  const output = document.querySelector(".output")

  buttoninput.addEventListener("click",(e) => {
         e.preventDefault();
         const namevalue =nameinput.value;
         const heightmvalue =heightminput.value;
         const weightkvalue =weightkinput.value;      
         

          if(namevalue === "" || heightmvalue ==="" ||weightkvalue ===""){
             errormgs.textContent = "please Fill out the fields!";
             errormgs.classList ="erro"
             setTimeout(() => {
                  errormgs.textContent = "";
                  errormgs.classList ="";},3000);
                 return;
          }else{
            const  imccomplite= weightkvalue/(heightmvalue*heightmvalue)
            const imcvalue = imccomplite.toFixed(2)
             output.innerHTML =`${namevalue} o seu IMC é ${imcvalue} `;
             output.classList = "outputimc"
          
        }

        })
