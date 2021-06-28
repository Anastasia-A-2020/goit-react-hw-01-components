import PropTypes from 'prop-types';
import TransactionItem from "../TransactionItem/TransactionItem";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <div>
            <table className={s.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => <TransactionItem key={item.id} type={item.type} amount={item.amount} currency={item.currency}/>)}
                </tbody>
            </table>

        </div >
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array
}
