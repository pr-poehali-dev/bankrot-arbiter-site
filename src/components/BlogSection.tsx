import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BlogSection = () => {
  const articles = [
    {
      title: "Как подготовиться к банкротству: пошаговый план",
      excerpt:
        "Полное руководство по подготовке документов и планированию процедуры банкротства физических лиц.",
      date: "15 июня 2024",
      readTime: "7 мин",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
    },
    {
      title: "Новые изменения в законе о банкротстве в 2024 году",
      excerpt:
        "Обзор последних изменений в законодательстве и их влияние на процедуру банкротства.",
      date: "10 июня 2024",
      readTime: "5 мин",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop",
    },
    {
      title: "5 мифов о банкротстве физических лиц",
      excerpt:
        "Развенчиваем популярные заблуждения о процедуре банкротства и рассказываем правду.",
      date: "5 июня 2024",
      readTime: "6 мин",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Полезные статьи
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Актуальная информация о банкротстве и юридических вопросах
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {article.date}
                  <span className="mx-2">•</span>
                  <Icon name="Clock" size={14} className="mr-1" />
                  {article.readTime}
                </div>
                <h3 className="font-bold text-slate-900 leading-tight">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-sky-600 hover:text-sky-700"
                >
                  Читать далее
                  <Icon name="ArrowRight" size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 hover:bg-slate-50"
          >
            <Icon name="BookOpen" className="mr-2" size={16} />
            Все статьи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
