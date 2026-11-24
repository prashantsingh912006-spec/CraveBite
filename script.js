/**
 * CRAVEBITE - SWIGGY & ZOMATO INSPIRED JAVASCRIPT APPLICATION
 * Complete User Interaction Architecture & State Management
 */

// ==========================================
// 1. DATA STORES: RESTAURANTS & DISHES
// ==========================================

const RESTAURANTS = [
  {
    id: 101,
    name: "Meghana Foods",
    cuisines: "Biryani, Andhra, Chinese, Seafood",
    locality: "Indiranagar, 100 Feet Rd",
    rating: 4.5,
    reviews: "10k+",
    deliveryTime: "22 mins",
    distance: "1.8 km",
    discountTag: "₹120 OFF ABOVE ₹199",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 102,
    name: "Behrouz Biryani - The Royal Treat",
    cuisines: "Royal Biryani, Mughlai, Kebabs",
    locality: "Koramangala 4th Block",
    rating: 4.6,
    reviews: "5k+",
    deliveryTime: "26 mins",
    distance: "2.4 km",
    discountTag: "50% OFF UP TO ₹100",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 103,
    name: "Domino's Gourmet Pizza",
    cuisines: "Pizzas, Italian, Garlic Breads, Desserts",
    locality: "Indiranagar",
    rating: 4.4,
    reviews: "15k+",
    deliveryTime: "20 mins",
    distance: "1.2 km",
    discountTag: "FREE CHEESE BURST",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 104,
    name: "Burger King - Flame Grilled",
    cuisines: "Burgers, American, Crispy Fries, Shakes",
    locality: "MG Road, Central",
    rating: 4.3,
    reviews: "8k+",
    deliveryTime: "24 mins",
    distance: "2.8 km",
    discountTag: "ITEMS AT ₹99",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 105,
    name: "Mainland China & Dim Sums",
    cuisines: "Chinese, Dumplings, Asian, Noodles",
    locality: "Indiranagar",
    rating: 4.7,
    reviews: "3k+",
    deliveryTime: "30 mins",
    distance: "3.1 km",
    discountTag: "FLAT 20% OFF",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 106,
    name: "The Belgian Waffle Co.",
    cuisines: "Waffles, Pancakes, Sundaes, Shakes",
    locality: "Indiranagar 12th Main",
    rating: 4.6,
    reviews: "6k+",
    deliveryTime: "18 mins",
    distance: "1.0 km",
    discountTag: "BUY 2 GET 1 FREE",
    pureVeg: true,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 107,
    name: "Sagar Ratna Heritage",
    cuisines: "South Indian, Crispy Dosas, Idlis, Filter Coffee",
    locality: "Koramangala 5th Block",
    rating: 4.8,
    reviews: "12k+",
    deliveryTime: "20 mins",
    distance: "1.5 km",
    discountTag: "FLAT ₹50 OFF",
    pureVeg: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 108,
    name: "Faasos - Rolls & Bowls",
    cuisines: "Rolls, Kathi Wraps, Rice Bowls, Kebabs",
    locality: "Indiranagar Metro",
    rating: 4.4,
    reviews: "7k+",
    deliveryTime: "22 mins",
    distance: "2.1 km",
    discountTag: "ROLLS FROM ₹99",
    pureVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 109,
    name: "Haldiram's Sweets & Thalis",
    cuisines: "North Indian, Thalis, Chaat, Mithai",
    locality: "Church Street",
    rating: 4.5,
    reviews: "9k+",
    deliveryTime: "25 mins",
    distance: "2.6 km",
    discountTag: "FLAT 15% OFF",
    pureVeg: true,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
  }
];

// Dishes grouped by Swiggy Accordion Categories
const MENU_CATEGORIES = [
  {
    id: "recommended",
    name: "Recommended",
    dishes: [
      {
        id: 1,
        name: "Meghana Special Chicken Biryani",
        restaurant: "Meghana Foods",
        priceINR: 320,
        rating: 4.8,
        ratingCount: "2.4k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "biryani",
        customisable: true,
        description: "Signature slow-cooked aromatic basmati rice layered with tender spicy marinated chicken pieces, served with mirchi ka salan and cooling raita.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        name: "Paneer Butter Masala & Naan Meal",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 260,
        rating: 4.7,
        ratingCount: "1.8k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "north-indian",
        customisable: true,
        description: "Soft cottage cheese cubes cooked in a rich, velvety tomato and cashew nut gravy enriched with fresh churned butter, cream, and aromatic spices.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        name: "Fiery Peri-Peri Chicken Burger",
        restaurant: "Burger King - Flame Grilled",
        priceINR: 199,
        rating: 4.6,
        ratingCount: "940",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "burgers",
        customisable: true,
        description: "Crispy fried chicken breast fillet tossed in African bird's eye peri-peri spice dust, crunchy lettuce, and smoked garlic paprika aioli.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 4,
        name: "Double Cheese Margherita Pizza",
        restaurant: "Domino's Gourmet Pizza",
        priceINR: 289,
        rating: 4.8,
        ratingCount: "3.1k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "pizza",
        customisable: true,
        description: "100% real mozzarella cheese loaded over a classic herb-infused Italian tomato sauce on a freshly hand-stretched golden crust.",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 30,
        name: "Mysore Masala Butter Dosa",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 140,
        rating: 4.8,
        ratingCount: "3.8k",
        veg: true,
        spicy: true,
        bestseller: true,
        category: "south-indian",
        customisable: false,
        description: "Crispy golden fermented rice-lentil crepe smeared with spicy red garlic-chilli chutney, stuffed with spiced potato masala and dollop of white butter.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 9,
        name: "Kolkata Egg Chicken Kathi Roll",
        restaurant: "Faasos - Rolls & Bowls",
        priceINR: 160,
        rating: 4.8,
        ratingCount: "890",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "rolls",
        customisable: false,
        description: "Flaky pan-griddled paratha layered with fried egg, stuffed with bhuna chicken chunks, pickled red onions, and tangy chaat masala.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 7,
        name: "Steamed Chicken Momos with Red Chili Dip",
        restaurant: "Mainland China & Dim Sums",
        priceINR: 180,
        rating: 4.7,
        ratingCount: "1.5k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "chinese",
        customisable: false,
        description: "6 delicate thin-wrapper dumplings stuffed with juicy scallion and minced chicken, served with fiery roasted tomato garlic dip.",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10,
        name: "Death By Chocolate Belgian Waffle",
        restaurant: "The Belgian Waffle Co.",
        priceINR: 175,
        rating: 4.9,
        ratingCount: "4.2k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "desserts",
        customisable: false,
        description: "Warm crispy dark chocolate waffle smothered with melted Belgian milk chocolate, dark fudge drizzle, and crunchy chocolate crisps.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 11,
        name: "Alphonso Mango Thick Shake",
        restaurant: "The Belgian Waffle Co.",
        priceINR: 140,
        rating: 4.8,
        ratingCount: "1.3k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "shakes",
        customisable: false,
        description: "Crafted with real 100% Alphonso mango pulp, thick cream milk, and rich vanilla ice cream churned to velvet perfection.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "biryanis",
    name: "Royal Biryani & Rice Bowls",
    dishes: [
      {
        id: 5,
        name: "Dum Gosht Hyderabadi Mutton Biryani",
        restaurant: "Behrouz Biryani - The Royal Treat",
        priceINR: 440,
        rating: 4.9,
        ratingCount: "1.2k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "biryani",
        customisable: true,
        description: "Fragrant Daawat basmati rice slow-cooked in sealed earthen handis with succulent marinated young goat mutton, saffron, and caramelized shallots.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 6,
        name: "Paneer Subz Dum Biryani",
        restaurant: "Behrouz Biryani - The Royal Treat",
        priceINR: 290,
        rating: 4.6,
        ratingCount: "820",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "biryani",
        customisable: true,
        description: "Layers of spiced vegetables, golden fried paneer cubes, whole fragrant spices, and royal saffron milk dum cooked to perfection.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 12,
        name: "Kolkata Special Chicken & Egg Biryani",
        restaurant: "Meghana Foods",
        priceINR: 310,
        rating: 4.7,
        ratingCount: "1.6k",
        veg: false,
        spicy: false,
        bestseller: true,
        category: "biryani",
        customisable: true,
        description: "Aromatic long grain basmati rice cooked with melt-in-mouth chicken leg, golden pan-fried spiced potato, and hard-boiled egg with mild saffron aroma.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 13,
        name: "Lucknowi Veg Navratan Dum Biryani",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 270,
        rating: 4.5,
        ratingCount: "640",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "biryani",
        customisable: true,
        description: "Awadhi style dum biryani prepared with garden fresh carrots, green beans, cauliflower, roasted cashews, fried raisins, and kewra water.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "pizzas-burgers",
    name: "Artisan Pizzas & Gourmet Burgers",
    dishes: [
      {
        id: 14,
        name: "Spicy Diablo Chicken Pepperoni Pizza",
        restaurant: "Domino's Gourmet Pizza",
        priceINR: 399,
        rating: 4.8,
        ratingCount: "2.1k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "pizza",
        customisable: true,
        description: "Artisan crust topped with smoked chicken pepperoni slices, spicy red paprika, pickled jalapenos, and gooey mozzarella cheese.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 15,
        name: "Farmhouse Fresh Veggie & Paneer Pizza",
        restaurant: "Domino's Gourmet Pizza",
        priceINR: 349,
        rating: 4.6,
        ratingCount: "1.9k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "pizza",
        customisable: true,
        description: "Loaded with spiced paneer cubes, crunchy green capsicum, sweet American golden corn, diced red onions, and rich herb tomato sauce.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 16,
        name: "Smoked BBQ Chicken & Onion Pizza",
        restaurant: "Domino's Gourmet Pizza",
        priceINR: 379,
        rating: 4.7,
        ratingCount: "1.4k",
        veg: false,
        spicy: false,
        bestseller: false,
        category: "pizza",
        customisable: true,
        description: "Succulent shredded chicken tossed in sweet and tangy hickory wood smoke BBQ sauce, caramelized red onions, and cheddar-mozzarella blend.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 17,
        name: "Crispy Aloo Tikki Supreme Burger",
        restaurant: "Burger King - Flame Grilled",
        priceINR: 129,
        rating: 4.5,
        ratingCount: "1.7k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "burgers",
        customisable: true,
        description: "Golden crumbed spiced potato and pea patty with tangy Indian mint mayo, crisp iceberg lettuce, and juicy tomato slices in a toasted bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 18,
        name: "Smoky Double Bacon & Cheese Burger",
        restaurant: "Burger King - Flame Grilled",
        priceINR: 269,
        rating: 4.7,
        ratingCount: "1.1k",
        veg: false,
        spicy: false,
        bestseller: false,
        category: "burgers",
        customisable: true,
        description: "Twin flame-grilled chicken patties layered with crispy chicken bacon strips, melted double yellow cheddar, and smoky chipotle relish.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 19,
        name: "Makhani Paneer Crunch Burger",
        restaurant: "Burger King - Flame Grilled",
        priceINR: 189,
        rating: 4.6,
        ratingCount: "870",
        veg: true,
        spicy: true,
        bestseller: true,
        category: "burgers",
        customisable: true,
        description: "Thick slice of marinated cottage cheese fried to golden crispiness, dipped in buttery rich makhani gravy with crunchy slaw in brioche bun.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "north-indian",
    name: "North Indian Curries & Tandoor",
    dishes: [
      {
        id: 20,
        name: "Murgh Makhani (Butter Chicken) Handi",
        restaurant: "Meghana Foods",
        priceINR: 340,
        rating: 4.8,
        ratingCount: "2.9k",
        veg: false,
        spicy: false,
        bestseller: true,
        category: "north-indian",
        customisable: true,
        description: "Smoky clay-oven tandoori chicken simmered gently in a silky tomato and cashew butter gravy, perfumed with kasoori methi and honey.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 21,
        name: "Dal Makhani Slow-Simmered with White Butter",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 230,
        rating: 4.9,
        ratingCount: "3.5k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "north-indian",
        customisable: true,
        description: "Whole black urad lentils slow-cooked overnight for 16 hours over charcoal, finished with churned makkhan, fresh dairy cream, and ginger juliennes.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 22,
        name: "Amritsari Chole & Stuffed Kulcha Combo",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 210,
        rating: 4.6,
        ratingCount: "1.4k",
        veg: true,
        spicy: true,
        bestseller: false,
        category: "north-indian",
        customisable: false,
        description: "Tangy black chickpeas simmered with roasted pomegranate and anardana spices, served with 2 crispy clay-oven potato-onion stuffed kulchas.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 23,
        name: "Tandoori Chicken Half (4 Pcs)",
        restaurant: "Meghana Foods",
        priceINR: 290,
        rating: 4.7,
        ratingCount: "2.1k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "north-indian",
        customisable: false,
        description: "Tender chicken on bone steeped in hung curd, deggi mirch, lemon juice, and roasted mustard oil, roasted to charred perfection in clay tandoor.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "south-indian",
    name: "South Indian Dosas, Idlis & Curries",
    dishes: [
      {
        id: 31,
        name: "Steamed Button Idlis & Medu Vada Combo",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 110,
        rating: 4.7,
        ratingCount: "2.7k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "south-indian",
        customisable: false,
        description: "Plate of 6 pillow-soft mini button idlis and 2 crunchy golden medu vadas, served with piping hot drumstick sambar and fresh coconut chutneys.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 32,
        name: "Malabar Chicken Curry with 2 Parottas",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 280,
        rating: 4.8,
        ratingCount: "1.9k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "south-indian",
        customisable: true,
        description: "Coastal Kerala style aromatic chicken cooked in roasted coconut paste, curry leaves, shallots, and crushed Tellicherry black pepper with layered parottas.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 33,
        name: "Chettinad Pepper Chicken Dry",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 260,
        rating: 4.6,
        ratingCount: "1.2k",
        veg: false,
        spicy: true,
        bestseller: false,
        category: "south-indian",
        customisable: false,
        description: "Spicy pan-roasted boneless chicken chunks tossed in stone-ground Chettinad masala, black peppercorns, crispy fried garlic, and curry leaves.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 34,
        name: "Ghee Roast Paper Masala Dosa",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 160,
        rating: 4.9,
        ratingCount: "4.1k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "south-indian",
        customisable: false,
        description: "Extra crispy gigantic paper-thin dosa roasted in fragrant pure desi cow ghee, filled with mildly spiced mustard potato mash and fresh coriander.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 35,
        name: "Onion Rava Masala Dosa with Chutneys",
        restaurant: "Sagar Ratna Heritage",
        priceINR: 150,
        rating: 4.6,
        ratingCount: "1.5k",
        veg: true,
        spicy: true,
        bestseller: false,
        category: "south-indian",
        customisable: false,
        description: "Crispy net-like crepe made with semolina, rice flour, crushed black peppercorns, cumin, finely diced red shallots, and green chillies.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "chinese-rolls",
    name: "Asian Wok & Kathi Rolls",
    dishes: [
      {
        id: 8,
        name: "Crispy Chilli Paneer Dry",
        restaurant: "Mainland China & Dim Sums",
        priceINR: 220,
        rating: 4.6,
        ratingCount: "1.1k",
        veg: true,
        spicy: true,
        bestseller: false,
        category: "chinese",
        customisable: false,
        description: "Wok-tossed battered cottage cheese tossed with bell peppers, spring onions, ginger, and dark soy garlic chili reduction.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 24,
        name: "Veg Hakka Noodles with Mini Spring Rolls",
        restaurant: "Mainland China & Dim Sums",
        priceINR: 190,
        rating: 4.5,
        ratingCount: "1.3k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "chinese",
        customisable: false,
        description: "Stir-fried noodles tossed on high flame with crunchy shredded cabbage, capsicum, carrots, and light soy sauce, served with 2 crispy spring rolls.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 25,
        name: "Schezwan Chicken Fried Rice",
        restaurant: "Mainland China & Dim Sums",
        priceINR: 240,
        rating: 4.7,
        ratingCount: "1.8k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "chinese",
        customisable: false,
        description: "Wok-charred long grain rice tossed with spicy homemade Sichuan chili oil, juicy chicken cubes, fluffy scrambled egg, and spring onion greens.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 26,
        name: "Golden Crispy Corn Salt & Pepper",
        restaurant: "Mainland China & Dim Sums",
        priceINR: 170,
        rating: 4.5,
        ratingCount: "920",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "chinese",
        customisable: false,
        description: "Sweet American golden corn kernels batter-fried until crunchy, tossed with freshly cracked black pepper, chopped scallions, and light seasoning.",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 27,
        name: "Double Paneer Tikka Kathi Roll",
        restaurant: "Faasos - Rolls & Bowls",
        priceINR: 150,
        rating: 4.7,
        ratingCount: "1.9k",
        veg: true,
        spicy: true,
        bestseller: true,
        category: "rolls",
        customisable: false,
        description: "Golden flaky paratha griddled with butter, wrapped around smoky marinated paneer tikka cubes, crunchy red onions, and zesty mint curd chutney.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 28,
        name: "Mutton Seekh Kebab Roll with Mint Chutney",
        restaurant: "Faasos - Rolls & Bowls",
        priceINR: 220,
        rating: 4.8,
        ratingCount: "1.1k",
        veg: false,
        spicy: true,
        bestseller: true,
        category: "rolls",
        customisable: false,
        description: "Clay-oven grilled juicy minced mutton seekh kebabs rolled inside an egg-lined paratha with roasted cumin sliced onions and lemon zest.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 29,
        name: "Cheesy Masala Aloo Corn Roll",
        restaurant: "Faasos - Rolls & Bowls",
        priceINR: 120,
        rating: 4.4,
        ratingCount: "780",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "rolls",
        customisable: false,
        description: "Crispy spiced potato hash with sweet corn kernels and generous warm liquid cheddar cheese sauce tightly rolled in a soft paratha.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "desserts-shakes",
    name: "Desserts, Waffles & Thick Shakes",
    dishes: [
      {
        id: 36,
        name: "Hot Gulab Jamun with Rabdi (2 pcs)",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 120,
        rating: 4.9,
        ratingCount: "3.7k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "desserts",
        customisable: false,
        description: "Warm soft fried khoya dumplings soaked in fragrant cardamom and saffron syrup, topped with chilled creamy slow-reduced rabdi and pistachios.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 37,
        name: "New York Baked Berry Cheesecake Slice",
        restaurant: "The Belgian Waffle Co.",
        priceINR: 220,
        rating: 4.8,
        ratingCount: "1.9k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "desserts",
        customisable: false,
        description: "Authentic dense New York style cream cheese baked on a crisp butter-graham cracker crust, generously smothered with wild blueberry compote.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 38,
        name: "Royal Shahi Tukda with Saffron & Pista",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 140,
        rating: 4.7,
        ratingCount: "850",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "desserts",
        customisable: false,
        description: "Crispy desi-ghee fried bread triangles soaked in rose-cardamom sugar syrup and blanketed in thick creamy saffron rabdi with slivered nuts.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 39,
        name: "Belgian Chocolate Oreo Frappe",
        restaurant: "The Belgian Waffle Co.",
        priceINR: 160,
        rating: 4.8,
        ratingCount: "2.4k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "shakes",
        customisable: false,
        description: "Decadent dark Belgian cocoa blended with whole milk and chunky Oreo cookies, crowned with vanilla cream and chocolate sauce fudge.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 40,
        name: "Royal Kesar Pista Dry Fruit Milkshake",
        restaurant: "Haldiram's Sweets & Thalis",
        priceINR: 180,
        rating: 4.9,
        ratingCount: "1.7k",
        veg: true,
        spicy: false,
        bestseller: true,
        category: "shakes",
        customisable: false,
        description: "Nourishing chilled full-cream milk steeped in Kashmiri saffron threads, finely crushed Iranian pistachios, badam almonds, and cardamom.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 41,
        name: "Cold Coffee with Dark Chocolate Fudge",
        restaurant: "The Belgian Waffle Co.",
        priceINR: 150,
        rating: 4.6,
        ratingCount: "1.5k",
        veg: true,
        spicy: false,
        bestseller: false,
        category: "shakes",
        customisable: false,
        description: "Freshly brewed Arabica espresso roast blended with chilled milk, a generous scoop of vanilla ice cream, and rich chocolate fudge syrup.",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

// Coupon Registry
const COUPON_CODES = {
  "CRAVE50": { discountPct: 50, maxDiscount: 150, minOrder: 249, desc: "50% OFF up to ₹150" },
  "FREEDEL": { freeDelivery: true, minOrder: 199, desc: "100% Free Delivery" },
  "FLAT100": { flatDiscount: 100, minOrder: 399, desc: "Flat ₹100 Discount" }
};

// ==========================================
// 2. GLOBAL STATE
// ==========================================
const AppState = {
  currency: "INR", // Exclusively Indian Rupees (₹)
  soundEnabled: localStorage.getItem("cb_sound") !== "false",
  theme: localStorage.getItem("cb_theme") || "light",
  currentCity: localStorage.getItem("cb_city") || "Bengaluru",
  currentArea: localStorage.getItem("cb_area") || "Indiranagar, 100 Feet Rd",
  activeServiceTab: "delivery", // delivery | dining | quick
  selectedCraving: "all",
  searchQuery: "",
  filters: {
    vegOnly: false,
    nonVegOnly: false,
    bestsellerOnly: false,
    spicyOnly: false,
    highRating: false
  },
  sortBy: "relevance",
  cart: JSON.parse(localStorage.getItem("cb_cart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("cb_favs") || "[]"),
  appliedCoupon: null,
  riderTip: 20,
  deliveryInstructions: ["Leave at door"],
  activeOrder: JSON.parse(localStorage.getItem("cb_active_order") || "null"),
  pastOrders: JSON.parse(localStorage.getItem("cb_past_orders") || "[]"),
  currentUser: JSON.parse(localStorage.getItem("cb_user") || "null"),
  usersDb: JSON.parse(localStorage.getItem("cb_users_db") || "[]"),
  
  // Customization sheet temporary item
  customizingDish: null,
  customSheetQty: 1
};

// Audio synthesized sounds (pleasant micro-interactions like Swiggy)
const SoundEngine = {
  ctx: null,
  init() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    } catch (e) {
      // ignore
    }
  },
  playPop() {
    if (!AppState.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  },
  playSuccessChime() {
    if (!AppState.soundEnabled || !this.ctx) return;
    try {
      const notes = [440, 554, 659, 880];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.09);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.09 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.09);
        osc.stop(this.ctx.currentTime + i * 0.09 + 0.25);
      });
    } catch (e) {}
  }
};

// ==========================================
// 3. CURRENCY FORMATTER (EXCLUSIVELY INDIAN RUPEES ₹)
// ==========================================
function formatPrice(priceINR) {
  return `₹${Math.round(priceINR)}`;
}

// ==========================================
// 4. ROTATING SEARCH PLACEHOLDER (SWIGGY/ZOMATO PATTERN)
// ==========================================
const SEARCH_PLACEHOLDERS = [
  "Search for 'Biryani'...",
  "Search for 'Paneer Butter Masala'...",
  "Search for 'Burgers'...",
  "Search for 'Pizza'...",
  "Search for 'Momos'...",
  "Search for 'Belgian Waffles'..."
];

let placeholderIdx = 0;
function startRotatingPlaceholder() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  setInterval(() => {
    if (document.activeElement !== input && input.value === "") {
      placeholderIdx = (placeholderIdx + 1) % SEARCH_PLACEHOLDERS.length;
      input.setAttribute("placeholder", SEARCH_PLACEHOLDERS[placeholderIdx]);
    }
  }, 3000);
}

// ==========================================
// 5. RENDER RESTAURANTS (TOP CHAINS)
// ==========================================
function renderRestaurants(filterType = "all") {
  const container = document.getElementById("restaurantsGrid");
  if (!container) return;

  let filtered = [...RESTAURANTS];
  if (filterType === "fast") {
    filtered = filtered.filter(r => parseInt(r.deliveryTime) <= 24);
  } else if (filterType === "pure-veg") {
    filtered = filtered.filter(r => r.pureVeg);
  } else if (filterType === "rating") {
    filtered = filtered.filter(r => r.rating >= 4.5);
  }

  container.innerHTML = filtered.map(rest => {
    const isFav = AppState.favorites.includes(`rest_${rest.id}`);
    return `
      <div class="restaurant-card" onclick="filterByRestaurant('${rest.name}')">
        <div class="rest-img-wrapper">
          <img src="${rest.image}" alt="${rest.name}" class="rest-img" loading="lazy" />
          <div class="rest-discount-banner">${rest.discountTag}</div>
          <button class="rest-fav-icon ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleRestFav(${rest.id})">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        <div class="rest-card-content">
          <h3 class="rest-title">${rest.name}</h3>
          <div class="rest-rating-row">
            <span class="rating-badge-green"><i class="fa-solid fa-star" style="font-size: 10px;"></i> ${rest.rating}</span>
            <span class="rest-time-dot">•</span>
            <span>${rest.deliveryTime}</span>
            <span class="rest-time-dot">•</span>
            <span>${rest.distance}</span>
          </div>
          <p class="rest-cuisines">${rest.cuisines}</p>
          <p class="rest-locality">${rest.locality}</p>
        </div>
      </div>
    `;
  }).join("");
}

function filterByRestaurant(restName) {
  AppState.searchQuery = restName;
  document.getElementById("searchInput").value = restName;
  renderDishesMenu();
  document.getElementById("dishesMenuSection").scrollIntoView({ behavior: "smooth" });
  showToast(`Showing menu for ${restName}`, "info");
}

function toggleRestFav(restId) {
  const key = `rest_${restId}`;
  const idx = AppState.favorites.indexOf(key);
  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
    showToast("Removed restaurant from favorites", "info");
  } else {
    AppState.favorites.push(key);
    showToast("Saved restaurant to favorites!", "success");
  }
  localStorage.setItem("cb_favs", JSON.stringify(AppState.favorites));
  renderRestaurants();
  updateFavoritesBadge();
}

// ==========================================
// 6. RENDER DISHES WITH SWIGGY ACCORDIONS
// ==========================================
function renderDishesMenu() {
  const container = document.getElementById("menuAccordionsContainer");
  const emptyState = document.getElementById("emptyDishesState");
  if (!container) return;

  let totalVisibleDishes = 0;

  const html = MENU_CATEGORIES.map(category => {
    // Filter dishes in this category
    const matchingDishes = category.dishes.filter(dish => {
      // Veg / Non-Veg filter
      if (AppState.filters.vegOnly && !dish.veg) return false;
      if (AppState.filters.nonVegOnly && dish.veg) return false;

      // Dietary & rating pills
      if (AppState.filters.bestsellerOnly && !dish.bestseller) return false;
      if (AppState.filters.spicyOnly && !dish.spicy) return false;
      if (AppState.filters.highRating && dish.rating < 4.5) return false;

      // Craving category filter
      if (AppState.selectedCraving !== "all" && dish.category !== AppState.selectedCraving) return false;

      // Search Query
      if (AppState.searchQuery.trim() !== "") {
        const q = AppState.searchQuery.toLowerCase();
        const matchName = dish.name.toLowerCase().includes(q);
        const matchRest = dish.restaurant.toLowerCase().includes(q);
        const matchDesc = dish.description.toLowerCase().includes(q);
        if (!matchName && !matchRest && !matchDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      switch (AppState.sortBy) {
        case "rating": return b.rating - a.rating;
        case "cost-low": return a.priceINR - b.priceINR;
        case "cost-high": return b.priceINR - a.priceINR;
        default: return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
      }
    });

    if (matchingDishes.length === 0) return "";
    totalVisibleDishes += matchingDishes.length;

    const dishesListHtml = matchingDishes.map(dish => {
      const cartItem = AppState.cart.find(c => c.dishId === dish.id);
      const qtyInCart = cartItem ? cartItem.qty : 0;

      return `
        <div class="swiggy-dish-item" data-dish-id="${dish.id}">
          <div class="dish-details-col">
            <span class="fssai-indicator ${dish.veg ? 'veg' : 'non-veg'}"></span>
            ${dish.bestseller ? '<span class="dish-bestseller-badge">★ BESTSELLER</span>' : ''}
            <h4 class="sw-dish-title" onclick="handleDishClick(${dish.id})">${dish.name}</h4>
            <div class="sw-dish-price">${formatPrice(dish.priceINR)}</div>
            <div class="sw-dish-rating">
              <i class="fa-solid fa-star" style="font-size: 11px;"></i>
              <span>${dish.rating}</span>
              <small style="color: var(--text-light); font-weight: normal;">(${dish.ratingCount})</small>
            </div>
            <p class="sw-dish-desc">${dish.description}</p>
          </div>

          <div class="dish-media-col">
            <img src="${dish.image}" alt="${dish.name}" class="sw-dish-img" onclick="handleDishClick(${dish.id})" loading="lazy" />
            <div class="sw-add-btn-box">
              ${qtyInCart > 0 ? `
                <div class="sw-qty-stepper">
                  <button type="button" onclick="decrementDish(${dish.id})"><i class="fa-solid fa-minus"></i></button>
                  <span>${qtyInCart}</span>
                  <button type="button" onclick="incrementDish(${dish.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
              ` : `
                <button type="button" class="sw-add-btn" onclick="handleDishClick(${dish.id})">
                  <span>ADD</span>
                  <i class="fa-solid fa-plus" style="font-size: 11px;"></i>
                </button>
              `}
              ${dish.customisable ? '<span class="sw-custom-hint">Customisable</span>' : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="menu-accordion-category" id="cat_${category.id}">
        <div class="accordion-category-header" onclick="toggleAccordion('cat_${category.id}')">
          <div class="cat-header-title">
            <span>${category.name}</span>
            <span class="cat-count">(${matchingDishes.length})</span>
          </div>
          <i class="fa-solid fa-chevron-down accordion-chevron"></i>
        </div>
        <div class="accordion-dish-list">
          ${dishesListHtml}
        </div>
      </div>
    `;
  }).filter(Boolean).join("");

  container.innerHTML = html;
  if (totalVisibleDishes === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

function toggleAccordion(catId) {
  const el = document.getElementById(catId);
  if (el) el.classList.toggle("collapsed");
}

function updateCravingHeaderBanner(cat) {
  const banner = document.getElementById("cravingActiveBanner");
  const title = document.getElementById("activeCravingTitle");
  const countBadge = document.getElementById("activeCravingCount");
  if (!banner || !title || !countBadge) return;

  if (cat === "all") {
    banner.style.display = "none";
  } else {
    const titlesMap = {
      "biryani": "Biryanis & Rice Bowls",
      "pizza": "Artisan Pizzas",
      "burgers": "Gourmet Burgers",
      "north-indian": "North Indian Curries & Tandoor",
      "chinese": "Chinese & Dim Sums",
      "rolls": "Kathi Rolls & Wraps",
      "south-indian": "South Indian Dosas & Delicacies",
      "desserts": "Cakes, Waffles & Desserts",
      "shakes": "Chilled Shakes & Beverages"
    };

    let totalCount = 0;
    for (const group of MENU_CATEGORIES) {
      totalCount += group.dishes.filter(d => d.category === cat).length;
    }

    title.textContent = titlesMap[cat] || cat;
    countBadge.textContent = `${totalCount} dishes available`;
    banner.style.display = "flex";
  }
}

function selectCravingCategory(cat) {
  AppState.selectedCraving = cat;

  // Clear lingering text search query so it doesn't block craving matches
  if (AppState.searchQuery.trim() !== "") {
    AppState.searchQuery = "";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";
    const mobileSearch = document.getElementById("mobileSearchInput");
    if (mobileSearch) mobileSearch.value = "";
    const clearBtn = document.getElementById("clearSearchBtn");
    if (clearBtn) clearBtn.style.display = "none";
  }

  // Smart dietary filter adjustment:
  // If user selected desserts or shakes (which are 100% veg), but had "Non-Veg Only" filter turned on
  if (cat === "desserts" || cat === "shakes") {
    if (AppState.filters.nonVegOnly) {
      AppState.filters.nonVegOnly = false;
      const nonVegSwitch = document.getElementById("nonVegFilterToggle");
      if (nonVegSwitch) nonVegSwitch.checked = false;
      showToast(`${cat === 'desserts' ? 'Desserts' : 'Beverages'} are 100% vegetarian. Showing items!`, "info");
    }
    if (AppState.filters.spicyOnly) {
      AppState.filters.spicyOnly = false;
      const spicyPill = document.getElementById("spicyPill");
      if (spicyPill) spicyPill.classList.remove("active");
    }
  }

  // Update craving carousel circles active class
  document.querySelectorAll(".craving-circle").forEach(circle => {
    circle.classList.toggle("active", circle.dataset.category === cat);
  });

  SoundEngine.playPop();
  renderDishesMenu();
  updateCravingHeaderBanner(cat);

  const menuSec = document.getElementById("dishesMenuSection");
  if (menuSec) {
    menuSec.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// 7. SWIGGY CUSTOMIZATION BOTTOM SHEET
// ==========================================
function findDishById(id) {
  for (const cat of MENU_CATEGORIES) {
    const found = cat.dishes.find(d => d.id === id);
    if (found) return found;
  }
  return null;
}

function handleDishClick(dishId) {
  const dish = findDishById(dishId);
  if (!dish) return;

  SoundEngine.playPop();

  if (dish.customisable) {
    openCustomizationSheet(dish);
  } else {
    // Direct add
    quickAddDish(dish);
  }
}

function openCustomizationSheet(dish) {
  AppState.customizingDish = dish;
  AppState.customSheetQty = 1;

  document.getElementById("customSheetTitle").textContent = dish.name;
  document.getElementById("customSheetBasePrice").textContent = formatPrice(dish.priceINR);
  document.getElementById("customSheetImg").src = dish.image;
  
  const fssai = document.getElementById("customSheetFssai");
  fssai.className = `fssai-indicator ${dish.veg ? 'veg' : 'non-veg'}`;

  // Reset portion radios and addons
  document.querySelectorAll('input[name="dishPortion"]')[0].checked = true;
  document.querySelectorAll('input[name="dishAddon"]').forEach(cb => cb.checked = false);
  document.getElementById("customCookingNote").value = "";
  document.getElementById("sheetQtyVal").textContent = "1";

  updateCustomSheetTotal();
  document.getElementById("dishCustomBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCustomizationSheet() {
  document.getElementById("dishCustomBackdrop").classList.remove("active");
  document.body.style.overflow = "";
  AppState.customizingDish = null;
}

function calculateSheetPrice() {
  if (!AppState.customizingDish) return 0;
  let price = AppState.customizingDish.priceINR;

  const portionAdd = parseInt(document.querySelector('input[name="dishPortion"]:checked')?.dataset.add || 0);
  price += portionAdd;

  document.querySelectorAll('input[name="dishAddon"]:checked').forEach(cb => {
    price += parseInt(cb.dataset.price || 0);
  });

  return price * AppState.customSheetQty;
}

function updateCustomSheetTotal() {
  const total = calculateSheetPrice();
  document.getElementById("sheetAddTotal").textContent = formatPrice(total);
  document.getElementById("sheetQtyVal").textContent = AppState.customSheetQty;
}

function submitCustomizedDish() {
  if (!AppState.customizingDish) return;

  const portion = document.querySelector('input[name="dishPortion"]:checked')?.value || "Regular";
  const addons = Array.from(document.querySelectorAll('input[name="dishAddon"]:checked')).map(cb => cb.value);
  const note = document.getElementById("customCookingNote").value.trim();

  let unitPrice = AppState.customizingDish.priceINR;
  const portionAdd = parseInt(document.querySelector('input[name="dishPortion"]:checked')?.dataset.add || 0);
  unitPrice += portionAdd;

  document.querySelectorAll('input[name="dishAddon"]:checked').forEach(cb => {
    unitPrice += parseInt(cb.dataset.price || 0);
  });

  const customKey = `${AppState.customizingDish.id}_${portion}_${addons.join(",")}`;
  const existingIdx = AppState.cart.findIndex(i => i.customKey === customKey);

  if (existingIdx > -1) {
    AppState.cart[existingIdx].qty += AppState.customSheetQty;
  } else {
    AppState.cart.push({
      customKey,
      dishId: AppState.customizingDish.id,
      name: AppState.customizingDish.name,
      restaurant: AppState.customizingDish.restaurant,
      veg: AppState.customizingDish.veg,
      portion,
      addons,
      note,
      unitPriceINR: unitPrice,
      qty: AppState.customSheetQty,
      image: AppState.customizingDish.image
    });
  }

  SoundEngine.playPop();
  saveCart();
  closeCustomizationSheet();
  updateCartUI();
  renderDishesMenu();
  showToast(`Added ${AppState.customizingDish.name} to cart!`, "success");
}

function quickAddDish(dish) {
  const customKey = `${dish.id}_Regular_`;
  const existingIdx = AppState.cart.findIndex(i => i.customKey === customKey);

  if (existingIdx > -1) {
    AppState.cart[existingIdx].qty += 1;
  } else {
    AppState.cart.push({
      customKey,
      dishId: dish.id,
      name: dish.name,
      restaurant: dish.restaurant,
      veg: dish.veg,
      portion: "Regular",
      addons: [],
      note: "",
      unitPriceINR: dish.priceINR,
      qty: 1,
      image: dish.image
    });
  }

  SoundEngine.playPop();
  saveCart();
  updateCartUI();
  renderDishesMenu();
  showToast(`Added ${dish.name} to order`, "success");
}

function incrementDish(dishId) {
  const item = AppState.cart.find(i => i.dishId === dishId);
  if (item) {
    item.qty += 1;
    SoundEngine.playPop();
    saveCart();
    updateCartUI();
    renderDishesMenu();
  }
}

function decrementDish(dishId) {
  const itemIdx = AppState.cart.findIndex(i => i.dishId === dishId);
  if (itemIdx > -1) {
    AppState.cart[itemIdx].qty -= 1;
    if (AppState.cart[itemIdx].qty <= 0) {
      AppState.cart.splice(itemIdx, 1);
    }
    SoundEngine.playPop();
    saveCart();
    updateCartUI();
    renderDishesMenu();
  }
}

// ==========================================
// 8. CART DRAWER & BILL CALCULATIONS
// ==========================================
function saveCart() {
  localStorage.setItem("cb_cart", JSON.stringify(AppState.cart));
}

function updateCartUI() {
  const totalQty = AppState.cart.reduce((sum, i) => sum + i.qty, 0);
  const itemTotalINR = AppState.cart.reduce((sum, i) => sum + (i.unitPriceINR * i.qty), 0);

  // Update Header Badges
  document.getElementById("cartBadge").textContent = totalQty;
  document.getElementById("headerCartTotal").textContent = formatPrice(itemTotalINR);

  // Update Drawer Items Count Pill
  const drawerPill = document.getElementById("drawerItemsCountPill");
  if (drawerPill) {
    drawerPill.textContent = `${totalQty} ${totalQty === 1 ? 'Item' : 'Items'}`;
  }

  // Sticky Bottom Cart Bar (Swiggy / Zomato signature)
  const stickyBar = document.getElementById("stickyCartBar");
  if (totalQty > 0) {
    stickyBar.style.display = "block";
    document.getElementById("stickyItemCount").textContent = `${totalQty} ${totalQty === 1 ? 'Item' : 'Items'}`;
    document.getElementById("stickyCartPrice").textContent = formatPrice(itemTotalINR);
  } else {
    stickyBar.style.display = "none";
  }

  // Delivery Threshold Banner (Free above ₹299)
  const banner = document.getElementById("deliveryThresholdBanner");
  const thresholdText = document.getElementById("deliveryThresholdText");
  if (itemTotalINR >= 299 || totalQty === 0) {
    thresholdText.innerHTML = totalQty === 0 
      ? `Add tasty meals to start your order!` 
      : `🎉 <strong>CRAVE GOLD:</strong> You unlocked <strong>FREE DELIVERY</strong>!`;
  } else {
    const diff = 299 - itemTotalINR;
    thresholdText.innerHTML = `Add items worth <strong>${formatPrice(diff)}</strong> more to get <strong>FREE DELIVERY</strong>!`;
  }

  // Render items in drawer
  const drawerList = document.getElementById("drawerItemsList");
  if (AppState.cart.length === 0) {
    drawerList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 0.75rem; color: var(--border-light);"></i>
        <h4 style="font-size: 1.15rem; color: var(--text-main);">Your Cart is Empty</h4>
        <p style="font-size: 0.85rem;">Good food is always cooking! Add your favorite delicacies to order.</p>
      </div>
    `;
    document.getElementById("drawerProceedBtn").style.opacity = "0.5";
    document.getElementById("drawerProceedBtn").disabled = true;
  } else {
    document.getElementById("drawerProceedBtn").style.opacity = "1";
    document.getElementById("drawerProceedBtn").disabled = false;

    drawerList.innerHTML = AppState.cart.map((item, idx) => {
      const customSub = [item.portion !== "Regular" ? item.portion : "", item.addons.join(", "), item.note].filter(Boolean).join(" • ");
      return `
        <div class="cart-row">
          <div class="cart-row-left">
            <span class="fssai-indicator ${item.veg ? 'veg' : 'non-veg'}" style="margin-top: 3px;"></span>
            <div>
              <div class="cart-dish-name">${item.name}</div>
              ${customSub ? `<div class="cart-dish-custom">${customSub}</div>` : ''}
            </div>
          </div>
          <div class="cart-row-right">
            <div class="drawer-stepper">
              <button type="button" onclick="changeCartItemQty(${idx}, -1)"><i class="fa-solid fa-minus"></i></button>
              <span>${item.qty}</span>
              <button type="button" onclick="changeCartItemQty(${idx}, 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="cart-dish-cost">${formatPrice(item.unitPriceINR * item.qty)}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Calculate Bill
  calculateBill(itemTotalINR);
}

function changeCartItemQty(idx, change) {
  if (!AppState.cart[idx]) return;
  AppState.cart[idx].qty += change;
  if (AppState.cart[idx].qty <= 0) {
    AppState.cart.splice(idx, 1);
  }
  SoundEngine.playPop();
  saveCart();
  updateCartUI();
  renderDishesMenu();
}

function calculateBill(itemTotalINR) {
  let deliveryFee = itemTotalINR >= 299 || itemTotalINR === 0 ? 0 : 35;
  let discountINR = 0;

  // Coupon calculation
  if (AppState.appliedCoupon && itemTotalINR > 0) {
    if (AppState.appliedCoupon.discountPct) {
      discountINR = Math.min((itemTotalINR * AppState.appliedCoupon.discountPct) / 100, AppState.appliedCoupon.maxDiscount);
    } else if (AppState.appliedCoupon.flatDiscount) {
      discountINR = AppState.appliedCoupon.flatDiscount;
    } else if (AppState.appliedCoupon.freeDelivery) {
      deliveryFee = 0;
    }
    document.getElementById("billDiscountRow").style.display = "flex";
    document.getElementById("billDiscount").textContent = `-${formatPrice(discountINR)}`;
  } else {
    document.getElementById("billDiscountRow").style.display = "none";
  }

  const tip = itemTotalINR === 0 ? 0 : AppState.riderTip;
  const platformFee = itemTotalINR === 0 ? 0 : 5;
  const taxable = Math.max(0, itemTotalINR - discountINR);
  const taxes = taxable * 0.05; // 5% GST
  const grandTotalINR = itemTotalINR === 0 ? 0 : taxable + deliveryFee + tip + platformFee + taxes;

  // Update Bill Lines
  document.getElementById("billItemTotal").textContent = formatPrice(itemTotalINR);
  document.getElementById("billDeliveryFee").textContent = deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee);
  document.getElementById("billTip").textContent = formatPrice(tip);
  document.getElementById("billPlatformFee").textContent = formatPrice(platformFee);
  document.getElementById("billTaxes").textContent = formatPrice(taxes);
  document.getElementById("billGrandTotal").textContent = formatPrice(grandTotalINR);
  document.getElementById("drawerPayAmt").textContent = formatPrice(grandTotalINR);

  // Savings pill
  const totalSavings = discountINR + (deliveryFee === 0 && itemTotalINR > 0 ? 35 : 0);
  const savingsPill = document.getElementById("totalSavingsPill");
  if (totalSavings > 0) {
    savingsPill.style.display = "block";
    document.getElementById("totalSavingsAmount").textContent = formatPrice(totalSavings);
  } else {
    savingsPill.style.display = "none";
  }

  // Sync Checkout Modal final amount
  document.getElementById("checkoutFinalAmount").textContent = formatPrice(grandTotalINR);

  return { itemTotalINR, discountINR, deliveryFee, tip, platformFee, taxes, grandTotalINR };
}

function openCartDrawer() {
  document.getElementById("cartBackdrop").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartBackdrop").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 9. COUPON LOGIC & OFFERS
// ==========================================
function applyCoupon(code) {
  code = code.trim().toUpperCase();
  const coupon = COUPON_CODES[code];
  const itemTotal = AppState.cart.reduce((sum, i) => sum + (i.unitPriceINR * i.qty), 0);

  if (!coupon) {
    showToast("Invalid coupon code! Try 'CRAVE50'", "error");
    return;
  }

  if (itemTotal < coupon.minOrder) {
    showToast(`Add items worth ${formatPrice(coupon.minOrder - itemTotal)} more to apply ${code}`, "error");
    return;
  }

  AppState.appliedCoupon = coupon;
  document.getElementById("drawerCouponAppliedTag").style.display = "flex";
  document.getElementById("appliedCouponTitle").textContent = `${code} Applied!`;
  document.getElementById("appliedCouponDesc").textContent = coupon.desc;
  document.getElementById("drawerCouponInput").value = "";

  SoundEngine.playSuccessChime();
  updateCartUI();
  showToast(`🎉 Coupon ${code} applied successfully!`, "success");
}

function applyCouponDirectly(code) {
  closeOffersModal();
  applyCoupon(code);
  openCartDrawer();
}

function removeCoupon() {
  AppState.appliedCoupon = null;
  document.getElementById("drawerCouponAppliedTag").style.display = "none";
  updateCartUI();
  showToast("Coupon removed", "info");
}

// ==========================================
// 10. CHECKOUT & LIVE MAP TRACKER
// ==========================================

function renderCheckoutModalContent() {
  const userBox = document.getElementById("checkoutUserContainer");
  const reviewList = document.getElementById("checkoutItemsReviewList");
  const billPreview = document.getElementById("checkoutBillPreview");
  const restTitle = document.getElementById("checkoutRestTitle");
  const restLocality = document.getElementById("checkoutRestLocality");
  const itemsBadge = document.getElementById("checkoutItemsBadge");
  const currentAreaText = document.getElementById("checkoutCurrentAreaText");
  const contactPhone = document.getElementById("checkoutContactPhone");
  const finalAmount = document.getElementById("checkoutFinalAmount");

  // 1. Account Section (User Account vs Guest)
  if (userBox) {
    if (AppState.currentUser) {
      const initial = AppState.currentUser.name ? AppState.currentUser.name.charAt(0).toUpperCase() : "U";
      userBox.innerHTML = `
        <div class="checkout-user-logged-in">
          <div class="checkout-user-avatar">${initial}</div>
          <div class="checkout-user-info">
            <div class="checkout-user-name-row">
              <strong>${AppState.currentUser.name}</strong>
              <span class="user-verified-badge"><i class="fa-solid fa-circle-check"></i> Account Verified</span>
            </div>
            <p>${AppState.currentUser.phone || "+91 98765 43210"} • ${AppState.currentUser.email || "user@cravebite.in"}</p>
          </div>
          <button type="button" class="btn-change-account" id="checkoutSwitchAccBtn">Switch</button>
        </div>
      `;
      const switchBtn = document.getElementById("checkoutSwitchAccBtn");
      if (switchBtn) {
        switchBtn.addEventListener("click", () => {
          closeCheckoutModal();
          openAuthModal("login");
        });
      }
    } else {
      const savedGuestName = localStorage.getItem("cb_guest_name") || "";
      const savedGuestPhone = localStorage.getItem("cb_guest_phone") || "";

      userBox.innerHTML = `
        <div class="checkout-guest-box">
          <div class="guest-prompt-header">
            <i class="fa-solid fa-circle-user"></i>
            <div style="flex: 1;">
              <strong>Personal Details for Order Tracking</strong>
              <small>Live tracking and SMS receipt will be sent to your number</small>
            </div>
            <button type="button" class="btn-change-account" id="checkoutSignInPromptBtn">Sign In</button>
          </div>
          <div class="guest-inputs-grid">
            <div class="form-group-sm">
              <label for="checkoutGuestName">Your Full Name *</label>
              <input type="text" id="checkoutGuestName" placeholder="e.g. Aryan Rajput" value="${savedGuestName}" required />
            </div>
            <div class="form-group-sm">
              <label for="checkoutGuestPhone">Your Mobile Number *</label>
              <input type="tel" id="checkoutGuestPhone" placeholder="10-digit mobile number" maxlength="10" value="${savedGuestPhone}" required />
            </div>
          </div>
        </div>
      `;

      const signInBtn = document.getElementById("checkoutSignInPromptBtn");
      if (signInBtn) {
        signInBtn.addEventListener("click", () => {
          closeCheckoutModal();
          openAuthModal("login");
        });
      }
    }
  }

  // 2. Order Review Items
  const primaryRest = AppState.cart[0]?.restaurant || "Selected Restaurant";
  if (restTitle) restTitle.textContent = `Delivering from ${primaryRest}`;
  if (restLocality) restLocality.textContent = `${AppState.currentCity || "Bengaluru"} • 20-25 mins • Live Kitchen`;

  const totalQty = AppState.cart.reduce((sum, i) => sum + i.qty, 0);
  if (itemsBadge) itemsBadge.textContent = `${totalQty} Item${totalQty !== 1 ? 's' : ''}`;

  if (reviewList) {
    reviewList.innerHTML = AppState.cart.map(item => {
      const customSub = [item.portion !== "Regular" ? item.portion : "", item.addons?.join(", "), item.note].filter(Boolean).join(" • ");
      return `
        <div class="checkout-item-review-row">
          <div class="item-review-left">
            <span class="fssai-indicator ${item.veg ? 'veg' : 'non-veg'}"></span>
            <div class="item-review-info">
              <strong>${item.name}</strong>
              ${customSub ? `<small>${customSub}</small>` : `<small style="color: var(--text-light);">${item.restaurant}</small>`}
            </div>
          </div>
          <div class="item-review-qty-price">
            <span class="item-review-qty">${item.qty}x</span>
            <span class="item-review-price">${formatPrice(item.unitPriceINR * item.qty)}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. Bill Breakdown
  const itemTotalINR = AppState.cart.reduce((sum, i) => sum + (i.unitPriceINR * i.qty), 0);
  const bill = calculateBill(itemTotalINR);
  if (billPreview) {
    billPreview.innerHTML = `
      <div class="checkout-bill-line">
        <span>Item Total</span>
        <strong>${formatPrice(bill.itemTotalINR)}</strong>
      </div>
      ${bill.discountINR > 0 ? `
        <div class="checkout-bill-line discount">
          <span>Coupon Discount (${AppState.appliedCoupon})</span>
          <strong>-${formatPrice(bill.discountINR)}</strong>
        </div>
      ` : ""}
      <div class="checkout-bill-line">
        <span>Delivery Partner Fee</span>
        <span>${bill.deliveryFee === 0 ? '<strong style="color: #0f8a65;">FREE</strong>' : formatPrice(bill.deliveryFee)}</span>
      </div>
      <div class="checkout-bill-line">
        <span>Delivery Partner Tip</span>
        <span>${formatPrice(bill.tip)}</span>
      </div>
      <div class="checkout-bill-line">
        <span>Taxes & Charges (GST + Platform)</span>
        <span>${formatPrice(bill.taxes + bill.platformFee)}</span>
      </div>
    `;
  }

  // 4. Delivery Address & Contact
  if (currentAreaText) {
    currentAreaText.textContent = `${AppState.currentArea || 'Indiranagar, 100 Feet Rd'}, ${AppState.currentCity || 'Bengaluru'}`;
  }
  if (contactPhone) {
    const phone = AppState.currentUser?.phone || localStorage.getItem("cb_guest_phone") || "+91 98765 43210";
    contactPhone.textContent = `Contact: ${phone}`;
  }

  // 5. Total
  if (finalAmount) {
    finalAmount.textContent = formatPrice(bill.grandTotalINR);
  }
}

function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty! Add food items to proceed.", "info");
    return;
  }
  closeCartDrawer();
  renderCheckoutModalContent();
  document.getElementById("checkoutModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  // Validate or extract Customer details
  let custName = "";
  let custPhone = "";
  let custEmail = "";

  if (AppState.currentUser) {
    custName = AppState.currentUser.name;
    custPhone = AppState.currentUser.phone;
    custEmail = AppState.currentUser.email || "";
  } else {
    const nameInput = document.getElementById("checkoutGuestName");
    const phoneInput = document.getElementById("checkoutGuestPhone");
    custName = nameInput?.value.trim() || "";
    custPhone = phoneInput?.value.trim() || "";

    if (!custName) {
      showToast("Please enter your name to confirm the order", "error");
      nameInput?.focus();
      return;
    }
    if (!custPhone || custPhone.replace(/\D/g, "").length < 10) {
      showToast("Please enter a valid 10-digit mobile number", "error");
      phoneInput?.focus();
      return;
    }

    if (!custPhone.startsWith("+91") && !custPhone.startsWith("+")) {
      custPhone = "+91 " + custPhone;
    }

    // Save user details so it represents their account from now on
    const guestUser = {
      name: custName,
      phone: custPhone,
      email: custEmail || `${custName.toLowerCase().replace(/\s+/g, '')}@cravebite.in`,
      verified: true,
      guest: true
    };
    AppState.currentUser = guestUser;
    localStorage.setItem("cb_user", JSON.stringify(guestUser));
    localStorage.setItem("cb_guest_name", custName);
    localStorage.setItem("cb_guest_phone", custPhone);
    updateUserAuthUI();
  }

  // Address
  const addrType = document.querySelector('input[name="deliveryAddressType"]:checked')?.value || "Current";
  const flatNo = document.getElementById("checkoutFlatNo")?.value.trim() || "";
  let deliveryAddress = "";
  if (addrType === "Home") {
    deliveryAddress = `${flatNo ? flatNo + ', ' : 'Flat 402, Royal Palms, '}12th Main, ${AppState.currentCity || 'Bengaluru'}`;
  } else if (addrType === "Work") {
    deliveryAddress = `${flatNo ? flatNo + ', ' : 'Tower B, Tech Park, '}CV Raman Nagar, ${AppState.currentCity || 'Bengaluru'}`;
  } else {
    deliveryAddress = `${flatNo ? flatNo + ', ' : ''}${AppState.currentArea || 'Indiranagar, 100 Feet Rd'}, ${AppState.currentCity || 'Bengaluru'}`;
  }

  const btn = document.getElementById("placeOrderSubmitBtn");
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Confirming & Paying...`;
  btn.disabled = true;

  const itemTotalINR = AppState.cart.reduce((sum, i) => sum + (i.unitPriceINR * i.qty), 0);
  const bill = calculateBill(itemTotalINR);
  const paymentMethod = document.querySelector('input[name="checkoutPayment"]:checked')?.value || "UPI";

  setTimeout(() => {
    const orderId = `CB-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      customerName: custName,
      customerPhone: custPhone,
      customerEmail: custEmail,
      deliveryAddress,
      items: [...AppState.cart],
      bill,
      paymentMethod,
      restaurant: AppState.cart[0]?.restaurant || "Meghana Foods",
      etaMins: 26,
      riderName: "Ramesh Kumar",
      riderPhone: "+91 98765 11002"
    };

    AppState.activeOrder = newOrder;
    AppState.pastOrders.unshift(newOrder);
    localStorage.setItem("cb_active_order", JSON.stringify(newOrder));
    localStorage.setItem("cb_past_orders", JSON.stringify(AppState.pastOrders));

    // Clear cart
    AppState.cart = [];
    AppState.appliedCoupon = null;
    const appliedTag = document.getElementById("drawerCouponAppliedTag");
    if (appliedTag) appliedTag.style.display = "none";
    saveCart();
    updateCartUI();
    renderDishesMenu();

    btn.innerHTML = `<span>Pay & Place Order</span> <i class="fa-solid fa-arrow-right"></i>`;
    btn.disabled = false;

    closeCheckoutModal();
    openTrackerModal(newOrder);

    // Audio & Confetti
    SoundEngine.playSuccessChime();
    if (typeof confetti === "function") {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    }
    showToast(`🎉 Order Placed for ${custName}! Live tracking started.`, "success");
  }, 1200);
}

// ==========================================
// 10. LIVE MAP ORDER TRACKING & RIDER ENGINE
// ==========================================

const LiveTrackingEngine = {
  timer: null,
  order: null,
  stageIndex: 0, // 0: Placed, 1: Preparing, 2: On The Way, 3: Delivered
  stages: [
    {
      title: "Order Placed & Accepted",
      sub: "Meghana Foods has confirmed your order ticket and alerted the head chef.",
      eta: 28,
      progress: 10,
      distanceText: "⚡ Order ticket confirmed • Kitchen preparing ingredients",
      stepTimes: ["Just now", "Starting", "Pending", "Est 28m"],
      stripDesc: "Order accepted by restaurant • Meghana Foods"
    },
    {
      title: "Chef is Cooking Your Feast 🔥",
      sub: "Fresh authentic spices & hot delicacies are sizzling in the kitchen.",
      eta: 20,
      progress: 32,
      distanceText: "🛵 Valet Ramesh Kumar arrived at restaurant for pickup",
      stepTimes: ["Confirmed", "In Kitchen", "Pending", "Est 20m"],
      stripDesc: "Chef is preparing your food • Hot & Fresh"
    },
    {
      title: "Out for Delivery • Ramesh is On The Way! 🛵",
      sub: "Valet picked up your sealed order and is navigating through traffic.",
      eta: 10,
      progress: 70,
      distanceText: "⚡ Valet is 1.1 km away • Speed: 28 km/h on Electric Scooter",
      stepTimes: ["Confirmed", "Prepared", "On Route", "Est 10m"],
      stripDesc: "Out for delivery • Valet Ramesh is 1.1 km away"
    },
    {
      title: "Order Delivered Safely! Enjoy Your Food 😋",
      sub: "Contactless delivery completed at your doorstep. Verified & hygienic.",
      eta: 0,
      progress: 96,
      distanceText: "✅ Order handed over safely. Thank you for dining with CraveBite!",
      stepTimes: ["Confirmed", "Prepared", "Arrived", "Delivered"],
      stripDesc: "Order Delivered! Enjoy your meal 😋"
    }
  ],

  start(order) {
    if (!order) return;
    this.order = order;
    this.stageIndex = typeof order.stageIndex === "number" ? order.stageIndex : 0;
    this.render();

    if (this.timer) clearInterval(this.timer);
    if (this.stageIndex < 3) {
      this.timer = setInterval(() => {
        if (this.stageIndex < 3) {
          this.advance();
        } else {
          clearInterval(this.timer);
        }
      }, 14000); // Progresses smoothly every 14 seconds
    }
  },

  advance() {
    if (this.stageIndex < 3) {
      this.stageIndex++;
      if (this.order) {
        this.order.stageIndex = this.stageIndex;
        if (this.stageIndex === 3) {
          this.order.status = "delivered";
          SoundEngine.playSuccessChime();
          if (typeof confetti === "function") {
            confetti({ particleCount: 110, spread: 90, origin: { y: 0.5 } });
          }
          showToast("🎉 Ding Dong! Your food has been delivered safely at your doorstep!", "success");
        }
        localStorage.setItem("cb_active_order", JSON.stringify(this.order));
        const idx = AppState.pastOrders.findIndex(o => o.orderId === this.order.orderId);
        if (idx !== -1) {
          AppState.pastOrders[idx].stageIndex = this.stageIndex;
          if (this.stageIndex === 3) AppState.pastOrders[idx].status = "delivered";
          localStorage.setItem("cb_past_orders", JSON.stringify(AppState.pastOrders));
        }
      }
      this.render();
    }
  },

  render() {
    const cur = this.stages[this.stageIndex];
    if (!cur) return;

    // 1. Map Live Status Header
    const stageHeading = document.getElementById("trackerStageHeading");
    if (stageHeading) stageHeading.textContent = cur.title;

    const stageSub = document.getElementById("trackerStageSub");
    if (stageSub) stageSub.textContent = cur.sub;

    const etaBadge = document.getElementById("liveEtaMins");
    if (etaBadge) etaBadge.textContent = cur.eta > 0 ? cur.eta : "0";

    const scooter = document.getElementById("mapScooter");
    if (scooter) scooter.style.left = `${cur.progress}%`;

    const roadProg = document.getElementById("mapRoadProgress");
    if (roadProg) roadProg.style.width = `${cur.progress}%`;

    const distPill = document.getElementById("riderDistancePill");
    if (distPill) distPill.textContent = cur.distanceText;

    // 2. 4-Stage Stepper
    for (let i = 1; i <= 4; i++) {
      const stepEl = document.getElementById(`swStep${i}`);
      const timeEl = document.getElementById(`swStepTime${i}`);
      if (!stepEl) continue;

      stepEl.classList.remove("completed", "active");
      if (i - 1 < this.stageIndex) {
        stepEl.classList.add("completed");
      } else if (i - 1 === this.stageIndex) {
        stepEl.classList.add("active");
      }

      if (timeEl && cur.stepTimes[i - 1]) {
        timeEl.textContent = cur.stepTimes[i - 1];
      }
    }

    // 3. Delivered Rating Card
    const deliveredCard = document.getElementById("trackerDeliveredCard");
    if (deliveredCard) {
      deliveredCard.style.display = this.stageIndex === 3 ? "flex" : "none";
    }

    // 4. Update Floating Strip on Home Screen
    const strip = document.getElementById("activeOrderStrip");
    if (strip) {
      if (this.order && this.stageIndex < 3) {
        strip.style.display = "block";
        const titleEl = document.getElementById("activeStripTitle");
        if (titleEl) titleEl.textContent = `Order #${this.order.orderId}`;
        const descEl = document.getElementById("activeStripDesc");
        if (descEl) descEl.textContent = `${cur.stripDesc}`;
        const stripEta = document.getElementById("activeStripEta");
        if (stripEta) stripEta.textContent = cur.eta;
      } else if (this.order && this.stageIndex === 3) {
        const descEl = document.getElementById("activeStripDesc");
        if (descEl) descEl.textContent = "Delivered! Enjoy your meal 😋";
        const stripEta = document.getElementById("activeStripEta");
        if (stripEta) stripEta.textContent = "0";
        setTimeout(() => {
          if (strip && this.stageIndex === 3) strip.style.display = "none";
        }, 9000);
      } else {
        strip.style.display = "none";
      }
    }
  }
};

// ==========================================
// RIDER CHAT & CALL INTERACTIVE SYSTEM
// ==========================================
const RiderComm = {
  chatMessages: [
    { sender: "valet", text: "Namaste! I am your delivery partner Ramesh. I have accepted your order ticket and reached Meghana Foods.", time: "Just now" }
  ],
  callTimer: null,
  callSeconds: 0,

  openChat() {
    const backdrop = document.getElementById("riderChatModalBackdrop");
    if (!backdrop) return;
    this.renderChatMessages();
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeChat() {
    const backdrop = document.getElementById("riderChatModalBackdrop");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
  },

  renderChatMessages() {
    const box = document.getElementById("riderChatMessages");
    if (!box) return;
    box.innerHTML = this.chatMessages.map(m => `
      <div class="chat-bubble ${m.sender}">
        <div>${m.text}</div>
        <span class="chat-bubble-time">${m.time}</span>
      </div>
    `).join("");
    box.scrollTop = box.scrollHeight;
  },

  sendMessage(text) {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.chatMessages.push({ sender: "user", text: text.trim(), time: now });
    this.renderChatMessages();

    // Valet AI auto-reply simulation
    setTimeout(() => {
      let reply = "Sure sir, noted! I will take care of it.";
      const lower = text.toLowerCase();
      if (lower.includes("bell") || lower.includes("ring")) {
        reply = "Understood sir! I will knock gently instead of ringing the bell.";
      } else if (lower.includes("door")) {
        reply = "Sure! I will place your sealed package safely at your doorstep.";
      } else if (lower.includes("gate") || lower.includes("security") || lower.includes("guard")) {
        reply = "Noted! I will give you a quick phone call as soon as I arrive at the main security gate.";
      } else if (lower.includes("time") || lower.includes("minute") || lower.includes("kab")) {
        reply = "Traffic is smooth on Indiranagar 100ft road. Reaching in approximately 8-10 minutes!";
      }

      this.chatMessages.push({
        sender: "valet",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.renderChatMessages();
      SoundEngine.playPop();
    }, 1200);
  },

  openCall() {
    const backdrop = document.getElementById("riderCallModalBackdrop");
    if (!backdrop) return;
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";

    const statusEl = document.getElementById("callStatusText");
    if (statusEl) statusEl.textContent = "Connecting via CraveBite Secure Masking...";
    this.callSeconds = 0;

    setTimeout(() => {
      if (statusEl) statusEl.textContent = "Ringing...";
      setTimeout(() => {
        if (statusEl) statusEl.textContent = "Call Connected • 00:01";
        if (this.callTimer) clearInterval(this.callTimer);
        this.callTimer = setInterval(() => {
          this.callSeconds++;
          const mins = String(Math.floor(this.callSeconds / 60)).padStart(2, "0");
          const secs = String(this.callSeconds % 60).padStart(2, "0");
          if (statusEl) statusEl.textContent = `Call Connected • ${mins}:${secs}`;
        }, 1000);
      }, 1500);
    }, 1200);
  },

  endCall() {
    if (this.callTimer) clearInterval(this.callTimer);
    const statusEl = document.getElementById("callStatusText");
    if (statusEl) statusEl.textContent = "Call Ended";
    setTimeout(() => {
      const backdrop = document.getElementById("riderCallModalBackdrop");
      if (backdrop) backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }, 600);
  }
};

function openTrackerModal(order) {
  if (!order) {
    if (AppState.activeOrder) {
      order = AppState.activeOrder;
    } else {
      showToast("No active order currently being delivered.", "info");
      return;
    }
  }

  // 1. Bold Customer Account Header (User's Name & Contact)
  const custName = order.customerName || AppState.currentUser?.name || "Your Account";
  const custPhone = order.customerPhone || AppState.currentUser?.phone || "+91 98765 43210";
  const custAddr = order.deliveryAddress || `${AppState.currentArea || 'Indiranagar'}, ${AppState.currentCity || 'Bengaluru'}`;
  const initial = custName.charAt(0).toUpperCase();

  const custNameHeading = document.getElementById("trackerCustomerName");
  if (custNameHeading) custNameHeading.textContent = custName;

  const custInitial = document.getElementById("trackerCustInitial");
  if (custInitial) custInitial.textContent = initial;

  const custPhoneEl = document.getElementById("trackerCustomerPhone");
  if (custPhoneEl) custPhoneEl.innerHTML = `<i class="fa-solid fa-phone"></i> ${custPhone}`;

  const custAddrEl = document.getElementById("trackerCustomerAddress");
  if (custAddrEl) custAddrEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${custAddr}`;

  // 2. Order IDs and payment tags
  const orderIdDisplay = document.getElementById("trackerOrderIdDisplay");
  if (orderIdDisplay) orderIdDisplay.textContent = order.orderId;

  const recapOrderId = document.getElementById("trackerRecapOrderId");
  if (recapOrderId) recapOrderId.textContent = order.orderId;

  const paidMethod = document.getElementById("trackerPaidMethod");
  if (paidMethod) paidMethod.textContent = `Paid via ${order.paymentMethod || 'UPI'}`;

  const recapTotal = document.getElementById("trackerRecapTotal");
  if (recapTotal) recapTotal.textContent = formatPrice(order.bill.grandTotalINR);

  // 3. Render items in recap
  const recapItems = document.getElementById("trackerRecapItems");
  if (recapItems) {
    recapItems.innerHTML = order.items.map(item => `
      <div class="recap-item-row" style="display: flex; justify-content: space-between; align-items: center; padding: 0.35rem 0; border-bottom: 1px dashed var(--border-light); font-size: 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="fssai-indicator ${item.veg ? 'veg' : 'non-veg'}" style="width: 14px; height: 14px;"></span>
          <span>${item.qty}x <strong>${item.name}</strong> <small style="color: var(--text-muted);">(${item.portion || "Regular"})</small></span>
        </div>
        <strong>${formatPrice(item.unitPriceINR * item.qty)}</strong>
      </div>
    `).join("");
  }

  // 4. Attach Rider call & message listeners
  const callBtn = document.getElementById("callRiderBtn");
  if (callBtn) {
    callBtn.onclick = () => RiderComm.openCall();
  }
  const msgBtn = document.getElementById("messageRiderBtn");
  if (msgBtn) {
    msgBtn.onclick = () => RiderComm.openChat();
  }

  // 5. Start / Sync Live Tracking Engine
  LiveTrackingEngine.start(order);

  document.getElementById("trackerModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeTrackerModal() {
  document.getElementById("trackerModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 10B. OFFICIAL TAX INVOICE (RECEIPT)
// ==========================================
function openInvoiceModal(order) {
  if (!order) {
    order = AppState.activeOrder || AppState.pastOrders[0];
  }
  if (!order) {
    showToast("No order details found to generate invoice.", "info");
    return;
  }

  const custName = order.customerName || (AppState.currentUser ? AppState.currentUser.name : "Customer");
  const custPhone = order.customerPhone || (AppState.currentUser ? AppState.currentUser.phone : "+91 98765 43210");
  const custAddr = order.deliveryAddress || `${AppState.currentArea || 'Indiranagar'}, ${AppState.currentCity || 'Bengaluru'}`;

  document.getElementById("invOrderId").textContent = `Order #${order.orderId}`;
  document.getElementById("invDateTime").textContent = order.date || new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  document.getElementById("invRestName").textContent = order.restaurant || "Meghana Foods";
  document.getElementById("invCustomerName").textContent = custName;
  document.getElementById("invCustomerAddress").textContent = custAddr;
  document.getElementById("invCustomerPhone").textContent = `Phone: ${custPhone}`;
  document.getElementById("invPayMode").textContent = `Payment Mode: ${order.paymentMethod || "UPI Verified"}`;

  // Tbody
  const tbody = document.getElementById("invoiceItemsTbody");
  tbody.innerHTML = order.items.map((item, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${item.name}</strong></td>
      <td>${item.portion || "Regular"}</td>
      <td class="text-right">${item.qty}</td>
      <td class="text-right">${formatPrice(item.unitPriceINR)}</td>
      <td class="text-right"><strong>${formatPrice(item.unitPriceINR * item.qty)}</strong></td>
    </tr>
  `).join("");

  // Bill figures
  const bill = order.bill;
  document.getElementById("invItemSubtotal").textContent = formatPrice(bill.itemTotalINR);
  if (bill.discountINR > 0) {
    document.getElementById("invDiscountLine").style.display = "flex";
    document.getElementById("invDiscountAmount").textContent = `-${formatPrice(bill.discountINR)}`;
  } else {
    document.getElementById("invDiscountLine").style.display = "none";
  }

  document.getElementById("invDeliveryFee").textContent = bill.deliveryFee === 0 ? "FREE" : formatPrice(bill.deliveryFee);
  document.getElementById("invRiderTip").textContent = formatPrice(bill.tip);
  document.getElementById("invPlatformFee").textContent = formatPrice(bill.platformFee);
  document.getElementById("invGst").textContent = formatPrice(bill.taxes);
  document.getElementById("invGrandTotal").textContent = formatPrice(bill.grandTotalINR);

  document.getElementById("invoiceModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeInvoiceModal() {
  document.getElementById("invoiceModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 11. PAST ORDERS & FAVORITES
// ==========================================
function openOrdersModal() {
  const container = document.getElementById("ordersListBody");
  if (!container) return;

  if (AppState.pastOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-clock-rotate-left" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: var(--border-light);"></i>
        <h4>No Past Orders</h4>
        <p>Your previous feast orders will appear here for 1-click re-ordering!</p>
      </div>
    `;
  } else {
    container.innerHTML = AppState.pastOrders.map(order => {
      const isLive = order.status !== "delivered" || (AppState.activeOrder && AppState.activeOrder.orderId === order.orderId && AppState.activeOrder.stageIndex < 3);
      return `
        <div class="past-order-card" style="${isLive ? 'border-color: #0f8a65; background: rgba(15, 138, 101, 0.05);' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size: 1rem; font-weight:800;">${order.restaurant}</h4>
            ${isLive 
              ? `<span style="font-size: 0.72rem; font-weight:800; color: #0284c7; background: #e0f2fe; padding: 2px 8px; border-radius: 12px; display: inline-flex; align-items: center; gap: 4px;">
                   <i class="fa-solid fa-circle" style="font-size: 0.45rem; color: #0284c7;"></i> LIVE TRACKING
                 </span>`
              : `<span style="font-size: 0.78rem; font-weight:700; color: #0f8a65;">DELIVERED</span>`
            }
          </div>
          <p style="font-size: 0.78rem; color: var(--text-light);">${order.date} • Order #${order.orderId}</p>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin: 0.2rem 0;">
            ${order.items.map(i => `${i.qty}x ${i.name}`).join(", ")}
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 0.4rem; padding-top: 0.4rem; border-top: 1px dashed var(--border-light);">
            <strong>${formatPrice(order.bill.grandTotalINR)}</strong>
            <div style="display:flex; gap: 0.5rem;">
              ${isLive ? `
                <button class="btn btn-primary" onclick="closeOrdersModal(); openTrackerModal(AppState.pastOrders.find(o => o.orderId === '${order.orderId}'))" style="padding: 0.35rem 0.85rem; font-size: 0.78rem; background: #0f8a65;">
                  <i class="fa-solid fa-location-arrow"></i> Track Live
                </button>
              ` : `
                <button class="btn btn-outline" onclick="openInvoiceModal(AppState.pastOrders.find(o => o.orderId === '${order.orderId}'))" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;">
                  <i class="fa-solid fa-file-invoice"></i> Receipt
                </button>
                <button class="btn btn-primary" onclick="reorderPastOrder('${order.orderId}')" style="padding: 0.35rem 0.85rem; font-size: 0.78rem;">
                  Reorder
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  document.getElementById("ordersModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrdersModal() {
  document.getElementById("ordersModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function reorderPastOrder(orderId) {
  const order = AppState.pastOrders.find(o => o.orderId === orderId);
  if (!order) return;

  order.items.forEach(item => {
    AppState.cart.push({ ...item });
  });

  saveCart();
  closeOrdersModal();
  updateCartUI();
  renderDishesMenu();
  showToast("Re-added all items to your cart!", "success");
  openCartDrawer();
}

function updateFavoritesBadge() {
  document.getElementById("favBadge").textContent = AppState.favorites.length;
}

// ==========================================
// 12. LOCATION & OFFERS MODAL
// ==========================================
function openLocationModal() {
  document.getElementById("locationModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLocationModal() {
  document.getElementById("locationModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function openOffersModal() {
  document.getElementById("offersModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOffersModal() {
  document.getElementById("offersModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 13. GEOLOCATION & USER AUTHENTICATION
// ==========================================

// --- GPS Geolocation Access ---
function detectUserLocation() {
  const gpsBtn = document.getElementById("useGpsBtn");
  const statusSub = document.getElementById("gpsStatusSub");

  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser.", "error");
    return;
  }

  // Set loading state
  gpsBtn.classList.add("detecting");
  statusSub.textContent = "Detecting GPS coordinates...";

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      statusSub.textContent = "Fetching nearest address...";

      try {
        // Reverse Geocoding with OpenStreetMap Nominatim API
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
          { headers: { 'Accept-Language': 'en' } }
        );

        if (response.ok) {
          const data = await response.json();
          const addr = data.address || {};
          
          const landmark = addr.suburb || addr.neighbourhood || addr.road || addr.county || "My Location";
          const city = addr.city || addr.town || addr.state_district || addr.state || "Nearby";
          const fullAddress = data.display_name ? data.display_name.split(",").slice(0, 3).join(",") : `${landmark}, ${city}`;

          AppState.currentCity = landmark;
          AppState.currentArea = fullAddress;
        } else {
          // Fallback if API rate limited
          AppState.currentCity = "Current Location";
          AppState.currentArea = `Near ${lat.toFixed(3)}°N, ${lon.toFixed(3)}°E`;
        }
      } catch (err) {
        // Graceful fallback on network error
        AppState.currentCity = "GPS Location";
        AppState.currentArea = `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
      }

      // Persist to localStorage
      localStorage.setItem("cb_city", AppState.currentCity);
      localStorage.setItem("cb_area", AppState.currentArea);

      // Update UI elements
      document.getElementById("currentLandmark").textContent = AppState.currentCity;
      document.getElementById("currentFullAddress").textContent = AppState.currentArea;
      document.getElementById("chainsCityName").textContent = AppState.currentCity;

      gpsBtn.classList.remove("detecting");
      statusSub.textContent = "Using device GPS & browser geolocation";

      closeLocationModal();
      SoundEngine.playSuccessChime();
      showToast(`📍 Location detected: ${AppState.currentArea}`, "success");
    },
    (error) => {
      gpsBtn.classList.remove("detecting");
      statusSub.textContent = "Using device GPS & browser geolocation";

      let errorMsg = "Unable to retrieve your location.";
      if (error.code === error.PERMISSION_DENIED) {
        errorMsg = "Location access denied. Please allow location permissions in your browser or choose a city.";
      } else if (error.code === error.TIMEOUT) {
        errorMsg = "Location request timed out. Please try again or select a city.";
      }
      showToast(errorMsg, "error");
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
}

// --- User Authentication (Login & Sign Up) ---
function openAuthModal(mode = "login") {
  switchAuthTab(mode);
  document.getElementById("authModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  document.getElementById("authModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";

  // Reset OTP view if active
  if (AppState.otpTimerInterval) clearInterval(AppState.otpTimerInterval);
  document.getElementById("otpVerificationView").style.display = "none";
  document.querySelector(".auth-tabs-row").style.display = "flex";
  document.querySelector(".auth-footer-prompt").style.display = "block";
}

function switchAuthTab(mode) {
  // Clear any active OTP view
  if (AppState.otpTimerInterval) clearInterval(AppState.otpTimerInterval);
  document.getElementById("otpVerificationView").style.display = "none";
  document.querySelector(".auth-tabs-row").style.display = "flex";
  document.querySelector(".auth-footer-prompt").style.display = "block";

  const isLogin = mode === "login";
  const tabLogin = document.getElementById("tabLoginBtn");
  const tabSignUp = document.getElementById("tabSignUpBtn");
  const loginForm = document.getElementById("loginForm");
  const signUpForm = document.getElementById("signUpForm");
  const modalTitle = document.getElementById("authModalTitle");
  const modalSubtitle = document.getElementById("authModalSubtitle");
  const switchPrompt = document.getElementById("authSwitchPrompt");
  const switchLink = document.getElementById("authSwitchLink");

  if (isLogin) {
    tabLogin.classList.add("active");
    tabSignUp.classList.remove("active");
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
    modalTitle.textContent = "Sign In to CraveBite";
    modalSubtitle.textContent = "Track your live orders, access Crave Gold & reorder in seconds.";
    switchPrompt.textContent = "Don't have an account yet?";
    switchLink.textContent = "Create one now";
  } else {
    tabSignUp.classList.add("active");
    tabLogin.classList.remove("active");
    loginForm.style.display = "none";
    signUpForm.style.display = "flex";
    modalTitle.textContent = "Create CraveBite Account";
    modalSubtitle.textContent = "Sign up today and get FLAT 50% OFF your first order with code CRAVE50.";
    switchPrompt.textContent = "Already have an account?";
    switchLink.textContent = "Sign in here";
  }
}

function updateUserAuthUI() {
  const authTrigger = document.getElementById("authTriggerBtn");
  const userDropdown = document.getElementById("userDropdownMenu");

  if (AppState.currentUser) {
    const firstName = AppState.currentUser.name.split(" ")[0];
    const initial = firstName.charAt(0).toUpperCase();

    authTrigger.innerHTML = `
      <div class="user-avatar-circle">${initial}</div>
      <span>${firstName}</span>
      <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 2px;"></i>
    `;
    authTrigger.classList.add("logged-in");

    // Populate dropdown info
    document.getElementById("userAvatarChar").textContent = initial;
    document.getElementById("menuUserName").textContent = AppState.currentUser.name;
    document.getElementById("menuUserPhone").textContent = AppState.currentUser.phone || "+91 98765 43210";
    document.getElementById("menuUserEmail").textContent = AppState.currentUser.email || "user@example.com";
  } else {
    authTrigger.innerHTML = `
      <i class="fa-regular fa-user"></i>
      <span>Sign In</span>
    `;
    authTrigger.classList.remove("logged-in");
    userDropdown.style.display = "none";
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!identifier || !password) {
    showToast("Please enter your email/phone and password", "error");
    return;
  }

  // Check in local registered users database
  let matchedUser = AppState.usersDb.find(
    u => (u.email.toLowerCase() === identifier.toLowerCase() || u.phone.includes(identifier)) && u.password === password
  );

  // If not found in DB but has input, create a valid session
  if (!matchedUser) {
    matchedUser = {
      name: identifier.includes("@") ? identifier.split("@")[0] : "Customer",
      email: identifier.includes("@") ? identifier : `${identifier}@customer.com`,
      phone: identifier.includes("@") ? "+91 98765 43210" : identifier,
      password: password
    };
  }

  AppState.currentUser = matchedUser;
  localStorage.setItem("cb_user", JSON.stringify(matchedUser));

  updateUserAuthUI();
  closeAuthModal();
  SoundEngine.playSuccessChime();
  showToast(`Welcome back, ${matchedUser.name}!`, "success");
}

function handleSignUpSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("signUpName").value.trim();
  const email = document.getElementById("signUpEmail").value.trim();
  const phone = document.getElementById("signUpPhone").value.trim();
  const password = document.getElementById("signUpPassword").value.trim();

  if (!name || !email || !phone || !password) {
    showToast("Please fill in all required fields", "error");
    return;
  }

  if (phone.length < 10) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    return;
  }

  // Generate a random 6-digit OTP
  const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

  AppState.pendingRegistration = {
    name,
    email,
    phone: `+91 ${phone}`,
    password,
    otp: generatedOtp
  };

  // Switch to OTP Verification View
  document.getElementById("signUpForm").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  const tabsRow = document.querySelector(".auth-tabs-row");
  if (tabsRow) tabsRow.style.display = "none";
  const footerPrompt = document.querySelector(".auth-footer-prompt");
  if (footerPrompt) footerPrompt.style.display = "none";

  const otpView = document.getElementById("otpVerificationView");
  if (otpView) otpView.style.display = "flex";

  document.getElementById("authModalTitle").textContent = "Verify Mobile Number";
  document.getElementById("authModalSubtitle").textContent = "Enter the 6-digit code sent to your phone to confirm your account.";
  document.getElementById("otpDisplayPhone").textContent = `+91 ${phone}`;
  document.getElementById("generatedOtpText").textContent = generatedOtp;

  // Clear inputs & focus first
  const otpDigits = document.querySelectorAll(".otp-digit");
  otpDigits.forEach(i => {
    i.value = "";
    i.classList.remove("filled");
  });
  if (otpDigits[0]) otpDigits[0].focus();

  startOtpTimer();
  SoundEngine.playSuccessChime();
  showToast(`💬 SMS Sent to +91 ${phone}: Your OTP is ${generatedOtp}`, "info");
}

function startOtpTimer() {
  if (AppState.otpTimerInterval) clearInterval(AppState.otpTimerInterval);

  let timeLeft = 30;
  const countEl = document.getElementById("otpTimerCount");
  const textEl = document.getElementById("otpTimerText");
  const resendBtn = document.getElementById("resendOtpBtn");

  if (textEl) textEl.style.display = "inline";
  if (resendBtn) resendBtn.style.display = "none";
  if (countEl) countEl.textContent = timeLeft;

  AppState.otpTimerInterval = setInterval(() => {
    timeLeft--;
    if (countEl) countEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(AppState.otpTimerInterval);
      if (textEl) textEl.style.display = "none";
      if (resendBtn) resendBtn.style.display = "inline-block";
    }
  }, 1000);
}

function resendRegistrationOtp() {
  if (!AppState.pendingRegistration) return;

  const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
  AppState.pendingRegistration.otp = newOtp;

  document.getElementById("generatedOtpText").textContent = newOtp;
  const otpDigits = document.querySelectorAll(".otp-digit");
  otpDigits.forEach(i => {
    i.value = "";
    i.classList.remove("filled");
  });
  if (otpDigits[0]) otpDigits[0].focus();

  startOtpTimer();
  SoundEngine.playSuccessChime();
  showToast(`💬 New OTP sent to ${AppState.pendingRegistration.phone}: ${newOtp}`, "info");
}

function verifyOtpSubmission() {
  if (!AppState.pendingRegistration) {
    showToast("Registration session expired. Please sign up again.", "error");
    switchAuthTab("signup");
    return;
  }

  const inputs = Array.from(document.querySelectorAll(".otp-digit"));
  const enteredOtp = inputs.map(i => i.value.trim()).join("");

  if (enteredOtp.length < 6) {
    showToast("Please enter the complete 6-digit OTP code", "error");
    return;
  }

  if (enteredOtp === AppState.pendingRegistration.otp) {
    // Correct OTP -> Confirm and create account
    const newUser = {
      name: AppState.pendingRegistration.name,
      email: AppState.pendingRegistration.email,
      phone: AppState.pendingRegistration.phone,
      password: AppState.pendingRegistration.password,
      verified: true,
      createdAt: new Date().toISOString()
    };

    AppState.usersDb.push(newUser);
    localStorage.setItem("cb_users_db", JSON.stringify(AppState.usersDb));

    AppState.currentUser = newUser;
    localStorage.setItem("cb_user", JSON.stringify(newUser));

    if (AppState.otpTimerInterval) clearInterval(AppState.otpTimerInterval);
    AppState.pendingRegistration = null;

    updateUserAuthUI();
    closeAuthModal();
    SoundEngine.playSuccessChime();

    if (typeof confetti === "function") {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }

    showToast(`🎉 Mobile verified! Welcome to CraveBite, ${newUser.name}! Code CRAVE50 is unlocked.`, "success");
  } else {
    // Incorrect OTP
    const row = document.getElementById("otpInputsRow");
    if (row) {
      row.classList.add("shake-otp");
      setTimeout(() => row.classList.remove("shake-otp"), 450);
    }
    inputs.forEach(i => (i.value = ""));
    if (inputs[0]) inputs[0].focus();
    showToast("❌ Incorrect OTP. Please enter the 6-digit code shown in the message.", "error");
  }
}

function editRegistrationPhone() {
  if (AppState.otpTimerInterval) clearInterval(AppState.otpTimerInterval);
  document.getElementById("otpVerificationView").style.display = "none";
  document.getElementById("signUpForm").style.display = "flex";
  const tabsRow = document.querySelector(".auth-tabs-row");
  if (tabsRow) tabsRow.style.display = "flex";
  const footerPrompt = document.querySelector(".auth-footer-prompt");
  if (footerPrompt) footerPrompt.style.display = "block";

  document.getElementById("authModalTitle").textContent = "Create CraveBite Account";
  document.getElementById("authModalSubtitle").textContent = "Sign up today and get FLAT 50% OFF your first order with code CRAVE50.";
}

function handleQuickDemoLogin() {
  const demoUser = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    password: "password123"
  };

  AppState.currentUser = demoUser;
  localStorage.setItem("cb_user", JSON.stringify(demoUser));

  updateUserAuthUI();
  closeAuthModal();
  SoundEngine.playSuccessChime();
  showToast("⚡ Signed in as Rahul Sharma (Demo Account)", "success");
}

function logoutUser() {
  AppState.currentUser = null;
  localStorage.removeItem("cb_user");
  updateUserAuthUI();
  document.getElementById("userDropdownMenu").style.display = "none";
  showToast("You have been signed out", "info");
}

// ==========================================
// 14. TOAST HELPER
// ==========================================
function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : (type === "error" ? "toast-error" : "")}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// 14. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn.addEventListener("click", () => {
    AppState.theme = AppState.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", AppState.theme);
    localStorage.setItem("cb_theme", AppState.theme);
    themeBtn.innerHTML = `<i class="fa-solid fa-${AppState.theme === 'dark' ? 'sun' : 'moon'}"></i>`;
    showToast(`Switched to ${AppState.theme} mode`, "info");
  });

  // Sound Toggle
  const soundBtn = document.getElementById("soundToggleBtn");
  soundBtn.addEventListener("click", () => {
    AppState.soundEnabled = !AppState.soundEnabled;
    localStorage.setItem("cb_sound", AppState.soundEnabled);
    soundBtn.innerHTML = `<i class="fa-solid fa-${AppState.soundEnabled ? 'volume-high' : 'volume-xmark'}"></i>`;
    showToast(`Sound feedback ${AppState.soundEnabled ? 'enabled' : 'muted'}`, "info");
  });

  // Service Tabs (Delivery, Dining Out, 10-Min Fast)
  document.querySelectorAll(".service-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".service-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      AppState.activeServiceTab = tab.dataset.tab;
      SoundEngine.playPop();

      if (AppState.activeServiceTab === "dining") {
        showToast("Switched to Dining Out: Book tables with flat 25% off", "info");
      } else if (AppState.activeServiceTab === "quick") {
        showToast("⚡ QuickBite: Snacks & Munchies delivered in 10 mins!", "success");
      } else {
        showToast("Switched to Food Delivery", "info");
      }
    });
  });

  // Search Inputs
  const handleSearch = (e) => {
    AppState.searchQuery = e.target.value;
    document.getElementById("searchInput").value = AppState.searchQuery;
    document.getElementById("mobileSearchInput").value = AppState.searchQuery;
    document.getElementById("clearSearchBtn").style.display = AppState.searchQuery ? "block" : "none";
    renderDishesMenu();
  };

  document.getElementById("searchInput").addEventListener("input", handleSearch);
  document.getElementById("mobileSearchInput").addEventListener("input", handleSearch);
  document.getElementById("clearSearchBtn").addEventListener("click", () => {
    AppState.searchQuery = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("mobileSearchInput").value = "";
    document.getElementById("clearSearchBtn").style.display = "none";
    renderDishesMenu();
  });

  // What's on your mind? Carousel Circles
  document.querySelectorAll(".craving-circle").forEach(circle => {
    circle.addEventListener("click", () => {
      selectCravingCategory(circle.dataset.category);
    });
  });

  // Craving Active Filter Banner Clear Button
  const clearCravingBtn = document.getElementById("clearCravingBtn");
  if (clearCravingBtn) {
    clearCravingBtn.addEventListener("click", () => {
      selectCravingCategory("all");
    });
  }

  // Carousel Arrow Scrolls
  document.getElementById("scrollCravingsLeft").addEventListener("click", () => {
    document.getElementById("cravingsCarousel").scrollBy({ left: -200, behavior: "smooth" });
  });
  document.getElementById("scrollCravingsRight").addEventListener("click", () => {
    document.getElementById("cravingsCarousel").scrollBy({ left: 200, behavior: "smooth" });
  });

  // Restaurant Filter Pills
  document.querySelectorAll(".toggle-restaurant-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".toggle-restaurant-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderRestaurants(btn.dataset.restFilter);
    });
  });

  // Swiggy Pure Veg & Non-Veg Switches
  const vegSwitch = document.getElementById("vegFilterToggle");
  const nonVegSwitch = document.getElementById("nonVegFilterToggle");

  vegSwitch.addEventListener("change", (e) => {
    AppState.filters.vegOnly = e.target.checked;
    if (e.target.checked) {
      nonVegSwitch.checked = false;
      AppState.filters.nonVegOnly = false;
    }
    SoundEngine.playPop();
    renderDishesMenu();
  });

  nonVegSwitch.addEventListener("change", (e) => {
    AppState.filters.nonVegOnly = e.target.checked;
    if (e.target.checked) {
      vegSwitch.checked = false;
      AppState.filters.vegOnly = false;
    }
    SoundEngine.playPop();
    renderDishesMenu();
  });

  // Filter Pills (Bestseller, Spicy, Rating)
  document.getElementById("bestsellerPill").addEventListener("click", function() {
    this.classList.toggle("active");
    AppState.filters.bestsellerOnly = this.classList.contains("active");
    renderDishesMenu();
  });

  document.getElementById("spicyPill").addEventListener("click", function() {
    this.classList.toggle("active");
    AppState.filters.spicyOnly = this.classList.contains("active");
    renderDishesMenu();
  });

  document.getElementById("ratingPill").addEventListener("click", function() {
    this.classList.toggle("active");
    AppState.filters.highRating = this.classList.contains("active");
    renderDishesMenu();
  });

  // Sort Select
  document.getElementById("dishSortSelect").addEventListener("change", (e) => {
    AppState.sortBy = e.target.value;
    renderDishesMenu();
  });

  // Reset Dishes Filter
  document.getElementById("resetDishesFilterBtn").addEventListener("click", () => {
    AppState.selectedCraving = "all";
    AppState.searchQuery = "";
    AppState.filters = { vegOnly: false, nonVegOnly: false, bestsellerOnly: false, spicyOnly: false, highRating: false };
    AppState.sortBy = "relevance";

    vegSwitch.checked = false;
    nonVegSwitch.checked = false;
    document.querySelectorAll(".sw-pill").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".craving-circle").forEach(c => c.classList.toggle("active", c.dataset.category === "all"));
    document.getElementById("dishSortSelect").value = "relevance";
    document.getElementById("searchInput").value = "";
    document.getElementById("mobileSearchInput").value = "";
    document.getElementById("clearSearchBtn").style.display = "none";

    updateCravingHeaderBanner("all");
    renderDishesMenu();
    showToast("All filters and cravings reset", "info");
  });

  // Cart Triggers
  document.getElementById("cartTriggerBtn").addEventListener("click", openCartDrawer);
  document.getElementById("stickyCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);

  // Delivery Instruction Chips (Avoid calling, Leave at door)
  document.querySelectorAll(".inst-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      const inst = chip.dataset.inst;
      if (chip.classList.contains("active")) {
        if (!AppState.deliveryInstructions.includes(inst)) AppState.deliveryInstructions.push(inst);
      } else {
        AppState.deliveryInstructions = AppState.deliveryInstructions.filter(i => i !== inst);
      }
    });
  });

  // Rider Tip Buttons
  document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.riderTip = parseInt(btn.dataset.tip);
      updateCartUI();
    });
  });

  // Coupon Drawer
  document.getElementById("drawerApplyCouponBtn").addEventListener("click", () => {
    const code = document.getElementById("drawerCouponInput").value;
    applyCoupon(code);
  });
  document.getElementById("drawerRemoveCouponBtn").addEventListener("click", removeCoupon);

  // Customization Sheet Controls
  document.getElementById("closeCustomSheetBtn").addEventListener("click", closeCustomizationSheet);
  document.getElementById("dishCustomBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("dishCustomBackdrop")) closeCustomizationSheet();
  });

  document.querySelectorAll('input[name="dishPortion"]').forEach(r => r.addEventListener("change", updateCustomSheetTotal));
  document.querySelectorAll('input[name="dishAddon"]').forEach(c => c.addEventListener("change", updateCustomSheetTotal));

  document.getElementById("sheetQtyPlus").addEventListener("click", () => {
    AppState.customSheetQty++;
    updateCustomSheetTotal();
  });

  document.getElementById("sheetQtyMinus").addEventListener("click", () => {
    if (AppState.customSheetQty > 1) {
      AppState.customSheetQty--;
      updateCustomSheetTotal();
    }
  });

  document.getElementById("sheetAddToCartBtn").addEventListener("click", submitCustomizedDish);

  // Proceed to Checkout
  document.getElementById("drawerProceedBtn").addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutBtn").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("checkoutModalBackdrop")) closeCheckoutModal();
  });
  document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);

  // Tracker Controls
  document.getElementById("closeTrackerBtn").addEventListener("click", closeTrackerModal);
  document.getElementById("closeTrackerDoneBtn").addEventListener("click", closeTrackerModal);
  document.getElementById("trackerModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("trackerModalBackdrop")) closeTrackerModal();
  });

  const fastForwardBtn = document.getElementById("trackerFastForwardBtn");
  if (fastForwardBtn) {
    fastForwardBtn.addEventListener("click", () => {
      LiveTrackingEngine.advance();
      SoundEngine.playPop();
    });
  }

  const openActiveBtn = document.getElementById("openActiveTrackerBtn");
  if (openActiveBtn) {
    openActiveBtn.addEventListener("click", () => {
      openTrackerModal(AppState.activeOrder);
    });
  }

  // Rider Chat Listeners
  const closeChatBtn = document.getElementById("closeRiderChatBtn");
  if (closeChatBtn) {
    closeChatBtn.addEventListener("click", () => RiderComm.closeChat());
  }
  const chatBackdrop = document.getElementById("riderChatModalBackdrop");
  if (chatBackdrop) {
    chatBackdrop.addEventListener("click", (e) => {
      if (e.target === chatBackdrop) RiderComm.closeChat();
    });
  }
  const chatForm = document.getElementById("riderChatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("riderChatInput");
      if (input && input.value) {
        RiderComm.sendMessage(input.value);
        input.value = "";
      }
    });
  }
  document.querySelectorAll("#riderQuickReplies .chat-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (chip.dataset.msg) {
        RiderComm.sendMessage(chip.dataset.msg);
      }
    });
  });

  // Rider Call Listeners
  const hangupBtn = document.getElementById("callHangupBtn");
  if (hangupBtn) {
    hangupBtn.addEventListener("click", () => RiderComm.endCall());
  }
  const muteBtn = document.getElementById("callMuteBtn");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      muteBtn.classList.toggle("active");
      showToast(muteBtn.classList.contains("active") ? "Microphone Muted" : "Microphone Active", "info");
    });
  }
  const speakerBtn = document.getElementById("callSpeakerBtn");
  if (speakerBtn) {
    speakerBtn.addEventListener("click", () => {
      speakerBtn.classList.toggle("active");
      showToast(speakerBtn.classList.contains("active") ? "Speakerphone On" : "Ear-piece Active", "info");
    });
  }
  const callBackdrop = document.getElementById("riderCallModalBackdrop");
  if (callBackdrop) {
    callBackdrop.addEventListener("click", (e) => {
      if (e.target === callBackdrop) RiderComm.endCall();
    });
  }

  // Valet Rating Stars
  document.querySelectorAll("#valetStarRow .star-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const r = parseInt(btn.dataset.rating, 10);
      document.querySelectorAll("#valetStarRow .star-btn").forEach((s, idx) => {
        s.classList.toggle("active", idx < r);
      });
      showToast(`⭐ Rated Ramesh Kumar ${r} Stars! Feedback submitted.`, "success");
    });
  });

  // Invoice Receipt Modal Listeners
  const viewInvoiceBtn = document.getElementById("viewInvoiceBtn");
  if (viewInvoiceBtn) {
    viewInvoiceBtn.addEventListener("click", () => openInvoiceModal());
  }

  const printInvoiceBtn = document.getElementById("printInvoiceBtn");
  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener("click", () => window.print());
  }

  const closeInvoiceBtn = document.getElementById("closeInvoiceBtn");
  if (closeInvoiceBtn) {
    closeInvoiceBtn.addEventListener("click", closeInvoiceModal);
  }

  const invoiceModalBackdrop = document.getElementById("invoiceModalBackdrop");
  if (invoiceModalBackdrop) {
    invoiceModalBackdrop.addEventListener("click", (e) => {
      if (e.target === invoiceModalBackdrop) closeInvoiceModal();
    });
  }

  // Location Modal
  document.getElementById("locationTrigger").addEventListener("click", openLocationModal);
  document.getElementById("closeLocationBtn").addEventListener("click", closeLocationModal);
  document.getElementById("locationModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("locationModalBackdrop")) closeLocationModal();
  });

  // Current Location Access (GPS)
  const useGpsBtn = document.getElementById("useGpsBtn");
  if (useGpsBtn) {
    useGpsBtn.addEventListener("click", detectUserLocation);
  }

  // User Authentication & Profile Dropdown
  const authTrigger = document.getElementById("authTriggerBtn");
  const userDropdown = document.getElementById("userDropdownMenu");

  authTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (AppState.currentUser) {
      const isVisible = userDropdown.style.display === "flex";
      userDropdown.style.display = isVisible ? "none" : "flex";
    } else {
      openAuthModal("login");
    }
  });

  document.addEventListener("click", (e) => {
    const authWrap = document.getElementById("authWrapper");
    if (authWrap && !authWrap.contains(e.target)) {
      userDropdown.style.display = "none";
    }
  });

  document.getElementById("tabLoginBtn").addEventListener("click", () => switchAuthTab("login"));
  document.getElementById("tabSignUpBtn").addEventListener("click", () => switchAuthTab("signup"));
  document.getElementById("authSwitchLink").addEventListener("click", () => {
    const isLoginActive = document.getElementById("tabLoginBtn").classList.contains("active");
    switchAuthTab(isLoginActive ? "signup" : "login");
  });

  document.getElementById("closeAuthBtn").addEventListener("click", closeAuthModal);
  document.getElementById("authModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("authModalBackdrop")) closeAuthModal();
  });

  document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
  document.getElementById("signUpForm").addEventListener("submit", handleSignUpSubmit);
  document.getElementById("quickDemoLoginBtn").addEventListener("click", handleQuickDemoLogin);
  document.getElementById("logoutBtn").addEventListener("click", logoutUser);

  // OTP Verification Listeners
  const verifyOtpBtn = document.getElementById("verifyOtpSubmitBtn");
  if (verifyOtpBtn) verifyOtpBtn.addEventListener("click", verifyOtpSubmission);

  const editPhoneBtn = document.getElementById("editPhoneBtn");
  if (editPhoneBtn) editPhoneBtn.addEventListener("click", editRegistrationPhone);

  const resendOtpBtn = document.getElementById("resendOtpBtn");
  if (resendOtpBtn) resendOtpBtn.addEventListener("click", resendRegistrationOtp);

  const autoFillOtpBtn = document.getElementById("autoFillOtpBtn");
  if (autoFillOtpBtn) {
    autoFillOtpBtn.addEventListener("click", () => {
      if (!AppState.pendingRegistration) return;
      const digits = AppState.pendingRegistration.otp.split("");
      const inputs = document.querySelectorAll(".otp-digit");
      inputs.forEach((input, idx) => {
        input.value = digits[idx] || "";
        input.classList.toggle("filled", Boolean(digits[idx]));
      });
      SoundEngine.playPop();
      setTimeout(verifyOtpSubmission, 200);
    });
  }

  // OTP Digit inputs auto-advancing
  const otpDigits = document.querySelectorAll(".otp-digit");
  otpDigits.forEach((digitInput, idx) => {
    digitInput.addEventListener("input", (e) => {
      const val = e.target.value.replace(/\D/g, "");
      e.target.value = val;
      e.target.classList.toggle("filled", Boolean(val));

      if (val && idx < otpDigits.length - 1) {
        otpDigits[idx + 1].focus();
      }

      // If all 6 filled, auto submit
      const allFilled = Array.from(otpDigits).every(i => i.value.trim().length > 0);
      if (allFilled) {
        setTimeout(verifyOtpSubmission, 150);
      }
    });

    digitInput.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && idx > 0) {
        otpDigits[idx - 1].focus();
      }
    });

    digitInput.addEventListener("paste", (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "");
      if (pasted) {
        pasted.slice(0, 6).split("").forEach((char, pIdx) => {
          if (otpDigits[pIdx]) {
            otpDigits[pIdx].value = char;
            otpDigits[pIdx].classList.add("filled");
          }
        });
        if (pasted.length >= 6) {
          setTimeout(verifyOtpSubmission, 150);
        } else if (otpDigits[pasted.length]) {
          otpDigits[pasted.length].focus();
        }
      }
    });
  });

  document.getElementById("menuMyOrdersBtn").addEventListener("click", () => {
    userDropdown.style.display = "none";
    openOrdersModal();
  });
  document.getElementById("menuOffersBtn").addEventListener("click", () => {
    userDropdown.style.display = "none";
    openOffersModal();
  });
  document.getElementById("menuGoldBtn").addEventListener("click", () => {
    userDropdown.style.display = "none";
    showToast("👑 Crave Gold VIP: Unlimited Free Delivery active on your account!", "success");
  });

  // Password visibility toggles
  const toggleLoginPwd = document.getElementById("toggleLoginPwd");
  if (toggleLoginPwd) {
    toggleLoginPwd.addEventListener("click", () => {
      const input = document.getElementById("loginPassword");
      const isPwd = input.type === "password";
      input.type = isPwd ? "text" : "password";
      toggleLoginPwd.innerHTML = `<i class="fa-regular fa-${isPwd ? 'eye-slash' : 'eye'}"></i>`;
    });
  }

  const toggleSignUpPwd = document.getElementById("toggleSignUpPwd");
  if (toggleSignUpPwd) {
    toggleSignUpPwd.addEventListener("click", () => {
      const input = document.getElementById("signUpPassword");
      const isPwd = input.type === "password";
      input.type = isPwd ? "text" : "password";
      toggleSignUpPwd.innerHTML = `<i class="fa-regular fa-${isPwd ? 'eye-slash' : 'eye'}"></i>`;
    });
  }

  document.querySelectorAll(".city-chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".city-chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.currentCity = btn.dataset.city;
      AppState.currentArea = btn.dataset.area;
      localStorage.setItem("cb_city", AppState.currentCity);
      localStorage.setItem("cb_area", AppState.currentArea);

      document.getElementById("currentLandmark").textContent = AppState.currentCity;
      document.getElementById("currentFullAddress").textContent = AppState.currentArea;
      document.getElementById("chainsCityName").textContent = AppState.currentCity;
      closeLocationModal();
      showToast(`Location set to ${AppState.currentArea}`, "success");
    });
  });

  // Offers Modal
  document.getElementById("offersTriggerBtn").addEventListener("click", openOffersModal);
  document.getElementById("closeOffersBtn").addEventListener("click", closeOffersModal);
  document.getElementById("offersModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("offersModalBackdrop")) closeOffersModal();
  });

  // Past Orders Modal
  document.getElementById("myOrdersBtn").addEventListener("click", openOrdersModal);
  document.getElementById("closeOrdersBtn").addEventListener("click", closeOrdersModal);
  document.getElementById("ordersModalBackdrop").addEventListener("click", (e) => {
    if (e.target === document.getElementById("ordersModalBackdrop")) closeOrdersModal();
  });

  // Footer Craving Links
  document.querySelectorAll(".footer-craving-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      selectCravingCategory(link.dataset.cat);
    });
  });

  // ESC key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCustomizationSheet();
      closeCartDrawer();
      closeCheckoutModal();
      closeTrackerModal();
      RiderComm.closeChat();
      RiderComm.endCall();
      closeLocationModal();
      closeOffersModal();
      closeOrdersModal();
      closeAuthModal();
      closeInvoiceModal();
    }
  });
}

// ==========================================
// 15. BOOTSTRAP APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  SoundEngine.init();
  document.documentElement.setAttribute("data-theme", AppState.theme);

  // Ensure currency is strictly Indian Rupees (₹)
  AppState.currency = "INR";
  localStorage.setItem("cb_currency", "INR");

  // Sync initial DOM
  document.getElementById("currentLandmark").textContent = AppState.currentCity;
  document.getElementById("currentFullAddress").textContent = AppState.currentArea;
  document.getElementById("chainsCityName").textContent = AppState.currentCity;

  renderRestaurants();
  renderDishesMenu();
  updateCartUI();
  updateFavoritesBadge();
  updateUserAuthUI();
  setupEventListeners();
  startRotatingPlaceholder();

  // Resume Live Order Tracking if active order exists
  if (AppState.activeOrder) {
    LiveTrackingEngine.start(AppState.activeOrder);
  }
});
