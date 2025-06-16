import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    { number: "500+", label: "Успешных миссий", icon: "Trophy" },
    { number: "15", label: "Световых лет опыта", icon: "Clock" },
    { number: "98%", label: "Точность попадания", icon: "Target" },
    { number: "24/7", label: "Связь с базой", icon: "Radio" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
              <Icon name="User" size={16} className="text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Командир миссии</span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ваш персональный штурман в галактике банкротства
            </h2>

            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Меня зовут Анна Петрова. Я капитан космического корабля
              правосудия, специализирующийся на навигации через астероидные поля
              долгов уже более 15 лет.
            </p>

            <p className="text-blue-100 mb-10 leading-relaxed text-lg">
              Моя миссия — провести каждого клиента через черные дыры финансовых
              проблем к новым звездным системам возможностей. Каждое дело — это
              уникальная траектория к свободе.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center text-blue-200 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4">
                <Icon name="Award" size={20} className="text-yellow-400 mr-3" />
                <span className="text-sm">Орден Адвокатуры</span>
              </div>
              <div className="flex items-center text-blue-200 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4">
                <Icon
                  name="GraduationCap"
                  size={20}
                  className="text-green-400 mr-3"
                />
                <span className="text-sm">Академия МГУ</span>
              </div>
              <div className="flex items-center text-blue-200 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4">
                <Icon
                  name="Shield"
                  size={20}
                  className="text-purple-400 mr-3"
                />
                <span className="text-sm">Защитное поле</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {item.number}
                    </div>
                    <div className="text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Quote" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-purple-100 italic mb-4 text-lg leading-relaxed">
                    "Банкротство — это не крушение корабля, а телепортация в
                    новую галактику возможностей. Моя задача — быть вашим
                    проводником в этом квантовом скачке."
                  </p>
                  <p className="text-sm text-purple-300 font-medium">
                    — Капитан Анна Петрова
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
