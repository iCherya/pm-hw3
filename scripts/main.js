// First, we need to render all our page.

// Let's start by rendering the top menu
function renderTopMenu() {
    const topMenu = document.querySelector('.top-menu__list');
    let i = 1;
    let renderTopMenu = '';
    for (n of Object.keys(TOP_MENU)) {
        if (i > 8) break;
        if (TOP_MENU[n].submenu) {
            renderTopMenu += `<li class="top-menu__item"><a class="top-menu__link dropdown" href="${TOP_MENU[n].url || '#'}">${TOP_MENU[n].title}</a><ul>`;
            for (sub of TOP_MENU[n].submenu) {
                renderTopMenu += `<li><a href=""${sub.url || '#'}"">${sub.title}</a></li>`;
            }
            renderTopMenu += `</ul>`;
        } else {
            renderTopMenu += `<li class="top-menu__item"><a class="top-menu__link" href="${TOP_MENU[n].url || '#'}">${TOP_MENU[n].title}</a>`;
        }
        renderTopMenu += `</li>`;
        i++;
    }
    topMenu.innerHTML = renderTopMenu;
}


// Then we will render the main menu of the site
function renderMainMenu() {
  const mainMenu = document.querySelector('.main-menu__list');
  let renderMainMenu = '';
  for (i of MENU) {
    renderMainMenu += `<li>
        <a href="${i.url || '#'}">${i.title}</a>
        </li>`;
  }
  mainMenu.innerHTML = renderMainMenu;
}

// Then render the site news
function renderNews(){
  const news = document.querySelector('.news')
  let renderNews = `<h2 class="news__heading">Новости компании</h2>`

  let getRandom = max => Math.floor(Math.random() * max);
  let randArray = [];
  let j = (NEWS.length > 3)? 3 : NEWS.length
  for (let i = 0; i<j;i++){
      let rand = getRandom(NEWS.length)
      if(randArray.includes(rand)) {
          i--
      }
      else {
          randArray.push(rand)
      }
  }
  let getDay = (d) => {
      const date = d.split('/')
      return date[2]
  }
  let getMonth = (d) => {
      const date = d.split('/')
      const monthMap = new Map([
          [1, "января"],
          [2, "февраля"],
          [3, "марта"],
          [4, "апреля"],
          [5, "мая"],
          [6, "июня"],
          [7, "июля"],
          [8, "августа"],
          [9, "сентября"],
          [10, "октября"],
          [11, "ноября"],
          [12, "декабря"]
      ]);
      return monthMap.get(+date[1])
  }
  for (r of randArray) {
    renderNews += `<article class="news__item">
    <div class="news__image">
        <a href="#"><img src="${NEWS[r].img}" alt="News image" /></a>
        <div class="news__image--number">${getDay(NEWS[r].date)}</div>
        <div class="news__image--month">${getMonth(NEWS[r].date)}</div>
    </div>
    <div class="news__description">
        <h3 class="news__description--heading">
            <a href="${NEWS[r].url}">${NEWS[r].title}</a>
        </h3>
        <div class="news__description--text">
          ${NEWS[r].description}
        </div>
    </div>
    </article>
    <article>`
  }
  news.innerHTML = renderNews
}

// render buying right now
function renderBuyingNow() {
    let buyingNowOblast = document.querySelector(".list-buy-now")

    let renderBuyNow = ""
    for(i of BUYING_RIGHT_NOW){
        renderBuyNow +=
            `<li class="item">
                <div class="item__image">
                    <a href="${i.url}">
                        <img src="${i.img}" alt="${i.title}"/>
                     </a>
                </div>
                <div class="item__link">
                    <a href="${i.url}">${i.title}</a>
                </div>
            </li>`
    }
    buyingNowOblast.innerHTML = renderBuyNow
}

//Tnen we will render our items and basket
let basket = []
let counterBasketItems = document.querySelector('.basket-items')
let totalBasketPrice = document.querySelector('.basket-total')

function renderItems() {
    let items = ITEMS
    const oblast4ТewItems = document.querySelector(".new-items")
    const oblast4RecommendItems  = document.querySelector(".recommend-items")
    const oblast4DiscountItems = document.querySelector(".discount-items")

    switch (CURRENCY){
        case "UAH":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        break
                    case "RUB":
                        i.price *= CURRENCY_EXCHANGE.RUB
                        i.oldPrice *= CURRENCY_EXCHANGE.RUB
                        i.currency = "UAH"
                        break
                    case "USD":
                        i.price *= CURRENCY_EXCHANGE.USD
                        i.oldPrice *= CURRENCY_EXCHANGE.USD
                        i.currency = "UAH"
                        break
                }
            })
            break
        case "USD":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        i.price /= CURRENCY_EXCHANGE.USD
                        i.oldPrice /= CURRENCY_EXCHANGE.USD
                        i.currency = "USD"
                        break
                    case "RUB":
                        i.price = i.price/CURRENCY_EXCHANGE.USD/CURRENCY_EXCHANGE.RUB
                        i.oldPrice = i.oldPrice/CURRENCY_EXCHANGE.USD/CURRENCY_EXCHANGE.RUB
                        i.currency = "USD"
                        break
                    case "USD":
                        break
                }
            })
            break
        case "RUB":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        i.price /= CURRENCY_EXCHANGE.RUB
                        i.oldPrice /= CURRENCY_EXCHANGE.RUB
                        i.currency = "RUB"
                        break
                    case "RUB":
                        break
                    case "USD":
                        i.price = i.price * CURRENCY_EXCHANGE.USD / CURRENCY_EXCHANGE.RUB
                        i.oldPrice = i.oldPrice * CURRENCY_EXCHANGE.USD / CURRENCY_EXCHANGE.RUB
                        i.currency = "RUB"
                        break
                }
            })
            break
    }

    // sort new items
    let newItems =  items.filter(({type}) => type === "new")
    newItems.sort((a, b) => a.date < b.date ? 1 : -1)
    

    // sort recommend items
    let recommendItems = items.filter(({type}) => type === "recommended")
    recommendItems.sort((a, b) => +a.price > +b.price ? 1 : -1)
    
    // sort discount items
    let discountItems = items.filter(({type}) => type === "sale")
    discountItems.sort((a, b) => (+a.oldPrice - a.price) < (+b.oldPrice-  b.price) ? 1 : -1) 
    

    function render(to, itemsArray){
        let area = to.querySelector(".sale__content")
        let render = `                
        <div class="sale__header--arrows">
            <div class="prev-arrow slider-previous"></div>
            <div class="next-arrow slider-next"></div>
        </div>`
        for(item of itemsArray){
            render +=
                `<div class="sale__item">
                <div class="sale__item--image">
                    <a href="#"><img src="${item.img}" alt="phone" /></a>
                </div>
                <div class="sale__item--baige baige-${item.type}"></div>
                <h4 class="sale__item--title">
                    <a href="${item.url}">${item.description}<</a>
                </h4>
                <div class="sale__item--price">
                    Цена:
                    <span class="price">${Math.floor(item.price)}  ${CURRENCY}</span>
                    <span class="discount">${Math.floor(item.oldPrice)} ${CURRENCY}</span>
                </div>
                <div class="sale__item--action">
                    <button onclick='buyItem(${JSON.stringify(item)})'><img src="./img/icons/cart.svg" alt="basket" /> Купить</button>
                    <a href="#">Подробнее</a>
                </div>
                </div>`
                // <div class="crd-buy" onclick='buyItem(${JS ON.stringify(item)})'>КУПИТЬ</div> 

        }
        area.innerHTML = render
    }


    // rendeer all items
    render(oblast4ТewItems, newItems)
    render(oblast4RecommendItems, recommendItems)
    render(oblast4DiscountItems, discountItems)
}

// We need too render promotion too
// forgot earlier

function renderPromotion() {
    const promArea = document.querySelector(".promo__content")

            let render = `                
        <div class="sale__header--arrows">
            <div class="prev-arrow slider-previous"></div>
            <div class="next-arrow slider-next"></div>
        </div>`
    for(promotion of PROMOTIONS){
        render +=
            `<div class="sale__item promo__item">
                <h3 class="promo__heading"><a href=${promotion.url} ||"#">${promotion.title}</a></h3>
                <div class="promo__img">
                    <a href=><img src="${promotion.img}" alt="Promotion banner" /></a>
                </div>
                <div class="promo__text">
                ${promotion.description}.
                </div>
            </div>`
            
    }
    promArea.innerHTML = render

}

function renderBasket(items, price){
    counterBasketItems.innerText = items
    totalBasketPrice.innerText = price + " " + CURRENCY
}

// Now we can render full page and start to work with elements

renderTopMenu()
renderMainMenu()
renderNews()
renderBuyingNow()
renderItems()
renderPromotion()
renderBasket(BASKET.elements, BASKET.price)

// Then we will start to work with items and basket
// We will add items to the basket and recalculate their amount

let items = BASKET.elements
function buyItem(item){
    basket.push(item)
    items++
    let pricelist = BASKET.price
    for(i of basket) {
        pricelist += Math.floor(i.price)
    }
    renderBasket(items,pricelist)
}

//implementation of sliders
//main slider on the page

function mainSlider() {  //лексическое окружение
    const slider_prev = document.querySelector('.prev-arrow')
    const slider_next = document.querySelector('.next-arrow')
    const slider_ids = document.querySelectorAll('.slider-control')

    let currant = 0

    slider_next.addEventListener('click', () => {
        nextSlide()
        clearInterval(timerId)
    })  //Вперед

    slider_prev.addEventListener('click', () => {
        if (currant > 0) currant--
        else currant = slider_ids.length - 1
        clearInterval(timerId)
        changeSlide()
    })  //Назад

    function nextSlide() {
        if (currant < slider_ids.length - 1) currant++
        else currant = 0
        changeSlide()
    }   // вперед используется при нажатии и по времени

    for (let slide = 0; slide < slider_ids.length; slide++) {
        slider_ids[slide].addEventListener('click', () => {
            currant = slide
            clearInterval(timerId)
            changeSlide()
        })
    }



    let timerId = setInterval(nextSlide, 1500);

    let changeSlide = () => {
        let j = 0
        for (let slide = 0; slide < slider_ids.length; slide++) {
            slider_ids[slide].classList.remove('active')
            if (slide == currant) {
                slider_ids[slide].classList.add('active')
            }
            j++
        }

    }

}

// all sliders for the items

mainSlider()