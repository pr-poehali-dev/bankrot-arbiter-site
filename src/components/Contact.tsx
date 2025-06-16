import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <Icon name="Satellite" size={16} className="text-green-400 mr-2" />
            <span className="text-sm text-green-300">Центр связи</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Установить связь с базой
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Откройте канал связи для получения бесплатной консультации по вашей
            ситуации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Icon name="Send" size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Передать сообщение
              </h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Позывной"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
                />
                <Input
                  placeholder="Частота связи"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
                />
              </div>
              <Input
                placeholder="Координаты (Email)"
                type="email"
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
              />
              <Textarea
                placeholder="Описание миссии..."
                className="min-h-[120px] bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
              />
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl py-3 text-lg">
                <Icon name="Rocket" className="mr-2" size={18} />
                Запустить сигнал
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      Прямая линия
                    </h3>
                    <p className="text-blue-200">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      Электронная почта
                    </h3>
                    <p className="text-blue-200">control@astro-bankrot.space</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      Режим работы станции
                    </h3>
                    <p className="text-blue-200">Круглосуточно в космосе</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Icon name="AlertTriangle" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    Аварийный протокол
                  </h3>
                  <p className="text-red-200 text-sm mb-4 leading-relaxed">
                    В случае критической ситуации активируется протокол
                    экстренного реагирования с консультацией в течение 2 часов
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-2 border-red-400/50 text-red-300 hover:bg-red-500/10 hover:border-red-400 rounded-xl py-3"
              >
                <Icon name="Zap" className="mr-2" size={16} />
                Активировать SOS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
