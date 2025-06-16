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
      title: "Онлайн-консультации",
      description: "Получите профессиональную консультацию не выходя из дома",
      icon: "Video",
      features: ["Видеоконференция", "Анализ документов", "План действий"],
      price: "от 3 000 ₽",
    },
    {
      title: "Калькулятор стоимости",
      description: "Рассчитайте примерную стоимость процедуры банкротства",
      icon: "Calculator",
      features: ["Мгновенный расчет", "Учет всех факторов", "Детальная смета"],
      price: "Бесплатно",
    },
    {
      title: "База документов",
      description: "Полный комплект необходимых документов и форм",
      icon: "FileText",
      features: ["Актуальные формы", "Инструкции", "Образцы заполнения"],
      price: "Доступ включен",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для успешного прохождения процедуры банкротства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-sky-600"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-sky-600">
                      {service.price}
                    </span>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
