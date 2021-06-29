import PropTypes from 'prop-types';
import s from "./StaticItem.module.css";

export default function StaticItem({ label, percentage }){
    return (
        <>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{ percentage}%</span>
        </>
    )
}

StaticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}