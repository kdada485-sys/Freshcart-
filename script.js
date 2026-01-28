import { db } from "./firebase.js";
import { collection, getDocs } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productList = document.getElementById("product-list");
const productsRef = collection(db, "products");

async function loadProducts() {
  const snap = await getDocs(productsRef);
  productList.innerHTML = "";

  snap.forEach(doc => {
    const p = doc.data();
    productList.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
      </div>
    `;
  });
}

loadProducts();