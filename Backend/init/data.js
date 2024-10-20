const sampleFoods =  [
    {
      name: "Garlic Bread",
      description: "Crispy garlic bread served with a side of marinara.",
      price: 5.99,
      category: "Appetizer",
      image: "https://images.pexels.com/photos/959926/pexels-photo-959926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
    },
    {
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan.",
      price: 7.49,
      category: "Appetizer",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      price: 12.99,
      category: "Main Course",
      image: "https://images.pexels.com/photos/16890470/pexels-photo-16890470/free-photo-of-pizza-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Chicken Alfredo",
      description: "Fettuccine pasta in a creamy Alfredo sauce with grilled chicken.",
      price: 14.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/YLapeTnBgIkJOiD_Vy3Ohh0QeD4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11970easy-chicken-alfredofabeveryday2x1-a4112dbccf3d4149a18eb45435e77115.jpg",
      available: true,
      discount: 15,
      vegNonVeg: "non-veg"
    },
    {
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce.",
      price: 9.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/gyFX5AzRVO_eZx9DY32yNGeB3Zw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3354042-e06b4805f9364e74a3d2dffca787b38f.jpg",
      available: true,
      discount: 5,
      vegNonVeg: "non-veg"
    },
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake topped with chocolate frosting.",
      price: 4.99,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/RfU94bqBq-2cyA9OMUNpnhRsCy0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-8149-flourless-chocolate-cake-DDMFS-beauty-4x3-2d77ec0a96ee46cf94d06b84509dc9e4.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert made with coffee and mascarpone.",
      price: 6.49,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/RDDW2L7B9I_XLiregXAjfSWrEd4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21412-tiramisu-ii-DDMFS-4x3-cb78d4ad0e75477ebc2a16968c508fde.jpg",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
    },
    {
      name: "Lemonade",
      description: "Refreshing lemonade made with fresh lemons and sugar.",
      price: 2.99,
      category: "Beverage",
      image: "https://www.allrecipes.com/thmb/9OjEuEPls7bJHVhOH1bCP4EatUw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5478432-47ad16b56076489881c6b570993aaeec.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Iced Tea",
      description: "Chilled tea served with lemon and mint.",
      price: 2.49,
      category: "Beverage",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5495128.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Spaghetti Bolognese",
      description: "Spaghetti served with a rich meat sauce.",
      price: 13.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/R9iz3aZXiPdyiKWVgH6Ae-SnWjw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6040742-9fb247a2b226452582741380e2adefb6.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "non-veg"
    },
    {
      name: "Spring Rolls",
      description: "Crispy spring rolls filled with vegetables.",
      price: 6.99,
      category: "Appetizer",
      image: "https://www.allrecipes.com/thmb/laM-uUk1X_9baQTkXBF6vShkqN8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14704-best-egg-rolls-DDMFS-4x3-490f99efee9646c8b5de93b4e2f6f963.jpg",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
    },
    {
      name: "Penne Arrabbiata",
      description: "Penne pasta in a spicy tomato sauce.",
      price: 11.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/jpntoCDKvhq4SIMS2ozP0723OME=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/968805-ca3b0da4add74093b60405cae8288312.jpg",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
    },
    {
      name: "Cheesecake",
      description: "Creamy cheesecake topped with a fruit glaze.",
      price: 5.99,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/kShWBZzwCZoy7xTToj_fnxoO7j0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3592544-5dbaf423298540a9a7ed49a34d680eab.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Fish Tacos",
      description: "Soft tacos filled with grilled fish and fresh salsa.",
      price: 10.99,
      category: "Main Course",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F10%2F08%2F701871-fiery-fish-tacos-with-crunchy-corn-salsa-CookinBug-1x1-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      available: true,
      discount: 0,
      vegNonVeg: "non-veg"
    },
    {
      name: "Mango Lassi",
      description: "Yogurt drink blended with mango pulp.",
      price: 3.49,
      category: "Beverage",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F199894.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Vegetable Curry",
      description: "Mixed vegetables cooked in a rich curry sauce.",
      price: 10.49,
      category: "Main Course",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F09%2F26%2F9235591-marrakesh-vegetable-curry-Colleen-Seal-1x1-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
    },
    {
      name: "Chili Con Carne",
      description: "Spicy chili made with beef and beans.",
      price: 12.49,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/XcVfbUXWJVZNfOR7KHArA9NUi-s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/89993-award-winning-chili-con-carne-ddmfs-3x4-4e3a48f5505a4c998415c261507b0a76.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "non-veg"
    },
    {
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
      price: 8.99,
      category: "Appetizer",
      image: "https://www.allrecipes.com/thmb/3eOwu-XUwSaNjFdV09CP-OFIULM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-228126-caprese-salad-with-balsamic-reduction-ddmfs-2644-4x3-f32ac2b2fb9d4234884a752490fb015b.jpg",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
    },
    {
      name: "Brownie Sundae",
      description: "Warm brownie topped with ice cream and chocolate sauce.",
      price: 6.99,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/PHeQkfcK2fkpBo1AMY8Bu0g41Vs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/282866the-best-browniesKim4x3-2e8fba99422a41678dfad2048bb2d412.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    },
    {
      name: "Pineapple Juice",
      description: "Freshly squeezed pineapple juice.",
      price: 3.99,
      category: "Beverage",
      image: "https://images.pexels.com/photos/12049915/pexels-photo-12049915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
    }
  ];

  module.exports = ({data :sampleFoods});