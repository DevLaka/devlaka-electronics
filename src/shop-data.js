const SHOP_DATA = [
  {
    title: "Laptops",
    items: [
      {
        id: 1,
        name: "MSI Vector GP66",
        imageUrl:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        price: 250000,
      },
      {
        id: 2,
        name: "MSI Crosshair 15",
        imageUrl:
          "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 180000,
      },
      {
        id: 3,
        name: "MSI Pulse GL66",
        imageUrl:
          "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
        price: 250000,
      },
      {
        id: 4,
        name: "MSI Katana GF66",
        imageUrl:
          "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        price: 250000,
      },
      {
        id: 5,
        name: "MSI Katana GF66 12UC",
        imageUrl:
          "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 200000,
      },
      {
        id: 6,
        name: "MSI GF63 Thin 10SC",
        imageUrl:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
        price: 140000,
      },
      {
        id: 7,
        name: "Lenovo IdeaPad Gaming 3",
        imageUrl:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        price: 180000,
      },
      {
        id: 8,
        name: "MSI Vector GP76",
        imageUrl:
          "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80",
        price: 140000,
      },
      {
        id: 9,
        name: "MSI GF63 Thin 10SCSR",
        imageUrl:
          "https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
        price: 160000,
      },
    ],
  },
  {
    title: "Desktops",
    items: [
      {
        id: 10,
        name: "WSG Gaming PC With Core I5",
        imageUrl:
          "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80",
        price: 220000,
      },
      {
        id: 11,
        name: "WSG Gaming PC Ryzen 7 5700G",
        imageUrl:
          "https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        price: 280000,
      },
      {
        id: 12,
        name: "GIGABYTE Content Creator PC",
        imageUrl:
          "https://images.unsplash.com/photo-1483203257148-66ee23170d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 110000,
      },
      {
        id: 13,
        name: "WSG PRO Photoshop Editing",
        imageUrl:
          "https://images.unsplash.com/photo-1500083443496-000d756d070c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
        price: 160000,
      },
      {
        id: 14,
        name: "WSG Gaming PC With Core I3",
        imageUrl:
          "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        price: 160000,
      },
      {
        id: 15,
        name: "WSG Gaming PC With I7",
        imageUrl:
          "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        price: 160000,
      },
      {
        id: 16,
        name: "WSG Gaming PC 12th Gen Intel",
        imageUrl:
          "https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        price: 190000,
      },
    ],
  },
  {
    title: "Memory",
    items: [
      {
        id: 18,
        name: "PNY 8GB DDR4 3200 MHz",
        imageUrl:
          "https://images.unsplash.com/photo-1592664474505-51c549ad15c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 12500,
      },
      {
        id: 19,
        name: "PNY XLR8 RGB 8GB DDR4",
        imageUrl:
          "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        price: 90,
      },
      {
        id: 20,
        name: "Corsair Dominator Platinum RGB 32GB",
        imageUrl:
          "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 90,
      },
      {
        id: 21,
        name: "Crucial Ballistix 8GB RGB DDR4",
        imageUrl:
          "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price: 165,
      },
      {
        id: 22,
        name: "PNY XLR8 16GB DDR4 ",
        imageUrl:
          "https://images.unsplash.com/photo-1596302332910-07f3ac264d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 185,
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        id: 23,
        name: "Western Digital 1TB SATA",
        imageUrl:
          "https://images.unsplash.com/photo-1591913139332-f8172ef511da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 2500,
      },
      {
        id: 24,
        name: "Toshiba L200 1TB SATA",
        imageUrl:
          "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price: 2000,
      },
      {
        id: 25,
        name: "WD 1TB Black",
        imageUrl:
          "https://images.unsplash.com/photo-1601737487795-dab272f52420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 8000,
      },
      {
        id: 26,
        name: "Western Digital 500GB",
        imageUrl:
          "https://images.unsplash.com/photo-1589995186011-a7b485edc4bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 8000,
      },
      {
        id: 27,
        name: "Seagate 1TB",
        imageUrl:
          "https://images.unsplash.com/photo-1581725645226-92ad3b4c16d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 4500,
      },
      {
        id: 28,
        name: "Toshiba P300 2TB",
        imageUrl:
          "https://images.unsplash.com/photo-1627205543617-0fbd55211221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 13500,
      },
      {
        id: 29,
        name: "Seagate 2TB SATA",
        imageUrl:
          "https://images.unsplash.com/photo-1602493054445-4a0b4fa7fdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 2000,
      },
    ],
  },
  {
    title: "Graphic Cards",
    items: [
      {
        id: 30,
        name: "GIGABYTE GeForce RTX 3050",
        imageUrl:
          "https://images.unsplash.com/photo-1587225036677-95fc14cd067a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 325000,
      },
      {
        id: 31,
        name: "ASUS TUF GAMING GeForce",
        imageUrl:
          "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 200000,
      },
      {
        id: 32,
        name: "Gigabyte GeForce GTX 1660",
        imageUrl:
          "https://images.unsplash.com/photo-1555618254-84e2cf498b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        price: 250000,
      },
      {
        id: 33,
        name: "PNY GeForce RTX 3070",
        imageUrl:
          "https://images.unsplash.com/photo-1616877562265-d4ffd9d6f47f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        price: 250000,
      },
      {
        id: 34,
        name: "Gigabyte GeForce RTX 3050",
        imageUrl:
          "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 400000,
      },
      {
        id: 35,
        name: "Gigabyte GeForce GTX 1660",
        imageUrl:
          "https://images.unsplash.com/photo-1622957041662-3e252cf3bb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 25000,
      },
    ],
  },
];

export default SHOP_DATA;
