import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title="", stats }) => {
    return (
      <section className={css.statistics}>
        {title.length > 0 && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map((item) => (
            <li
              className={css.item}
              key={item.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Statistics.PropTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.exact({
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   })
// }