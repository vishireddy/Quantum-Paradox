import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, AlertCircle, Plus, Minus } from 'lucide-react';
import { UserData } from '../types';

interface GroceryListProps {
  userData: UserData;
}

interface GroceryItem {
  id: string;
  name: string;
  category: string;
  quantity: string;
  nutritionalValue: string;
  isChecked: boolean;
  isEssential: boolean;
  healthBenefit?: string;
}

const GroceryList: React.FC<GroceryListProps> = ({ userData }) => {
  const generateRecommendedGroceries = (): GroceryItem[] => {
    const baseGroceries: Omit<GroceryItem, 'id' | 'isChecked'>[] = [
      // Grains & Cereals
      { name: 'Brown Rice', category: 'Grains', quantity: '2 kg', nutritionalValue: 'Complex carbs, fiber', isEssential: true },
      { name: 'Whole Wheat Flour', category: 'Grains', quantity: '2 kg', nutritionalValue: 'Fiber, B vitamins', isEssential: true },
      { name: 'Oats', category: 'Grains', quantity: '500g', nutritionalValue: 'Beta-glucan, protein', isEssential: false },
      
      // Proteins
      { name: 'Moong Dal', category: 'Protein', quantity: '1 kg', nutritionalValue: 'Protein, folate', isEssential: true },
      { name: 'Chana Dal', category: 'Protein', quantity: '1 kg', nutritionalValue: 'Protein, fiber', isEssential: true },
      { name: 'Toor Dal', category: 'Protein', quantity: '1 kg', nutritionalValue: 'Protein, iron', isEssential: true },
      
      // Vegetables
      { name: 'Spinach', category: 'Vegetables', quantity: '500g', nutritionalValue: 'Iron, folate, vitamin K', isEssential: true, healthBenefit: 'Great for anemia' },
      { name: 'Tomatoes', category: 'Vegetables', quantity: '1 kg', nutritionalValue: 'Vitamin C, lycopene', isEssential: true },
      { name: 'Onions', category: 'Vegetables', quantity: '1 kg', nutritionalValue: 'Antioxidants, flavor', isEssential: true },
      { name: 'Carrots', category: 'Vegetables', quantity: '500g', nutritionalValue: 'Beta-carotene, fiber', isEssential: false },
      { name: 'Bell Peppers', category: 'Vegetables', quantity: '500g', nutritionalValue: 'Vitamin C, antioxidants', isEssential: false },
      
      // Fruits
      { name: 'Bananas', category: 'Fruits', quantity: '1 dozen', nutritionalValue: 'Potassium, energy', isEssential: true },
      { name: 'Apples', category: 'Fruits', quantity: '1 kg', nutritionalValue: 'Fiber, antioxidants', isEssential: false },
      { name: 'Oranges', category: 'Fruits', quantity: '1 kg', nutritionalValue: 'Vitamin C, folate', isEssential: false },
      
      // Dairy & Alternatives
      { name: 'Low-fat Milk', category: 'Dairy', quantity: '2 liters', nutritionalValue: 'Calcium, protein', isEssential: true },
      { name: 'Greek Yogurt', category: 'Dairy', quantity: '500g', nutritionalValue: 'Probiotics, protein', isEssential: false },
      
      // Spices & Seasonings
      { name: 'Turmeric Powder', category: 'Spices', quantity: '100g', nutritionalValue: 'Anti-inflammatory', isEssential: true },
      { name: 'Cumin Seeds', category: 'Spices', quantity: '100g', nutritionalValue: 'Digestive health', isEssential: true },
      { name: 'Coriander Seeds', category: 'Spices', quantity: '100g', nutritionalValue: 'Antioxidants', isEssential: false },
      
      // Healthy Fats
      { name: 'Olive Oil', category: 'Oils', quantity: '500ml', nutritionalValue: 'Healthy fats, vitamin E', isEssential: true },
      { name: 'Almonds', category: 'Nuts', quantity: '250g', nutritionalValue: 'Healthy fats, vitamin E', isEssential: false },
      { name: 'Walnuts', category: 'Nuts', quantity: '250g', nutritionalValue: 'Omega-3, protein', isEssential: false }
    ];

    // Add health condition specific items
    const conditionSpecificItems: Omit<GroceryItem, 'id' | 'isChecked'>[] = [];
    
    if (userData.healthConditions.includes('Anemia')) {
      conditionSpecificItems.push(
        { name: 'Sesame Seeds', category: 'Seeds', quantity: '200g', nutritionalValue: 'Iron, calcium', isEssential: true, healthBenefit: 'High iron for anemia' },
        { name: 'Jaggery', category: 'Sweeteners', quantity: '500g', nutritionalValue: 'Iron, natural sweetener', isEssential: false, healthBenefit: 'Iron-rich alternative to sugar' }
      );
    }
    
    if (userData.healthConditions.includes('Diabetes')) {
      conditionSpecificItems.push(
        { name: 'Fenugreek Seeds', category: 'Seeds', quantity: '100g', nutritionalValue: 'Blood sugar control', isEssential: true, healthBenefit: 'Helps manage blood sugar' },
        { name: 'Bitter Gourd', category: 'Vegetables', quantity: '500g', nutritionalValue: 'Blood sugar regulation', isEssential: false, healthBenefit: 'Natural blood sugar management' }
      );
    }
    
    if (userData.healthConditions.includes('Hypertension')) {
      conditionSpecificItems.push(
        { name: 'Garlic', category: 'Vegetables', quantity: '200g', nutritionalValue: 'Heart health, blood pressure', isEssential: true, healthBenefit: 'Supports cardiovascular health' },
        { name: 'Low-sodium Salt', category: 'Seasonings', quantity: '1 pack', nutritionalValue: 'Reduced sodium', isEssential: true, healthBenefit: 'Better for blood pressure control' }
      );
    }

    // Filter based on dietary preferences
    let allItems = [...baseGroceries, ...conditionSpecificItems];
    
    if (userData.dietaryPreference === 'vegan') {
      allItems = allItems.filter(item => !['Dairy'].includes(item.category));
      allItems.push(
        { name: 'Almond Milk', category: 'Plant-based', quantity: '1 liter', nutritionalValue: 'Calcium, vitamin E', isEssential: true },
        { name: 'Nutritional Yeast', category: 'Plant-based', quantity: '100g', nutritionalValue: 'B12, protein', isEssential: false }
      );
    }
    
    if (userData.dietaryPreference === 'non_vegetarian') {
      allItems.push(
        { name: 'Chicken Breast', category: 'Meat', quantity: '1 kg', nutritionalValue: 'Lean protein', isEssential: true },
        { name: 'Fish (Salmon/Mackerel)', category: 'Seafood', quantity: '500g', nutritionalValue: 'Omega-3, protein', isEssential: false }
      );
    }
    
    if (userData.dietaryPreference === 'low_carb' || userData.dietaryPreference === 'keto') {
      allItems.push(
        { name: 'Avocados', category: 'Fruits', quantity: '4 pieces', nutritionalValue: 'Healthy fats, fiber', isEssential: true },
        { name: 'Cheese', category: 'Dairy', quantity: '200g', nutritionalValue: 'Protein, calcium', isEssential: false }
      );
    }

    return allItems.map((item, index) => ({
      ...item,
      id: index.toString(),
      isChecked: false
    }));
  };

  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(generateRecommendedGroceries());
  const [newItemName, setNewItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Vegetables');

  const categories = ['Grains', 'Protein', 'Vegetables', 'Fruits', 'Dairy', 'Spices', 'Oils', 'Nuts', 'Seeds', 'Plant-based', 'Meat', 'Seafood', 'Other'];

  const toggleItem = (id: string) => {
    setGroceryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addCustomItem = () => {
    if (!newItemName.trim()) return;
    
    const newItem: GroceryItem = {
      id: Date.now().toString(),
      name: newItemName,
      category: selectedCategory,
      quantity: '1 unit',
      nutritionalValue: 'Custom item',
      isChecked: false,
      isEssential: false
    };
    
    setGroceryItems([...groceryItems, newItem]);
    setNewItemName('');
  };

  const removeItem = (id: string) => {
    setGroceryItems(items => items.filter(item => item.id !== id));
  };

  const groupedItems = groceryItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {} as Record<string, GroceryItem[]>);

  const totalItems = groceryItems.length;
  const checkedItems = groceryItems.filter(item => item.isChecked).length;
  const completionPercentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

  const getNutritionalBalance = () => {
    const categories = Object.keys(groupedItems);
    const balance = {
      grains: categories.includes('Grains') ? 'Good' : 'Missing',
      protein: categories.some(cat => ['Protein', 'Meat', 'Seafood', 'Dairy'].includes(cat)) ? 'Good' : 'Missing',
      vegetables: categories.includes('Vegetables') ? 'Good' : 'Missing',
      fruits: categories.includes('Fruits') ? 'Good' : 'Missing',
      healthyFats: categories.some(cat => ['Oils', 'Nuts', 'Seeds'].includes(cat)) ? 'Good' : 'Missing'
    };
    
    const missingCategories = Object.entries(balance)
      .filter(([_, status]) => status === 'Missing')
      .map(([category, _]) => category);
    
    return { balance, missingCategories };
  };

  const { balance, missingCategories } = getNutritionalBalance();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Smart Grocery List</h2>
            <p className="text-gray-600">Personalized grocery recommendations for balanced nutrition</p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-800">Shopping Progress</h3>
            <span className="text-sm font-medium text-gray-600">
              {checkedItems} of {totalItems} items
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{Math.round(completionPercentage)}% complete</p>
        </div>

        {/* Nutritional Balance Check */}
        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-yellow-500" />
            Nutritional Balance Check
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(balance).map(([category, status]) => (
              <div key={category} className="text-center">
                <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${
                  status === 'Good' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {status === 'Good' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                </div>
                <p className="text-xs font-medium text-gray-700 capitalize">{category.replace(/([A-Z])/g, ' $1')}</p>
                <p className={`text-xs ${status === 'Good' ? 'text-green-600' : 'text-red-600'}`}>{status}</p>
              </div>
            ))}
          </div>
          {missingCategories.length > 0 && (
            <p className="text-sm text-orange-700 mt-3">
              Consider adding items from: {missingCategories.join(', ')} for better nutritional balance.
            </p>
          )}
        </div>

        {/* Add Custom Item */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Add Custom Item</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter item name..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button
              onClick={addCustomItem}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* Grocery Items by Category */}
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2"></span>
                {category}
                <span className="ml-2 text-sm font-normal text-gray-500">({items.length} items)</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 border rounded-lg transition-all duration-200 ${
                      item.isChecked 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                            item.isChecked
                              ? 'border-green-500 bg-green-500 text-white'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {item.isChecked && <CheckCircle className="w-3 h-3" />}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className={`font-medium ${
                              item.isChecked ? 'text-gray-500 line-through' : 'text-gray-800'
                            }`}>
                              {item.name}
                            </h4>
                            {item.isEssential && (
                              <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                                Essential
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{item.quantity}</p>
                          <p className="text-xs text-blue-600">{item.nutritionalValue}</p>
                          {item.healthBenefit && (
                            <p className="text-xs text-green-600 font-medium mt-1">
                              💡 {item.healthBenefit}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Health Condition Specific Tips */}
        {userData.healthConditions.length > 0 && (
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Shopping Tips for Your Health Conditions</h3>
            <div className="text-sm text-gray-700 space-y-1">
              {userData.healthConditions.includes('Diabetes') && (
                <p>• Choose whole grains over refined ones and look for low-glycemic foods</p>
              )}
              {userData.healthConditions.includes('Anemia') && (
                <p>• Focus on iron-rich foods and combine with vitamin C sources for better absorption</p>
              )}
              {userData.healthConditions.includes('Hypertension') && (
                <p>• Select low-sodium options and fresh ingredients over processed foods</p>
              )}
              {userData.healthConditions.includes('PCOS') && (
                <p>• Include anti-inflammatory foods and avoid high-sugar processed items</p>
              )}
            </div>
          </div>
        )}

        {/* Weekly Planning Tip */}
        <div className="mt-6 bg-green-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">💡 Weekly Planning Tip</h3>
          <p className="text-sm text-gray-700">
            This grocery list is designed to provide balanced nutrition for about a week. 
            Fresh items like vegetables and fruits should be consumed first, while grains and pulses can be stored longer. 
            Adjust quantities based on your family size and consumption patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;