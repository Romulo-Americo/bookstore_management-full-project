import style from './table.css'

function Table({ col1, col2, col3, col4, col5, children }){
    return(
        <table>
            <thead>
                <th>{col1}</th>
                <th>{col2}</th>
                <th>{col3}</th>
                <th>{col4}</th>
                <th>{col5}</th>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default Table;