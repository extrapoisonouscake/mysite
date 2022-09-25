import classnames from "./index.module.scss";

//❤️ Код функции вывода даты был с любовью и ленью позаимствован у https://stackoverflow.com/questions/5914020/javascript-date-to-string
const printDate = (date) => {
  function padStr(i) {
    return i < 10 ? "0" + i : "" + i;
  }
  const temp = new Date(date);
  const dateStr = `${padStr(temp.getFullYear())}.${padStr(1 + temp.getMonth())}.${padStr(temp.getDate())} ${padStr(temp.getHours())}:${padStr(temp.getMinutes())}`;
  return dateStr;
};
export default function Article(props) {
  const { title, thumbnail, path, description, published_at } = props;
  return (
    <a href={`https://dev.to/${path}`}>
      <div className={classnames.card}>
        <div className={classnames.thumbnail}>
          <img src={thumbnail} alt={`${title} article thumbnail`} />
        </div>
        <div className={classnames.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="text_tiny">Опубликована {printDate(published_at)}</p></div>
      </div>
    </a>
  );
}
