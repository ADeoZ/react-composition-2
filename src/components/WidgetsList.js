import Widget from "./Widget";
import Weather from "./Weather";
import FavoritesItem from "./FavoritesItem";
import TvItem from "./TvItem";
import EfirItem from "./EfirItem";

export default function WidgetsList() {
  return (
    <section>
      <Widget title="Погода">
        <Weather />
      </Widget>
      <Widget title="Посещаемое">
        <FavoritesItem />
      </Widget>
      <Widget title="Карта Германии">
        Расписания
      </Widget>
      <Widget title="Телепрограмма">
        <TvItem />
      </Widget>
      <Widget title="Эфир">
        <EfirItem />
      </Widget>
    </section>
  );
}