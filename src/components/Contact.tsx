import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Получите бесплатную консультацию по вашей ситуации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">
                Напишите нам
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
              </div>
              <Input placeholder="Email" type="email" />
              <Textarea
                placeholder="Опишите вашу ситуацию..."
                className="min-h-[120px]"
              />
              <Button className="w-full bg-sky-500 hover:bg-sky-600">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Icon name="Phone" size={20} className="text-sky-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Icon name="Mail" size={20} className="text-sky-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-gray-600">info@bankrot-help.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={20} className="text-sky-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Режим работы
                    </h3>
                    <p className="text-gray-600">Пн-Пт: 9:00-20:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-sky-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Экстренная консультация
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Если ваша ситуация критична, мы готовы провести консультацию в
                  течение 2 часов
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white"
                >
                  <Icon name="Zap" className="mr-2" size={16} />
                  Срочная консультация
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
