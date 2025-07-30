import React, { useState } from 'react';
import { User, Search, BarChart3, Utensils, ShoppingCart } from 'lucide-react';
import UserProfile from './components/UserProfile';
import FoodSearch from './components/FoodSearch';
import Dashboard from './components/Dashboard';
import MealSuggestions from './components/MealSuggestions';
import GroceryList from './components/GroceryList';
import { UserData, FoodEntry } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    lifestyle: 'sedentary',
    healthConditions: [],
    dietaryPreference: 'vegetarian',
    dailyCalorieGoal: 2000
  });
  const [dailyFoods, setDailyFoods] = useState<FoodEntry[]>([]);

  const navigation = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'search', label: 'Add Food', icon: Search },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'meals', label: 'Meal Plans', icon: Utensils },
    { id: 'grocery', label: 'Grocery List', icon: ShoppingCart }
  ];

  const addFoodEntry = (food: FoodEntry) => {
    setDailyFoods(prev => [...prev, { ...food, id: Date.now().toString() }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                NutriTracker
              </h1>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-600">Personalized Nutrition Analysis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'profile' && (
          <UserProfile userData={userData} setUserData={setUserData} />
        )}
        {activeTab === 'search' && (
          <FoodSearch onAddFood={addFoodEntry} />
        )}
        {activeTab === 'dashboard' && (
          <Dashboard userData={userData} dailyFoods={dailyFoods} />
        )}
        {activeTab === 'meals' && (
          <MealSuggestions userData={userData} dailyFoods={dailyFoods} />
        )}
        {activeTab === 'grocery' && (
          <GroceryList userData={userData} />
        )}
      </main>
    </div>
  );
}

export default App;