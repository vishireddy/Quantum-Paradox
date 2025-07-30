import React from 'react';
import { Utensils, Clock, Star, Zap } from 'lucide-react';
import { UserData, FoodEntry } from '../types';

interface MealSuggestionsProps {
  userData: UserData;
  dailyFoods: FoodEntry[];
}

const MealSuggestions: React.FC<MealSuggestionsProps> = ({ userData, dailyFoods }) => {
  const calculateTotals = () => {
    return dailyFoods.reduce((total, food) => ({
      calories: total.calories + food.nutrition.calories,
      protein: total.protein + food.nutrition.protein,
      carbs: total.carbs + food.nutrition.carbs,
      fat: total.fat + food.nutrition.fat,
      iron: total.iron + food.nutrition.iron,
      calcium: total.calcium + food.nutrition.calcium
    }), {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      iron: 0,
      calcium: 0
    });
  };

  const totals = calculateTotals();
  const remainingCalories = userData.dailyCalorieGoal - totals.calories;
  const proteinGoal = userData.weight * 1.2;
  const remainingProtein = proteinGoal - totals.protein;

  const mealSuggestions = [
    // Breakfast suggestions
    {
      category: 'Breakfast',
      meals: [
        {
          name: 'Vegetable Upma',
          description: 'Semolina cooked with vegetables and spices',
          calories: 250,
          protein: 6,
          healthBenefits: ['High fiber', 'Low glycemic index'],
          cookingTime: '15 minutes',
          difficulty: 'Easy',
          ingredients: ['Semolina', 'Mixed vegetables', 'Spices'],
          suitableFor: userData.healthConditions.includes('Diabetes') ? ['Diabetes-friendly'] : []
        },
        {
          name: 'Moong Dal Cheela',
          description: 'Protein-rich pancake made from lentil batter',
          calories: 200,
          protein: 14,
          healthBenefits: ['High protein', 'Easy digestion'],
          cookingTime: '20 minutes',
          difficulty: 'Easy',
          ingredients: ['Moong dal', 'Vegetables', 'Spices'],
          suitableFor: ['High protein', 'Weight management']
        }
      ]
    },
    // Lunch suggestions
    {
      category: 'Lunch',
      meals: [
        {
          name: 'Dal Rice with Spinach',
          description: 'Complete protein combination with iron-rich spinach',
          calories: 400,
          protein: 18,
          healthBenefits: ['Complete protein', 'High iron', 'Balanced meal'],
          cookingTime: '30 minutes',
          difficulty: 'Medium',
          ingredients: ['Rice', 'Dal', 'Spinach', 'Spices'],
          suitableFor: userData.healthConditions.includes('Anemia') ? ['Anemia-friendly'] : []
        },
        {
          name: 'Quinoa Vegetable Bowl',
          description: 'Nutritious grain bowl with mixed vegetables',
          calories: 350,
          protein: 12,
          healthBenefits: ['Complete protein', 'High fiber', 'Gluten-free'],
          cookingTime: '25 minutes',
          difficulty: 'Easy',
          ingredients: ['Quinoa', 'Mixed vegetables', 'Herbs'],
          suitableFor: ['Low carb', 'Gluten-free']
        }
      ]
    },
    // Dinner suggestions
    {
      category: 'Dinner',
      meals: [
        {
          name: 'Grilled Paneer with Vegetables',
          description: 'High-protein paneer with fiber-rich vegetables',
          calories: 300,
          protein: 20,
          healthBenefits: ['High protein', 'Low carb', 'High calcium'],
          cookingTime: '20 minutes',
          difficulty: 'Easy',
          ingredients: ['Paneer', 'Bell peppers', 'Onions', 'Spices'],
          suitableFor: userData.dietaryPreference === 'low_carb' ? ['Low carb'] : []
        },
        {
          name: 'Vegetable Soup with Whole Grain Bread',
          description: 'Light, nutritious soup with fiber-rich bread',
          calories: 250,
          protein: 8,
          healthBenefits: ['Low calorie', 'High fiber', 'Easy digestion'],
          cookingTime: '25 minutes',
          difficulty: 'Easy',
          ingredients: ['Mixed vegetables', 'Whole grain bread', 'Herbs'],
          suitableFor: ['Weight management', 'Light dinner']
        }
      ]
    }
  ];

  // Filter meals based on dietary preferences and health conditions
  const getFilteredMeals = (meals: any[]) => {
    return meals.filter(meal => {
      // Filter based on dietary preference
      if (userData.dietaryPreference === 'vegan' && meal.ingredients.some((ing: string) => 
        ing.toLowerCase().includes('paneer') || ing.toLowerCase().includes('milk'))) {
        return false;
      }
      
      // Filter based on calorie needs
      if (remainingCalories < 200 && meal.calories > 300) {
        return false;
      }
      
      return true;
    });
  };

  const getPersonalizedMessage = () => {
    const messages = [];
    
    if (remainingCalories > 500) {
      messages.push('You have significant calories remaining - consider adding a substantial meal.');
    }
    
    if (remainingProtein > 20) {
      messages.push('Focus on protein-rich meals to meet your daily protein goal.');
    }
    
    if (userData.healthConditions.includes('Diabetes')) {
      messages.push('Choose low glycemic index foods to help manage blood sugar.');
    }
    
    if (userData.healthConditions.includes('Anemia')) {
      messages.push('Include iron-rich foods like spinach and lentils.');
    }
    
    if (userData.healthConditions.includes('Hypertension')) {
      messages.push('Opt for low-sodium preparations and avoid processed foods.');
    }
    
    return messages;
  };

  const personalizedMessages = getPersonalizedMessage();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Personalized Meal Suggestions</h2>
            <p className="text-gray-600">Recommended meals based on your profile and current intake</p>
          </div>
        </div>

        {/* Personalized Messages */}
        {personalizedMessages.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Star className="w-5 h-5 mr-2 text-purple-500" />
              Personalized Recommendations
            </h3>
            <ul className="space-y-1">
              {personalizedMessages.map((message, index) => (
                <li key={index} className="text-sm text-gray-700">• {message}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Remaining Nutrition Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <Zap className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Remaining Calories</p>
            <p className="text-xl font-bold text-green-600">{Math.max(0, remainingCalories)}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <Star className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Remaining Protein</p>
            <p className="text-xl font-bold text-blue-600">{Math.max(0, Math.round(remainingProtein))}g</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <Utensils className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Meals Logged</p>
            <p className="text-xl font-bold text-purple-600">{dailyFoods.length}</p>
          </div>
        </div>

        {/* Meal Suggestions by Category */}
        <div className="space-y-6">
          {mealSuggestions.map((category) => {
            const filteredMeals = getFilteredMeals(category.meals);
            
            if (filteredMeals.length === 0) return null;
            
            return (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-500" />
                  {category.category} Options
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredMeals.map((meal, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-800">{meal.name}</h4>
                        <div className="text-right">
                          <p className="text-sm font-medium text-blue-600">{meal.calories} cal</p>
                          <p className="text-xs text-gray-500">{meal.protein}g protein</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{meal.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {meal.healthBenefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                        {meal.suitableFor.map((suitable, suitableIndex) => (
                          <span
                            key={suitableIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {suitable}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>⏱️ {meal.cookingTime}</span>
                        <span>📊 {meal.difficulty}</span>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Ingredients:</strong> {meal.ingredients.join(', ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Diet Recommendations */}
        {userData.healthConditions.length > 0 && (
          <div className="mt-6 bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Health Condition Specific Tips</h3>
            <div className="text-sm text-gray-700 space-y-1">
              {userData.healthConditions.includes('Diabetes') && (
                <p>• Choose whole grains, lean proteins, and low-glycemic vegetables</p>
              )}
              {userData.healthConditions.includes('Anemia') && (
                <p>• Include iron-rich foods like spinach, lentils, and combine with vitamin C foods</p>
              )}
              {userData.healthConditions.includes('Hypertension') && (
                <p>• Limit sodium, choose fresh ingredients, and include potassium-rich foods</p>
              )}
              {userData.healthConditions.includes('PCOS') && (
                <p>• Focus on anti-inflammatory foods and maintain steady blood sugar levels</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealSuggestions;