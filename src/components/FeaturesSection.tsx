import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Target",
      title: "Личные цели",
      description: "Ставь амбициозные цели и достигай их шаг за шагом",
      color: "academy-red",
    },
    {
      icon: "Users",
      title: "Команда",
      description: "Объединяйся с единомышленниками со всей страны",
      color: "academy-blue",
    },
    {
      icon: "Trophy",
      title: "Достижения",
      description: "Получай награды за каждый пройденный этап",
      color: "academy-orange",
    },
    {
      icon: "Activity",
      title: "Прогресс",
      description: "Отслеживай свои результаты в реальном времени",
      color: "academy-red",
    },
    {
      icon: "Heart",
      title: "Здоровье",
      description: "Комплексный подход к физическому и ментальному здоровью",
      color: "academy-blue",
    },
    {
      icon: "Zap",
      title: "Энергия",
      description: "Заряжайся энергией от сообщества активных людей",
      color: "academy-orange",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Почему выбирают{" "}
            <span className="academy-text-gradient">наш марафон?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали уникальную экосистему для развития молодежи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    feature.color === "academy-red"
                      ? "bg-red-100"
                      : feature.color === "academy-blue"
                        ? "bg-blue-100"
                        : "bg-orange-100"
                  }`}
                >
                  <Icon
                    name={feature.icon as any}
                    className={`w-8 h-8 ${
                      feature.color === "academy-red"
                        ? "text-academy-red"
                        : feature.color === "academy-blue"
                          ? "text-academy-blue"
                          : "text-academy-orange"
                    }`}
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
