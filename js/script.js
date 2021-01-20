const lib = {
    currencySymbol: {
        UAH: 'грн.',
        RUB: 'р.',
        USD: '$'
    },
    createElement: (tagName, props = {}, innerText) => {
        const $el = document.createElement(tagName);

        for (const propName in props) {
            if (propName === 'children' && props.children) {
                $el.append(...props.children);
            } else if (typeof props[propName] !== 'undefined') {
                $el[propName] = props[propName];
            }
        }

        if (innerText) {
            $el.innerText = innerText;
        }

        return $el;
    },
    isNumeric: (n) => !isNaN(parseFloat(n)) && isFinite(n),
    isString: (string) => typeof string === 'string' || string instanceof String,
    getRandomIntInclusive: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getPrice: (priceString, currency) => {
        let result = +priceString;

        if (currency !== CURRENCY) {
            result *= CURRENCY_EXCHANGE[currency];
        }

        return Math.floor(result);
    },
    thousandSeparator: (n) => {
        const arr = n.toString().split('').reverse();

        for (let i = arr.length - 1; i >= 1; i--) {
            if (i % 3 === 0) {
                arr.splice(i, 0, ' ');
            }
        }

        return arr.reverse().join('');
    },
    fillBasket: () => {
        basketElItems.innerText = BASKET.elements;
        basketElTotal.innerText = `${lib.thousandSeparator(BASKET.price)} ${
            lib.currencySymbol[CURRENCY]
        }`;
    },
    addToBasket: (price) => {
        BASKET.elements++;
        console.log(price);
        BASKET.price += price;

        lib.fillBasket();
    },
    getTimestamp: (dateString) => {
        const date = new Date(dateString);

        return date.getTime();
    },
    asc: (a, b) => a.order - b.order,
    dsc: (a, b) => b.order - a.order
};

// Basket
const basketEl = document.querySelector('.basket');
const basketElItems = basketEl.querySelector('.basket-items');
const basketElTotal = basketEl.querySelector('.basket-total');

try {
    lib.fillBasket();
} catch (e) {
    console.log(e);
    console.log('Failed to load basket content');
}

// Top Menu
const topMenuList = document.querySelector('.top-menu__list');
try {
    const sortedMenu = Object.values(TOP_MENU).sort(lib.asc);

    if (sortedMenu.length === 0) document.querySelector('.top-menu').remove();

    for (const item of sortedMenu) {
        const topMenuListItem = lib.createElement('li', {
            className: 'top-menu__item',
            children: [
                lib.createElement(
                    'a',
                    {
                        className: `top-menu__link ${item.submenu ? 'dropdown' : ''}`,
                        href: item.url || '#'
                    },
                    item.title
                )
            ]
        });

        if (item.submenu) {
            item.submenu.sort(lib.asc);

            const ul = lib.createElement('ul');
            for (const subItem of item.submenu) {
                const subMenuListItem = lib.createElement('li', {
                    children: [
                        lib.createElement(
                            'a',
                            {
                                href: subItem.url || '#'
                            },
                            subItem.title
                        )
                    ]
                });

                ul.append(subMenuListItem);
            }
            topMenuListItem.append(ul);
        }

        topMenuList.append(topMenuListItem);
    }
} catch (e) {
    console.log(e);
    console.log('Failed to load TOP menu content');
}

// Main Menu
const mainMenu = document.querySelector('.main-menu ul');
try {
    if (MENU.length === 0) document.querySelector('main-menu').remove();

    const sortedMenu = Object.values(MENU).sort(lib.asc);
    const menuWidth = mainMenu.scrollWidth;

    for (const item of sortedMenu) {
        const li = lib.createElement('li', {
            className: 'menu-item',
            children: [
                lib.createElement(
                    'a',
                    {
                        href: item.url
                    },
                    item.title
                )
            ]
        });
        mainMenu.append(li);
    }

    if (mainMenu.scrollWidth > menuWidth) {
        const arrowRightEl = lib.createElement('li', {
            className: 'main-menu__button',
            children: [
                lib.createElement('span', {
                    className: 'arrow-right'
                })
            ]
        });

        const arrowLeftEl = lib.createElement('li', {
            className: 'main-menu__button',
            children: [
                lib.createElement('span', {
                    className: 'arrow-left'
                })
            ],
            onclick: () => {
                const items = mainMenu.querySelectorAll('.menu-item');

                for (const element of items) {
                    const size = element.style.right;
                    const current = isNaN(size) ? parseInt(size) : +size;
                    if (current === 200) {
                        arrowLeftEl.remove();
                    }
                    element.style.right = current - 200 + 'px';
                }

                if (!document.querySelector('.main-menu__button arrow-right')) {
                    mainMenu.append(arrowRightEl);
                }
            }
        });

        arrowRightEl.onclick = (e) => {
            const items = [...mainMenu.querySelectorAll('.menu-item')];

            for (const element of items) {
                const size = element.style.right;
                const current = isNaN(size) ? parseInt(size) : +size;
                if (mainMenu.scrollWidth < mainMenu.offsetWidth + current) {
                    arrowRightEl.remove();
                }

                element.style.right = current + 200 + 'px';
            }

            if (!document.querySelector('.main-menu__button arrow-left')) {
                mainMenu.prepend(arrowLeftEl);
                arrowLeftEl.style.right = 'auto';
            }
        };
        mainMenu.append(arrowRightEl);
    }
} catch (e) {
    console.log(e);
    console.log('Failed to load Main menu content');
}

// News
const newsElement = document.querySelector('.news__all');
try {
    let newsToPublish = [];
    const len = NEWS.length;

    if (len === 0) {
        document.querySelector('.news').remove();
    }

    if (len >= 4) {
        while (newsToPublish.length < 3) {
            const random = lib.getRandomIntInclusive(0, NEWS.length - 1);
            const newsItem = NEWS[random];
            const isValid =
                newsItem.title &&
                newsItem.date &&
                newsItem.description &&
                newsItem.img &&
                newsItem.url;

            if (isValid) {
                newsToPublish.push(NEWS[random]);
                NEWS.splice(random, 1);
            }

            if (NEWS.length === 0) break;
        }
    } else {
        newsToPublish = NEWS;
    }

    for (const item of newsToPublish) {
        const date = new Date(item.date);
        const month = date.getMonth();

        const months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря'
        ];

        const day = date.getDate();

        const article = lib.createElement('article', {
            className: 'news__item',
            children: [
                lib.createElement('div', {
                    className: 'news__image',
                    children: [
                        lib.createElement('a', {
                            children: [
                                lib.createElement('img', {
                                    alt: item.title,
                                    src: item.img,
                                    onerror: function () {
                                        this.src = './img/temp-image.jpg';
                                    }
                                })
                            ]
                        }),
                        lib.createElement(
                            'div',
                            {
                                className: 'news__image--number'
                            },
                            day
                        ),
                        lib.createElement(
                            'div',
                            {
                                className: 'news__image--month'
                            },
                            months[month]
                        )
                    ]
                }),
                lib.createElement('div', {
                    className: 'news__description',
                    children: [
                        lib.createElement('h3', {
                            className: 'news__description--heading',
                            children: [
                                lib.createElement(
                                    'a',
                                    {
                                        href: item.url
                                    },
                                    item.title
                                )
                            ]
                        }),
                        lib.createElement(
                            'div',
                            {
                                className: 'news__description--text'
                            },
                            item.description
                        )
                    ]
                })
            ]
        });

        newsElement.before(article);
    }
} catch (e) {
    console.log(e);
    console.log('Failed to load News content');
}

// Banner
const bannerEl = document.querySelector('.adv-slider');
try {
    const sorted = BANNER.sort(lib.dsc);

    for (let i = 0; i < sorted.length; i++) {
        const el = sorted[i];

        const sliderItem = lib.createElement('div', {
            className: 'slider-item',
            children: [
                lib.createElement(
                    'a',
                    {
                        className: 'slider-button',
                        href: el.url
                    },
                    'Подробнее'
                )
            ]
        });

        sliderItem.style.backgroundImage = `url('${el.img}')`;
        bannerEl.prepend(sliderItem);

        const square = lib.createElement('li', {
            onclick: function () {
                const active = bannerEl.querySelector('.active');
                active && active.classList.remove('active');
                this.classList.add('active');

                slider.showSlides(i);
                clearInterval(slider.intervalTimer);
            }
        });

        if (i === 0) square.classList.add('active');
        bannerEl.querySelector('.slider-controls').append(square);
    }

    const slider = new Slider({}, bannerEl, true, false);
} catch (e) {
    console.log(e);
    console.log('Failed to load Banners content');
}

// Promotions
const promoEl = document.querySelector('.promo__content');
try {
    for (const promo of PROMOTIONS) {
        if (promo.title && promo.img && promo.url && promo.description) {
            let isFinitePromotion = false;
            let d, h, m;

            if (promo.time_action) {
                isFinitePromotion = true;
                [d, h, m] = promo.time_action.split(' ');
            }

            const [d1, d2] = [Math.floor(parseInt(d) / 10), parseInt(d) % 10];
            const [h1, h2] = [Math.floor(parseInt(h) / 10), parseInt(h) % 10];
            const [m1, m2] = [Math.floor(parseInt(m) / 10), parseInt(m) % 10];

            const listItem = lib.createElement('div', {
                className: 'sale__item promo__item',
                children: [
                    lib.createElement('h3', {
                        className: 'promo__heading',
                        children: [
                            lib.createElement(
                                'a',
                                {
                                    href: promo.url
                                },
                                promo.title
                            )
                        ]
                    }),
                    lib.createElement('div', {
                        className: 'promo__img',
                        children: [
                            lib.createElement('img', {
                                src: promo.img,
                                alt: promo.title,
                                onerror: function () {
                                    this.src = './img/temp-image.jpg';
                                }
                            })
                        ]
                    }),
                    lib.createElement(
                        'div',
                        {
                            className: 'promo__text'
                        },
                        promo.description
                    ),
                    lib.createElement('div', {
                        className: 'promo__timer',
                        children: [
                            lib.createElement(
                                'div',
                                {
                                    className: 'promo__timer--text'
                                },
                                'Срок действия:'
                            ),
                            isFinitePromotion
                                ? lib.createElement('div', {
                                      className: 'promo__timer--time',
                                      children: [
                                          lib.createElement('div', {
                                              className: 'time__countdown',
                                              children: [
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${d1}`
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${d2}`
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'dot'
                                                      },
                                                      ':'
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${h1}`
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${h2}`
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'dot'
                                                      },
                                                      ':'
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${m1}`
                                                  ),
                                                  lib.createElement(
                                                      'div',
                                                      {
                                                          className: 'number'
                                                      },
                                                      `${m2}`
                                                  )
                                              ]
                                          }),
                                          lib.createElement('div', {
                                              className: 'time__text',
                                              children: [
                                                  lib.createElement('div', {}, 'дней'),
                                                  lib.createElement('div', {}, 'часов'),
                                                  lib.createElement('div', {}, 'минут')
                                              ]
                                          })
                                      ]
                                  })
                                : lib.createElement(
                                      'div',
                                      {
                                          className: 'promo__timer--time infinity-sale'
                                      },
                                      'Бессрочно'
                                  )
                        ]
                    }),
                    lib.createElement(
                        'a',
                        {
                            href: promo.url,
                            className: 'promo__link'
                        },
                        'Подробнее'
                    )
                ]
            });

            promoEl.append(listItem);
        }
    }
} catch (e) {
    console.log(e);
    console.log('Failed to load Banners content');
}

// Buy right now
const buyRightNow = document.querySelector('.list-buy-now');
try {
    const candidates = [];
    if (BUYING_RIGHT_NOW.length === 0) {
        document.querySelector('.buy-right-now').remove();
    }

    for (const element of BUYING_RIGHT_NOW) {
        if (element.title && element.url && element.img) {
            candidates.push(element);
        }

        if (candidates.length === 4) break;
    }

    for (const item of candidates) {
        const listItem = lib.createElement('li', {
            className: 'item',
            children: [
                lib.createElement('div', {
                    className: 'item__image',
                    children: [
                        lib.createElement('a', {
                            href: item.url,
                            children: [
                                lib.createElement('img', {
                                    src: item.img,
                                    alt: item.title,
                                    onerror: function () {
                                        this.src = './img/temp-image.jpg';
                                    }
                                })
                            ]
                        })
                    ]
                }),
                lib.createElement('div', {
                    className: 'item__link',
                    children: [
                        lib.createElement(
                            'a',
                            {
                                href: item.irl
                            },
                            item.title
                        )
                    ]
                })
            ]
        });

        buyRightNow.append(listItem);
    }
} catch (e) {
    console.log(e);
    console.log('Failed to load Banners content');
}

// Products
const newItemsEl = document.querySelector('.new-items');
const recommendItemsEl = document.querySelector('.recommend-items');
const discountItemsEl = document.querySelector('.discount-items');

try {
    const relations = {
        new: {
            candidates: [],
            nodeEl: newItemsEl.querySelector('.sale__content')
        },
        recommended: {
            candidates: [],
            nodeEl: recommendItemsEl.querySelector('.sale__content')
        },
        sale: {
            candidates: [],
            nodeEl: discountItemsEl.querySelector('.sale__content')
        }
    };

    for (const product of ITEMS) {
        if (Object.keys(relations).includes(product.type)) {
            relations[product.type].candidates.push(product);
        }
    }

    relations.new.candidates.sort((a, b) => {
        return lib.getTimestamp(b.date) - lib.getTimestamp(a.date);
    });

    relations.recommended.candidates.sort((a, b) => {
        return lib.getPrice(a.price, a.currency) - lib.getPrice(b.price, b.currency);
    });

    relations.sale.candidates.sort((a, b) => {
        const [oldPriceA, currPriceA] = [
            lib.getPrice(a.oldPrice, a.currency),
            lib.getPrice(a.price, a.currency)
        ];

        const [oldPriceB, currPriceB] = [
            lib.getPrice(b.oldPrice, b.currency),
            lib.getPrice(b.price, b.currency)
        ];

        const [diffA, diffB] = [oldPriceA - currPriceA, oldPriceB - currPriceB];

        return diffB - diffA;
    });

    for (const category in relations) {
        for (const item of relations[category].candidates) {
            const poductItem = lib.createElement('div', {
                className: 'sale__item',
                children: [
                    lib.createElement('div', {
                        className: 'sale__item--image',
                        children: [
                            lib.createElement('a', {
                                href: item.url,
                                children: [
                                    lib.createElement('img', {
                                        alt: item.description,
                                        src: item.img,
                                        onerror: function () {
                                            this.src = './img/temp-image.jpg';
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    lib.createElement('div', {
                        className: `sale__item--baige baige-${category}`
                    }),
                    lib.createElement('h4', {
                        className: 'sale__item--title',
                        children: [
                            lib.createElement(
                                'a',
                                {
                                    href: item.url
                                },
                                `${item.description}`
                            )
                        ]
                    }),
                    lib.createElement('div', {
                        className: 'sale__item--price',
                        children: [
                            lib.createElement('span', {}, 'Цена'),
                            lib.createElement(
                                'span',
                                {
                                    className: 'price'
                                },
                                `${
                                    lib.isNumeric(item.price)
                                        ? lib.thousandSeparator(
                                              lib.getPrice(item.price, item.currency)
                                          ) + lib.currencySymbol[CURRENCY]
                                        : 'Товар не доступен'
                                }`
                            ),
                            lib.createElement(
                                'span',
                                {
                                    className: 'discount'
                                },
                                `${
                                    lib.isNumeric(item.oldPrice)
                                        ? lib.thousandSeparator(
                                              lib.getPrice(item.oldPrice, item.currency)
                                          ) + lib.currencySymbol[CURRENCY]
                                        : ''
                                }`
                            )
                        ]
                    }),
                    lib.createElement('div', {
                        className: 'sale__item--action',
                        children: [
                            lib.createElement('button', {
                                children: [
                                    lib.createElement('img', {
                                        src: 'img/icons/cart.svg',
                                        alt: 'Добавить в козину'
                                    }),
                                    document.createTextNode('Купить')
                                ],
                                onclick: function () {
                                    const priceString = this.parentElement.previousElementSibling
                                        .children[1].textContent;
                                    const price = parseInt(priceString.split(' ').join(''));
                                    lib.addToBasket(price);
                                }
                            }),
                            lib.createElement(
                                'a',
                                {
                                    href: item.url
                                },
                                'Подробнее'
                            )
                        ]
                    })
                ]
            });
            relations[category].nodeEl.append(poductItem);

            if (poductItem.querySelector('.price').textContent === 'Товар не доступен') {
                const button = poductItem.querySelector('.sale__item--action button');
                button.disabled = true;
                button.innerHTML = 'Отсутствует';
            }
        }
    }
} catch (e) {
    console.log(e);
    console.log('Failed on load Products content');
}
