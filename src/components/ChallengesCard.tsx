import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ChallengesCard = () => {
  const challenges = [
    {
      title: "Водный баланс",
      description: "Выпей 8 стаканов воды сегодня",
      progress: 75,
      icon: "Droplets",
      color: "blue",
      reward: "50 очков",
    },
    {
      title: "10,000 шагов",
      description: "Пройди 10,000 шагов за день",
      progress: 60,
      icon: "Footprints",
      color: "red",
      reward: "100 очков",
    },
    {
      title: "Здоровый сон",
      description: "Спи 8 часов каждую ночь",
      progress: 90,
      icon: "Moon",
      color: "orange",
      reward: "75 очков",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-montserrat flex items-center">
          <Icon name="Target" className="w-5 h-5 mr-2 text-academy-red" />
          Сегодняшние вызовы
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    challenge.color === "blue"
                      ? "bg-blue-100"
                      : challenge.color === "red"
                        ? "bg-red-100"
                        : "bg-orange-100"
                  }`}
                >
                  <Icon
                    name={challenge.icon as any}
                    className={`w-5 h-5 ${
                      challenge.color === "blue"
                        ? "text-academy-blue"
                        : challenge.color === "red"
                          ? "text-academy-red"
                          : "text-academy-orange"
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{challenge.title}</h4>
                  <p className="text-sm text-gray-600">
                    {challenge.description}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {challenge.reward}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Прогресс</span>
                <span className="font-medium">{challenge.progress}%</span>
              </div>
              <Progress value={challenge.progress} className="h-2" />
            </div>

            {challenge.progress === 100 ? (
              <Button
                size="sm"
                className="w-full mt-3 bg-green-600 hover:bg-green-700"
              >
                <Icon name="Check" className="w-4 h-4 mr-2" />
                Выполнено!
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="w-full mt-3">
                Продолжить
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChallengesCard;
