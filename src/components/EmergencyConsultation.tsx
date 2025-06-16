import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const EmergencyConsultation = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6 animate-pulse">
            <Icon name="AlertTriangle" size={20} className="text-white mr-2" />
            <span className="text-white font-semibold text-sm">
              ЭКСТРЕННАЯ ПОМОЩЬ 24/7
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Срочная консультация
            <br />
            <span className="text-yellow-200">прямо сейчас</span>
          </h2>

          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Критическая ситуация? Получите мгновенную помощь от наших экспертов
            через защищенные каналы связи
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Icon
                name="Clock"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-white font-bold mb-2">15 минут</h3>
              <p className="text-white/80 text-sm">Среднее время ответа</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Icon
                name="Shield"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-white font-bold mb-2">100% защита</h3>
              <p className="text-white/80 text-sm">Криптозащищенная связь</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Icon
                name="Users"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-white font-bold mb-2">Команда 24/7</h3>
              <p className="text-white/80 text-sm">Всегда на связи</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-white/90 font-bold px-8 py-4 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Экстренный вызов
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн-чат
            </Button>
          </div>

          <div className="mt-8 text-white/80 text-sm">
            <p>
              🚀 Космическая скорость решения проблем • Оплата после результата
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyConsultation;
