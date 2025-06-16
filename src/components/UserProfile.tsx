import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const UserProfile = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback className="text-lg academy-gradient text-white">
              АК
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl font-montserrat">
              Александр Козлов
            </CardTitle>
            <p className="text-gray-600">Участник с февраля 2024</p>
            <div className="flex items-center mt-2 space-x-2">
              <Badge className="bg-academy-red text-white">Уровень 5</Badge>
              <Badge
                variant="outline"
                className="text-academy-blue border-academy-blue"
              >
                1,847 очков
              </Badge>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Settings" className="w-4 h-4 mr-2" />
            Настройки
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-academy-red mb-1">28</div>
            <div className="text-sm text-gray-600">Дней подряд</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-academy-blue mb-1">156</div>
            <div className="text-sm text-gray-600">Тренировок</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-academy-orange mb-1">
              12
            </div>
            <div className="text-sm text-gray-600">Достижений</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">89%</div>
            <div className="text-sm text-gray-600">Выполнено</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
