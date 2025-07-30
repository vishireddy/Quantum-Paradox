import React from 'react';
import { BarChart3, Target, TrendingUp, AlertTriangle } from 'lucide-react';
import { UserData, FoodEntry } from '../types';

interface DashboardProps {
  userData: UserData;
  dailyFoods: FoodEntry[];
}

const Dashboard: React.FC<DashboardProps> = ({ userData, dailyFoods }) => {
  const calculateTotals = () => {
    return dailyFoods.reduce((total, food) => ({
      calories: total.calories + food.nutrition.calories,
      protein: total.protein + food.nutrition.protein,
      carbs: total.carbs + food.nutrition.carbs,
      fat: total.fat + food.nutrition.fat,
      fiber: total.fiber + food.nutrition.fiber,
      sodium: total.sodium + food.nutrition.sodium,
      calcium: total.calcium + food.nutrition.calcium,
      iron: total.iron + food.nutrition.iron,
      vitaminC: total.vitaminC + food.nutrition.vitaminC
    }), {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sodium: 0,
      calcium: 0,
      iron: 0,
      vitaminC: 0
    });
  };

  const totals = calculateTotals();
  const caloriePercentage = (totals.calories / userData.dailyCalorieGoal) * 100;

  const macroGoals = {
    protein: userData.weight * 1.2, // 1.2g per kg body weight
    carbs: (userData.dailyCalorieGoal * 0.45) / 4, // 45% of calories
    fat: (userData.dailyCalorieGoal * 0.30) / 9 // 30% of calories
  };

  const microGoals = {
    fiber: 25, // 25g daily
    calcium: 1000, // 1000mg daily
    iron: userData.healthConditions.includes('Anemia') ? 18 : 12, // Higher for anemia
    vitaminC: 75 // 75mg daily
  };

  const ProgressBar = ({ label, current, goal, unit, color = 'blue' }: {
    label: string;
    current: number;
    goal: number;
    unit: string;
    color?: string;
  }) => {
    const percentage = Math.min((current / goal) * 100, 100);
    const isOver = current > goal;
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className={`text-sm font-medium ${isOver ? 'text-red-600' : 'text-gray-600'}`}>
            {Math.round(current * 10) / 10}{unit} / {goal}{unit}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isOver ? 'bg-red-500' : `bg-${color}-500`
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {Math.round(percentage)}% of daily goal
        </div>
      </div>
    );
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    if (totals.protein < macroGoals.protein * 0.8) {
      recommendations.push({
        type: 'protein',
        message: 'Add more protein-rich foods like dal, paneer, or chicken',
        severity: 'warning'
      });
    }
    
    if (totals.fiber < microGoals.fiber * 0.6) {
      recommendations.push({
        type: 'fiber',
        message: 'Include more fiber from vegetables and whole grains',
        severity: 'info'
      });
    }
    
    if (userData.healthConditions.includes('Anemia') && totals.iron < microGoals.iron * 0.7) {
      recommendations.push({
        type: 'iron',
        message: 'Increase iron intake with spinach, lentils, and leafy greens',
        severity: 'warning'
      });
    }
    
    if (userData.healthConditions.includes('Hypertension') && totals.sodium > 2000) {
      recommendations.push({
        type: 'sodium',
        message: 'Reduce sodium intake to manage blood pressure',
        severity: 'error'
      });
    }
    
    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nutrition Dashboard</h2>
            <p className="text-gray-600">Track your daily nutrition intake and goals</p>
          </div>
        </div>

        {/* Calorie Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Daily Calories</h3>
              <p className="text-3xl font-bold text-blue-600">{totals.calories}</p>
              <p className="text-sm text-gray-600">of {userData.dailyCalorieGoal} goal</p>
            </div>
            <div className="text-right">
              <Target className="w-8 h-8 text-green-500 mb-2" />
              <p className="text-lg font-medium text-gray-800">
                {Math.round(caloriePercentage)}%
              </p>
              <p className="text-sm text-gray-600">Complete</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                caloriePercentage > 100 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-green-500'
              }`}
              style={{ width: `${Math.min(caloriePercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Macronutrients */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
              Macronutrients
            </h3>
            <ProgressBar
              label="Protein"
              current={totals.protein}
              goal={macroGoals.protein}
              unit="g"
              color="green"
            />
            <ProgressBar
              label="Carbohydrates"
              current={totals.carbs}
              goal={macroGoals.carbs}
              unit="g"
              color="yellow"
            />
            <ProgressBar
              label="Fat"
              current={totals.fat}
              goal={macroGoals.fat}
              unit="g"
              color="purple"
            />
          </div>

          {/* Micronutrients */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-500" />
              Key Micronutrients
            </h3>
            <ProgressBar
              label="Fiber"
              current={totals.fiber}
              goal={microGoals.fiber}
              unit="g"
              color="green"
            />
            <ProgressBar
              label="Calcium"
              current={totals.calcium}
              goal={microGoals.calcium}
              unit="mg"
              color="blue"
            />
            <ProgressBar
              label="Iron"
              current={totals.iron}
              goal={microGoals.iron}
              unit="mg"
              color="red"
            />
            <ProgressBar
              label="Vitamin C"
              current={totals.vitaminC}
              goal={microGoals.vitaminC}
              unit="mg"
              color="orange"
            />
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="mt-6 bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
              Personalized Recommendations
            </h3>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    rec.severity === 'error' ? 'border-red-500 bg-red-50' :
                    rec.severity === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}
                >
                  <p className="text-sm font-medium text-gray-800">{rec.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Foods Consumed Today */}
        {dailyFoods.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Foods Consumed Today</h3>
            <div className="space-y-2">
              {dailyFoods.map((food, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-800">{food.name}</span>
                    <span className="text-sm text-gray-600 ml-2">({food.quantity}g)</span>
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {food.nutrition.calories} cal
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;