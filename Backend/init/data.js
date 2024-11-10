const sampleFoods = [
  {
      name: "Garlic Bread",
      description: "Crispy garlic bread served with a side of marinara. Each slice is generously coated with garlic butter, making it a perfect appetizer to kick off your meal. Enjoy its crunchy texture combined with the rich, savory flavors.",
      price: 5.99,
      category: "Appetizer",
      image: "https://images.pexels.com/photos/959926/pexels-photo-959926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
  },
  {
      name: "Caesar Salad",
      description: "Fresh romaine lettuce tossed in a creamy Caesar dressing, topped with crunchy croutons and grated parmesan. This classic salad offers a delightful mix of textures and flavors, making it a refreshing starter or side dish.",
      price: 7.49,
      category: "Appetizer",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
  },
  {
      name: "Margherita Pizza",
      description: "A classic pizza topped with fresh tomatoes, creamy mozzarella, and aromatic basil. Baked to perfection with a crispy crust, this pizza celebrates simple ingredients that deliver big flavor in every bite.",
      price: 12.99,
      category: "Main Course",
      image: "https://images.pexels.com/photos/16890470/pexels-photo-16890470/free-photo-of-pizza-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
      name: "Chicken Alfredo",
      description: "Fettuccine pasta tossed in a rich, creamy Alfredo sauce and topped with grilled chicken. This dish is comfort food at its best, offering a satisfying and indulgent experience with every mouthful.",
      price: 14.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/YLapeTnBgIkJOiD_Vy3Ohh0QeD4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11970easy-chicken-alfredofabeveryday2x1-a4112dbccf3d4149a18eb45435e77115.jpg",
      available: true,
      discount: 15,
      vegNonVeg: "non-veg"
  },
  {
      name: "Beef Burger",
      description: "A juicy beef patty grilled to perfection and served with fresh lettuce, ripe tomato, and our special sauce. This burger is a hearty meal that promises to satisfy your cravings, paired with crispy fries.",
      price: 9.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/gyFX5AzRVO_eZx9DY32yNGeB3Zw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3354042-e06b4805f9364e74a3d2dffca787b38f.jpg",
      available: true,
      discount: 5,
      vegNonVeg: "non-veg"
  },
  {
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake layered with velvety chocolate frosting. Each slice is a heavenly treat for chocolate lovers, perfect for celebrating special occasions or simply indulging yourself.",
      price: 4.99,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/RfU94bqBq-2cyA9OMUNpnhRsCy0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-8149-flourless-chocolate-cake-DDMFS-beauty-4x3-2d77ec0a96ee46cf94d06b84509dc9e4.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
      name: "Tiramisu",
      description: "A classic Italian dessert featuring layers of coffee-soaked ladyfingers and creamy mascarpone cheese. Topped with cocoa powder, this indulgent treat is a delightful way to end any meal.",
      price: 6.49,
      category: "Dessert",
      image: "https://www.allrecipes.com/thmb/RDDW2L7B9I_XLiregXAjfSWrEd4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21412-tiramisu-ii-DDMFS-4x3-cb78d4ad0e75477ebc2a16968c508fde.jpg",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
  },
  {
      name: "Lemonade",
      description: "A refreshing lemonade made with freshly squeezed lemons and a touch of sugar. Perfect for hot days, this drink is both tangy and sweet, offering a revitalizing burst of flavor to quench your thirst.",
      price: 2.99,
      category: "Beverage",
      image: "https://www.allrecipes.com/thmb/9OjEuEPls7bJHVhOH1bCP4EatUw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5478432-47ad16b56076489881c6b570993aaeec.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
      name: "Iced Tea",
      description: "Chilled tea infused with lemon and fresh mint, served over ice. This refreshing drink is a perfect companion to any meal, offering a sweet and tangy taste that’s sure to please.",
      price: 2.49,
      category: "Beverage",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5495128.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
      name: "Spaghetti Bolognese",
      description: "Classic spaghetti served with a rich and savory meat sauce, garnished with fresh herbs. This hearty dish is a favorite for pasta lovers, offering a comforting meal that’s perfect for any occasion.",
      price: 13.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/R9iz3aZXiPdyiKWVgH6Ae-SnWjw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6040742-9fb247a2b226452582741380e2adefb6.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "non-veg"
  },
  {
      name: "Spring Rolls",
      description: "Crispy spring rolls filled with a mix of fresh vegetables. These bite-sized appetizers are perfect for sharing, offering a delightful crunch and a burst of flavor with every bite.",
      price: 6.99,
      category: "Appetizer",
      image: "https://www.allrecipes.com/thmb/laM-uUk1X_9baQTkXBF6vShkqN8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14704-best-egg-rolls-DDMFS-4x3-490f99efee9646c8b5de93b4e2f6f963.jpg",
      available: true,
      discount: 10,
      vegNonVeg: "veg"
  },
  {
      name: "Penne Arrabbiata",
      description: "Al dente penne pasta tossed in a spicy tomato sauce, offering a perfect balance of heat and flavor. This dish is sure to please those who love a kick in their pasta.",
      price: 11.99,
      category: "Main Course",
      image: "https://www.allrecipes.com/thmb/jpntoCDKvhq4SIMS2ozP0723OME=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/968805-ca3b0da4add74093b60405cae8288312.jpg",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
  },
  {
      name: "Cheesecake",
      description: "Creamy and smooth cheesecake topped with a delicious fruit glaze. This dessert is a classic favorite, offering a rich flavor profile and a satisfying texture that melts in your mouth.",
      price: 5.49,
      category: "Dessert",
      image: "https://cdn.dotpe.in/longtail/store-logo/8570824/V218zINe.png",
      available: true,
      discount: 15,
      vegNonVeg: "veg"
  },
  {
      name: "Vegetable Stir Fry",
      description: "A colorful mix of fresh vegetables stir-fried to perfection with a savory sauce. This dish is both nutritious and delicious, making it a great option for those seeking a lighter meal.",
      price: 8.99,
      category: "Main Course",
      image: "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
      name: "Fruit Salad",
      description: "A refreshing blend of seasonal fruits, drizzled with honey and lime juice. This vibrant salad is perfect as a light dessert or a healthy snack, bursting with natural sweetness and flavor.",
      price: 4.49,
      category: "Dessert",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Fruit%20Salad.png",
      available: true,
      discount: 5,
      vegNonVeg: "veg"
  },
  {
      name: "Fish Tacos",
      description: "Soft corn tortillas filled with seasoned fish, topped with fresh salsa and a drizzle of lime crema. These tacos are a delicious and light option, perfect for enjoying by the beach or at any summer gathering.",
      price: 10.99,
      category: "Main Course",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/0525a2bba5981092a1f16cb74d88054d",
      available: true,
      discount: 10,
      vegNonVeg: "non-veg"
  },
  {
      name: "Pumpkin Soup",
      description: "Creamy pumpkin soup seasoned with aromatic spices and topped with a swirl of cream. This comforting dish is perfect for chilly days, offering a warm and hearty option that's sure to satisfy.",
      price: 7.49,
      category: "Appetizer",
      image: "https://cdn.pixabay.com/photo/2022/10/20/11/21/pumpkin-soup-7534625_640.jpg",
      available: true,
      discount: 0,
      vegNonVeg: "veg"
  },
  {
    name: "Eggplant Parmesan",
    description: "Eggplant Parmesan is a classic Italian-American dish that features layers of crispy, breaded eggplant slices baked with marinara sauce and rich mozzarella cheese. fresh salad for a complete meal.",
    price: 13.99,
    category: "Main Course",
    image: "https://media.istockphoto.com/id/998502576/photo/portion-of-parmigiana-di-melanzane.jpg?s=612x612&w=0&k=20&c=VHNWOXmDb5U5p12z8nG1Yn9FUyn3gzyF6gYGQS9WvtQ=",
    available: true,
    discount: 0,
    vegNonVeg: "veg"
},
{
    name: "Beef Stroganoff",
    description: "Beef Stroganoff is a rich and creamy dish that features tender strips of beef sautéed with onions and mushrooms, all coated in a luscious sour cream sauce.  in every mouthful.",
    price: 15.99,
    category: "Main Course",
    image: "https://media.istockphoto.com/id/523456979/photo/homemade-hearty-beef-stroganoff.jpg?s=612x612&w=0&k=20&c=FsTHhQSdD6bNfuiP5u5wXWy6_zmOP4UPgXR7RImOXyU=",
    available: true,
    discount: 10,
    vegNonVeg: "non-veg"
},
{
    name: "Pineapple Fried Rice",
    description: "Pineapple Fried Rice is a vibrant and colorful dish that combines fluffy jasmine rice stir-fried with juicy pineapple chunks, colorful bell peppers, and a medley of vegetables.",
    price: 10.49,
    category: "Main Course",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rl52ztocl3cwwjbkt0zt",
    available: true,
    discount: 5,
    vegNonVeg: "veg"
}
];


  module.exports = ({data :sampleFoods});