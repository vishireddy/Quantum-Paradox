export interface UserData {
  name: string;
  age: number;
  weight: number;
  height: number;
  lifestyle: 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active';
  healthConditions: string[];
  dietaryPreference: 'vegetarian' | 'non_vegetarian' | 'vegan' | 'low_carb' | 'keto';
  dailyCalorieGoal: number;
}

export interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  calcium: number;
  iron: number;
  vitaminC: number;
  vitaminD: number;
}

export interface FoodEntry {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  nutrition: NutritionData;
  timestamp: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  nutritionPer100g: NutritionData;
  commonServings: Array<{
    name: string;
    grams: number;
  }>;
}