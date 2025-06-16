import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white py-24 overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8">
          <Icon name="Zap" size={16} className="text-blue-400 mr-2" />
          <span className="text-sm text-blue-300">
            Астрономическая точность в юридических вопросах
          </span>
        </div>

        <h1 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Банкротство физических лиц
          <span className="block text-4xl mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            с космической точностью
          </span>
        </h1>

        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Профессиональная юридическая помощь в процедуре банкротства. Навигация
          через сложности законодательства с гарантией результата.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 text-lg rounded-full border-0 shadow-2xl shadow-blue-500/25"
          >
            <Icon name="Rocket" className="mr-3" size={20} />
            Запустить процедуру
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 px-10 py-4 text-lg rounded-full backdrop-blur-sm"
          >
            <Icon name="Calculator" className="mr-3" size={20} />
            Рассчитать орбиту
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;
