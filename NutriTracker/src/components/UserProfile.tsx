import React from 'react';
import { UserData } from '../types';
import { User, Heart, Activity } from 'lucide-react';

interface UserProfileProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData, setUserData }) => {
  const healthConditions = [
    'Diabetes', 'Hypertension', 'PCOS', 'Anemia', 'Obesity', 'Heart Disease', 'Thyroid'
  ];

  const calculateBMR = () => {
    if (!userData.age || !userData.weight || !userData.height) return 0;
    // Mifflin-St Jeor Equation (simplified for demonstration)
    return Math.round(10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5);
  };

  const updateField = (field: keyof UserData, value: any) => {
    const newData = { ...userData, [field]: value };
    if (field === 'weight' || field === 'height' || field === 'age' || field === 'lifestyle') {
      const bmr = calculateBMR();
      const activityMultipliers = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725
      };
      newData.dailyCalorieGoal = Math.round(bmr * activityMultipliers[newData.lifestyle as keyof typeof activityMultipliers]);
    }
    setUserData(newData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Personal Profile</h2>
            <p className="text-gray-600">Set up your profile for personalized recommendations</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-500" />
              Basic Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your name"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  value={userData.age || ''}
                  onChange={(e) => updateField('age', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                <input
                  type="number"
                  value={userData.weight || ''}
                  onChange={(e) => updateField('weight', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                <input
                  type="number"
                  value={userData.height || ''}
                  onChange={(e) => updateField('height', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="170"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lifestyle</label>
              <select
                value={userData.lifestyle}
                onChange={(e) => updateField('lifestyle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="sedentary">Sedentary (little/no exercise)</option>
                <option value="lightly_active">Lightly Active (light exercise 1-3 days/week)</option>
                <option value="moderately_active">Moderately Active (moderate exercise 3-5 days/week)</option>
                <option value="very_active">Very Active (hard exercise 6-7 days/week)</option>
              </select>
            </div>
          </div>

          {/* Health & Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              Health & Preferences
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions</label>
              <div className="grid grid-cols-2 gap-2">
                {healthConditions.map((condition) => (
                  <label key={condition} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={userData.healthConditions.includes(condition)}
                      onChange={(e) => {
                        const conditions = e.target.checked
                          ? [...userData.healthConditions, condition]
                          : userData.healthConditions.filter(c => c !== condition);
                        updateField('healthConditions', conditions);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Preference</label>
              <select
                value={userData.dietaryPreference}
                onChange={(e) => updateField('dietaryPreference', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="vegetarian">Vegetarian</option>
                <option value="non_vegetarian">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="low_carb">Low Carb</option>
                <option value="keto">Keto</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Daily Calorie Goal</label>
              <input
                type="number"
                value={userData.dailyCalorieGoal || ''}
                onChange={(e) => updateField('dailyCalorieGoal', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Recommended: {calculateBMR() * (userData.lifestyle === 'sedentary' ? 1.2 : userData.lifestyle === 'lightly_active' ? 1.375 : userData.lifestyle === 'moderately_active' ? 1.55 : 1.725)} calories
              </p>
            </div>
          </div>
        </div>

        {/* BMI Calculator */}
        {userData.weight && userData.height && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Your BMI</h4>
                <p className="text-2xl font-bold text-blue-600">
                  {(userData.weight / Math.pow(userData.height / 100, 2)).toFixed(1)}
                </p>
              </div>
              <div className="text-right">
                <Activity className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-sm text-gray-600">
                  {(userData.weight / Math.pow(userData.height / 100, 2)) < 18.5 ? 'Underweight' :
                   (userData.weight / Math.pow(userData.height / 100, 2)) < 25 ? 'Normal' :
                   (userData.weight / Math.pow(userData.height / 100, 2)) < 30 ? 'Overweight' : 'Obese'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;