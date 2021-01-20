const CURRENCY = 'UAN';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38
};

const BASKET = {
    elements: 4,
    price: 4000
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html'
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html'
            }
        ]
    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html'
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html'
            }
        ]
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html'
    }
};

const MENU = [
    {
        order: 1,
        title: 'VOIP ОБОРУДОВАНИЕ',
        url: 'voip_equipment.html'
    },
    {
        order: 2,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html'
    },
    {
        order: 3,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html'
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html'
    }
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Новинка от «Элтекс» - точка доступа WEP',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: './img/products/news-img1.jpg',
        url: 'voip_equipment.html'
    },
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: './img/products/news-img2.jpg',
        url: 'voip_equipment.html'
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: './img/products/news-img3.jpg',
        url: 'voip_equipment.html'
    }
];

const BANNER = [
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html'
    },
    {
        order: 2,
        img: 'https://same_url2.jpg',
        url: 'voip_equipment.html'
    }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product1.jpg',
        price: '12300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product2.jpg',
        price: '10300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2005/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product3.jpg',
        price: '12300',
        oldPrice: '15700',
        currency: 'RUB',
        date: '2005/05/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product4.jpg',
        price: '12300',
        oldPrice: '20000',
        currency: 'RUB',
        date: '2001/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product1.jpg',
        price: '12300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product2.jpg',
        price: '10300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2005/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product3.jpg',
        price: '12300',
        oldPrice: '15700',
        currency: 'RUB',
        date: '2005/05/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product4.jpg',
        price: '12300',
        oldPrice: '20000',
        currency: 'RUB',
        date: '2001/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product1.jpg',
        price: '12300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product2.jpg',
        price: '10300',
        oldPrice: '15500',
        currency: 'RUB',
        date: '2005/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product3.jpg',
        price: '12300',
        oldPrice: '15700',
        currency: 'RUB',
        date: '2005/05/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/products/product4.jpg',
        price: '12300',
        oldPrice: '20000',
        currency: 'RUB',
        date: '2001/01/01',
        url: 'new_items/item1.html'
    },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/banners/sale1.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/banners/sale2.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/banners/sale1.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/banners/sale2.jpg',
        url: 'https://same_url/item.html'
    }
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Замок дверной Samsung SHS-2320',
        img: 'img/products/list-buy-now-item-1.png',
        url: 'https://same_url/item.html'
    },
    {
        title: 'GSM-VoIP OpenVox VoxStack VS-GW2120-4G.',
        img: 'img/products/list-buy-now-item-2.png',
        url: 'https://same_url/item.html'
    },
    {
        title: 'GSM phone BQD–2051 Rome',
        img: 'img/products/list-buy-now-item-3.png',
        url: 'https://same_url/item.html'
    },
    {
        title: 'IP phone Grandstream GXP2130',
        img: 'img/products/list-buy-now-item-4.png',
        url: 'https://same_url/item.html'
    },

];
