const products = [
    
  
  // ================= FRUITS & VEGETABLES =================
  { id: 1, name: "Apple", price: 120, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Qbaf8fLd0hdRA2cwJXIQf2MbbaZTVeSORg&s" },
  { id: 2, name: "Banana", price: 60, quantity: "12 pcs", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgkoFZEfUtce0blcyqgrHPRqIv9XHYi019Q&s" },
  { id: 3, name: "Orange", price: 90, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://e7.pngegg.com/pngimages/312/149/png-clipart-kinnow-orange-drink-fruit-mandarin-orange-orange-natural-foods-food-thumbnail.png" },
  { id: 4, name: "Tomato", price: 40, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99UUki68mqWrUkPXRdIeXI7XvKNQCi4-6-A&s" },
  { id: 5, name: "Potato", price: 35, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGYPPdwVtr4etSfXlR_BokuyLffewvOMSSw&s" },
  { id: 6, name: "Onion", price: 45, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUTjE7JyRosr1zjqlRQ3OMeMfSFOqI171fQ&s" },
  { id: 7, name: "Carrot", price: 50, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://png.pngtree.com/png-vector/20240914/ourmid/pngtree-creative-fresh-carrots-slice-clipart-with-transparent-background-png-image_13832692.png" },
  { id: 8, name: "Cucumber", price: 40, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://i.pinimg.com/736x/83/8f/0b/838f0b0f6bb3dec6f891fef6b9bf4089.jpg" },
  { id: 9, name: "Spinach", price: 25, quantity: "1 bunch", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLPV3QTTZGUmhTbjcxDMMtp4XQBBacdhfAg&s" },
  { id: 10, name: "Mango", price: 150, quantity: "1 kg", categorySlug: "fruits-vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNpblX7libkdGTqBCABU4DyuP0RQwc39WBw&s" },

  // ================= DAIRY & BREAKFAST =================
  { id: 21, name: "Amul Milk", price: 28, quantity: "500 ml", categorySlug: "dairy-breakfast", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { id: 22, name: "Curd", price: 40, quantity: "500 g", categorySlug: "dairy-breakfast", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { id: 23, name: "Butter", price: 55, quantity: "100 g", categorySlug: "dairy-breakfast", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { id: 24, name: "Cheese Slices", price: 90, quantity: "10 pcs", categorySlug: "dairy-breakfast", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { id: 25, name: "Bread", price: 45, quantity: "1 pack", categorySlug: "dairy-breakfast", image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },

  // ================= SNACKS & DRINKS =================
  { id: 41, name: "Lays Chips", price: 20, quantity: "52 g", categorySlug: "snacks-drinks", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { id: 42, name: "Kurkure", price: 20, quantity: "60 g", categorySlug: "snacks-drinks", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { id: 43, name: "Good Day Biscuits", price: 30, quantity: "100 g", categorySlug: "snacks-drinks", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },

  // ================= HOUSEHOLD =================
  { id: 61, name: "LED Bulb", price: 120, quantity: "1 pc", categorySlug: "household", image: "https://cdn-icons-png.flaticon.com/512/2920/2920214.png" },
  { id: 62, name: "Extension Board", price: 350, quantity: "1 pc", categorySlug: "household", image: "https://cdn-icons-png.flaticon.com/512/2920/2920214.png" },

  // ================= PERSONAL CARE =================
  { id: 81, name: "Dove Soap", price: 45, quantity: "100 g", categorySlug: "personal-care", image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
  { id: 82, name: "Shampoo", price: 120, quantity: "180 ml", categorySlug: "personal-care", image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },

  // ================= BABY CARE =================
  { id: 101, name: "Baby Diapers", price: 499, quantity: "20 pcs", categorySlug: "baby-care", image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png" },
  { id: 102, name: "Baby Oil", price: 150, quantity: "100 ml", categorySlug: "baby-care", image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png" },

  // ================= PET CARE =================
  { id: 121, name: "Dog Food", price: 599, quantity: "2 kg", categorySlug: "pet-care", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },

  // ================= PHARMACY =================
  { id: 141, name: "Paracetamol", price: 30, quantity: "10 tabs", categorySlug: "pharmacy", image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" },

  // ================= BAKERY & CAKES =================
  { id: 161, name: "Chocolate Cake", price: 350, quantity: "500 g", categorySlug: "bakery-cakes", image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },

  // ================= INSTANT & FROZEN =================
  { id: 181, name: "Frozen Momos", price: 180, quantity: "1 pack", categorySlug: "instant-frozen", image: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png" },

  // ================= COLD DRINKS & JUICES =================
  { id: 201, name: "Coca Cola", price: 40, quantity: "750 ml", categorySlug: "cold-drinks-juices", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png" },

  // ================= MEAT & FISH =================
  { id: 221, name: "Chicken Breast", price: 280, quantity: "500 g", categorySlug: "meat-fish", image: "https://cdn-icons-png.flaticon.com/512/135/135763.png" },

  // ================= STATIONERY =================
  { id: 241, name: "Notebook", price: 60, quantity: "1 pc", categorySlug: "stationery-office", image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" },

  // ================= CLEANING =================
  { id: 261, name: "Phenyl", price: 90, quantity: "500 ml", categorySlug: "cleaning-essentials", image: "https://cdn-icons-png.flaticon.com/512/995/995053.png" },

  // ================= ELECTRICAL =================
  { id: 281, name: "USB Cable", price: 199, quantity: "1 pc", categorySlug: "electricals-accessories", image: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png" },

  // ================= POOJA =================
  { id: 301, name: "Agarbatti", price: 50, quantity: "1 pack", categorySlug: "pooja-festive", image: "https://cdn-icons-png.flaticon.com/512/3014/3014867.png" },
];



export { products };
