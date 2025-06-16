import Navigation from "@/components/Navigation";
import UserProfile from "@/components/UserProfile";
import ProgressChart from "@/components/ProgressChart";
import ChallengesCard from "@/components/ChallengesCard";
import AchievementsCard from "@/components/AchievementsCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-gray-900 mb-2">
            Личный кабинет
          </h1>
          <p className="text-gray-600">
            Отслеживай прогресс и достигай новых высот! 🚀
          </p>
        </div>

        <div className="space-y-8">
          <UserProfile />

          <ProgressChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChallengesCard />
            <AchievementsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
