import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activePage, setActivePage] = useState('main');

  const periodElements = [
    { symbol: 'H', name: 'Водород', number: 1 },
    { symbol: 'He', name: 'Гелий', number: 2 },
    { symbol: 'Li', name: 'Литий', number: 3 },
    { symbol: 'Be', name: 'Бериллий', number: 4 },
    { symbol: 'B', name: 'Бор', number: 5 },
    { symbol: 'C', name: 'Углерод', number: 6 },
    { symbol: 'N', name: 'Азот', number: 7 },
    { symbol: 'O', name: 'Кислород', number: 8 },
  ];

  const achievements = [
    {
      year: '1869',
      title: 'Периодическая система элементов',
      description: 'Открытие периодического закона химических элементов, ставшее величайшим достижением науки XIX века'
    },
    {
      year: '1887',
      title: 'Теория растворов',
      description: 'Разработка гидратной теории растворов, объясняющей природу химических соединений'
    },
    {
      year: '1892',
      title: 'Бездымный порох',
      description: 'Создание рецептуры пироколлодийного пороха для нужд российской армии'
    }
  ];

  const timeline = [
    { year: '1834', event: 'Рождение в Тобольске' },
    { year: '1850', event: 'Поступление в Главный педагогический институт' },
    { year: '1869', event: 'Открытие периодического закона' },
    { year: '1907', event: 'Кончина в Санкт-Петербурге' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#E8D5C0] to-[#D4C5B0]">
      <nav className="bg-gradient-to-r from-[#8B4513] to-[#654321] text-[#F5E6D3] shadow-lg border-b-4 border-[#D4AF37]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-bold tracking-wide">
              Д.И. Менделеев
            </h1>
            <div className="flex gap-2">
              {[
                { id: 'main', label: 'Главная', icon: 'Home' },
                { id: 'science', label: 'Научные открытия', icon: 'Atom' },
                { id: 'legacy', label: 'Наследие', icon: 'BookOpen' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' }
              ].map((page) => (
                <Button
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  variant={activePage === page.id ? 'default' : 'outline'}
                  className={`font-body ${activePage === page.id ? 'bg-[#D4AF37] text-[#2C1810] hover:bg-[#C5A028] border-2 border-[#8B4513]' : 'bg-transparent text-[#F5E6D3] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1810]'}`}
                >
                  <Icon name={page.icon as any} size={18} className="mr-2" />
                  {page.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activePage === 'main' && (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-fade-in">
          <section className="relative">
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative ornament-corner">
                    <img 
                      src="https://cdn.poehali.dev/projects/96052322-3d61-40b9-9a02-d0adc89ed4bf/files/e2e632ba-1235-4026-95e7-39c332de451f.jpg"
                      alt="Дмитрий Иванович Менделеев"
                      className="rounded-lg shadow-xl border-4 border-[#8B4513] sepia"
                    />
                  </div>
                  <div>
                    <h2 className="text-5xl font-serif font-bold text-[#2C1810] mb-4">
                      Дмитрий Иванович Менделеев
                    </h2>
                    <p className="text-lg text-[#2C1810]/80 font-body leading-relaxed mb-4">
                      Выдающийся русский учёный-энциклопедист, создатель периодической системы химических элементов.
                    </p>
                    <div className="flex gap-4 text-[#8B4513] mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-serif font-bold">1834</div>
                        <div className="text-sm font-body">Год рождения</div>
                      </div>
                      <div className="text-4xl">—</div>
                      <div className="text-center">
                        <div className="text-3xl font-serif font-bold">1907</div>
                        <div className="text-sm font-body">Год кончины</div>
                      </div>
                    </div>
                    <Button className="bg-[#1A472A] hover:bg-[#0F3D1F] text-[#F5E6D3] font-body text-lg px-8">
                      <Icon name="BookOpen" size={20} className="mr-2" />
                      Читать биографию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h3 className="text-4xl font-serif font-bold text-[#2C1810] mb-8 text-center">
              Жизненный путь
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, idx) => (
                <Card key={idx} className="vintage-border bg-[#F5E6D3] hover:scale-105 transition-transform duration-300 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl font-serif text-[#8B4513] text-center">
                      {item.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center font-body text-[#2C1810]/80">{item.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] flex items-center gap-3">
                  <Icon name="GraduationCap" size={32} className="text-[#8B4513]" />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-3 leading-relaxed">
                <p>Окончил Главный педагогический институт в Санкт-Петербурге с золотой медалью.</p>
                <p>Защитил докторскую диссертацию «О соединении спирта с водой».</p>
                <p>Стажировался в университетах Германии и Франции.</p>
              </CardContent>
            </Card>

            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] flex items-center gap-3">
                  <Icon name="Award" size={32} className="text-[#D4AF37]" />
                  Признание
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-3 leading-relaxed">
                <p>Почётный член множества российских и зарубежных академий наук.</p>
                <p>Награждён орденами Российской империи и иностранных государств.</p>
                <p>Его именем назван элемент №101 — Менделевий.</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#1A472A] to-[#0F3D1F] text-[#F5E6D3] shadow-2xl">
              <CardContent className="p-8 text-center">
                <blockquote className="text-2xl font-serif italic leading-relaxed">
                  «Периодическому закону не грозит разрушение, а только надстройки и развитие обещаются»
                </blockquote>
                <p className="mt-4 text-lg font-body opacity-90">— Д.И. Менделеев</p>
              </CardContent>
            </Card>
          </section>
        </div>
      )}

      {activePage === 'science' && (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-fade-in">
          <section>
            <h2 className="text-5xl font-serif font-bold text-[#2C1810] mb-8 text-center">
              Научные открытия
            </h2>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif text-[#8B4513] mb-6 text-center">
                  Периодическая система химических элементов
                </h3>
                <div className="grid grid-cols-8 gap-2 mb-8">
                  {periodElements.map((el) => (
                    <div 
                      key={el.number}
                      className="aspect-square border-2 border-[#8B4513] bg-[#F5E6D3] hover:bg-[#D4AF37] transition-colors cursor-pointer flex flex-col items-center justify-center p-2 shadow-md"
                    >
                      <div className="text-xs font-body text-[#2C1810]/60">{el.number}</div>
                      <div className="text-2xl font-serif font-bold text-[#2C1810]">{el.symbol}</div>
                      <div className="text-xs font-body text-[#2C1810]/80 text-center">{el.name}</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-body text-[#2C1810]/80 text-center leading-relaxed">
                  17 февраля 1869 года — день открытия периодического закона. Менделеев расположил все известные 
                  элементы в порядке возрастания их атомных весов, открыв периодическую зависимость свойств.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h3 className="text-4xl font-serif font-bold text-[#2C1810] mb-8 text-center">
              Основные достижения
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="vintage-border bg-[#F5E6D3] shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-6 items-start">
                      <div className="text-5xl font-serif font-bold text-[#D4AF37] min-w-[100px]">
                        {achievement.year}
                      </div>
                      <div>
                        <h4 className="text-2xl font-serif font-bold text-[#2C1810] mb-3">
                          {achievement.title}
                        </h4>
                        <p className="text-lg font-body text-[#2C1810]/80 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] text-center">
                  Области исследований
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="chemistry" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-[#E8D5C0]">
                    <TabsTrigger value="chemistry" className="font-body data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#F5E6D3]">Химия</TabsTrigger>
                    <TabsTrigger value="physics" className="font-body data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#F5E6D3]">Физика</TabsTrigger>
                    <TabsTrigger value="metrology" className="font-body data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#F5E6D3]">Метрология</TabsTrigger>
                    <TabsTrigger value="economics" className="font-body data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#F5E6D3]">Экономика</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chemistry" className="mt-6 font-body text-[#2C1810]/80 leading-relaxed space-y-3">
                    <p>Создание периодической системы химических элементов</p>
                    <p>Исследование химической природы растворов</p>
                    <p>Разработка теории пределов взрывчатых веществ</p>
                  </TabsContent>
                  <TabsContent value="physics" className="mt-6 font-body text-[#2C1810]/80 leading-relaxed space-y-3">
                    <p>Изучение температуры абсолютного кипения жидкостей</p>
                    <p>Исследования в области физической химии газов</p>
                    <p>Работы по сопротивлению жидкостей</p>
                  </TabsContent>
                  <TabsContent value="metrology" className="mt-6 font-body text-[#2C1810]/80 leading-relaxed space-y-3">
                    <p>Создание Главной палаты мер и весов</p>
                    <p>Введение метрической системы в России</p>
                    <p>Разработка эталонов точности измерений</p>
                  </TabsContent>
                  <TabsContent value="economics" className="mt-6 font-body text-[#2C1810]/80 leading-relaxed space-y-3">
                    <p>Исследования в области промышленности и торговли</p>
                    <p>Работы по развитию нефтяной промышленности</p>
                    <p>Труды о таможенных тарифах России</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Flask', title: 'Химия', count: '500+', label: 'публикаций' },
              { icon: 'Lightbulb', title: 'Открытия', count: '20+', label: 'направлений' },
              { icon: 'Users', title: 'Ученики', count: '100+', label: 'последователей' }
            ].map((stat, idx) => (
              <Card key={idx} className="vintage-border bg-gradient-to-br from-[#1A472A] to-[#0F3D1F] text-[#F5E6D3] shadow-xl text-center">
                <CardContent className="p-8">
                  <Icon name={stat.icon as any} size={48} className="mx-auto mb-4 text-[#D4AF37]" />
                  <div className="text-4xl font-serif font-bold mb-2">{stat.count}</div>
                  <div className="text-xl font-body">{stat.label}</div>
                  <div className="text-sm font-body opacity-80 mt-2">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      )}

      {activePage === 'legacy' && (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-fade-in">
          <section>
            <h2 className="text-5xl font-serif font-bold text-[#2C1810] mb-8 text-center">
              Наследие Менделеева
            </h2>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] flex items-center gap-3">
                  <Icon name="Globe" size={32} className="text-[#8B4513]" />
                  Мировое признание
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-4 leading-relaxed">
                <p>Периодический закон стал основой современной химии и физики.</p>
                <p>Предсказания Менделеева о новых элементах блестяще подтвердились.</p>
                <p>Его система используется учёными всего мира уже более 150 лет.</p>
                <div className="pt-4 border-t-2 border-[#8B4513]">
                  <p className="font-semibold text-[#2C1810]">Элемент Менделевий (Md, №101)</p>
                  <p className="text-sm">Открыт в 1955 году и назван в честь великого учёного</p>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] flex items-center gap-3">
                  <Icon name="Building" size={32} className="text-[#D4AF37]" />
                  Институты и памятники
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-4 leading-relaxed">
                <p>Российский химико-технологический университет носит имя Менделеева.</p>
                <p>Памятники учёному установлены в России и за рубежом.</p>
                <p>Музей-архив Д.И. Менделеева при Санкт-Петербургском университете.</p>
                <div className="pt-4 border-t-2 border-[#D4AF37]">
                  <p className="font-semibold text-[#2C1810]">Кратер на Луне</p>
                  <p className="text-sm">Назван именем Менделеева в 1970 году</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="vintage-border bg-[#F5E6D3] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] text-center">
                  Влияние на науку
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-[#8B4513]">
                    <AccordionTrigger className="text-xl font-serif text-[#2C1810] hover:text-[#8B4513]">
                      Развитие химии
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#2C1810]/80 leading-relaxed text-base">
                      Периодическая система упорядочила все знания о химических элементах и стала основой для 
                      развития неорганической химии. Благодаря периодическому закону были открыты десятки новых 
                      элементов, а также объяснены свойства уже известных веществ.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-[#8B4513]">
                    <AccordionTrigger className="text-xl font-serif text-[#2C1810] hover:text-[#8B4513]">
                      Развитие физики
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#2C1810]/80 leading-relaxed text-base">
                      Работы Менделеева способствовали развитию атомной физики и квантовой механики. 
                      Периодический закон стал одним из первых указаний на сложное строение атома и 
                      помог в создании современной модели атомного ядра.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-[#8B4513]">
                    <AccordionTrigger className="text-xl font-serif text-[#2C1810] hover:text-[#8B4513]">
                      Промышленное применение
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#2C1810]/80 leading-relaxed text-base">
                      Исследования Менделеева в области нефтепереработки, металлургии и химической технологии 
                      заложили основы современной химической промышленности России. Его работы по бездымному 
                      пороху имели важное оборонное значение.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-[#8B4513]">
                    <AccordionTrigger className="text-xl font-serif text-[#2C1810] hover:text-[#8B4513]">
                      Образование и просвещение
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[#2C1810]/80 leading-relaxed text-base">
                      Менделеев написал фундаментальный учебник «Основы химии», который переиздавался более 
                      100 раз и переведён на многие языки. Он воспитал целую плеяду выдающихся русских учёных 
                      и внёс огромный вклад в развитие российского образования.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <Card className="vintage-border bg-gradient-to-br from-[#1A472A] to-[#0F3D1F] text-[#F5E6D3] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center">
                  Награды и звания
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Medal" size={24} className="text-[#D4AF37]" />
                  <span>Орден Святого Владимира II степени</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Medal" size={24} className="text-[#D4AF37]" />
                  <span>Орден Святой Анны I степени</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Medal" size={24} className="text-[#D4AF37]" />
                  <span>Медаль Копли Лондонского королевского общества</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Medal" size={24} className="text-[#D4AF37]" />
                  <span>Почётный член 90+ научных обществ</span>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#2C1810] text-center">
                  Литературное наследие
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={24} className="text-[#8B4513]" />
                  <span>«Основы химии» (1869-1871)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={24} className="text-[#8B4513]" />
                  <span>«О соединении спирта с водой» (1865)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={24} className="text-[#8B4513]" />
                  <span>«Заветные мысли» (1905)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={24} className="text-[#8B4513]" />
                  <span>Более 500 научных работ</span>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardContent className="p-8 text-center">
                <Icon name="Quote" size={48} className="mx-auto mb-4 text-[#D4AF37]" />
                <blockquote className="text-2xl font-serif italic text-[#2C1810] leading-relaxed mb-4">
                  «Границ научному познанию и предсказанию предвидеть невозможно»
                </blockquote>
                <p className="text-lg font-body text-[#2C1810]/70">— Д.И. Менделеев</p>
              </CardContent>
            </Card>
          </section>
        </div>
      )}

      {activePage === 'gallery' && (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-fade-in">
          <section>
            <h2 className="text-5xl font-serif font-bold text-[#2C1810] mb-8 text-center">
              Галерея документов и артефактов
            </h2>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] text-center">
                  Исторические документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Первая таблица', year: '1869', desc: 'Оригинальная рукопись периодической системы' },
                    { title: 'Диплом', year: '1850', desc: 'Диплом об окончании института с золотой медалью' },
                    { title: 'Рукопись', year: '1887', desc: 'Заметки по теории растворов' }
                  ].map((doc, idx) => (
                    <Card key={idx} className="vintage-border bg-[#F5E6D3] hover:shadow-2xl transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="aspect-square bg-gradient-to-br from-[#E8D5C0] to-[#D4C5B0] rounded-lg mb-4 flex items-center justify-center border-4 border-[#8B4513]">
                          <Icon name="FileText" size={64} className="text-[#8B4513]" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-[#2C1810] mb-2">{doc.title}</h4>
                        <p className="text-sm font-body text-[#D4AF37] mb-2">{doc.year}</p>
                        <p className="text-sm font-body text-[#2C1810]/70">{doc.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] text-center">
                  Научные инструменты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: 'Flask', name: 'Химическая колба', desc: 'Из лаборатории Менделеева' },
                    { icon: 'Scale', name: 'Весы', desc: 'Аналитические весы XIX века' },
                    { icon: 'Beaker', name: 'Реторта', desc: 'Для перегонки жидкостей' },
                    { icon: 'TestTube', name: 'Пробирки', desc: 'Стеклянная посуда эпохи' }
                  ].map((item, idx) => (
                    <Card key={idx} className="vintage-border bg-[#F5E6D3] hover:scale-105 transition-transform">
                      <CardContent className="p-6 text-center">
                        <div className="aspect-square bg-gradient-to-br from-[#E8D5C0] to-[#D4C5B0] rounded-lg mb-4 flex items-center justify-center border-2 border-[#8B4513]">
                          <Icon name={item.icon as any} size={48} className="text-[#8B4513]" />
                        </div>
                        <h4 className="text-lg font-serif font-bold text-[#2C1810] mb-2">{item.name}</h4>
                        <p className="text-sm font-body text-[#2C1810]/70">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <Card className="vintage-border bg-gradient-to-br from-[#1A472A] to-[#0F3D1F] text-[#F5E6D3] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center flex items-center justify-center gap-3">
                  <Icon name="MapPin" size={28} className="text-[#D4AF37]" />
                  Места памяти
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body space-y-4">
                <div className="p-4 bg-[#F5E6D3]/10 rounded-lg">
                  <h5 className="font-semibold mb-2">Тобольск</h5>
                  <p className="text-sm opacity-90">Город, где родился великий учёный</p>
                </div>
                <div className="p-4 bg-[#F5E6D3]/10 rounded-lg">
                  <h5 className="font-semibold mb-2">Санкт-Петербург</h5>
                  <p className="text-sm opacity-90">Университет и квартира-музей Менделеева</p>
                </div>
                <div className="p-4 bg-[#F5E6D3]/10 rounded-lg">
                  <h5 className="font-semibold mb-2">Москва</h5>
                  <p className="text-sm opacity-90">РХТУ имени Д.И. Менделеева</p>
                </div>
              </CardContent>
            </Card>

            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#2C1810] text-center flex items-center justify-center gap-3">
                  <Icon name="Camera" size={28} className="text-[#8B4513]" />
                  Фотоархив
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-[#2C1810]/80 space-y-4">
                <div className="p-4 border-2 border-[#8B4513] rounded-lg">
                  <h5 className="font-semibold text-[#2C1810] mb-2">Портреты</h5>
                  <p className="text-sm">Фотографии разных периодов жизни учёного</p>
                </div>
                <div className="p-4 border-2 border-[#8B4513] rounded-lg">
                  <h5 className="font-semibold text-[#2C1810] mb-2">В лаборатории</h5>
                  <p className="text-sm">Менделеев за работой в химической лаборатории</p>
                </div>
                <div className="p-4 border-2 border-[#8B4513] rounded-lg">
                  <h5 className="font-semibold text-[#2C1810] mb-2">С учениками</h5>
                  <p className="text-sm">Групповые фото с коллегами и студентами</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="vintage-border bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-[#2C1810] text-center">
                  Интересные факты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: 'Plane',
                      title: 'Полёт на воздушном шаре',
                      text: 'В 1887 году Менделеев в одиночку поднялся на воздушном шаре для наблюдения солнечного затмения'
                    },
                    {
                      icon: 'Briefcase',
                      title: 'Мастер-чемоданщик',
                      text: 'Менделеев увлекался изготовлением чемоданов и был признан лучшим мастером в Петербурге'
                    },
                    {
                      icon: 'Wine',
                      title: 'Миф о водке',
                      text: 'Вопреки легенде, Менделеев не изобретал водку, хотя изучал растворы спирта в своей диссертации'
                    },
                    {
                      icon: 'Palette',
                      title: 'Любовь к искусству',
                      text: 'Учёный был членом Академии художеств и активно поддерживал развитие русской живописи'
                    }
                  ].map((fact, idx) => (
                    <Card key={idx} className="vintage-border bg-[#F5E6D3] hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-lg">
                            <Icon name={fact.icon as any} size={32} className="text-[#D4AF37]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-serif font-bold text-[#2C1810] mb-2">{fact.title}</h4>
                            <p className="text-sm font-body text-[#2C1810]/80 leading-relaxed">{fact.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      )}

      <footer className="bg-gradient-to-r from-[#2C1810] to-[#1A472A] text-[#F5E6D3] py-8 mt-12 border-t-4 border-[#D4AF37]">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-lg mb-2">
            Дмитрий Иванович Менделеев
          </p>
          <p className="font-body text-sm opacity-80">
            1834 — 1907 • Великий русский учёный-энциклопедист
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
