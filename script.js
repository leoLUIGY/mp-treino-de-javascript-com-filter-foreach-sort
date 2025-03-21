import {products} from './data.js';

const productsContainer = document.querySelector("#products");
const sortOrderSelect = document.querySelector('#sortOrder');


const createProductHtml = (item) =>{

    const productDiv = document.createElement('div');
   
    productDiv.classList.add('product');
    const startCount = 5 - item.rating;
    productDiv.innerHTML = 
    `<h2>${item.name}</h2>
    <img src=${item.srcImg} alt="Foto do iPhone 16" class="product__image" data-index="0">
    <div class="proeduct__rating">
     ${'<i class="fas fa-star product__rating-star"></i>'.repeat(item.rating)} 
     ${ startCount > 0 ? '<i class="fas fa-star rating-empty"></i>'.repeat(startCount): ''}
      <span>${item.reviews}</span>
    </div>
    <p class="product__price">R$ ${item.price} no ${item.paymentMethod}
      <span class="product__price-old">${item.originalPrice}</span>
    </p>
    <p class="product__description">${item.description}</p>
    <button class="button button-gradient">Compre agora</button>
 
    `
    return productDiv;
  }

  const renderProducts = (itemsProducts) =>{
    productsContainer.innerHTML = '';
    itemsProducts.forEach((itemProduct) =>{
      productsContainer.appendChild(createProductHtml(itemProduct));
    })
  }


  const orderProducts = () =>{
   
    let filteredProducts = [...products];
    const sortOrder = sortOrderSelect.value;

    if(sortOrder === 'lowToHigh'){
      filteredProducts = filteredProducts.sort((itemA, itemB)=> itemA.price - itemB.price)
    } else if(sortOrder === 'highToLow')
    {
      filteredProducts = filteredProducts.sort((itemA, itemB)=>itemB.price - itemA.price)
    }else if(sortOrder === "rating")
    {
      filteredProducts = filteredProducts.sort((itemA, itemB) => itemB.rating - itemA.rating)
    }
    console.log(filteredProducts);

    renderProducts(filteredProducts);
  }

  
  renderProducts(products);


  sortOrderSelect.addEventListener('change', orderProducts)