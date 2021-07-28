import Title from "./Title";
import NewsItem from "./NewsItem";
import CurrencyItem from "./CurrencyItem";

export default function News() {
  return (
    <section>
      <Title text="Сейчас в СМИ" link="#" />
      <Title text="В Германии" link="#" selected={false} />
      <Title text="Рекомендуем" link="#" selected={false} />
      <div className="date" />
        <NewsItem />
        <CurrencyItem />
    </section>
  );
}