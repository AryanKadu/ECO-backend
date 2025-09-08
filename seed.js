import mongoose from "mongoose";
import Item from "./src/models/item_model.js";
import dotenv from "dotenv";

dotenv.config();

const sampleItems = [
    // Electronics
    {
        name: "Wireless Headphones",
        price: 99.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        stock: 50
    },
    {
        name: "Laptop Stand",
        price: 45.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
        stock: 30
    },
    {
        name: "Bluetooth Speaker",
        price: 79.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        stock: 35
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
        stock: 45
    },
    {
        name: "USB-C Cable",
        price: 19.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        stock: 100
    },
    {
        name: "Smartphone Case",
        price: 24.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400",
        stock: 80
    },
    {
        name: "Wireless Charger",
        price: 39.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
        stock: 60
    },
    {
        name: "Gaming Keyboard",
        price: 89.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
        stock: 25
    },
    {
        name: "4K Webcam",
        price: 149.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
        stock: 20
    },
    {
        name: "Power Bank",
        price: 34.99,
        category: "Electronics",
        imgUrl: "https://images.unsplash.com/photo-1609592386047-d4b5dbc1d90e?w=400",
        stock: 55
    },

    // Clothing & Fashion
    {
        name: "Cotton T-Shirt",
        price: 19.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        stock: 120
    },
    {
        name: "Denim Jeans",
        price: 59.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        stock: 85
    },
    {
        name: "Leather Jacket",
        price: 199.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        stock: 15
    },
    {
        name: "Wool Sweater",
        price: 79.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
        stock: 40
    },
    {
        name: "Summer Dress",
        price: 49.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        stock: 65
    },
    {
        name: "Baseball Cap",
        price: 24.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
        stock: 90
    },
    {
        name: "Winter Scarf",
        price: 29.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400",
        stock: 70
    },
    {
        name: "Running Shorts",
        price: 34.99,
        category: "Clothing",
        imgUrl: "https://images.unsplash.com/photo-1506629905607-5ff9e5dc31b9?w=400",
        stock: 55
    },

    // Sports & Fitness
    {
        name: "Running Shoes",
        price: 129.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        stock: 25
    },
    {
        name: "Yoga Mat",
        price: 39.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
        stock: 80
    },
    {
        name: "Dumbbells Set",
        price: 89.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        stock: 30
    },
    {
        name: "Basketball",
        price: 29.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
        stock: 45
    },
    {
        name: "Tennis Racket",
        price: 149.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
        stock: 20
    },
    {
        name: "Water Bottle",
        price: 19.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400",
        stock: 100
    },
    {
        name: "Fitness Tracker",
        price: 199.99,
        category: "Sports",
        imgUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        stock: 35
    },

    // Home & Garden
    {
        name: "Coffee Mug",
        price: 15.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
        stock: 100
    },
    {
        name: "Plant Pot",
        price: 22.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
        stock: 75
    },
    {
        name: "Table Lamp",
        price: 89.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        stock: 40
    },
    {
        name: "Throw Pillow",
        price: 34.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        stock: 85
    },
    {
        name: "Wall Clock",
        price: 49.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400",
        stock: 50
    },
    {
        name: "Candle Set",
        price: 29.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1602874801006-d5d7f93aa4de?w=400",
        stock: 95
    },
    {
        name: "Kitchen Scale",
        price: 39.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        stock: 60
    },
    {
        name: "Succulent Garden",
        price: 44.99,
        category: "Home",
        imgUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
        stock: 30
    },

    // Books & Media
    {
        name: "JavaScript Guide",
        price: 49.99,
        category: "Books",
        imgUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
        stock: 40
    },
    {
        name: "Design Thinking Book",
        price: 34.99,
        category: "Books",
        imgUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
        stock: 55
    },
    {
        name: "Cookbook Collection",
        price: 39.99,
        category: "Books",
        imgUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        stock: 35
    },
    {
        name: "Photography Basics",
        price: 29.99,
        category: "Books",
        imgUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
        stock: 45
    },

    // Beauty & Personal Care
    {
        name: "Skincare Set",
        price: 69.99,
        category: "Beauty",
        imgUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
        stock: 50
    },
    {
        name: "Hair Dryer",
        price: 89.99,
        category: "Beauty",
        imgUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400",
        stock: 25
    },
    {
        name: "Perfume",
        price: 79.99,
        category: "Beauty",
        imgUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        stock: 40
    },
    {
        name: "Makeup Brush Set",
        price: 49.99,
        category: "Beauty",
        imgUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
        stock: 65
    },

    // Toys & Games
    {
        name: "Board Game Classic",
        price: 39.99,
        category: "Games",
        imgUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
        stock: 70
    },
    {
        name: "Puzzle 1000pc",
        price: 24.99,
        category: "Games",
        imgUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
        stock: 45
    },
    {
        name: "RC Drone",
        price: 199.99,
        category: "Games",
        imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
        stock: 15
    },
    {
        name: "Card Game Set",
        price: 19.99,
        category: "Games",
        imgUrl: "https://images.unsplash.com/photo-1594736797933-d0d3648ad924?w=400",
        stock: 80
    },

    // Automotive & Tools
    {
        name: "Car Phone Mount",
        price: 24.99,
        category: "Automotive",
        imgUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
        stock: 90
    },
    {
        name: "Tire Pressure Gauge",
        price: 19.99,
        category: "Automotive",
        imgUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400",
        stock: 75
    },
    {
        name: "Multi-Tool Kit",
        price: 59.99,
        category: "Tools",
        imgUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400",
        stock: 40
    },
    {
        name: "LED Flashlight",
        price: 29.99,
        category: "Tools",
        imgUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
        stock: 85
    },

    // Pet Supplies
    {
        name: "Dog Toy Set",
        price: 24.99,
        category: "Pets",
        imgUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
        stock: 65
    },
    {
        name: "Cat Scratching Post",
        price: 49.99,
        category: "Pets",
        imgUrl: "https://images.unsplash.com/photo-1545208942-299b0b8a3711?w=400",
        stock: 30
    },
    {
        name: "Pet Food Bowl",
        price: 19.99,
        category: "Pets",
        imgUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400",
        stock: 95
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // Clear existing items
        await Item.deleteMany({});
        console.log("Cleared existing items");

        // Add sample items using insertMany for better performance
        const items = await Item.insertMany(sampleItems);
        console.log(`✅ Successfully added ${items.length} sample items`);

        // Display summary by category
        const categoryCount = {};
        items.forEach(item => {
            categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
        });

        console.log("\n📊 Items by Category:");
        Object.entries(categoryCount).forEach(([category, count]) => {
            console.log(`   ${category}: ${count} items`);
        });

        console.log("\n💰 Price Range:");
        const prices = items.map(item => item.price).sort((a, b) => a - b);
        console.log(`   Cheapest: $${prices[0]}`);
        console.log(`   Most expensive: $${prices[prices.length - 1]}`);

        console.log("\n📦 Total inventory:");
        const totalStock = items.reduce((sum, item) => sum + item.stock, 0);
        console.log(`   ${totalStock} units across all products`);

        console.log("\n🎉 Database seeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();
