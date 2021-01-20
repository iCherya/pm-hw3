const CURRENCY = 'UAH';

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
                order: 0,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html'
            }
        ]
    },
    payment_delivery: {
        order: 6,
        title: 'Оплата и доставка',
        url: 'payment_delivery.html'
    },
    warranty: {
        order: 3,
        title: 'Гарантия и возврат',
        url: 'warranty.html'
    },
    contacts: {
        order: 5,
        title: 'Контакты',
        url: 'contacts.html'
    },
    keyvalue: {
        order: 2,
        title: 'Услуги',
        url: ''
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
    },
    {
        order: 5,
        title: 'SKYPE оборудо222вание',
        url: 'skype_equipment.html'
    },
    {
        order: 6,
        title: 'GSM оборудо222вание',
        url: 'gsm_equipment.html'
    },
    {
        order: 7,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html'
    },
    {
        order: 8,
        title: 'SKYPE обор222удование',
        url: 'skype_equipment.html'
    },
    {
        order: 9,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html'
    },
    {
        order: 10,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html'
    },
    {
        order: 11,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html'
    },
    {
        order: 12,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html'
    },
    {
        order: 13,
        title: 'VIDEO обор222удование',
        url: 'video_equipment.html'
    },
    {
        order: 14,
        title: 'SKYPE о2222борудование',
        url: 'skype_equipment.html'
    },
    {
        order: 15,
        title: 'GSM 222оборудование',
        url: 'gsm_equipment.html'
    },
    {
        order: 16,
        title: 'VIDEO2222 оборудование',
        url: 'video_equipment.html'
    }
];

const NEWS = [
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: './img/temp-image.jpg',
        url: 'voip_equipment.html'
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: './img/temp-image.jpg',
        url: 'voip_equipment.html'
    }
];

const BANNER = [
    {
        order: 1,
        img: './img/camera-bg.png',
        url: 'voip_equipment.html'
    },
    {
        order: 2,
        img: './img/temp-image.jpg',
        url: 'test2.html'
    },
    {
        order: 3,
        img: './img/strong-sides-3.png',
        url: 'voip_equipment.html'
    },
    {
        order: 4,
        img: './img/strong-sides-4.png',
        url: 'test2.html'
    }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP1',
        img: './img/temp-image.jpg',
        price: '',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2022/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP2',
        img: './img/temp-image.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2018/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP3',
        img: './img/temp-image.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP4',
        img: './img/temp-image.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2020/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP5',
        img: './img/temp-image.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2020/12/30',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP2',
        img: './img/temp-image.jpg',
        price: '400',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP3',
        img: './img/temp-image.jpg',
        price: '200',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP4',
        img: './img/temp-image.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP5',
        img: './img/temp-image.jpg',
        price: '500',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP2',
        img: './img/temp-image.jpg',
        price: '300',
        oldPrice: '500',
        currency: 'UAH',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP3',
        img: './img/temp-image.jpg',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP4',
        img: './img/temp-image.jpg',
        price: '500',
        oldPrice: '1000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP5',
        img: './img/temp-image.jpg',
        price: '50',
        oldPrice: '60',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    }
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: './img/temp-image.jpg',
        time_action: '1d 2h 80m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    }
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название товара 2',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название товара',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название товара 2',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название товара',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    },
    {
        title: 'Название товара 2',
        img: './img/temp-image.jpg',
        url: 'https://same_url/item.html'
    }
];
