import { useState } from "react";
import { Shield, Search, AlertTriangle, FileText, Users, Clock } from "lucide-react";
import InfoModal from "./InfoModal";

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: "data-removal",
      icon: Shield,
      title: "Удаление данных",
      description: "Профессиональное удаление компрометирующей информации",
      modalContent: "Мы используем передовые технологии и юридические инструменты для полного удаления нежелательной информации о вас из интернета. Наша команда работает с поисковыми системами, социальными сетями и другими платформами для обеспечения максимальной эффективности процесса удаления."
    },
    {
      id: "leak-monitoring",
      icon: Search,
      title: "Проверка утечек",
      description: "Мониторинг появления ваших данных в сети",
      modalContent: "Наша система постоянно сканирует интернет на предмет появления ваших персональных данных в различных базах данных, форумах и других ресурсах. Мы используем продвинутые алгоритмы поиска и машинное обучение для обнаружения даже скрытых упоминаний ваших данных."
    },
    {
      id: "reputation-protection",
      icon: AlertTriangle,
      title: "Защита репутации",
      description: "Комплексная защита вашей цифровой репутации",
      modalContent: "Мы помогаем поддерживать положительный имидж в интернете, работая над подавлением негативного контента и продвижением позитивной информации. Наши специалисты используют SEO-технологии и контент-маркетинг для создания сильного цифрового присутствия."
    },
    {
      id: "legal-support",
      icon: FileText,
      title: "Юридическая поддержка",
      description: "Правовое сопровождение по вопросам защиты данных",
      modalContent: "Наша юридическая команда специализируется на законах о защите персональных данных и может предоставить полную правовую поддержку в случаях нарушения ваших прав на приватность. Мы работаем в соответствии с GDPR и другими международными стандартами."
    },
    {
      id: "corporate-services",
      icon: Users,
      title: "Корпоративные услуги",
      description: "Защита данных для бизнеса и организаций",
      modalContent: "Мы предлагаем комплексные решения для защиты корпоративных данных, включая обучение сотрудников, аудит безопасности и разработку политик конфиденциальности. Наши услуги помогают компаниям соответствовать требованиям регуляторов и защищать коммерческую информацию."
    },
    {
      id: "emergency-response",
      icon: Clock,
      title: "Экстренное реагирование",
      description: "Быстрое реагирование на критические ситуации",
      modalContent: "В случае критических утечек данных или кибератак мы предоставляем услуги экстренного реагирования 24/7. Наша команда может быстро мобилизоваться для минимизации ущерба и восстановления контроля над ситуацией в кратчайшие сроки."
    }
  ];

  const modalData = services.find(service => service.id === activeModal);

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-gradient mb-6 animate-fade-up">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Полный спектр решений для защиты ваших данных и цифровой безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card group cursor-pointer"
                onClick={() => setActiveModal(service.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <Icon className="h-12 w-12 text-cyber-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4 text-cyber-blue text-sm group-hover:text-cyber-red transition-colors">
                    Нажмите для подробностей →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Info */}
        <div className="mt-20 text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-cyber-gradient mb-4">
              Доверие профессионалов
            </h3>
            <p className="text-muted-foreground mb-4">
              Мы работаем в партнерстве с компанией All Safe Areas, 
              признанным лидером в области цифровой безопасности
            </p>
            <div className="flex items-center justify-center text-cyber-blue">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-semibold">Сертифицированный партнер All Safe Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <InfoModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={modalData?.title || ""}
        content={modalData?.modalContent || ""}
      />
    </section>
  );
};

export default ServicesSection;