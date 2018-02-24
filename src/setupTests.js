import 'jest-localstorage-mock'
import configureStore from 'redux-mock-store'

global.__initialState__ = {
  "events": [
    {
      "id": "1",
      "title": "Hello world Event!",
      "image": "hello-world-event.jpg",
      "address": "Tallinn, Pae 12",
      "description": "This is my very cool event. Everybody is welcome!"
    },
    {
      "id": "2",
      "title": "FOOO",
      "image": "hello-world-event.jpg",
      "address": "Tallinn, Pae 23",
      "description": "TEst me!"
    },
    {
      "id": "3",
      "title": "FOOO",
      "image": "hello-world-event.jpg",
      "address": "Tallinn, Pae 23",
      "description": "TEst me!"
    },   {
      "id": "4",
      "title": "FOOO",
      "image": "hello-world-event.jpg",
      "address": "Tallinn, Pae 23",
      "description": "TEst me!"
    }
  ],
  "guests": [
    {
      "event_id": "2",
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "chen",
        "last": "wisselink"
      },
      "location": {
        "street": "3808 keizerstraat",
        "city": "ferwerderadiel",
        "state": "drenthe",
        "postcode": 56857
      },
      "email": "chen.wisselink@example.com",
      "login": {
        "username": "heavylion167",
        "password": "vh5150",
        "salt": "zL7Qa5XB",
        "md5": "757306f8a8e0f6f1ce9cb73bba8691c4",
        "sha1": "b025aaa0214baf63c46db12a4e96030e739527a8",
        "sha256": "16c91f57e40c9c1730de86e276425bcb384025bb4c4ea6048c77fe49e5880616"
      },
      "dob": "1981-10-09 18:17:17",
      "registered": "2008-12-26 00:34:53",
      "phone": "(068)-080-5899",
      "cell": "(986)-937-4954",
      "id": {
        "name": "BSN",
        "value": "87831096"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/48.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
      },
      "nat": "NL"
    },
    {
      "event_id": "1",
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "تارا",
        "last": "زارعی"
      },
      "location": {
        "street": "1018 شهید دکتر آیت",
        "city": "خرم‌آباد",
        "state": "فارس",
        "postcode": 43511
      },
      "email": "تارا.زارعی@example.com",
      "login": {
        "username": "blueladybug495",
        "password": "natalie",
        "salt": "24HdpkXJ",
        "md5": "427237cafa9b86438c1d4fa97fdd9c61",
        "sha1": "5290491adb9e297158d3d94fd4042725e389bb56",
        "sha256": "354694db8710a684111fdf2ea37b781992add6d29e3d27cdb110a2e53a45c378"
      },
      "dob": "1987-02-09 12:47:44",
      "registered": "2006-01-24 14:31:07",
      "phone": "099-67491019",
      "cell": "0947-744-1530",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
      },
      "nat": "IR"
    },
    {
      "event_id": "1",
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "lucas",
        "last": "clarke"
      },
      "location": {
        "street": "5687 hugh watt drive",
        "city": "wellington",
        "state": "northland",
        "postcode": 33458
      },
      "email": "lucas.clarke@example.com",
      "login": {
        "username": "silvermeercat559",
        "password": "5rxypn",
        "salt": "V2HiccBM",
        "md5": "450bc19106d3d8f0208b0a396002d69a",
        "sha1": "11054150e0a52cfd152d48579d289facadd689c8",
        "sha256": "2ef998bda66b08c886408043685a217523de2eaa3770eb1ac14bdfb4dd55de19"
      },
      "dob": "1970-04-19 14:45:56",
      "registered": "2010-08-05 02:01:58",
      "phone": "(270)-784-7345",
      "cell": "(632)-908-6450",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/80.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
      },
      "nat": "NZ"
    },
    {
      "event_id": "1",
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "grace",
        "last": "brown"
      },
      "location": {
        "street": "7624 aldwins road",
        "city": "blenheim",
        "state": "otago",
        "postcode": 95221
      },
      "email": "grace.brown@example.com",
      "login": {
        "username": "organicrabbit954",
        "password": "nichole",
        "salt": "JPw3WvCy",
        "md5": "fa545098c696a49abe89aeba723063a4",
        "sha1": "5cbc21f2971d6363f8a5252efbea10a4bb99cba8",
        "sha256": "3d983069d528121de8bdb4323841fed854b3f7525412b4473282257a80a80a10"
      },
      "dob": "1969-04-05 01:50:07",
      "registered": "2010-03-07 13:57:55",
      "phone": "(910)-711-1714",
      "cell": "(356)-340-1559",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
      },
      "nat": "NZ"
    }
  ]
}

const middlewares = []
const mockStore = configureStore(middlewares)
global.__store__ = mockStore(global.__initialState__)
 
const now = Date.now()