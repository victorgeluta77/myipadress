// function ValidateIPaddress(inputText)
//  {
//  let formInfo = document.form1.text1.value;    
//  let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//  console.log(ipformat);
//  console.log(inputText);
//  console.log(formInfo);
//  if(inputText.value.match(ipformat))
//  {
// document.form1.text1.focus();
//  return true;
//  }
//  else
//  {
//  alert("You have entered an invalid IP address!");
//  document.form1.text1.focus();return false;
//  }


//  }
 //  my ip adress

  const ul = document.querySelector('.list_data');
  async function ipAdress(){
    const url = 'http://ip-api.com/json';
    let ipAdress = await fetch(url);
    let ipData;
    console.log(ipAdress.status);
    if(ipAdress.status == 200){ipData = await ipAdress.json()};
    console.log(ipData);
    console.log(ipData.timezone);
    for (const key in ipData) {
        if (ipData.hasOwnProperty(key)) {
            let li = document.createElement('li');
            li.className = "list_data_li";
            li.innerText = `${key} : ${ipData[key]}`;
            ul.append(li);
            console.log(key+' : '+ ipData[key]);
        }
    }
}
ipAdress();
