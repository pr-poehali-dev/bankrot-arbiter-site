import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">БанкротПомощь</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Профессиональная помощь в процедуре банкротства физических лиц с
              гарантией результата.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={16} className="text-sky-400" />
              <span className="text-sm text-gray-400">+7 (495) 123-45-67</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Онлайн-консультации
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Калькулятор стоимости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  База документов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Полное сопровождение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Статьи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon name="Mail" size={14} className="mr-2 text-sky-400" />
                info@bankrot-help.ru
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={14} className="mr-2 text-sky-400" />
                Пн-Пт: 9:00-20:00
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={14} className="mr-2 text-sky-400" />
                Москва, ул. Тверская, 1
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 БанкротПомощь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
