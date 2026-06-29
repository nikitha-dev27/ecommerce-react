const products = [
// ======================
// FURNITURE
// ======================

{
  id: 1,
  name: "Modern Living Room Set",
  category: "Furniture",
  price: 24999,
  rating: 4.8,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
  description: "Elegant modern living room furniture set."
},

{
  id: 2,
  name: "Luxury Sofa",
  category: "Furniture",
  price: 18999,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
  description: "Premium comfortable luxury sofa."
},

{
  id: 3,
  name: "Designer Lounge Chair",
  category: "Furniture",
  price: 8999,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?w=500",
  description: "Stylish designer lounge chair."
},

{
  id: 4,
  name: "Office Desk",
  category: "Furniture",
  price: 7999,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500",
  description: "Professional wooden office desk."
},

{
  id: 5,
  name: "Wooden Cabinet",
  category: "Furniture",
  price: 12999,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500",
  description: "Large wooden storage cabinet."
},

{
  id: 6,
  name: "Dining Table Set",
  category: "Furniture",
  price: 21999,
  rating: 4.7,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
  description: "Elegant dining table with chairs."
},

{
  id: 7,
  name: "Wooden Side Table",
  category: "Furniture",
  price: 3999,
  rating: 4.4,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500",
  description: "Modern wooden side table."
},

{
  id: 8,
  name: "Bookshelf Rack",
  category: "Furniture",
  price: 6499,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
  description: "Spacious bookshelf for home."
},

{
  id: 9,
  name: "Work Desk",
  category: "Furniture",
  price: 7499,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
  description: "Modern work desk for office setup."
},

{
  id: 10,
  name: "Wooden Storage Shelf",
  category: "Furniture",
  price: 5999,
  rating: 4.5,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
  description: "Multi-purpose storage shelf."
},

{
  id: 11,
  name: "Club Armchair",
  category: "Furniture",
  price: 8499,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1722357533653-7eb00f7f243d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2x1YiUyMEFybWNoYWlyfGVufDB8fDB8fHww",
  description: "Comfortable luxury club armchair."
},

{
  id: 12,
  name: "Hanging Swing Chair",
  category: "Furniture",
  price: 10999,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://media.istockphoto.com/id/1304422715/photo/beautiful-decorative-yellow-colored-handcrafted-wooden-hanging-garden-balcony-chairs.jpg",
  description: "Beautiful hanging balcony swing chair."
},

{
  id: 13,
  name: "Queen Size Bed",
  category: "Furniture",
  price: 27999,
  rating: 4.9,
  discount: "25% OFF",
  image: "https://media.istockphoto.com/id/1474579509/photo/contemporary-bed-isolated-on-white-background-front-view-include-clipping-path-close-up.jpg",
  description: "Premium queen size wooden bed."
},

{
  id: 14,
  name: "Computer Study Desk",
  category: "Furniture",
  price: 8999,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://media.istockphoto.com/id/1254646139/photo/comfortable-workplace-with-potted-plants-wall-organizer-pictures-and-computer.jpg",
  description: "Comfortable study and computer desk."
},

{
  id: 15,
  name: "Japandi Sideboard Cabinet",
  category: "Furniture",
  price: 15999,
  rating: 4.8,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1724920190056-8746b87686b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFwYW5kaSUyMFNpZGVib2FyZCUyMENhYmluZXR8ZW58MHx8MHx8fDA%3D",
  description: "Modern Japandi style sideboard cabinet."
},
// ======================
// KITCHEN ESSENTIALS
// ======================
{
  id: 16,
  name: "Non-Stick Fry Pan",
  category: "Kitchen Essentials",
  price: 1199,
  rating: 4.6,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1624031000828-dba1b7a3e4ce?w=500",
  description: "Premium non-stick frying pan."
},

{
  id: 17,
  name: "Cookware Set",
  category: "Kitchen Essentials",
  price: 3499,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1584990347955-2ec0431a6e8f?w=500",
  description: "Complete stainless steel cookware set."
},

{
  id: 18,
  name: "Knife Set",
  category: "Kitchen Essentials",
  price: 999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1609467334293-030ac6448fd8?w=500",
  description: "Professional kitchen knife set."
},

{
  id: 19,
  name: "Pressure Cooker",
  category: "Kitchen Essentials",
  price: 2499,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1580929753603-10519c6e480a?w=500",
  description: "High-quality pressure cooker."
},

{
  id: 20,
  name: "Dinner Set",
  category: "Kitchen Essentials",
  price: 1999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1664391912659-c896c7e441e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGlubmVyJTIwU2V0fGVufDB8fDB8fHww",
  description: "24-piece ceramic dinner set."
},

{
  id: 21,
  name: "Storage Containers",
  category: "Kitchen Essentials",
  price: 799,
  rating: 4.4,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1700583711615-bcbe87ed8af4?w=500",
  description: "Airtight food storage containers."
},

{
  id: 22,
  name: "Water Bottle Set",
  category: "Kitchen Essentials",
  price: 699,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1619021016992-07909c5b85d6?w=500",
  description: "Reusable stainless steel bottles."
},

{
  id: 23,
  name: "Cutting Board",
  category: "Kitchen Essentials",
  price: 399,
  rating: 4.3,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1624811533744-f85d5325d49c?w=500",
  description: "Premium wooden cutting board."
},

{
  id: 24,
  name: "Electric Kettle",
  category: "Kitchen Essentials",
  price: 1499,
  rating: 4.6,
  discount: "35% OFF",
  image: "https://images.unsplash.com/photo-1592417766326-088bf3da80c5?w=500",
  description: "Fast boiling electric kettle."
},

{
  id: 25,
  name: "Mixer Grinder",
  category: "Kitchen Essentials",
  price: 3499,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1718043036199-d98bef36af46?w=500",
  description: "750W powerful mixer grinder."
},

{
  id: 26,
  name: "Toaster",
  category: "Kitchen Essentials",
  price: 1199,
  rating: 4.4,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1613221699807-4940ba9b83f4?w=500",
  description: "2-slice pop-up toaster."
},

{
  id: 27,
  name: "Air Fryer",
  category: "Kitchen Essentials",
  price: 5999,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1674504866626-fe4f19f68564?w=500",
  description: "Healthy oil-free cooking."
},

{
  id: 28,
  name: "Juicer",
  category: "Kitchen Essentials",
  price: 2499,
  rating: 4.5,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1779591211702-d01dc6d13f9a?w=500",
  description: "Fresh fruit juicer."
},

{
  id: 29,
  name: "Measuring Cups Set",
  category: "Kitchen Essentials",
  price: 299,
  rating: 4.3,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1716196101576-db778a2e7e5f?w=500",
  description: "Kitchen measuring tools."
},

{
  id: 30,
  name: "Spice Rack",
  category: "Kitchen Essentials",
  price: 899,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1580116270858-8a0d62b15426?w=500",
  description: "Rotating spice organizer."
},

// ======================
// ELECTRONICS
// ======================

{
  id: 31,
  name: "Gaming Laptop",
  category: "Electronics",
  price: 69999,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  description: "High-performance gaming laptop."
},

{
  id: 32,
  name: "Wireless Earbuds",
  category: "Electronics",
  price: 2999,
  rating: 4.6,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500",
  description: "Bluetooth earbuds with noise cancellation."
},

{
  id: 33,
  name: "Smart Speaker",
  category: "Electronics",
  price: 4499,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1630453016489-051c93aba7ef?w=500",
  description: "Voice assistant smart speaker."
},

{
  id: 34,
  name: "Smart Home Hub",
  category: "Electronics",
  price: 5999,
  rating: 4.7,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1643536767883-4c2783ac6a16?w=500",
  description: "Control all smart devices from one hub."
},

{
  id: 35,
  name: "Bluetooth Headphones",
  category: "Electronics",
  price: 3499,
  rating: 4.6,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1663745503561-a6f4eb09949b?w=500",
  description: "Premium over-ear wireless headphones."
},

{
  id: 36,
  name: "Smart Display",
  category: "Electronics",
  price: 7999,
  rating: 4.8,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=500",
  description: "Touchscreen smart display."
},

{
  id: 37,
  name: "Mechanical Keyboard",
  category: "Electronics",
  price: 2499,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1717295248358-4b8f2c8989d6?w=500",
  description: "RGB mechanical gaming keyboard."
},

{
  id: 38,
  name: "Gaming Mouse",
  category: "Electronics",
  price: 1499,
  rating: 4.5,
  discount: "35% OFF",
  image: "https://images.unsplash.com/photo-1685708525394-8824dc35c671?w=500",
  description: "High precision gaming mouse."
},

{
  id: 39,
  name: "Wireless Router",
  category: "Electronics",
  price: 3999,
  rating: 4.6,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1773414422187-cbcf72b213c9?w=500",
  description: "High-speed dual-band WiFi router."
},

{
  id: 40,
  name: "Portable SSD",
  category: "Electronics",
  price: 6499,
  rating: 4.8,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1777691973962-12dfdd860807?w=500",
  description: "Fast portable SSD storage."
},

{
  id: 41,
  name: "4K Webcam",
  category: "Electronics",
  price: 2999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1760443728294-81b19787ec4c?w=500",
  description: "Ultra HD webcam for streaming."
},

{
  id: 42,
  name: "Smart Security Camera",
  category: "Electronics",
  price: 5499,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1761311983767-c33f0480e91b?w=500",
  description: "Indoor smart surveillance camera."
},

{
  id: 43,
  name: "VR Headset",
  category: "Electronics",
  price: 24999,
  rating: 4.9,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1771324917582-b608bbfd5794?w=500",
  description: "Immersive virtual reality headset."
},

{
  id: 44,
  name: "Drone Camera",
  category: "Electronics",
  price: 39999,
  rating: 4.8,
  discount: "12% OFF",
  image: "https://plus.unsplash.com/premium_photo-1733317312273-a37561012283?w=500",
  description: "Professional aerial photography drone."
},

{
  id: 45,
  name: "Smart Projector",
  category: "Electronics",
  price: 18999,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1729005326801-d9c7b3f9f838?w=500",
  description: "Portable full HD smart projector."
},

// ======================
// MOBILES
// ======================

{
  id: 46,
  name: "iPhone 15 Pro",
  category: "Mobiles",
  price: 129999,
  rating: 4.9,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500",
  description: "Apple iPhone 15 Pro with A17 Pro chip."
},

{
  id: 47,
  name: "Samsung Galaxy S24 Ultra",
  category: "Mobiles",
  price: 119999,
  rating: 4.8,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=500",
  description: "Premium Android flagship smartphone."
},

{
  id: 48,
  name: "OnePlus 12",
  category: "Mobiles",
  price: 64999,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=500",
  description: "Fast and smooth flagship performance."
},

{
  id: 49,
  name: "Google Pixel 8 Pro",
  category: "Mobiles",
  price: 89999,
  rating: 4.8,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?w=500",
  description: "AI-powered photography smartphone."
},

{
  id: 50,
  name: "Xiaomi 14",
  category: "Mobiles",
  price: 59999,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=500",
  description: "Leica camera flagship smartphone."
},

{
  id: 51,
  name: "Realme GT 6",
  category: "Mobiles",
  price: 39999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1663245482988-22fad02654e3?w=500",
  description: "Powerful gaming smartphone."
},

{
  id: 52,
  name: "Vivo X100",
  category: "Mobiles",
  price: 54999,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1613727798351-6873d1836998?w=500",
  description: "Professional camera smartphone."
},

{
  id: 53,
  name: "Oppo Reno 12",
  category: "Mobiles",
  price: 32999,
  rating: 4.5,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?w=500",
  description: "Stylish AI-powered smartphone."
},

{
  id: 54,
  name: "Nothing Phone 2",
  category: "Mobiles",
  price: 44999,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1721686602598-005825cce7c8?w=500",
  description: "Unique transparent design smartphone."
},

{
  id: 55,
  name: "Motorola Edge 50 Pro",
  category: "Mobiles",
  price: 31999,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1598327105740-820e04db502e?w=500",
  description: "Curved display flagship phone."
},

{
  id: 56,
  name: "Samsung Galaxy A55",
  category: "Mobiles",
  price: 38999,
  rating: 4.4,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500",
  description: "Premium mid-range smartphone."
},

{
  id: 57,
  name: "iPhone 14",
  category: "Mobiles",
  price: 69999,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1719945421298-f03d3d80c3e1?w=500",
  description: "Powerful iPhone with dual cameras."
},

{
  id: 58,
  name: "Redmi Note 13 Pro",
  category: "Mobiles",
  price: 27999,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500",
  description: "200MP camera smartphone."
},

{
  id: 59,
  name: "POCO X6 Pro",
  category: "Mobiles",
  price: 24999,
  rating: 4.6,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=500",
  description: "Gaming-focused flagship killer."
},

{
  id: 60,
  name: "Infinix GT 20 Pro",
  category: "Mobiles",
  price: 22999,
  rating: 4.4,
  discount: "28% OFF",
  image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=500",
  description: "Affordable gaming smartphone."
},

// ======================
// FASHION
// ======================

{
  id: 61,
  name: "Women's Fashion Dress",
  category: "Fashion",
  price: 1999,
  rating: 4.6,
  discount: "25% OFF",
  image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500",
  description: "Elegant women's fashion dress."
},

{
  id: 62,
  name: "Designer Outfit",
  category: "Fashion",
  price: 2499,
  rating: 4.7,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500",
  description: "Premium designer outfit."
},

{
  id: 63,
  name: "Casual Skirt",
  category: "Fashion",
  price: 999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
  description: "Comfortable casual skirt."
},

{
  id: 64,
  name: "Pleated Skirt",
  category: "Fashion",
  price: 1199,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://plus.unsplash.com/premium_photo-1682096992977-650be957f857?w=500",
  description: "Stylish pleated skirt."
},

{
  id: 65,
  name: "Printed Skirt",
  category: "Fashion",
  price: 1299,
  rating: 4.4,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1758186168047-00dd2621d27f?w=500",
  description: "Trendy printed skirt."
},

{
  id: 66,
  name: "Fashion Skirt Collection",
  category: "Fashion",
  price: 1399,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://plus.unsplash.com/premium_photo-1723553201232-da386a59021d?w=500",
  description: "Premium fashion skirt."
},

{
  id: 67,
  name: "Girls Party Frock",
  category: "Fashion",
  price: 1499,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=500",
  description: "Beautiful party frock."
},

{
  id: 68,
  name: "Designer Frock",
  category: "Fashion",
  price: 1899,
  rating: 4.7,
  discount: "28% OFF",
  image: "https://images.unsplash.com/photo-1683660107594-5fb68e65b84b?w=500",
  description: "Designer frock for special occasions."
},

{
  id: 69,
  name: "Floral Frock",
  category: "Fashion",
  price: 1599,
  rating: 4.5,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1713621181744-44c07e82f088?w=500",
  description: "Floral printed frock."
},

{
  id: 70,
  name: "Premium Frock",
  category: "Fashion",
  price: 2199,
  rating: 4.8,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1778616364970-9d136684c7ac?w=500",
  description: "Premium quality frock."
},

{
  id: 71,
  name: "Elegant Frock",
  category: "Fashion",
  price: 1799,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1596783047904-4000addd05cd?w=500",
  description: "Elegant frock design."
},

{
  id: 72,
  name: "Classic Frock",
  category: "Fashion",
  price: 1699,
  rating: 4.5,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1631233941443-be9a7c8b3080?w=500",
  description: "Classic frock for women."
},

{
  id: 73,
  name: "Stylish Frock",
  category: "Fashion",
  price: 1999,
  rating: 4.7,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500",
  description: "Stylish frock collection."
},

{
  id: 74,
  name: "Nike Running Shoes",
  category: "Fashion",
  price: 3999,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
  description: "Comfortable running shoes."
},

{
  id: 75,
  name: "Premium Sports Shoes",
  category: "Fashion",
  price: 4499,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=500",
  description: "Premium sports shoes."
},

{
  id: 76,
  name: "Adidas Sneakers",
  category: "Fashion",
  price: 4299,
  rating: 4.6,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
  description: "Classic Adidas sneakers."
},

{
  id: 77,
  name: "Casual Sneakers",
  category: "Fashion",
  price: 3299,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
  description: "Comfortable casual sneakers."
},

{
  id: 78,
  name: "Branded Shoes",
  category: "Fashion",
  price: 4999,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293?w=500",
  description: "High quality branded shoes."
},

{
  id: 79,
  name: "Training Shoes",
  category: "Fashion",
  price: 3599,
  rating: 4.6,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
  description: "Perfect for training."
},

{
  id: 80,
  name: "Lifestyle Shoes",
  category: "Fashion",
  price: 3899,
  rating: 4.7,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
  description: "Stylish everyday shoes."
},

{
  id: 81,
  name: "Formal Shirt",
  category: "Fashion",
  price: 1299,
  rating: 4.5,
  discount: "25% OFF",
  image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500",
  description: "Premium formal shirt."
},

{
  id: 82,
  name: "Cotton Shirt",
  category: "Fashion",
  price: 1199,
  rating: 4.4,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
  description: "Soft cotton shirt."
},

{
  id: 83,
  name: "Casual Men's Shirt",
  category: "Fashion",
  price: 1399,
  rating: 4.6,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
  description: "Casual everyday shirt."
},

{
  id: 84,
  name: "Slim Fit Shirt",
  category: "Fashion",
  price: 1499,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
  description: "Slim fit stylish shirt."
},

{
  id: 85,
  name: "Premium Office Shirt",
  category: "Fashion",
  price: 1699,
  rating: 4.8,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1716541424893-734612ddcabb?w=500",
  description: "Premium office wear shirt."
},

{
  id: 86,
  name: "Checked Shirt",
  category: "Fashion",
  price: 1299,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
  description: "Classic checked shirt."
},

{
  id: 87,
  name: "Luxury Shirt",
  category: "Fashion",
  price: 2199,
  rating: 4.8,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500",
  description: "Luxury premium shirt."
},

{
  id: 88,
  name: "Fashion Combo Pack",
  category: "Fashion",
  price: 2999,
  rating: 4.7,
  discount: "35% OFF",
  image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500",
  description: "Fashion combo collection."
},
// ======================
// BEAUTY
// ======================

{
  id: 89,
  name: "Luxury Makeup Kit",
  category: "Beauty",
  price: 2499,
  rating: 4.8,
  discount: "25% OFF",
  image: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?w=500",
  description: "Complete beauty makeup kit."
},

{
  id: 90,
  name: "Beauty Essentials Set",
  category: "Beauty",
  price: 1999,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
  description: "Daily beauty essentials."
},

{
  id: 91,
  name: "Professional Makeup Brush Set",
  category: "Beauty",
  price: 899,
  rating: 4.6,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
  description: "Premium makeup brush collection."
},

{
  id: 92,
  name: "Vitamin C Face Serum",
  category: "Beauty",
  price: 799,
  rating: 4.8,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=500",
  description: "Brightening face serum."
},

{
  id: 93,
  name: "Hydrating Face Cream",
  category: "Beauty",
  price: 699,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500",
  description: "Deep moisturizing cream."
},

{
  id: 94,
  name: "Aloe Vera Gel",
  category: "Beauty",
  price: 399,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=500",
  description: "Pure soothing aloe vera gel."
},

{
  id: 95,
  name: "Face Wash",
  category: "Beauty",
  price: 299,
  rating: 4.4,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
  description: "Gentle daily cleanser."
},

{
  id: 96,
  name: "Night Repair Cream",
  category: "Beauty",
  price: 899,
  rating: 4.7,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?w=500",
  description: "Overnight skin repair cream."
},

{
  id: 97,
  name: "Sunscreen SPF 50",
  category: "Beauty",
  price: 499,
  rating: 4.8,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1670201203150-bf8771401590?w=500",
  description: "Broad spectrum UV protection."
},

{
  id: 98,
  name: "Moisturizer",
  category: "Beauty",
  price: 599,
  rating: 4.6,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
  description: "Daily hydrating moisturizer."
},

{
  id: 99,
  name: "Face Mask Pack",
  category: "Beauty",
  price: 699,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?w=500",
  description: "Refreshing sheet masks."
},

{
  id: 100,
  name: "Skin Care Combo",
  category: "Beauty",
  price: 1499,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500",
  description: "Complete skin care package."
},

{
  id: 101,
  name: "Anti-Aging Serum",
  category: "Beauty",
  price: 1199,
  rating: 4.8,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1670201202833-b0932731628f?w=500",
  description: "Reduces wrinkles and fine lines."
},

{
  id: 102,
  name: "Body Lotion",
  category: "Beauty",
  price: 449,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1559881230-1af605ca3f67?w=500",
  description: "Soft and smooth skin lotion."
},

{
  id: 103,
  name: "Facial Toner",
  category: "Beauty",
  price: 549,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=500",
  description: "Refreshing facial toner."
},

{
  id: 104,
  name: "Organic Face Oil",
  category: "Beauty",
  price: 799,
  rating: 4.7,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?w=500",
  description: "Natural nourishing face oil."
},

{
  id: 105,
  name: "Premium Skin Care Kit",
  category: "Beauty",
  price: 1999,
  rating: 4.8,
  discount: "30% OFF",
  image: "https://plus.unsplash.com/premium_photo-1679046948896-5f9aa56900e9?w=500",
  description: "Luxury skincare collection."
},

{
  id: 106,
  name: "Lip Care Set",
  category: "Beauty",
  price: 399,
  rating: 4.4,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500",
  description: "Lip balm and lip care combo."
},

{
  id: 107,
  name: "Beauty Blender Set",
  category: "Beauty",
  price: 349,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=500",
  description: "Soft beauty blending sponges."
},

{
  id: 108,
  name: "Luxury Perfume",
  category: "Beauty",
  price: 2499,
  rating: 4.9,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1638609927040-8a7e97cd9d6a?w=500",
  description: "Long-lasting premium fragrance."
},
// ======================
// TOYS
// ======================

{
  id: 109,
  name: "Toy Building Blocks",
  category: "Toys",
  price: 999,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500",
  description: "Creative educational building blocks."
},

{
  id: 110,
  name: "Teddy Bear",
  category: "Toys",
  price: 799,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1603775213987-8f0b6a38bc31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRlZGR5JTIwYmVhcnxlbnwwfHwwfHx8MA%3D%3D",
  description: "Soft and cuddly teddy bear."
},

{
  id: 111,
  name: "Toy Train Set",
  category: "Toys",
  price: 1499,
  rating: 4.6,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
  description: "Classic toy train set."
},

{
  id: 112,
  name: "Toy Car Collection",
  category: "Toys",
  price: 699,
  rating: 4.5,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=500",
  description: "Mini toy car collection."
},

{
  id: 113,
  name: "Premium Teddy Bear",
  category: "Toys",
  price: 999,
  rating: 4.9,
  discount: "20% OFF",
  image: "https://plus.unsplash.com/premium_photo-1725075087109-5ee07f242436?w=500",
  description: "Large premium teddy bear."
},

{
  id: 114,
  name: "Kids Gift Toy Set",
  category: "Toys",
  price: 1299,
  rating: 4.6,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2lkcyUyMEdpZnQlMjBUb3klMjBTZXR8ZW58MHx8MHx8fDA%3D",
  description: "Exciting toy gift collection."
},

{
  id: 115,
  name: "Action Figure Set",
  category: "Toys",
  price: 899,
  rating: 4.5,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=500",
  description: "Popular superhero action figures."
},

{
  id: 116,
  name: "Cute Teddy Toy",
  category: "Toys",
  price: 649,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://plus.unsplash.com/premium_photo-1725075087153-610264ca9cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVkZHklMjB0b3l8ZW58MHx8MHx8fDA%3D",
  description: "Adorable teddy toy."
},

{
  id: 117,
  name: "Educational Puzzle Game",
  category: "Toys",
  price: 799,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500",
  description: "Brain-boosting puzzle game."
},

{
  id: 118,
  name: "Remote Control Car",
  category: "Toys",
  price: 1799,
  rating: 4.8,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1674830608058-5e8fe5e54da7?w=500",
  description: "High-speed RC car."
},

{
  id: 119,
  name: "Toy Animal Set",
  category: "Toys",
  price: 699,
  rating: 4.4,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1529651490292-99f6f9ade9e8?w=500",
  description: "Animal figurines collection."
},

{
  id: 120,
  name: "Dinosaur Toy Set",
  category: "Toys",
  price: 899,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?w=500",
  description: "Realistic dinosaur toys."
},

{
  id: 121,
  name: "Robot Toy",
  category: "Toys",
  price: 1499,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1708435341096-bd28541a1e60?w=500",
  description: "Interactive robot toy."
},

{
  id: 122,
  name: "Toy Kitchen Set",
  category: "Toys",
  price: 1999,
  rating: 4.6,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1625039217696-403773390a30?w=500",
  description: "Pretend play kitchen set."
},

{
  id: 123,
  name: "Stuffed Teddy Bear",
  category: "Toys",
  price: 899,
  rating: 4.8,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=500",
  description: "Soft stuffed teddy bear."
},

{
  id: 124,
  name: "Toy House Set",
  category: "Toys",
  price: 1499,
  rating: 4.5,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1620447789324-fd300c136721?w=500",
  description: "Miniature toy house."
},

{
  id: 125,
  name: "Brown Teddy Bear",
  category: "Toys",
  price: 749,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1615583452853-a4e45d4f68b1?w=500",
  description: "Cute brown teddy bear."
},

{
  id: 126,
  name: "Toy Airplane",
  category: "Toys",
  price: 1299,
  rating: 4.6,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1602507007739-74db4eccac5c?w=500",
  description: "Realistic toy airplane."
},

{
  id: 127,
  name: "Toy Truck",
  category: "Toys",
  price: 999,
  rating: 4.5,
  discount: "18% OFF",
  image: "https://plus.unsplash.com/premium_photo-1661430916195-f8bfa159d705?w=500",
  description: "Heavy-duty toy truck."
},

{
  id: 128,
  name: "Kids Ride-On Toy",
  category: "Toys",
  price: 3499,
  rating: 4.8,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1588090644556-14707d0e886a?w=500",
  description: "Fun ride-on toy vehicle."
},
]
export default products;