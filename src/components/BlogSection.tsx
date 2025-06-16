import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BlogSection = () => {
  const articles = [
    {
      title: "Квантовая подготовка к банкротству: алгоритм выживания",
      excerpt:
        "Полный гид по навигации через астероидные поля документооборота и планированию межпланетного маршрута к финансовой свободе.",
      date: "15 июня 2024",
      readTime: "7 световых минут",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop",
      category: "Навигация",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Новые координаты в законодательной галактике 2024",
      excerpt:
        "Обновления звездных карт правового поля и их влияние на траектории банкротных процедур в новом временном измерении.",
      date: "10 июня 2024",
      readTime: "5 парсеков",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      category: "Законы",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "5 мифов о черных дырах банкротства",
      excerpt:
        "Развенчиваем популярные космические заблуждения о процедуре банкротства и раскрываем истинную природу финансовых квазаров.",
      date: "5 июня 2024",
      readTime: "6 квантов",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      category: "Мифы",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      {/* Cosmic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-2 mb-6">
            <Icon name="BookOpen" size={16} className="text-emerald-400 mr-2" />
            <span className="text-sm text-emerald-300">Архив знаний</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Хроники галактического права
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Актуальные записи из журналов межзвездных юридических экспедиций
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${article.gradient} px-3 py-1 rounded-full text-white text-xs font-medium`}
                >
                  {article.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <Icon
                    name="Calendar"
                    size={14}
                    className="mr-2 text-blue-400"
                  />
                  {article.date}
                  <span className="mx-3 text-slate-600">•</span>
                  <Icon
                    name="Clock"
                    size={14}
                    className="mr-2 text-purple-400"
                  />
                  {article.readTime}
                </div>

                <h3 className="font-bold text-white text-xl leading-tight mb-4 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-all"
                >
                  Исследовать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 rounded-full px-10 py-4 backdrop-blur-sm"
          >
            <Icon name="Telescope" className="mr-3" size={18} />
            Обзор всей галактики
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
