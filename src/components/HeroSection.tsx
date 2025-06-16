import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 academy-gradient opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="academy-text-gradient">Марафон</span>
            <br />
            <span className="text-gray-900">Здоровья</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Присоединяйся к движению молодых за здоровый образ жизни!
            Развивайся, достигай целей и меняй мир вместе с нами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="academy-gradient text-white hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              <Icon name="Rocket" className="w-5 h-5 mr-2" />
              Начать марафон
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-academy-blue text-academy-blue hover:bg-academy-blue hover:text-white"
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Смотреть видео
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-academy-red mb-2">
                12K+
              </div>
              <div className="text-gray-600">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-academy-blue mb-2">
                89
              </div>
              <div className="text-gray-600">Городов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-academy-orange mb-2">
                365
              </div>
              <div className="text-gray-600">Дней в году</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-academy-red mb-2">
                100%
              </div>
              <div className="text-gray-600">Результат</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-academy-red/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-academy-blue/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-academy-orange/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
