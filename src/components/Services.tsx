import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Квантовые консультации",
      description:
        "Мгновенная диагностика вашей финансовой ситуации через защищенные каналы связи",
      icon: "Satellite",
      features: [
        "Криптозащищенная связь",
        "AI-анализ документов",
        "Персональная траектория",
      ],
      price: "от 3 000 ₽",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Навигационный калькулятор",
      description:
        "Точный расчет стоимости с учетом всех переменных и космических факторов",
      icon: "Compass",
      features: [
        "Квантовые вычисления",
        "Многомерный анализ",
        "Прогнозное моделирование",
      ],
      price: "Бесплатно",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Архив галактики",
      description:
        "Полная база документов и форм, обновляемая в режиме реального времени",
      icon: "Database",
      features: [
        "Голографические формы",
        "Автозаполнение ИИ",
        "Блокчейн-верификация",
      ],
      price: "Включено",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <Icon name="Stars" size={16} className="text-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Созвездие услуг</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Наша звездная система
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Комплексные решения для навигации в космосе банкротства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`mx-auto w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center border-t border-slate-700 pt-6">
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {service.price}
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 rounded-xl border-0 py-3`}
                  >
                    Исследовать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
