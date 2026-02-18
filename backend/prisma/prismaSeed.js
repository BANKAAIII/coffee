import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // ==========================
    // 1️⃣ Users
    // ==========================
    const userSeed = await prisma.user.upsert({
      where: { email: "ameyawarang203@gmail.com" },
      update: {},
      create: {
        name: "Ameya Warang",
        email: "ameyawarang203@gmail.com",
        password: "password123", // required field
        phoneNumber: 9004361469,
        role: "CUSTOMER",
      },
    });

    const adminSeed = await prisma.user.upsert({
      where: { email: "ameyawarang450@gmail.com" },
      update: {},
      create: {
        name: "Ameya Warang",
        email: "ameyawarang450@gmail.com",
        password: "password123",
        phoneNumber: 9769494857,
        role: "OWNER",
      },
    });

    const staffSeed = await prisma.user.upsert({
      where: { email: "jasonBourne@gmail.com" },
      update: {},
      create: {
        name: "Jason Bourne",
        email: "jasonBourne@gmail.com",
        password: "password123",
        phoneNumber: 9820609822,
        role: "STAFF",
      },
    });

    // ==========================
    // 2️⃣ Categories
    // ==========================
    const categorySeed = await prisma.category.upsert({
      where: { name: "Hot Beverages" },
      update: {},
      create: {
        name: "Hot Beverages",
        description: "Warm beverages to make your day better",
      },
    });

    const categorySeed2 = await prisma.category.upsert({
      where: { name: "Cold Beverages" },
      update: {},
      create: {
        name: "Cold Beverages",
        description: "Cool beverages to make your day better",
      },
    });

    // ==========================
    // 3️⃣ Menu Items
    // ==========================
    const menuItemSeed1 = await prisma.menuItems.upsert({
      where: { name: "Classic Hot Coffee" },
      update: {},
      create: {
        name: "Classic Hot Coffee",
        description:
          "Freshly brewed hot coffee made from premium Arabica beans.",
        price: 300.0,
        categoryId: categorySeed.id,
        imageUrl: "/images/hot_coffee.jpg",
        isAvailable: true,
        discountPercent: 10,
        isSpecial: false,
        isActive: true,
      },
    });

    const menuItemSeed2 = await prisma.menuItems.upsert({
      where: { name: "Iced Coffee" },
      update: {},
      create: {
        name: "Iced Coffee",
        description:
          "Chilled coffee served over ice, perfect for a refreshing pick-me-up.",
        price: 400.0,
        categoryId: categorySeed2.id,
        imageUrl: "/images/iced_coffee.jpg",
        isAvailable: true,
        discountPercent: 5,
        isSpecial: true,
        specialValidity: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // valid 7 days
        isActive: true,
      },
    });

    // ==========================
    // 4️⃣ Orders + OrderItems + Payment
    // ==========================
    const orderSeed = await prisma.orders.create({
      data: {
        userId: userSeed.id,
        status: "PENDING",
        amount: menuItemSeed1.price * 2 + menuItemSeed2.price * 3,
        paymentMethod: "UPI",
        orderItems: {
          create: [
            {
              menuItemId: menuItemSeed1.id,
              quantity: 2,
              price: menuItemSeed1.price,
            },
            {
              menuItemId: menuItemSeed2.id,
              quantity: 3,
              price: menuItemSeed2.price,
            },
          ],
        },
        payment: {
          create: {
            amount: menuItemSeed1.price * 2 + menuItemSeed2.price * 3,
            method: "CARD",
            status: "PENDING",
            transactionId: null,
          },
        },
      },
      include: {
        orderItems: { include: { menuItem: true } },
        payment: true,
      },
    });

    console.log("✅ Basic seeding complete!", {
      userSeed,
      adminSeed,
      staffSeed,
      categorySeed,
      categorySeed2,
      menuItemSeed1,
      menuItemSeed2,
      orderSeed,
    });
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
