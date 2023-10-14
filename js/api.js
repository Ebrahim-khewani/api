// chart.js  canvas  apexcharts svg

/* <img src="${data.url}" class="d-block w-100" alt="${data.thumbnailUrl}"> */

let carouselItems =[]
let INNER 
let INNER_MIN
let FOTRER
const jsonString={}
const posts = getStorage("posts", []);

app = document.getElementById('app');



  const fetchPostsData = (num) => {
    return new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit="+num)
    .then((res) => res.json())
    .then((posts) => setStorage("posts", posts))
    resolve("done");
    })
};



 limit_num = el('#floatingSelect')

 limit_num.addEventListener('change', async (event) => {
  // Get the selected value
  const selectedValue = event.target.value;
  await fetchPostsData(selectedValue)
  await userComponent(getStorage("posts"))
  
  // await userComponent( getStorage("posts"))
});

const userComponent = (post) => {
 dfltimg = getStorage("image", [])
  return new Promise((resolve, reject) => {
    app.innerHTML = "";
    app.innerHTML +=`<div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
      ${post.map(element=>`
        <div class="col">
          <div class="card h-100">
              <img src="${dfltimg?dfltimg:element.url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
          </div>
          </div>`
      ).join('')
      }   </div>
        </div>`
    resolve("done");
  });
};

fileBtn = el("#inputfile");
imgElement = el('#imgPictur');
fileBtn.addEventListener('change', (event)=>{
// Get the selected file
const file = event.target.files[0];

 if (file.type.includes("image") || file.type.includes("jpg")) {
    openFile(file) 
  }
})
var openFile = function (file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    imgElement.src = reader.result;
    setStorage("image", reader.result); 
  };
};

  // .catch((error) => console.error(error));

  

 //renderHtml(INNER_MIN);
  
//  const userComponent = (post) => {
//   app.innerHTML = "";
//   app.innerHTML +=`<div class="container">
//           <div class="row row-cols-1 row-cols-md-3 g-4">
//     ${post.map(element=>`
//       <div class="col">
//         <div class="card h-100">
//             <img src="${element.url}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h5 class="card-title">${element.title}</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               </div>
//         </div>
//         </div>`
//     ).join('')
//     }   </div>
//       </div>`
// };


const renderData = () => {
  if (isDataLoaded) return;
  posts.forEach((post) => userComponent(post));

  isDataLoaded = true;
};
