import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AchievementsCard = () => {
  const achievements = [
    {
      title: "Первый шаг",
      description: "Зарегистрировался в марафоне",
      icon: "Star",
      earned: true,
      date: "15 фев 2024",
    },
    {
      title: "Неделя силы",
      description: "7 дней подряд выполнял задания",
      icon: "Flame",
      earned: true,
      date: "28 фев 2024",
    },
    {
      title: "Водохлеб",
      description: "30 дней пил достаточно воды",
      icon: "Droplets",
      earned: true,
      date: "15 мар 2024",
    },
    {
      title: "Марафонец",
      description: "100 дней участия в марафоне",
      icon: "Trophy",
      earned: false,
      progress: "78/100 дней",
    },
    {
      title: "Командный игрок",
      description: "Пригласил 5 друзей",
      icon: "Users",
      earned: false,
      progress: "3/5 друзей",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-montserrat flex items-center">
          <Icon name="Award" className="w-5 h-5 mr-2 text-academy-orange" />
          Достижения
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 p-3 rounded-lg border transition-all ${
                achievement.earned
                  ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  achievement.earned
                    ? "academy-gradient text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                <Icon name={achievement.icon as any} className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h4
                  className={`font-semibold ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}
                >
                  {achievement.title}
                </h4>
                <p
                  className={`text-sm ${achievement.earned ? "text-gray-600" : "text-gray-400"}`}
                >
                  {achievement.description}
                </p>
                {achievement.earned ? (
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs text-green-700 border-green-300"
                  >
                    {achievement.date}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-1 text-xs">
                    {achievement.progress}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
