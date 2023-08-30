import "dotenv/config.js"
import "../../config/database.js"
// import Product from "../Product.js" // SE IMPORTA MODELO Product

let products = [
    {
        "category_id": 1,
        "name": "Smart Mirror 2.0",
        "description": "Interactive smart mirror with touchscreen display, weather updates, and voice control.",
        "image": "https://www.homecrux.com/wp-content/gallery/smart-mirror/smart-mirror-1.jpg",
        "price": 199.99,
        "stock": 20
    },
    {
        "category_id": 2,
        "name": "Nano Drone X1",
        "description": "Pocket-sized nano drone with HD camera, perfect for capturing aerial shots anywhere.",
        "image": "https://m.media-amazon.com/images/I/71mFVlL6NPL._AC_UF894,1000_QL80_.jpg",
        "price": 49.99,
        "stock": 100
    },
    {
        "category_id": 3,
        "name": "HoloLens 360",
        "description": "Augmented reality headset that overlays holographic images onto the real world.",
        "image": "https://www.tworeality.com/wp-content/uploads/2016/03/tworeality-realidad-virtual-hololens.jpg",
        "price": 499.99,
        "stock": 10
    },
    {
        "category_id": 4,
        "name": "NeuroFit VR",
        "description": "Virtual reality system for neurorehabilitation, helping patients regain motor skills.",
        "image": "https://www.mdpi.com/sensors/sensors-20-06045/article_deploy/html/images/sensors-20-06045-g005.png",
        "price": 799.99,
        "stock": 5
    },
    {
        "category_id": 5,
        "name": "Quantum Earbuds",
        "description": "Wireless earbuds with real-time language translation and advanced noise cancellation.",
        "image": "https://m.media-amazon.com/images/I/61nR2CVtvvS.jpg",
        "price": 149.99,
        "stock": 50
    },
    {
        "category_id": 6,
        "name": "SolarGrip Charger",
        "description": "Portable solar charger for smartphones, with a built-in adjustable grip for hands-free use.",
        "image": "https://manuals.plus/wp-content/uploads/2021/08/s-l640-Copy-1.jpg?ezimgfmt=rs:412x659/rscb1/ng:webp/ngcb1",
        "price": 79.99,
        "stock": 30
    },
    {
        "category_id": 7,
        "name": "Infinite Desk",
        "description": "Height-adjustable desk with integrated touchscreen display and wireless charging.",
        "image": "https://i.pinimg.com/1200x/3a/d1/c4/3ad1c42bbb9d479aa58a254547b73417.jpg",
        "price": 599.99,
        "stock": 15
    },
    {
        "category_id": 8,
        "name": "NeuroSync Headset",
        "description": "Headset that uses brainwave synchronization for enhancing focus and productivity.",
        "image": "https://www.neurosync.health/wp-content/uploads/2022/09/EYE-SYNC-New-Transparent-1-e1662507025832.png",
        "price": 299.99,
        "stock": 8
    },
    {
        "category_id": 9,
        "name": "RoboChef Pro",
        "description": "AI-powered robotic chef that can cook gourmet meals in minutes.",
        "image": "https://www.researchgate.net/publication/348089369/figure/fig6/AS:976083159625730@1609727768312/Two-different-examples-of-robotchefs-a-MK1-The-robochef-from-Moley-Robotics-that.ppm",
        "price": 1299.99,
        "stock": 3
    },
    {
        "category_id": 10,
        "name": "TimeWarp Watch",
        "description": "Smartwatch with the ability to manipulate the perception of time for the wearer.",
        "image": "https://m.media-amazon.com/images/I/71oZRwJRK-L._AC_UY1000_.jpg",
        "price": 399.99,
        "stock": 7
    }
        {
        "category_id": 5,
        "name": "Coffe make",
        "description": "Filter Coffee Maker Machine Instant Anti-Drip 12 Cups 800W 1.5L Jug Geepas",
        "image": "https://i.ebayimg.com/images/g/7qAAAOSwaYpjx9~R/s-l1600.jpg",
        "price": 24.99,
        "stock": 50
    },
    {
        "category_id": 5,
        "name": "Blender",
        "description": "Blender Food Processor Glass Jug Smoothie Milkshake Maker Coffee Grinder 500W",
        "image": "https://i.ebayimg.com/images/g/IT0AAOSwPJ1j5lbJ/s-l300.jpg",
        "price": 34.99,
        "stock": 40
    },
    {
        "category_id": 5,
        "name": "Mixer",
        "description": "COOKLEE Stand Mixer, 800W 8.5-Qt. Kitchen Mixer with Dishwasher-Safe Dough Hooks",
        "image": "https://i.ebayimg.com/images/g/OPYAAOSwwxdkzSqO/s-l1600.jpg",
        "price": 94.95,
        "stock": 30
    },
    {
        "category_id": 5,
        "name": "toaster",
        "description": "Black 4 Slice Toaster Family Size 1400W with Variable Browning Control",
        "image": "https://i.ebayimg.com/images/g/vb4AAOSweqFjwUo5/s-l300.jpg",
        "price": 23.99,
        "stock": 60
    },
    {
        "category_id": 5,
        "name": "Microwave",
        "description": "Russell Hobbs RHM2076B 20 Litre 800W Digital Microwave 5 Power Levels - Black",
        "image": "https://i.ebayimg.com/images/g/wu8AAOSwmPRk1nLE/s-l300.jpg",
        "price": 72.99,
        "stock": 20
    },
    {
        "category_id": 5,
        "name": "Pressure cooker",
        "description": "Aluminum Gas Pressure cooker Infuction Cooker Capacity Polished size",
        "image": "https://i.ebayimg.com/images/g/Zu0AAOSwILBkkg3M/s-l1600.jpg",
        "price": 28.00,
        "stock": 15
    },
    {
        "category_id": 5,
        "name": "Stove",
        "description": "Electric Stove Burner Double Cooktop Dual Hot Ring Portable Tabletop Kitchen",
        "image": "https://i.ebayimg.com/images/g/4-8AAOSw3tRitxbp/s-l1600.jpg",
        "price": 336.95,
        "stock": 25
    },
    {
        "category_id": 5,
        "name": "Tea Maker",
        "description": "HD-1802S 220V 2000W 1.8L Stainless Steel Electric Kettle with Water Window",
        "image": "https://i.ebayimg.com/images/g/7VAAAOSw49NkgNXj/s-l1600.jpg",
        "price": 340.00,
        "stock": 35
    },
    {
        "category_id": 5,
        "name": "Vacuum cleaner",
        "description": "EQP10 Vacuum Cleaner Color Red Voltage 127V or 220V Power 1600W",
        "image": "https://www.alkosto.com/medias/7896347149532-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNzMwM3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobE1DOW9ZMlF2T0RrMU9Ua3lORFV3TWpVMU9DNXFjR2N8ZDA4YWI4ZjY1ZjdkYWU5NDM4OTkxNzI0NDRhZDU1NTUxNDc2M2RkYTZkN2FiMTcxNTgxM2YyMDg5ZjhjMjczNw",
        "price": 135.80,
        "stock": 45
    },
    {
        "category_id": 5,
        "name": "Clothes dryer",
        "description": "It is the first washing machine in Colombia with Artificial Intelligence.",
        "image": "https://www.alkosto.com/medias/8806098404926-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNDcyMzN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGtPQzlvTkRndk9UYzBORFUxTWpRMk1ETXhPQzVxY0djfDdjZWViNWZmYmEwMzYxYTg4YTczMjlmNjA0ZjVmNGY4Mzk2ZTJlN2IwYTQ3M2ViN2ZkYjI3OGE2MTk5MzMyYmE",
        "price": 199.95,
        "stock": 10
    }
]

Product.insertMany(products)