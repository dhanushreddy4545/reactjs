import './ExpenseItems.css';
function ExpenseItems(props) {

    return (
    <div className='expense-items'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-items__description'>
            <h2>{props.title}</h2>
            <div className='expense-items__price'>${props.amount}</div>
            </div>
            </div>
            );

}
export default ExpenseItems;