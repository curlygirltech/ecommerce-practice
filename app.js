import {data} from "./products"

let productList = document.getElementById("list");

data.forEach((item) => {
  let li = document.createelement(li)
  li.innerText = item
  productList.appendChild(li)
})

