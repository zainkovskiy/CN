const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const similar = [
  {
    "reqNumber": "58549000005",
    "reqRoomCount": "1",
    "lat": "55.028217",
    "lng": "82.923451",
    "reqTypeofRealty": "Квартира",
    "isNew": 0,
    "reqType": "1c",
    "source": "1c",
    "reqCity": "Новосибирск",
    "reqRayon": "Октябрьский",
    "reqStreet": "Ключ-Камышенское плато",
    "reqHouseNumber": "26/2",
    "nearMetro": "Площадь Ленина",
    "metroDistance": 4,
    "reqFlatTotalArea": "50.70",
    "reqFlatLivingArea": "14.00",
    "reqKitchenArea": "36.00",
    "reqCommunity": null,
    "reqLandArea": null,
    "reqFloor": "15",
    "reqFloors": "18",
    "reqDocType": "Нет",
    "reqReserved": "2021-12-23 00:00:00.000000",
    "reqUpdateTime": 1670942243,
    "reqPrice": "3650",
    "reqStartPrice": "3650",
    "reqPhoto": "https://centromir-sc.ru/imagebase/58549000005/Resize/58549000005_8ee7997d-5362-4ff4-96fc-e7cac43b3689_r.jpg",
    "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
  },
  {
    "reqNumber": "58368000022",
    "reqRoomCount": "2",
    "lat": "55.028712",
    "lng": "82.919541",
    "reqTypeofRealty": "Квартира",
    "isNew": 0,
    "reqType": "1c",
    "source": "1c",
    "reqCity": "Новосибирск",
    "reqRayon": "Центральный",
    "reqStreet": "Красный проспект",
    "reqHouseNumber": "25",
    "nearMetro": "Площадь Ленина",
    "metroDistance": 3,
    "reqStartPrice": "3650",
    "reqFlatTotalArea": "68.00",
    "reqFlatLivingArea": "45.00",
    "reqKitchenArea": "6.00",
    "reqCommunity": null,
    "reqLandArea": null,
    "reqFloor": "6",
    "reqFloors": "17",
    "reqDocType": "Нет",
    "reqReserved": "2018-11-20 00:00:00.000000",
    "reqUpdateTime": 1670942243,
    "reqPrice": "5500",
    "reqPhoto": "https://centromir-sc.ru/imagebase/58368000022/Resize/58368000022_d92234ac-e737-4afc-8ebc-2ed151c7a8c8_r.jpg",
    "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
  },
  {
    "reqNumber": "21133372",
    "reqRoomCount": null,
    "lat": "55.030205",
    "lng": "82.920433",
    "reqTypeofRealty": "Квартира",
    "isNew": 0,
    "reqType": "1c",
    "source": "1c",
    "reqCity": "Новосибирск",
    "reqRayon": "Кольцово",
    "reqStreet": null,
    "reqHouseNumber": null,
    "nearMetro": "Площадь Ленина",
    "metroDistance": "0.0",
    "reqFlatTotalArea": null,
    "reqFlatLivingArea": null,
    "reqKitchenArea": null,
    "reqCommunity": null,
    "reqLandArea": null,
    "reqFloor": null,
    "reqFloors": null,
    "reqDocType": "Нет",
    "reqReserved": "2011-04-29 00:00:00.000000",
    "reqUpdateTime": 1670942243,
    "reqPrice": "0",
    "reqPhoto": null,
    "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
  },
  {
    "reqNumber": "57327000020",
    "reqRoomCount": "3",
    "lat": "55.033752",
    "lng": "82.922836",
    "reqStartPrice": "3650",
    "reqTypeofRealty": "Квартира",
    "isNew": 0,
    "reqType": "1c",
    "source": "1c",
    "reqCity": "Новосибирск",
    "reqRayon": "Центральный",
    "reqStreet": "Мичурина",
    "reqHouseNumber": "7",
    "nearMetro": "Площадь Ленина",
    "metroDistance": 5,
    "reqFlatTotalArea": "63.20",
    "reqFlatLivingArea": "52.30",
    "reqKitchenArea": "6.90",
    "reqCommunity": "Тихий центр",
    "reqLandArea": null,
    "reqFloor": "1",
    "reqFloors": "4",
    "reqDocType": "Эксклюзив",
    "reqReserved": "2021-12-03 00:00:00.000000",
    "reqUpdateTime": "2022-04-21 17:57:26.199418",
    "reqPrice": "7750",
    "reqPhoto": "https://centromir-sc.ru/imagebase/57327000020/Resize/57327000020_afa9b7cd-f370-4717-8715-bf87bdbd20e2_r.jpg",
    "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
  }
]

app.use(cors({
  origin: 'http://localhost:8080',
}))

app.get('/', (req, res) => {
  res.send(JSON.stringify(similar))
})


app.listen(port, () => {
  console.log('listen server')
})