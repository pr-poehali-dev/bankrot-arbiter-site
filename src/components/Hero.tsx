import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Банкротство физических лиц
          <span className="block text-sky-400 mt-2">
            с гарантией результата
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональная юридическая помощь в процедуре банкротства.
          Онлайн-консультации, полное сопровождение, прозрачные цены.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 px-8 py-3 text-lg"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
          >
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
