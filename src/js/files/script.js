// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
import { removeClasses } from "./functions.js";
// Подключение списка активных модулей
//import { flsModules } from "./modules.js";

window.onload = function () {
   document.addEventListener("click", documentActions);
   function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth > 768 && isMobile.any()) {
         if (targetElement.classList.contains('menu__arrow')) {
            targetElement.closest('.menu__item').classList.toggle('_hover');
         }
         if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
            removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
         }
      }
      if (targetElement.classList.contains('search-form__icon')) {
         document.querySelector('.search-form').classList.toggle('_active');
      } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
         document.querySelector('.search-form').classList.remove('_active');
      }
      // if (targetElement.classList.contains('hits__more')) {
      //    getHits(targetElement);
      //    e.preventDefault();
      // }

      // if (targetElement.classList.contains('actions-product__btn')) {
      //    const productId = targetElement.closest('.item-product').dataset.pid;
      //    addToCart(targetElement, productId)
      //    e.preventDefault();
      // }

      // if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('cart-header__icon')) {
      //    if (document.querySelector('.cart-list').children.length > 0) {
      //       document.querySelector('.cart-header').classList.toggle('_active');
      //    }
      //    e.preventDefault();
      // } else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__btn')) {
      //    document.querySelector('.cart-header').classList.remove('_active');
      // }
      
      // Удаление элементов из карзины


      // if (targetElement.classList.contains('cart-list__delete')) {//отлавливаем клик по cart-list__delete
      //    const productId = targetElement.closest('.cart-list__item').dataset.cartPid;//ищем родителя с классом .cart-list__item и получаем его ID в константу
      //    updateCart(targetElement, productId, false);//далее идем в нашу уже существующую функцию updateCart. false - говорит о том что мы не добавляем товар а удаляем.
      //    e.preventDefault();
      // }
   }

   // header
   const headerElement = document.querySelector('.header');

   const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
         headerElement.classList.remove('_scroll');
      } else {
         headerElement.classList.add('_scroll');
      }
   }

   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(headerElement);

   // Load more Products
   // async function getHits(button) {
   //    if (!button.classList.contains('_hold')) {
   //       button.classList.add('_hold');
   //       const file = "json/hits.json";
   //       let response = await fetch(file, {
   //          method: "GET"
   //       });
   //       if (response.ok) {
   //          let result = await response.json();
   //          loadHits(result);
   //          button.classList.remove('_hold');
   //          button.remove();
   //       } else {
   //          alert('Ошибка');
   //       }
   //    }
   // }

   // function loadHits(data) {
   //    const hitsList = document.querySelector('.hits__list');

   //    data.hits.forEach(item => {
   //       const hitId = item.id;
   //       const hitImage = item.image;
   //       const hitTitle = item.title;
   //       const hitText = item.text;
   //       const hitPrice = item.price;
   //       const hitOldPrice = item.priceOld;
   //       const hitLabels = item.labels;

   //       let hitTemplateStart = `<article data-pid="${hitId}" class="hit__item hit">`;
   //       let hitTemplateEnd = `</article>`;

   //       let hitTemplateLabels = '';
   //       if (hitLabels) {
   //          let hitTemplateLabelsStart = `<div class="hit__labels">`;
   //          let hitTemplateLabelsEnd = `</div>`;
   //          let hitTemplateLabelsContent = '';

   //          hitLabels.forEach(labelItem => {
   //             hitTemplateLabelsContent += `<div class="hit__label hit__label_${labelItem.type}">${labelItem.value}</div>`;
   //          });

   //          hitTemplateLabels += hitTemplateLabelsStart;
   //          hitTemplateLabels += hitTemplateLabelsContent;
   //          hitTemplateLabels += hitTemplateLabelsEnd;
   //       }

   //       let hitTemplateImage = `
	// 	<div class="hit__image -ibg">
	// 		<img src="img/hits/${hitImage}" alt="${hitTitle}">
	// 	</div>
	// `;

   //       let hitTemplateBodyStart = `<div class="hit__body">`;
   //       let hitTemplateBodyEnd = `</div>`;

   //       let hitTemplateContent = `
	// 	<div class="hit__content">
	// 		<h4 class="hit__title">${hitTitle}</h4>
	// 		<div class="hit__text">${hitText}</div>
	// 	</div>
	// `;

   //       let hitTemplatePrices = '';
   //       let hitTemplatePricesStart = `<div class="hit__prices">`;
   //       let hitTemplatePricesCurrent = `<div class="hit__price">${hitPrice} руб.</div>`;
   //       let hitTemplatePricesOld = `<div class="hit__price hit__price_old">${hitOldPrice} руб.</div>`;
   //       let hitTemplatePricesEnd = `</div>`;

   //       hitTemplatePrices = hitTemplatePricesStart;
   //       hitTemplatePrices += hitTemplatePricesCurrent;
   //       if (hitOldPrice) {
   //          hitTemplatePrices += hitTemplatePricesOld;
   //       }
   //       hitTemplatePrices += hitTemplatePricesEnd;

   //       let hitTemplateBody = '';
   //       hitTemplateBody += hitTemplateBodyStart;
   //       hitTemplateBody += hitTemplateContent;
   //       hitTemplateBody += hitTemplatePrices;
   //       hitTemplateBody += hitTemplateBodyEnd;

   //       let hitTemplate = '';
   //       hitTemplate += hitTemplateStart;
   //       hitTemplate += hitTemplateLabels;
   //       hitTemplate += hitTemplateImage;
   //       hitTemplate += hitTemplateBody;
   //       hitTemplate += hitTemplateEnd;

   //       hitsList.insertAdjacentHTML('beforeend', hitTemplate);

   //    });
   // }

   //Add to cart

   // function addToCart(productButton, productId) {
   //    if (!productButton.classList.contains('_hold')) {
   //       productButton.classList.add('_hold');
   //       productButton.classList.add('_fly');

   //       const cart = document.querySelector('.cart-header__icon');
   //       const product = document.querySelector(`[data-pid="${productId}"]`);
   //       const productImage = product.querySelector('.item-product__image');

   //       const productImageFly = productImage.cloneNode(true);

   //       const productImageFlyWidth = productImage.offsetWidth;
   //       const productImageFlyHeight = productImage.offsetHeight;
   //       const productImageFlyTop = productImage.getBoundingClientRect().top;
   //       const productImageFlyLeft = productImage.getBoundingClientRect().left;

   //       productImageFly.setAttribute('class', '_flyImage -ibg');
   //       productImageFly.style.cssText =
   //          `
   //          left: ${productImageFlyLeft}px;
   //          top: ${productImageFlyTop}px;
   //          width: ${productImageFlyWidth}px;
   //          height: ${productImageFlyHeight}px;
   //          `;

   //       document.body.append(productImageFly);

   //       const cartFlyLeft = cart.getBoundingClientRect().left;
   //       const cartFlyTop = cart.getBoundingClientRect().top;

   //       productImageFly.style.cssText =
   //          `
   //       left: ${cartFlyLeft}px;
   //       top: ${cartFlyTop}px;
   //       width: 0px;
   //       height: 0px;
   //       opacity: 0;
   //       `;

   //       productImageFly.addEventListener('transitionend', function () {
   //          if (productButton.classList.contains('_fly')) {
   //             productImageFly.remove();
   //             updateCart(productButton, productId);
   //             productButton.classList.remove('_fly');
   //          }
   //       })
   //    }
   // }

   // function updateCart(productButton, productId, productAdd = true) {
   //    const cart = document.querySelector('.cart-header');
   //    const cartIcon = cart.querySelector('.cart-header__icon');
   //    const cartQuantity = cartIcon.querySelector('span');
   //    const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
   //    const cartList = document.querySelector('.cart-list');

   //    Добавляем в корзину


   //    if (productAdd) {
   //       if (cartQuantity) {
   //          cartQuantity.innerHTML = ++cartQuantity.innerHTML;
   //       } else {
   //          cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
   //       }
   //       if (!cartProduct) {
   //          const product = document.querySelector(`[data-pid="${productId}"]`);
   //          const cartProductImage = product.querySelector('.item-product__image').innerHTML;
   //          const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
   //          const cartProductContent = `
   //          <a href="" class="cart-list__image -ibg">${cartProductImage}</a>
   //          <div class="cart-list__body">
   //             <a href="" class="cart-list__title">${cartProductTitle}</a>
   //             <div class="cart-list__quantity">Кол-во: <span>1</span></div>
   //             <a href="" class="cart-list__delete">Delete</a>
   //          </div>`;
   //          cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
   //       } else {
   //          const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
   //          cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
   //       }

   //       После этих действий отбираем класс у товара

   //       productButton.classList.remove('_hold');
   //    }else {//ФУНКЦИОНАЛ ДЛЯ УДАЛЕНИЯ ТОВАРА ИЗ КОРЗИНЫ
   //       const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
   //       cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
   //       if (!parseInt(cartProductQuantity.innerHTML)) {
   //          cartProduct.remove();
   //       }

   //       const cartQuantityValue = --cartQuantity.innerHTML;

   //       if (cartQuantityValue) {
   //          cartQuantity.innerHTML = cartQuantityValue;
   //       } else {
   //          cartQuantity.remove();
   //          cart.classList.remove('_active');
   //       }
   //    }
   // }
   const life = document.querySelector('.life__body');
   if (life && !isMobile.any()) {
      const lifeItems = document.querySelector('.life__list');
      const lifeColumn = document.querySelectorAll('.life__column');

      const speed = life.dataset.speed;

      let positionX = 0;
      let coordXprocent = 0;

      function setMouseGalleryStyle() {
         let lifeItemsWidth = 0;
         lifeColumn.forEach(element => {
            lifeItemsWidth += element.offsetWidth;
         });

         const lifeDifferent = lifeItemsWidth - life.offsetWidth;
         const distX = Math.floor(coordXprocent - positionX);

         positionX = positionX + (distX * speed);
         let position = lifeDifferent / 200 * positionX;

         lifeItems.style.cssText = `transform: translate3d(${-position}px,0,0)`;

         if (Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseGalleryStyle);
         } else {
            life.classList.remove('_init');
         }
      }
      life.addEventListener("mousemove", function (e){
         const lifeWidth = life.offsetWidth;

         const coordX = e.pageX - lifeWidth / 2;

         coordXprocent = coordX / lifeWidth * 200;

         if (!life.classList.contains('_init')) {
            requestAnimationFrame(setMouseGalleryStyle);
            life.classList.add('_init');
         }
      });
   }
}