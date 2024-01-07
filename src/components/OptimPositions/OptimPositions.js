import React from "react";
import {useTable} from 'react-table';

import './OptimPositions.css';

const OptimPositions=()=>{

    const columns = React.useMemo(
        () => [
          {
            Header: 'Market',
            accessor: 'market', 
          },
          {
            Header: 'Market Price',
            accessor: 'marketPrice',
          },
          {
            Header: 'Funding Rate',
            accessor: 'fundingRate',
          },
        ],
        []
      );

      const data = React.useMemo(
        () => [
          {
            market: 'BTC/USD',
            marketPrice: '50500',
            fundingRate: '0.01%',
          },
          {
            market: 'ETH/USD',
            marketPrice: '4020',
            fundingRate: '0.02%',
          },
          {
            market: 'BTC/USD',
            marketPrice: '50500',
            fundingRate: '0.01%',
          },
          {
            market: 'ETH/USD',
            marketPrice: '4020',
            fundingRate: '0.02%',
          },
          {
            market: 'BTC/USD',
            marketPrice: '50500',
            fundingRate: '0.01%',
          },
          {
            market: 'ETH/USD',
            marketPrice: '4020',
            fundingRate: '0.02%',
          },
          {
            market: 'BTC/USD',
            marketPrice: '50500',
            fundingRate: '0.01%',
          },
          {
            market: 'ETH/USD',
            marketPrice: '4020',
            fundingRate: '0.02%',
          },
          
        ],
        []
      );


    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({
        columns,data,
    });

    return(
        <div className="optim-tables">
            <div className="optim-table-container">
            <h2>Largest Funding Rate</h2>
            <div className="table-scroll-container">
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                        <tr {...row.getRowProps()} className="up">
                            {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>


        <div className="optim-table-container">
        <h2>Smallest Funding Rate</h2>
        <div className="table-scroll-container">
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} >
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}className="down">
                    {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    );
};
export default OptimPositions;