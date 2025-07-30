import React, { useState } from 'react';
import { Search, Plus, Utensils } from 'lucide-react';
import { foodDatabase } from '../data/foodDatabase';
import { FoodEntry, FoodItem } from '../types';

interface FoodSearchProps {
  onAddFood: (food: FoodEntry) => void;
}

const FoodSearch: React.FC<FoodSearchProps> = ({ onAddFood }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [selectedServing, setSelectedServing] = useState<string>('');

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateNutrition = (food: FoodItem, grams: number) => {
    const multiplier = grams / 100;
    return {
      calories: Math.round(food.nutritionPer100g.calories * multiplier),
      protein: Math.round(food.nutritionPer100g.protein * multiplier * 10) / 10,
      carbs: Math.round(food.nutritionPer100g.carbs * multiplier * 10) / 10,
      fat: Math.round(food.nutritionPer100g.fat * multiplier * 10) / 10,
      fiber: Math.round(food.nutritionPer100g.fiber * multiplier * 10) / 10,
      sugar: Math.round(food.nutritionPer100g.sugar * multiplier * 10) / 10,
      sodium: Math.round(food.nutritionPer100g.sodium * multiplier),
      calcium: Math.round(food.nutritionPer100g.calcium * multiplier),
      iron: Math.round(food.nutritionPer100g.iron * multiplier * 10) / 10,
      vitaminC: Math.round(food.nutritionPer100g.vitaminC * multiplier * 10) / 10,
      vitaminD: Math.round(food.nutritionPer100g.vitaminD * multiplier * 10) / 10
    };
  };

  const handleAddFood = () => {
    if (!selectedFood) return;

    const nutrition = calculateNutrition(selectedFood, quantity);
    const foodEntry: FoodEntry = {
      id: '',
      name: selectedFood.name,
      quantity,
      unit: 'g',
      nutrition,
      timestamp: new Date().toISOString()
    };

    onAddFood(foodEntry);
    setSelectedFood(null);
    setQuantity(100);
    setSelectedServing('');
    setSearchTerm('');
  };

  const handleServingChange = (servingName: string) => {
    if (!selectedFood) return;
    const serving = selectedFood.commonServings.find(s => s.name === servingName);
    if (serving) {
      setQuantity(serving.grams);
      setSelectedServing(servingName);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Add Food</h2>
            <p className="text-gray-600">Search and add foods to track your nutrition</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for foods (e.g., rice, dal, chicken)..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Food List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Search Results</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredFoods.map((food) => (
                <div
                  key={food.id}
                  onClick={() => setSelectedFood(food)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedFood?.id === food.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">{food.name}</h4>
                      <p className="text-sm text-gray-600">{food.category}</p>
                      <p className="text-sm text-blue-600 font-medium">
                        {food.nutritionPer100g.calories} cal per 100g
                      </p>
                    </div>
                    <Utensils className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
              {filteredFoods.length === 0 && searchTerm && (
                <p className="text-gray-500 text-center py-8">No foods found matching "{searchTerm}"</p>
              )}
            </div>
          </div>

          {/* Food Details & Add */}
          <div>
            {selectedFood ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add to Daily Intake</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">{selectedFood.name}</h4>
                  
                  {/* Serving Size Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quick Serving Sizes</label>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedFood.commonServings.map((serving) => (
                        <button
                          key={serving.name}
                          onClick={() => handleServingChange(serving.name)}
                          className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                            selectedServing === serving.name
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {serving.name}
                          <br />
                          <span className="text-xs text-gray-500">({serving.grams}g)</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Quantity */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Custom Quantity (grams)
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(parseInt(e.target.value) || 0);
                        setSelectedServing('');
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  {/* Nutrition Preview */}
                  <div className="bg-white rounded-lg p-3 mb-4">
                    <h5 className="font-medium text-gray-800 mb-2">Nutrition for {quantity}g</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Calories: <span className="font-medium">{calculateNutrition(selectedFood, quantity).calories}</span></div>
                      <div>Protein: <span className="font-medium">{calculateNutrition(selectedFood, quantity).protein}g</span></div>
                      <div>Carbs: <span className="font-medium">{calculateNutrition(selectedFood, quantity).carbs}g</span></div>
                      <div>Fat: <span className="font-medium">{calculateNutrition(selectedFood, quantity).fat}g</span></div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddFood}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Daily Intake</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Utensils className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Select a food item to see details and add to your daily intake</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;