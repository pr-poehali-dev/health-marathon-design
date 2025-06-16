import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 academy-gradient rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-4 h-4 text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl academy-text-gradient">
              Марафон Здоровья
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-academy-red ${
                location.pathname === "/" ? "text-academy-red" : "text-gray-600"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/dashboard"
              className={`font-medium transition-colors hover:text-academy-blue ${
                location.pathname === "/dashboard"
                  ? "text-academy-blue"
                  : "text-gray-600"
              }`}
            >
              Мой кабинет
            </Link>
            <Button className="academy-gradient text-white hover:scale-105 transition-transform">
              Присоединиться
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
