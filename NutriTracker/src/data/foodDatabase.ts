import { FoodItem } from '../types';

export const foodDatabase: FoodItem[] = [
  {
    id: '1',
    name: 'Basmati Rice (Cooked)',
    category: 'Grains',
    nutritionPer100g: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
      fiber: 0.4,
      sugar: 0.1,
      sodium: 1,
      calcium: 10,
      iron: 0.2,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 bowl', grams: 150 },
      { name: '1 cup', grams: 200 }
    ]
  },
  {
    id: '2',
    name: 'Dal (Cooked Lentils)',
    category: 'Legumes',
    nutritionPer100g: {
      calories: 116,
      protein: 9,
      carbs: 20,
      fat: 0.4,
      fiber: 7.9,
      sugar: 1.8,
      sodium: 238,
      calcium: 19,
      iron: 3.3,
      vitaminC: 1.5,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 bowl', grams: 120 },
      { name: '1 cup', grams: 180 }
    ]
  },
  {
    id: '3',
    name: 'Chapati (Whole Wheat)',
    category: 'Grains',
    nutritionPer100g: {
      calories: 297,
      protein: 11,
      carbs: 61,
      fat: 3.7,
      fiber: 11,
      sugar: 2.8,
      sodium: 584,
      calcium: 23,
      iron: 2.9,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium chapati', grams: 40 },
      { name: '1 large chapati', grams: 60 }
    ]
  },
  {
    id: '4',
    name: 'Paneer (Cottage Cheese)',
    category: 'Dairy',
    nutritionPer100g: {
      calories: 265,
      protein: 18.3,
      carbs: 1.2,
      fat: 20.8,
      fiber: 0,
      sugar: 2.6,
      sodium: 18,
      calcium: 208,
      iron: 0.2,
      vitaminC: 0,
      vitaminD: 0.2
    },
    commonServings: [
      { name: '1 cube', grams: 30 },
      { name: '100g serving', grams: 100 }
    ]
  },
  {
    id: '5',
    name: 'Spinach (Cooked)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sugar: 0.4,
      sodium: 79,
      calcium: 136,
      iron: 3.6,
      vitaminC: 9.8,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup', grams: 180 },
      { name: '1 bowl', grams: 150 }
    ]
  },
  {
    id: '6',
    name: 'Chicken Breast (Cooked)',
    category: 'Meat',
    nutritionPer100g: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sugar: 0,
      sodium: 74,
      calcium: 15,
      iron: 1,
      vitaminC: 0,
      vitaminD: 0.1
    },
    commonServings: [
      { name: '1 piece', grams: 150 },
      { name: '100g serving', grams: 100 }
    ]
  },
  {
    id: '7',
    name: 'Banana',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 89,
      protein: 1.1,
      carbs: 23,
      fat: 0.3,
      fiber: 2.6,
      sugar: 12.2,
      sodium: 1,
      calcium: 5,
      iron: 0.3,
      vitaminC: 8.7,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium banana', grams: 120 },
      { name: '1 large banana', grams: 150 }
    ]
  },
  {
    id: '8',
    name: 'Yogurt (Plain)',
    category: 'Dairy',
    nutritionPer100g: {
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      sugar: 3.6,
      sodium: 36,
      calcium: 110,
      iron: 0.05,
      vitaminC: 0.5,
      vitaminD: 0.1
    },
    commonServings: [
      { name: '1 cup', grams: 200 },
      { name: '1 bowl', grams: 150 }
    ]
  },
  {
    id: '9',
    name: 'Quinoa (Cooked)',
    category: 'Grains',
    nutritionPer100g: {
      calories: 120,
      protein: 4.4,
      carbs: 22,
      fat: 1.9,
      fiber: 2.8,
      sugar: 0.9,
      sodium: 7,
      calcium: 17,
      iron: 1.5,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup', grams: 185 },
      { name: '1 bowl', grams: 150 }
    ]
  },
  {
    id: '10',
    name: 'Sweet Potato (Boiled)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 76,
      protein: 1.4,
      carbs: 17.7,
      fat: 0.1,
      fiber: 2.5,
      sugar: 5.6,
      sodium: 6,
      calcium: 27,
      iron: 0.7,
      vitaminC: 19.6,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium potato', grams: 150 },
      { name: '1 cup cubed', grams: 200 }
    ]
  },
  {
    id: '11',
    name: 'Broccoli (Cooked)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 35,
      protein: 2.4,
      carbs: 7,
      fat: 0.4,
      fiber: 3.3,
      sugar: 1.9,
      sodium: 41,
      calcium: 40,
      iron: 1,
      vitaminC: 64.9,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup', grams: 156 },
      { name: '1 bowl', grams: 120 }
    ]
  },
  {
    id: '12',
    name: 'Cauliflower (Cooked)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 23,
      protein: 1.8,
      carbs: 4.9,
      fat: 0.1,
      fiber: 2.5,
      sugar: 2.4,
      sodium: 19,
      calcium: 16,
      iron: 0.4,
      vitaminC: 44.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup', grams: 124 },
      { name: '1 bowl', grams: 100 }
    ]
  },
  {
    id: '13',
    name: 'Okra (Bhindi)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 33,
      protein: 1.9,
      carbs: 7.5,
      fat: 0.2,
      fiber: 3.2,
      sugar: 1.5,
      sodium: 7,
      calcium: 82,
      iron: 0.6,
      vitaminC: 23,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup sliced', grams: 100 },
      { name: '1 bowl', grams: 150 }
    ]
  },
  {
    id: '14',
    name: 'Bottle Gourd (Lauki)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 14,
      protein: 0.6,
      carbs: 3.4,
      fat: 0.02,
      fiber: 0.5,
      sugar: 2.5,
      sodium: 2,
      calcium: 26,
      iron: 0.2,
      vitaminC: 10.1,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup cubed', grams: 116 },
      { name: '1 bowl', grams: 150 }
    ]
  },
  {
    id: '15',
    name: 'Bitter Gourd (Karela)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 17,
      protein: 1,
      carbs: 3.7,
      fat: 0.2,
      fiber: 2.8,
      sugar: 1.95,
      sodium: 5,
      calcium: 19,
      iron: 0.43,
      vitaminC: 84,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup sliced', grams: 94 },
      { name: '1 medium piece', grams: 124 }
    ]
  },
  {
    id: '16',
    name: 'Eggplant (Baingan)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 25,
      protein: 1,
      carbs: 6,
      fat: 0.2,
      fiber: 3,
      sugar: 3.5,
      sodium: 2,
      calcium: 9,
      iron: 0.2,
      vitaminC: 2.2,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup cubed', grams: 82 },
      { name: '1 medium eggplant', grams: 458 }
    ]
  },
  {
    id: '17',
    name: 'Green Peas (Cooked)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 84,
      protein: 5.4,
      carbs: 15.6,
      fat: 0.2,
      fiber: 5.7,
      sugar: 5.9,
      sodium: 3,
      calcium: 27,
      iron: 1.5,
      vitaminC: 14.2,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup', grams: 160 },
      { name: '1 bowl', grams: 120 }
    ]
  },
  {
    id: '18',
    name: 'Potato (Boiled)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 87,
      protein: 1.9,
      carbs: 20.1,
      fat: 0.1,
      fiber: 1.8,
      sugar: 0.9,
      sodium: 7,
      calcium: 5,
      iron: 0.3,
      vitaminC: 7.4,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium potato', grams: 173 },
      { name: '1 cup cubed', grams: 150 }
    ]
  },
  {
    id: '19',
    name: 'Mango',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 60,
      protein: 0.8,
      carbs: 15,
      fat: 0.4,
      fiber: 1.6,
      sugar: 13.7,
      sodium: 1,
      calcium: 11,
      iron: 0.2,
      vitaminC: 36.4,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium mango', grams: 207 },
      { name: '1 cup sliced', grams: 165 }
    ]
  },
  {
    id: '20',
    name: 'Papaya',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 43,
      protein: 0.5,
      carbs: 11,
      fat: 0.3,
      fiber: 1.7,
      sugar: 7.8,
      sodium: 8,
      calcium: 20,
      iron: 0.3,
      vitaminC: 60.9,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup cubed', grams: 140 },
      { name: '1 medium slice', grams: 152 }
    ]
  },
  {
    id: '21',
    name: 'Guava',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 68,
      protein: 2.6,
      carbs: 14.3,
      fat: 1,
      fiber: 5.4,
      sugar: 8.9,
      sodium: 2,
      calcium: 18,
      iron: 0.3,
      vitaminC: 228.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 medium guava', grams: 55 },
      { name: '1 cup', grams: 165 }
    ]
  },
  {
    id: '22',
    name: 'Pomegranate',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 83,
      protein: 1.7,
      carbs: 18.7,
      fat: 1.2,
      fiber: 4,
      sugar: 13.7,
      sodium: 3,
      calcium: 10,
      iron: 0.3,
      vitaminC: 10.2,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup seeds', grams: 174 },
      { name: '1 medium fruit', grams: 282 }
    ]
  },
  {
    id: '23',
    name: 'Watermelon',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 30,
      protein: 0.6,
      carbs: 7.6,
      fat: 0.2,
      fiber: 0.4,
      sugar: 6.2,
      sodium: 1,
      calcium: 7,
      iron: 0.2,
      vitaminC: 8.1,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup cubed', grams: 152 },
      { name: '1 wedge', grams: 286 }
    ]
  },
  {
    id: '24',
    name: 'Almonds',
    category: 'Nuts',
    nutritionPer100g: {
      calories: 579,
      protein: 21.2,
      carbs: 21.6,
      fat: 49.9,
      fiber: 12.5,
      sugar: 4.4,
      sodium: 1,
      calcium: 269,
      iron: 3.7,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '10 almonds', grams: 14 },
      { name: '1 handful', grams: 28 }
    ]
  },
  {
    id: '25',
    name: 'Walnuts',
    category: 'Nuts',
    nutritionPer100g: {
      calories: 654,
      protein: 15.2,
      carbs: 13.7,
      fat: 65.2,
      fiber: 6.7,
      sugar: 2.6,
      sodium: 2,
      calcium: 98,
      iron: 2.9,
      vitaminC: 1.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '5 walnut halves', grams: 20 },
      { name: '1 handful', grams: 30 }
    ]
  },
  {
    id: '26',
    name: 'Cashews',
    category: 'Nuts',
    nutritionPer100g: {
      calories: 553,
      protein: 18.2,
      carbs: 30.2,
      fat: 43.9,
      fiber: 3.3,
      sugar: 5.9,
      sodium: 12,
      calcium: 37,
      iron: 6.7,
      vitaminC: 0.5,
      vitaminD: 0
    },
    commonServings: [
      { name: '10 cashews', grams: 18 },
      { name: '1 handful', grams: 28 }
    ]
  },
  {
    id: '27',
    name: 'Peanuts (Roasted)',
    category: 'Nuts',
    nutritionPer100g: {
      calories: 567,
      protein: 25.8,
      carbs: 16.1,
      fat: 49.2,
      fiber: 8.5,
      sugar: 4.7,
      sodium: 18,
      calcium: 92,
      iron: 4.6,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 handful', grams: 28 },
      { name: '2 tablespoons', grams: 32 }
    ]
  },
  {
    id: '28',
    name: 'Sesame Seeds',
    category: 'Seeds',
    nutritionPer100g: {
      calories: 573,
      protein: 17.7,
      carbs: 23.4,
      fat: 49.7,
      fiber: 11.8,
      sugar: 0.3,
      sodium: 11,
      calcium: 975,
      iron: 14.6,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 tablespoon', grams: 9 },
      { name: '1 teaspoon', grams: 3 }
    ]
  },
  {
    id: '29',
    name: 'Sunflower Seeds',
    category: 'Seeds',
    nutritionPer100g: {
      calories: 584,
      protein: 20.8,
      carbs: 20,
      fat: 51.5,
      fiber: 8.6,
      sugar: 2.6,
      sodium: 9,
      calcium: 78,
      iron: 5.2,
      vitaminC: 1.4,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 tablespoon', grams: 16 },
      { name: '1 handful', grams: 30 }
    ]
  },
  {
    id: '30',
    name: 'Pumpkin Seeds',
    category: 'Seeds',
    nutritionPer100g: {
      calories: 559,
      protein: 30.2,
      carbs: 10.7,
      fat: 49,
      fiber: 6,
      sugar: 1.4,
      sodium: 7,
      calcium: 46,
      iron: 8.8,
      vitaminC: 1.9,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 tablespoon', grams: 16 },
      { name: '1 handful', grams: 28 }
    ]
  },
  {
    id: '31',
    name: 'Coconut (Fresh)',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 354,
      protein: 3.3,
      carbs: 15.2,
      fat: 33.5,
      fiber: 9,
      sugar: 6.2,
      sodium: 20,
      calcium: 14,
      iron: 2.4,
      vitaminC: 3.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup shredded', grams: 80 },
      { name: '1 piece', grams: 45 }
    ]
  },
  {
    id: '32',
    name: 'Dates (Fresh)',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 277,
      protein: 1.8,
      carbs: 75,
      fat: 0.2,
      fiber: 6.7,
      sugar: 66.5,
      sodium: 1,
      calcium: 64,
      iron: 0.9,
      vitaminC: 0,
      vitaminD: 0
    },
    commonServings: [
      { name: '3 dates', grams: 24 },
      { name: '1 date', grams: 8 }
    ]
  },
  {
    id: '33',
    name: 'Raisins',
    category: 'Fruits',
    nutritionPer100g: {
      calories: 299,
      protein: 3.1,
      carbs: 79.2,
      fat: 0.5,
      fiber: 3.7,
      sugar: 59.2,
      sodium: 11,
      calcium: 50,
      iron: 1.9,
      vitaminC: 2.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 small box', grams: 43 },
      { name: '1 tablespoon', grams: 9 }
    ]
  },
  {
    id: '34',
    name: 'Fenugreek Leaves (Methi)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 49,
      protein: 4.4,
      carbs: 6,
      fat: 0.9,
      fiber: 1.1,
      sugar: 0,
      sodium: 67,
      calcium: 395,
      iron: 1.9,
      vitaminC: 52.5,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup chopped', grams: 16 },
      { name: '1 bunch', grams: 100 }
    ]
  },
  {
    id: '35',
    name: 'Coriander Leaves (Dhania)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 23,
      protein: 2.1,
      carbs: 3.7,
      fat: 0.5,
      fiber: 2.8,
      sugar: 0.9,
      sodium: 46,
      calcium: 67,
      iron: 1.8,
      vitaminC: 27,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup chopped', grams: 16 },
      { name: '1 bunch', grams: 60 }
    ]
  },
  {
    id: '36',
    name: 'Mint Leaves (Pudina)',
    category: 'Vegetables',
    nutritionPer100g: {
      calories: 44,
      protein: 3.3,
      carbs: 8.4,
      fat: 0.7,
      fiber: 6.8,
      sugar: 0,
      sodium: 31,
      calcium: 199,
      iron: 11.9,
      vitaminC: 13.3,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 cup chopped', grams: 14 },
      { name: '10 leaves', grams: 2 }
    ]
  },
  {
    id: '37',
    name: 'Ginger (Fresh)',
    category: 'Spices',
    nutritionPer100g: {
      calories: 80,
      protein: 1.8,
      carbs: 17.8,
      fat: 0.8,
      fiber: 2,
      sugar: 1.7,
      sodium: 13,
      calcium: 16,
      iron: 0.6,
      vitaminC: 5,
      vitaminD: 0
    },
    commonServings: [
      { name: '1 tablespoon minced', grams: 6 },
      { name: '1 inch piece', grams: 4 }
    ]
  },
  {
    id: '38',
    name: 'Garlic (Fresh)',
    category: 'Spices',
    nutritionPer100g: {
      calories: 149,
      protein: 6.4,
      carbs: 33.1,
      fat: 0.5,
      fiber: 2.1,
      sugar: 1,
      sodium: 17,
      calcium: 181,
      iron: 1.7,
      vitaminC: 31.2,
      vitaminD: 0
    },
    commonServings: [
      { name: '3 cloves', grams: 9 },
      { name: '1 clove', grams: 3 }
    ]
  }
];