import PropTypes from 'prop-types';
import s from "./Statistics.module.css";
import StaticItem from "../StaticItem/StaticItem";

export default function Statistics({ title, stats }) {
    const isTitle = { title };

    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{isTitle && title}</h2>
            <ul>
            {stats.map(stat =>(<li key ={stat.id}>
                <StaticItem label={stat.label} percentage={stat.percentage} />
            </li>))
            }
        </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}
