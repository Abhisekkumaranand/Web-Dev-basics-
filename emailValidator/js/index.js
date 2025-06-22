let result ={
    "tag": "",
    "free": false,
    "role": false,
    "user": "abhisekkumar",
    "score": 0.64,
    "state": "undeliverable",
    

}


//  submitBtn.addEventListener("click", async(e)=>{
//     e.preventDefault()
//     let key="fa5b17a104b1cfa675a8a606d164bb8f"
//     let email = document.getElementById("username").value
// let url=`https://apilayer.net/api/check
// ? access_key = ${key}
// & email = ${email}`
// let res= await fetch(url)
// let result = await res.json()
// let str =''
// for(key of Object.keys(result)){
//     str =str + `<div>${key}: ${result[key]}</div>`
// }

// console.log(str)
// ReadableStreamDefaultController.innerHTML = str
// })




function getAIResponse() {
  const email = document.getElementById("username").value;
  const resultBox = document.getElementById("rusultCont");
//   let key="fa5b17a104b1cfa675a8a606d164bb8f"
    //   let email = document.getElementById("username").value
  let url=`http://apilayer.net/api/check
  ? access_key = ad6b135c05f8a14756339dc353342d66
  & email = &{email}
  & smtp = 1
  & format = 1`
  // Fake AI response for now (later connect to real API)
  resultBox.innerHTML = str
  let str =''
  for(key of Object.keys(result)){
      str =str + `<div>${key}: ${result[key]}</div>`
  }
  
  console.log(str)
  ReadableStreamDefaultController.innerHTML = str

  // Example API call (replace with your real AI API)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      resultBox.innerHTML = `<p><strong>AI says:</strong> ${data.response}</p>`;
    })
    .catch(err => {
      console.error(err);
      resultBox.innerHTML = "<p style='color:red;'>Failed to fetch response.</p>";
    });
}