const data = [
  {
    id: 1,
    price_Id: "price_1P3NuHSGY67LfqYOQG5wPsJV",
    img: "https://m.media-amazon.com/images/I/61KwCmF0bdL._AC_SL1500_.jpg",
    title: "Dell Inspiron 15 3000 Series",
    keywords: "Dell Inspiron 15 3000 Series laptops",
    prevPrice: "700",
    newPrice: "500",
    company: "dell",
    category: "laptop",
    newProduct: true,
    stockLeft: 18,
    details:
      "The Dell Inspiron 15 3000 Series is a powerful and versatile laptop designed to meet all your computing needs. Whether you're working on documents, browsing the web, or streaming your favorite movies, this laptop delivers exceptional performance and reliability. With its sleek design and long-lasting battery life, it's the perfect companion for work or play. Plus, with its affordable price tag, it offers incredible value for money.",
    reviewCount: "509 reviews",
    reviews: [
      {
        userName: "Emily Johnson",
        date: "March 12, 2023",
        review:
          "I recently purchased the Dell Inspiron 15 3000 Series, and I'm thoroughly impressed. Its sleek design, powerful performance, and long-lasting battery make it perfect for both work and entertainment. Highly recommended!",
      },
      {
        userName: "Michael Smith",
        date: "April 28, 2023",
        review:
          "The Dell Inspiron 15 3000 Series exceeded my expectations. Its fast processor, ample storage, and vibrant display make it a great choice for everyday use. Whether you're a student or a professional, this laptop won't disappoint.",
      },
    ],
  },
  {
    id: 2,
    price_Id: "price_1P3NvBSGY67LfqYOAhe1a6VQ",
    img: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg",
    title: "Canon EOS Rebel T7 DSLR",
    keywords: "Canon EOS Rebel T7 DSLR cameras",
    reviewCount: "123 reviews",
    prevPrice: "749",
    newPrice: "500",
    company: "canon",
    category: "camera",
    newProduct: true,
    stockLeft: 0,
    details:
      "The Canon EOS Rebel T7 DSLR is a professional-grade camera that captures stunning images and videos with exceptional clarity and detail. Equipped with advanced features like a high-resolution sensor and fast autofocus system, it's perfect for capturing memorable moments with friends and family. Plus, its compact and lightweight design makes it easy to carry around wherever you go.",
    reviews: [
      {
        userName: "Sarah Brown",
        date: "June 5, 2023",
        review:
          "As a photography enthusiast, I can't recommend the Canon EOS Rebel T7 DSLR enough. Its high-resolution sensor, fast autofocus system, and intuitive controls make it a joy to use. Plus, its compact design makes it easy to carry around on all my adventures.",
      },
      {
        userName: "David Wilson",
        date: "July 19, 2023",
        review:
          "I've been using the Canon EOS Rebel T7 DSLR for a few months now, and I'm blown away by its performance. Whether I'm shooting landscapes or portraits, this camera delivers stunning results every time. It's definitely worth the investment.",
      },
    ],
  },
  {
    id: 3,
    price_Id: "price_1P3NvvSGY67LfqYOcg5TGDKD",
    img: "https://m.media-amazon.com/images/I/81Ql+nOEynL._AC_SL1500_.jpg",
    title: "HP ROG Strix G16",
    keywords: "HP ROG Strix G16 laptops",
    reviewCount: "1230 reviews",
    prevPrice: "599",
    newPrice: "500",
    company: "hP",
    category: "laptop",
    newProduct: false,
    stockLeft: 10,
    details:
      "The HP ROG Strix G16 laptop is a powerhouse that's perfect for gamers and professionals alike. With its powerful processor and high-performance graphics card, it can handle even the most demanding tasks with ease. Plus, its sleek and stylish design makes it a great choice for those who want to stand out from the crowd. Whether you're gaming, working, or streaming your favorite content, the HP ROG Strix G16 has you covered.",
    reviews: [
      {
        userName: "Olivia Martinez",
        date: "August 10, 2023",
        review:
          "The HP ROG Strix G16 is a beast of a laptop. Its powerful processor, high-performance graphics card, and stunning display make it perfect for gaming and multimedia tasks. Plus, its sleek design and customizable RGB lighting add a touch of style to any setup.",
      },
      {
        userName: "Daniel Thompson",
        date: "September 25, 2023",
        review:
          "I've been using the HP ROG Strix G16 for gaming and productivity, and it's been phenomenal. Its smooth performance, immersive display, and robust build quality make it a top choice for gamers and professionals alike. I couldn't be happier with my purchase.",
      },
    ],
  },
  {
    id: 4,
    price_Id: "price_1P3Ns7SGY67LfqYOjY0ZAmbt",
    img: "https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg",
    title: "boAt Airdopes 141",
    keywords: "boAt Airdopes 141 headphones earphones airdopes",
    reviewCount: "123 reviews",
    prevPrice: "55",
    newPrice: "50",
    company: "boat",
    category: "headphone",
    newProduct: true,
    stockLeft: 10,
    details:
      "The boAt Airdopes 141 are stylish and affordable true wireless earbuds that deliver impressive sound quality and comfort. With their sleek design and secure fit, they're perfect for listening to music, taking calls, or working out. Plus, with their long battery life and quick charging feature, you can enjoy hours of uninterrupted use on the go. Whether you're at home, in the office, or on the move, the boAt Airdopes 141 are the perfect companion for your audio needs.",
    reviews: [
      {
        userName: "Sophia White",
        date: "October 8, 2023",
        review:
          "The boAt Airdopes 141 are hands down the best true wireless earbuds I've ever owned. Their sleek design, comfortable fit, and impressive sound quality make them perfect for music lovers on the go. Plus, their long battery life means I can enjoy my favorite tunes all day long.",
      },
      {
        userName: "James Johnson",
        date: "November 15, 2023",
        review:
          "I've tried many true wireless earbuds in the past, but none have impressed me as much as the boAt Airdopes 141. Their secure fit, rich sound, and reliable connectivity make them my go-to choice for workouts and daily commutes. Highly recommended!",
      },
    ],
  },
  {
    id: 5,
    price_Id: "price_1P3NwVSGY67LfqYOcKoyz3Ld",
    img: "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SL1500_.jpg",
    title: "HP 14 - Intel Celeron N4020",
    keywords: "HP 14 - Intel Celeron N4020 laptops",
    reviewCount: "123 reviews",
    prevPrice: "399",
    newPrice: "150",
    company: "hP",
    category: "laptop",
    newProduct: false,
    stockLeft: 15,
    details:
      "The HP 14 - Intel Celeron N4020 laptop is a reliable and affordable option for everyday computing tasks. Whether you're browsing the web, working on documents, or watching movies, this laptop delivers reliable performance and impressive battery life. Plus, with its sleek and lightweight design, it's easy to take with you wherever you go. Whether you're a student, professional, or casual user, the HP 14 - Intel Celeron N4020 has everything you need to stay productive and entertained.",
    reviews: [
      {
        userName: "Emma Garcia",
        date: "December 3, 2023",
        review:
          "The HP 14 - Intel Celeron N4020 is a solid choice for everyday computing tasks. Its responsive performance, long battery life, and affordable price make it perfect for students and professionals on a budget. Whether I'm working on documents or streaming videos, this laptop gets the job done.",
      },
      {
        userName: "Noah Rodriguez",
        date: "January 20, 2024",
        review:
          "I've been using the HP 14 - Intel Celeron N4020 for a few weeks now, and I'm impressed by its reliability and performance. Its lightweight design, fast processor, and ample storage space make it a great option for users who need a dependable laptop for work and entertainment.",
      },
    ],
  },
  {
    id: 6,
    price_Id: "price_1P3NxISGY67LfqYOxwfLlpNx",
    img: "https://m.media-amazon.com/images/I/8195A49fZbL._SL1500_.jpg",
    title: "realme narzo 60 5G",
    keywords: "realme narzo 60 5G mobiles phones",
    reviewCount: "123 reviews",
    prevPrice: "399",
    newPrice: "150",
    company: "realme",
    category: "mobile",
    newProduct: false,
    stockLeft: 10,
    details:
      "The realme narzo 60 5G is a feature-packed smartphone that offers blazing-fast performance and stunning visuals. With its powerful processor and high-resolution display, it's perfect for gaming, streaming, and multitasking. Plus, its sleek design and long-lasting battery life make it the ideal companion for life on the go. Whether you're working, playing, or staying connected with friends and family, the realme narzo 60 5G has you covered.",
    reviews: [
      {
        userName: "Emily Watson",
        date: "April 5, 2024",
        review:
          "The realme narzo 60 5G is fantastic! Its sleek design and powerful performance make it stand out among its competitors. I've been using it for gaming and streaming, and it hasn't disappointed me.",
      },
      {
        userName: "Michael Johnson",
        date: "March 22, 2024",
        review:
          "I'm thoroughly impressed with the realme narzo 60 5G. Its 5G connectivity ensures lag-free browsing and downloading, and the display is vibrant and immersive. Definitely worth the investment!",
      },
    ],
  },
  {
    id: 7,
    price_Id: "price_1P3NxwSGY67LfqYOjiYVq0si",
    img: "https://m.media-amazon.com/images/I/716n3g3U+yL._AC_SL1500_.jpg",
    title: "HP - Intel N4120 Quad-Core",
    keywords: "HP - Intel N4120 Quad-Core laptops",
    reviewCount: "123 reviews",
    prevPrice: "499",
    newPrice: "150",
    company: "hp",
    category: "laptop",
    newProduct: false,
    stockLeft: 8,
    details:
      "The HP - Intel N4120 Quad-Core laptop is a versatile and reliable device that's perfect for work, school, and entertainment. With its powerful processor and spacious storage, it can handle all your computing needs with ease. Plus, its sleek design and long battery life make it the perfect companion for life on the go. Whether you're working on documents, browsing the web, or streaming your favorite movies, the HP - Intel N4120 Quad-Core laptop delivers exceptional performance and reliability.",
    reviews: [
      {
        userName: "Sophia Lee",
        date: "February 18, 2024",
        review:
          "The HP - Intel N4120 Quad-Core laptop is a reliable workhorse! Its performance is smooth, and the battery life lasts me through my entire workday. Highly recommended for professionals.",
      },
      {
        userName: "Daniel Brown",
        date: "January 10, 2024",
        review:
          "I recently purchased the HP - Intel N4120 Quad-Core laptop, and I'm extremely satisfied with its performance. The keyboard is comfortable to type on, and the display is crisp and clear. Great value for money!",
      },
    ],
  },
  {
    id: 8,
    price_Id: "price_1P3NzXSGY67LfqYODh6IMV98",
    img: "https://m.media-amazon.com/images/I/81swjZCbdiL._AC_SL1500_.jpg",
    title: "KODAK PIXPRO FZ55-BK",
    keywords: "KODAK PIXPRO FZ55-BK cameras",
    reviewCount: "123 reviews",
    prevPrice: "199",
    newPrice: "150",
    company: "kodak",
    category: "camera",
    newProduct: true,
    stockLeft: 0,
    details:
      "The KODAK PIXPRO FZ55-BK is a high-quality camera that's perfect for capturing all your special moments. Whether you're shooting landscapes, portraits, or action shots, this camera delivers stunning image quality and clarity. With its easy-to-use interface and intuitive controls, it's perfect for photographers of all skill levels. Plus, its compact and lightweight design makes it easy to take with you wherever you go. Whether you're a beginner or an experienced photographer, the KODAK PIXPRO FZ55-BK has everything you need to take your photography to the next level.",
    reviews: [
      {
        userName: "Olivia Martinez",
        date: "December 5, 2023",
        review:
          "The KODAK PIXPRO FZ55-BK is an excellent camera for beginners! Its easy-to-use interface and intuitive controls make it perfect for capturing memorable moments. I'm thrilled with the photo quality.",
      },
      {
        userName: "William Taylor",
        date: "November 12, 2023",
        review:
          "I've been using the KODAK PIXPRO FZ55-BK for my photography hobby, and it's been a delightful experience so far. The zoom range is impressive, and the image stabilization feature helps capture sharp photos.",
      },
    ],
  },
  {
    id: 9,
    price_Id: "price_1P3O0DSGY67LfqYOyJMqpLYw",
    img: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    title: "Apple 2020 MacBook Air",
    keywords: "Apple 2020 MacBook Air laptops",
    reviewCount: "990 reviews",
    prevPrice: "1029",
    newPrice: "999",
    company: "apple",
    category: "laptop",
    newProduct: false,
    stockLeft: 5,
    details:
      "The Apple 2020 MacBook Air is a sleek and powerful laptop that's perfect for work, school, and everyday use. With its stunning Retina display, fast processor, and long battery life, it's the ultimate portable computing device. Plus, with its lightweight design and slim profile, it's easy to take with you wherever you go. Whether you're working on documents, editing photos, or watching movies, the Apple 2020 MacBook Air delivers exceptional performance and reliability.",
    reviews: [
      {
        userName: "Isabella White",
        date: "October 25, 2023",
        review:
          "The Apple 2020 MacBook Air is a game-changer! Its sleek design and lightning-fast performance make it a joy to use for both work and entertainment. I'm a loyal Apple user, and this laptop exceeds my expectations.",
      },
      {
        userName: "Matthew Garcia",
        date: "September 15, 2023",
        review:
          "I upgraded to the Apple 2020 MacBook Air from my old laptop, and I'm impressed with its speed and efficiency. The battery life is exceptional, and the Retina display is stunning. Definitely worth the investment!",
      },
    ],
  },
  {
    id: 10,
    price_Id: "price_1P3O1CSGY67LfqYOzzhX024d",
    img: "https://m.media-amazon.com/images/I/81C9A0E+8TL._AC_SL1500_.jpg",
    title: "Kodak FHD 1080",
    keywords: "Kodak FHD 1080 cameras",
    reviewCount: "123 reviews",
    prevPrice: "399",
    newPrice: "150",
    company: "kodak",
    category: "camera",
    newProduct: false,
    stockLeft: 5,
    details:
      "The Kodak FHD 1080 is a high-quality camera that's perfect for capturing all your adventures. Whether you're hiking in the mountains, exploring the city, or relaxing on the beach, this camera delivers stunning image quality and clarity. With its durable construction and waterproof design, it's built to withstand the rigors of outdoor use. Plus, with its easy-to-use interface and intuitive controls, it's perfect for photographers of all skill levels. Whether you're a beginner or an experienced photographer, the Kodak FHD 1080 has everything you need to capture your memories in stunning detail.",
    reviews: [
      {
        userName: "Ella Wilson",
        date: "August 8, 2023",
        review:
          "The Kodak FHD 1080 camera is a versatile tool for capturing high-quality photos and videos. Its compact size makes it perfect for travel, and the image stabilization feature ensures steady footage even in challenging conditions.",
      },
      {
        userName: "James Thompson",
        date: "July 3, 2023",
        review:
          "I recently started using the Kodak FHD 1080 camera for my YouTube channel, and I'm impressed with its performance. The video quality is excellent, and the audio recording is clear and crisp. Highly recommended for content creators!",
      },
    ],
  },
  {
    id: 11,
    price_Id: "price_1P3O26SGY67LfqYO80UytDP7",
    img: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg",
    title: "Apple iPhone 13 (128GB)",
    keywords: "Apple iPhone 13 (128GB) mobiles phones",
    reviewCount: "123 reviews",
    prevPrice: "1099",
    newPrice: "999",
    company: "apple",
    category: "mobile",
    newProduct: false,
    stockLeft: 80,
    details:
      "The Apple iPhone 13 (128GB) is a powerful and versatile smartphone that's perfect for work, play, and everything in between. With its stunning Retina display, advanced camera system, and long battery life, it's the ultimate mobile device. Whether you're taking photos, streaming videos, or playing games, the iPhone 13 delivers exceptional performance and reliability. Plus, with its sleek design and intuitive interface, it's easy to use and enjoy.",
    reviews: [
      {
        userName: "Sophie Johnson",
        date: "June 20, 2023",
        review:
          "The Apple iPhone 13 (128GB) exceeds all my expectations! Its powerful performance, stunning display, and exceptional camera quality make it a standout smartphone. Whether I'm capturing photos or streaming videos, it delivers an unparalleled experience.",
      },
      {
        userName: "Jacob Martinez",
        date: "May 12, 2023",
        review:
          "I upgraded to the Apple iPhone 13 (128GB) from my previous smartphone, and I'm blown away by its features. The battery life is impressive, and the 128GB storage capacity gives me ample space for all my apps and media. It's truly a premium device!",
      },
    ],
  },
  {
    id: 12,
    price_Id: "price_1P3O3GSGY67LfqYOBIfMTMNu",
    img: "https://m.media-amazon.com/images/I/61DF0nkzgxL._AC_SL1144_.jpg",
    title: 'HP 17.3" Flagship HD+',
    keywords: 'HP 17.3" Flagship HD+ laptops',
    reviewCount: "230 reviews",
    prevPrice: "899",
    newPrice: "999",
    company: "hp",
    category: "laptop",
    newProduct: true,
    stockLeft: 0,
    details:
      "The HP 17.3\" Flagship HD+ laptop is a versatile and reliable device that's perfect for work, school, and entertainment. With its spacious screen and powerful processor, it can handle all your computing needs with ease. Plus, its sleek design and long battery life make it the perfect companion for life on the go. Whether you're working on documents, browsing the web, or streaming your favorite movies, the HP 17.3\" Flagship HD+ laptop delivers exceptional performance and reliability.",
    reviews: [
      {
        userName: "Ava Brown",
        date: "April 5, 2023",
        review:
          "The HP 17.3' Flagship HD+ laptop is a reliable workhorse for everyday tasks. Its large screen and responsive keyboard make it perfect for productivity, and the HD+ resolution ensures crisp and clear visuals. I'm satisfied with its performance.",
      },
      {
        userName: "Alexander Wilson",
        date: "March 22, 2023",
        review:
          "I've been using the HP 17.3' Flagship HD+ laptop for work and entertainment, and it hasn't disappointed me. The multitasking capabilities are impressive, and the battery life lasts me throughout the day. It's a great value for the price!",
      },
    ],
  },
  {
    id: 13,
    price_Id: "price_1P3O79SGY67LfqYO0g9brBOr",
    img: "https://m.media-amazon.com/images/I/71c-jiE2IcL._AC_SL1500_.jpg",
    title: "Canon FHD 1080P Kids",
    keywords: "Canon FHD 1080P Kids cameras",
    reviewCount: "123 reviews",
    prevPrice: "99",
    newPrice: "50",
    company: "canon",
    category: "camera",
    newProduct: true,
    stockLeft: 8,
    details:
      "The Canon FHD 1080P Kids camera is a fun and easy-to-use device that's perfect for young photographers. With its durable construction and simple controls, it's designed to withstand the rigors of kids' play and capture amazing photos and videos. Plus, its compact size and lightweight design make it easy to take with you wherever you go. Whether you're exploring the backyard, going on a family vacation, or just having fun with friends, the Canon FHD 1080P Kids camera is sure to be a hit.",
    reviews: [
      {
        userName: "Emma Garcia",
        date: "February 18, 2023",
        review:
          "The Canon FHD 1080P Kids camera is perfect for capturing family moments! Its durable build and child-friendly design make it ideal for young photographers. My kids love using it to document their adventures, and the photo quality is surprisingly good.",
      },
      {
        userName: "Noah White",
        date: "January 10, 2023",
        review:
          "As a parent, I'm impressed with the Canon FHD 1080P Kids camera's ease of use and safety features. It's a great way to introduce children to photography while ensuring their safety. The images may not be professional-grade, but they capture precious memories.",
      },
    ],
  },
  {
    id: 14,
    price_Id: "price_1P3O83SGY67LfqYOnPLwgInF",
    img: "https://m.media-amazon.com/images/I/410mJHS12-L._AC_SL1000_.jpg",
    title: "HP W500 Webcam - 1080P HD",
    keywords: "HP W500 Webcam - 1080P HD cameras",
    reviewCount: "164 reviews",
    prevPrice: "129",
    newPrice: "50",
    company: "hp",
    category: "camera",
    newProduct: false,
    stockLeft: 14,
    details:
      "The HP W500 Webcam - 1080P HD is a high-quality camera that's perfect for video calls, streaming, and recording. With its crisp image quality and clear audio, it delivers a superior video conferencing experience. Plus, its easy-to-use design and plug-and-play functionality make it simple to set up and use. Whether you're working from home, attending virtual meetings, or connecting with friends and family, the HP W500 Webcam - 1080P HD is the perfect solution for all your video communication needs.",
    reviews: [
      {
        userName: "Charlotte Taylor",
        date: "December 5, 2022",
        review:
          "The HP W500 Webcam - 1080P HD is a game-changer for online meetings and video calls. Its crystal-clear image quality and smooth video streaming make it a must-have for professionals. I highly recommend it for anyone looking to upgrade their webcam setup.",
      },
      {
        userName: "Liam Brown",
        date: "November 12, 2022",
        review:
          "I've been using the HP W500 Webcam - 1080P HD for remote work and virtual meetings, and it's been a lifesaver. The autofocus feature ensures sharp and clear images, and the built-in microphone captures clear audio. It's a top-notch webcam!",
      },
    ],
  },
  {
    id: 15,
    price_Id: "price_1P3OANSGY67LfqYOIXkfGBME",
    img: "https://m.media-amazon.com/images/I/81t6Av5DvXL._SL1500_.jpg",
    title: "Samsung Galaxy M04",
    keywords: "Samsung Galaxy M04 mobiles",
    reviewCount: "123 reviews",
    prevPrice: "119",
    newPrice: "150",
    company: "samsung",
    category: "mobile",
    newProduct: false,
    stockLeft: 0,
    details:
      "The Samsung Galaxy M04 is a budget-friendly smartphone that offers impressive performance and features. With its large display, long battery life, and powerful processor, it's perfect for everyday use. Whether you're browsing the web, checking email, or watching videos, the Galaxy M04 delivers a smooth and responsive user experience. Plus, with its sleek design and comfortable grip, it's easy to hold and use one-handed. Whether you're a student, professional, or casual user, the Samsung Galaxy M04 has something for everyone.",
    reviews: [
      {
        userName: "Mia Johnson",
        date: "October 25, 2022",
        review:
          "The Samsung Galaxy M04 is a budget-friendly smartphone with impressive features. Its sleek design, vibrant display, and long-lasting battery make it perfect for everyday use. Whether I'm browsing social media or streaming videos, it delivers reliable performance.",
      },
      {
        userName: "William Garcia",
        date: "September 15, 2022",
        review:
          "I recently purchased the Samsung Galaxy M04, and I'm pleasantly surprised by its performance. The camera captures decent photos, and the user interface is intuitive. It's a great option for those looking for an affordable smartphone without compromising on quality.",
      },
    ],
  },
  {
    id: 16,
    price_Id: "price_1P3OJOSGY67LfqYO3nASRZrd",
    img: "https://m.media-amazon.com/images/I/61XK43E1nKL._AC_SL1500_.jpg",
    title: "Dell WB5023 Webcam",
    keywords: "Dell WB5023 Webcam cameras",
    reviewCount: "123 reviews",
    prevPrice: "299",
    newPrice: "150",
    company: "dell",
    category: "camera",
    newProduct: false,
    stockLeft: 7,
    details:
      "The Dell WB5023 Webcam is a versatile camera that's perfect for video calls, streaming, and content creation. With its high-resolution sensor and advanced features, it delivers crisp and clear video quality in any lighting condition. Plus, its compact and portable design makes it easy to take with you wherever you go. Whether you're working from home, attending virtual meetings, or creating content for your online audience, the Dell WB5023 Webcam is the perfect companion for all your video needs.",
    reviews: [
      {
        userName: "Oliver Martinez",
        date: "August 30, 2022",
        review:
          "The Dell WB5023 Webcam is an excellent addition to my setup. Its high-resolution video and clear audio make it perfect for video conferencing and streaming. The plug-and-play functionality makes it easy to use, and the adjustable stand offers flexibility in positioning.",
      },
      {
        userName: "Sophia Adams",
        date: "July 18, 2022",
        review:
          "I've been using the Dell WB5023 Webcam for remote work and online classes, and it's been fantastic. The image quality is crisp, and the wide-angle lens ensures everyone fits in the frame. The privacy shutter adds an extra layer of security when not in use.",
      },
    ],
  },
  {
    id: 17,
    price_Id: "price_1P3OKLSGY67LfqYOyrTPx6pY",
    img: "https://m.media-amazon.com/images/I/71dEY4Neo3L._SL1500_.jpg",
    title: "Realme narzo N53",
    keywords: "Realme narzo N53 mobiles",
    reviewCount: "123 reviews",
    prevPrice: "149",
    newPrice: "50",
    company: "realme",
    category: "mobile",
    newProduct: true,
    stockLeft: 3,
    details:
      "The Realme narzo N53 is a budget-friendly smartphone that offers impressive performance and features. With its powerful processor and long-lasting battery life, it's perfect for multitasking and gaming on the go. Plus, its sleek design and vibrant display make it a pleasure to use. Whether you're streaming videos, playing games, or staying connected with friends and family, the Realme narzo N53 has everything you need to stay productive and entertained.",
    reviews: [
      {
        userName: "Ethan Rodriguez",
        date: "June 5, 2022",
        review:
          "The Realme narzo N53 is a budget-friendly smartphone with impressive features. Its sleek design, responsive performance, and long battery life make it a great choice for everyday use. The camera captures decent photos, and the user interface is intuitive.",
      },
      {
        userName: "Isabella Turner",
        date: "May 22, 2022",
        review:
          "I purchased the Realme narzo N53 for my teenage son, and he loves it. The gaming performance is smooth, and the large display provides an immersive experience. It's a solid smartphone at an affordable price, making it ideal for students and casual users.",
      },
    ],
  },
  {
    id: 18,
    price_Id: "price_1P3OLDSGY67LfqYOCILsQ3MW",
    img: "https://m.media-amazon.com/images/I/71G3TjxFpZL._AC_SL1500_.jpg",
    title: "Sony 4K Digital Cam",
    keywords: "Sony 4K Digital Cameras",
    reviewCount: "123 reviews",
    prevPrice: "249",
    newPrice: "150",
    company: "sony",
    category: "camera",
    newProduct: false,
    stockLeft: 4,
    details:
      "The Sony 4K Digital Cam is a professional-grade camera that's perfect for capturing stunning photos and videos. With its high-resolution sensor and advanced image processing technology, it delivers exceptional image quality and clarity. Plus, its rugged design and weather-sealed construction make it durable enough to withstand the rigors of outdoor shooting. Whether you're a professional photographer, videographer, or hobbyist, the Sony 4K Digital Cam is the perfect tool for capturing your creative vision.",
    reviews: [
      {
        userName: "Henry Lopez",
        date: "April 10, 2022",
        review:
          "The Sony 4K Digital Cam is a versatile camera that delivers stunning image quality and performance. Whether I'm capturing landscapes or shooting videos, it consistently produces outstanding results. The intuitive controls and ergonomic design make it a joy to use.",
      },
      {
        userName: "Ava Parker",
        date: "March 28, 2022",
        review:
          "As a professional photographer, I rely on the Sony 4K Digital Cam for my projects. Its advanced features and customizable settings allow me to capture the perfect shot every time. The compact size makes it easy to carry around, and the build quality is top-notch.",
      },
    ],
  },
  {
    id: 19,
    price_Id: "price_1P3OMtSGY67LfqYOZrwFFlI0",
    img: "https://m.media-amazon.com/images/I/81LKz2gs0SL._AC_SL1500_.jpg",
    title: 'HP 15.6" Touchscreen',
    keywords: 'HP 15.6" Touchscreen laptops',
    reviewCount: "123 reviews",
    prevPrice: "799",
    newPrice: "500",
    company: "hp",
    category: "laptop",
    newProduct: false,
    stockLeft: 7,
    details:
      "The HP 15.6\" Touchscreen laptop is a versatile and powerful device that's perfect for work, school, and entertainment. With its large touchscreen display and powerful processor, it can handle all your computing needs with ease. Plus, its sleek design and long battery life make it the perfect companion for life on the go. Whether you're working on documents, browsing the web, or streaming your favorite movies, the HP 15.6\" Touchscreen laptop delivers exceptional performance and reliability.",
    reviews: [
      {
        userName: "Elijah Taylor",
        date: "February 15, 2022",
        review:
          "The HP 15.6' Touchscreen laptop is a reliable and versatile device for work and entertainment. The touchscreen functionality adds convenience, and the performance is smooth for multitasking. The build quality is sturdy, and the keyboard is comfortable to type on.",
      },
      {
        userName: "Scarlett Martinez",
        date: "January 8, 2022",
        review:
          "I've been using the HP 15.6' Touchscreen laptop for a few months now, and it's been great. The touchscreen is responsive, and the display is vibrant. It's a great laptop for everyday tasks like web browsing, email, and multimedia consumption.",
      },
    ],
  },
  {
    id: 20,
    price_Id: "price_1P3ONdSGY67LfqYO4zTJSNKs",
    img: "https://m.media-amazon.com/images/I/61upJ6FlFLL._AC_SL1500_.jpg",
    title: "2022 Apple MacBook Air",
    keywords: "2022 Apple MacBook Air laptops",
    reviewCount: "599 reviews",
    prevPrice: "1059",
    newPrice: "999",
    company: "apple",
    category: "laptop",
    newProduct: true,
    stockLeft: 4,
    details:
      "The 2022 Apple MacBook Air is a sleek and powerful laptop that's perfect for work, school, and everything in between. With its stunning Retina display, advanced performance, and long battery life, it's the ultimate portable computer. Whether you're editing photos, writing code, or browsing the web, the MacBook Air delivers incredible performance and reliability. Plus, with its lightweight design and compact footprint, it's easy to take with you wherever you go. Whether you're a student, professional, or casual user, the 2022 Apple MacBook Air has something for everyone.",
    reviews: [
      {
        userName: "Lucas Wilson",
        date: "December 25, 2021",
        review:
          "The 2022 Apple MacBook Air is a powerhouse of performance and portability. Its sleek design, stunning Retina display, and blazing-fast M1 chip make it perfect for productivity and creativity. The battery life is impressive, lasting me through a full day of work.",
      },
      {
        userName: "Natalie Garcia",
        date: "November 11, 2021",
        review:
          "I upgraded to the 2022 Apple MacBook Air from my old laptop, and it's been a game-changer. The performance is lightning-fast, and the battery life is exceptional. Whether I'm editing videos or browsing the web, it handles everything with ease. Highly recommend!",
      },
    ],
  },
  {
    id: 21,
    price_Id: "price_1P3OQJSGY67LfqYOSJ9xBREk",
    img: "https://m.media-amazon.com/images/I/71c211GncKL._AC_SL1500_.jpg",
    title: "KODAK PIXPRO WPZ2",
    keywords: "KODAK PIXPRO WPZ2 laptops",
    reviewCount: "123 reviews",
    prevPrice: "399",
    newPrice: "150",
    company: "kodak",
    category: "camera",
    newProduct: false,
    stockLeft: 1,
    details:
      "The KODAK PIXPRO WPZ2 is a rugged and durable camera that's perfect for capturing your adventures. With its waterproof and shockproof design, it can withstand the elements and keep up with your active lifestyle. Plus, its high-resolution sensor and wide-angle lens ensure that you capture every moment in stunning detail. Whether you're snorkeling, skiing, or hiking, the KODAK PIXPRO WPZ2 is the perfect companion for your outdoor adventures.",
    reviews: [
      {
        userName: "Liam Thompson",
        date: "October 5, 2021",
        review:
          "The KODAK PIXPRO WPZ2 is a rugged and durable camera that's perfect for outdoor adventures. Its waterproof and shockproof design can withstand the elements, making it ideal for camping, hiking, and water sports. The image quality is impressive, and the built-in Wi-Fi connectivity allows for easy sharing of photos and videos.",
      },
      {
        userName: "Charlotte White",
        date: "September 18, 2021",
        review:
          "I love my KODAK PIXPRO WPZ2! It's compact, easy to use, and takes amazing photos. Whether I'm snorkeling in the ocean or exploring scenic landscapes, it captures every moment with clarity and detail. The underwater mode is a fun feature that allows me to capture unique shots.",
      },
    ],
  },
  {
    id: 22,
    price_Id: "price_1P3OT2SGY67LfqYOkxxpBfdN",
    img: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
    title: "Apple iPhone 14 Pro",
    keywords: "Apple iPhone 14 Pro mobile phones",
    reviewCount: "123 reviews",
    prevPrice: "1899",
    newPrice: "1500",
    company: "apple",
    category: "mobile",
    newProduct: false,
    stockLeft: 18,
    details:
      "The Apple iPhone 14 Pro is a premium smartphone that offers cutting-edge technology and innovative features. With its powerful processor, stunning display, and advanced camera system, it's perfect for capturing stunning photos and videos, playing games, and staying connected on the go. Plus, with its sleek design and intuitive user interface, it's a pleasure to use every day. Whether you're a professional photographer, content creator, or everyday user, the iPhone 14 Pro has something for everyone.",
    reviews: [
      {
        userName: "Mason Martinez",
        date: "August 2, 2021",
        review:
          "The Apple iPhone 14 Pro is a premium smartphone with cutting-edge features and performance. Its stunning Super Retina XDR display, powerful A16 chip, and advanced camera system set a new standard for mobile devices. Whether I'm taking photos, playing games, or streaming videos, it delivers an unparalleled experience.",
      },
      {
        userName: "Amelia Turner",
        date: "July 20, 2021",
        review:
          "I upgraded to the Apple iPhone 14 Pro, and I'm blown away by its capabilities. The camera quality is exceptional, capturing detailed photos and videos in any lighting condition. The 5G connectivity ensures fast and reliable internet speeds, and the battery life lasts me all day.",
      },
    ],
  },
  {
    id: 23,
    price_Id: "price_1P3OUASGY67LfqYOX7TRuneI",
    img: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg",
    title: "Samsung Galaxy S23 5G",
    keywords: "Samsung Galaxy S23 5G mobile phones",
    reviewCount: "123 reviews",
    prevPrice: "1199",
    newPrice: "999",
    company: "samsung",
    category: "mobile",
    newProduct: false,
    stockLeft: 10,
    details:
      "The Samsung Galaxy S23 5G is a powerful and versatile smartphone that's perfect for work and play. With its fast processor, vibrant display, and long-lasting battery life, it can handle all your everyday tasks with ease. Plus, with its sleek design and intuitive user interface, it's a pleasure to use every day. Whether you're working on documents, browsing the web, or streaming your favorite movies, the Galaxy S23 5G has something for everyone.",
    reviews: [
      {
        userName: "Logan Walker",
        date: "June 10, 2021",
        review:
          "The Samsung Galaxy S23 5G is a feature-packed smartphone that offers exceptional performance and value. Its vibrant AMOLED display, powerful processor, and 5G connectivity make it perfect for multitasking, gaming, and streaming. The camera takes stunning photos, and the battery life lasts me through a full day of use.",
      },
      {
        userName: "Grace Hill",
        date: "May 28, 2021",
        review:
          "I recently switched to the Samsung Galaxy S23 5G, and I couldn't be happier. The interface is intuitive, and the performance is smooth and responsive. The camera captures vibrant and detailed photos, and the battery life is impressive. It's a great smartphone for both work and play.",
      },
    ],
  },
  {
    id: 24,
    price_Id: "price_1P3OUqSGY67LfqYOTbNjgxyD",
    img: "https://m.media-amazon.com/images/I/418AP8pw3KL._SL1500_.jpg",
    title: "Apple EarPods with Lightning",
    keywords: "Apple EarPods with Lightning headphones earphones earpods",
    reviewCount: "123 reviews",
    prevPrice: "59",
    newPrice: "50",
    company: "apple",
    category: "headphone",
    newProduct: false,
    stockLeft: 0,
    details:
      "The Apple EarPods with Lightning are stylish and comfortable headphones that deliver exceptional sound quality and clarity. With their ergonomic design and secure fit, they're perfect for listening to music, watching videos, or taking calls on the go. Plus, with their Lightning connector, they're compatible with a wide range of Apple devices, including iPhones, iPads, and iPods. Whether you're commuting to work, working out at the gym, or relaxing at home, the Apple EarPods with Lightning are the perfect companion for your audio needs.",
    reviews: [
      {
        userName: "Christopher Wright",
        date: "April 15, 2021",
        review:
          "The Apple EarPods with Lightning are a must-have accessory for any iPhone user. They deliver crisp and clear audio, and the ergonomic design ensures a comfortable fit. Whether I'm listening to music, watching videos, or taking calls, the sound quality is excellent.",
      },
      {
        userName: "Evelyn Green",
        date: "March 30, 2021",
        review:
          "I love my Apple EarPods with Lightning! The sound quality is top-notch, and the in-line controls make it easy to adjust volume and playback. They're lightweight and comfortable to wear for extended periods, and the built-in microphone delivers clear voice quality during calls.",
      },
    ],
  },
  {
    id: 25,
    price_Id: "price_1P3OVzSGY67LfqYO22Zxao8a",
    img: "https://m.media-amazon.com/images/I/515jdxLlmaL._SL1500_.jpg",
    title: "boAt Rockerz",
    keywords: "boAt Rockerz headphones earphones",
    reviewCount: "123 reviews",
    prevPrice: "24",
    newPrice: "50",
    company: "boat",
    category: "headphone",
    newProduct: false,
    stockLeft: 50,
    details:
      "The boAt Rockerz are stylish and affordable headphones that deliver impressive sound quality and comfort. With their sleek design and ergonomic earbuds, they're perfect for listening to music, taking calls, or working out. Plus, with their long battery life and quick charging feature, you can enjoy hours of uninterrupted use on the go. Whether you're at home, in the office, or on the move, the boAt Rockerz are the perfect companion for your audio needs.",
    reviews: [
      {
        userName: "Jackson Carter",
        date: "February 12, 2021",
        review:
          "The boAt Rockerz headphones are amazing! They offer great sound quality, comfortable fit, and long battery life. Whether I'm listening to music at home or on the go, they deliver immersive audio and block out external noise. The Bluetooth connectivity is reliable, and the foldable design makes them easy to carry.",
      },
      {
        userName: "Victoria Adams",
        date: "January 25, 2021",
        review:
          "I've been using the boAt Rockerz headphones for workouts and daily commutes, and they've exceeded my expectations. The sound is clear and punchy, and the ear cups provide a snug fit without causing discomfort. The battery life is impressive, lasting me through multiple workouts without needing a recharge.",
      },
    ],
  },
  {
    id: 26,
    price_Id: "price_1P3OWeSGY67LfqYOiO3IvqTJ",
    img: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
    title: "boAt Rockerz 450",
    keywords: "boAt Rockerz 450 headphones earphones",
    reviewCount: "123 reviews",
    prevPrice: "22",
    newPrice: "50",
    company: "boat",
    category: "headphone",
    newProduct: false,
    stockLeft: 67,
    details:
      "The boAt Rockerz 450 are sleek and stylish headphones that deliver powerful sound and deep bass. With their ergonomic design and comfortable ear cups, they're perfect for long listening sessions and immersive gaming experiences. Plus, with their built-in microphone and remote control, you can easily take calls and control your music playback without touching your device. Whether you're commuting to work, working out at the gym, or relaxing at home, the boAt Rockerz 450 are the perfect companion for your audio needs.",
    reviews: [
      {
        userName: "William Martinez",
        date: "December 10, 2020",
        review:
          "The boAt Rockerz 450 headphones are fantastic! They offer great sound quality, comfortable padding, and excellent battery life. Whether I'm listening to music, watching movies, or taking calls, they deliver immersive audio and clear voice quality. The Bluetooth range is impressive, allowing me to move around freely without losing connection.",
      },
      {
        userName: "Sophia Scott",
        date: "November 28, 2020",
        review:
          "I've been using the boAt Rockerz 450 headphones for several months now, and they've become my go-to choice for audio. The sound signature is well-balanced, with crisp highs and deep bass. The build quality is sturdy, and the foldable design makes them easy to carry in my bag.",
      },
    ],
  },
  {
    id: 27,
    price_Id: "price_1P3OXLSGY67LfqYOn4Nus3s8",
    img: "https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg",
    title: "Samsung Galaxy M13",
    keywords: "Samsung Galaxy M13 mobiles phones",
    reviewCount: "123 reviews",
    prevPrice: "299",
    newPrice: "200",
    company: "samsung",
    category: "mobile",
    newProduct: false,
    stockLeft: 3,
    details:
      "The Samsung Galaxy M13 is a budget-friendly smartphone that offers impressive performance and features. With its powerful processor, vibrant display, and long-lasting battery life, it's perfect for multitasking and entertainment on the go. Plus, with its sleek design and intuitive user interface, it's a pleasure to use every day. Whether you're streaming videos, playing games, or staying connected with friends and family, the Galaxy M13 has something for everyone.",
    reviews: [
      {
        userName: "James Johnson",
        date: "October 15, 2020",
        review:
          "The Samsung Galaxy M13 is a great budget smartphone with impressive features. Its vibrant display, responsive performance, and long battery life make it perfect for everyday use. The camera takes decent photos, and the user interface is intuitive and easy to navigate.",
      },
      {
        userName: "Emily Rodriguez",
        date: "September 30, 2020",
        review:
          "I purchased the Samsung Galaxy M13 for my teenage daughter, and she loves it. The sleek design and compact size make it easy to carry around, and the performance is smooth for gaming and social media apps. It's a reliable smartphone at an affordable price.",
      },
    ],
  },
  {
    id: 28,
    price_Id: "price_1P3OXySGY67LfqYOBmPA6djN",
    img: "https://m.media-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg",
    title: "Apple iPhone 11 (64GB)",
    keywords: "Apple iPhone 11 (64GB) mobiles phones",
    reviewCount: "123 reviews",
    prevPrice: "659",
    newPrice: "500",
    company: "apple",
    category: "mobile",
    newProduct: false,
    stockLeft: 0,
    details:
      "The Apple iPhone 11 (64GB) is a powerful and versatile smartphone that's perfect for work and play. With its fast processor, vibrant display, and long-lasting battery life, it can handle all your everyday tasks with ease. Plus, with its sleek design and intuitive user interface, it's a pleasure to use every day. Whether you're streaming videos, playing games, or staying connected with friends and family, the iPhone 11 (64GB) has something for everyone.",
    reviews: [
      {
        userName: "Michael Thompson",
        date: "August 12, 2020",
        review:
          "The Apple iPhone 11 (64GB) is a solid smartphone with excellent performance and features. Its powerful A13 Bionic chip, stunning display, and versatile camera system make it a great choice for users of all ages. The battery life is impressive, lasting me through a full day of use.",
      },
      {
        userName: "Madison Martinez",
        date: "July 25, 2020",
        review:
          "I've been using the Apple iPhone 11 (64GB) for over a year now, and it's been flawless. The camera quality is outstanding, and the Night mode feature captures stunning low-light photos. The iOS ecosystem offers a seamless experience, and the device feels premium in hand.",
      },
    ],
  },
];

export default data;
