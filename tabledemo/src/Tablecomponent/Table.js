
import { useTable } from "react-table";


function Table(){
    const data = [
        {
            id : 1,
            name : 'Harvey',
            salary : 123456
        },
        {
            id : 2,
            name : 'Rachel',
            salary : 121212
        },
        {
            id : 3,
            name : 'Mike',
            salary : 123321
        },
        {
            id : 4,
            name : 'Louis',
            salary : 123333
        }
    ]

    const columns = [
        {
            Header : 'ID',
            accessor : 'id'
        },
        {
            Header : 'NAME',
            accessor : 'name'
        },
        {
            Header : 'SALARY',
            accessor : 'salary'
        }
    ]

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data});

    return(
        <div>
            <table {...getTableProps()} style={{'border' : '1px solid lightgreen'}}>
                <thead>
                    {headerGroups.map(headerGroup =>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>(
                                <th {...column.getHeaderProps()} style={{'border' : '1px solid red', 'color' : 'lightgreen'}}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return(
                                        <td {...cell.getCellProps()} style={{'border' : '1px solid blue', 'padding' : '30px'}}> 
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;