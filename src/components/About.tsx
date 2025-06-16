import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    { number: "500+", label: "Успешных дел" },
    { number: "15", label: "Лет опыта" },
    { number: "98%", label: "Положительных решений" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ваш персональный адвокат по банкротству
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Меня зовут Анна Петрова. Я специализируюсь на банкротстве
              физических лиц более 15 лет. За это время помогла сотням людей
              освободиться от долгового бремени и начать новую жизнь.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Мой подход — это индивидуальная работа с каждым клиентом,
              прозрачность процесса и гарантированный результат. Я лично веду
              каждое дело от начала до конца.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-700">
                <Icon name="Award" size={16} className="text-sky-500 mr-2" />
                Член Адвокатской палаты
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Icon
                  name="GraduationCap"
                  size={16}
                  className="text-sky-500 mr-2"
                />
                МГУ им. Ломоносова
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Icon name="Shield" size={16} className="text-sky-500 mr-2" />
                Страхование ответственности
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-sky-600 mb-1">
                        {item.number}
                      </div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-sky-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Quote"
                    size={24}
                    className="text-sky-500 flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "Банкротство — это не конец, а новое начало. Моя задача —
                      провести вас через этот процесс максимально комфортно."
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      — Анна Петрова
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
