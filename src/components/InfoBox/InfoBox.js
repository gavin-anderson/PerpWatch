import React from "react";
import {useTable} from 'react-table';
import { ReactComponent as Question } from '../../assets/interrogation.svg';
import {Tooltip} from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
import './InfoBox.css';

const InfoBox = ()=>{
    const data = React.useMemo(
        ()=>[

            { perpetualMarket: 'BTC/USD', marketPrice: '50500', fundingRate: '0.01%', hourChange: '-7.08%', openInterestLong: '$13.45M/$79.52M', openInterestShort: '$13.28M/$79.52M', skew: '50%/50%' }, //Kwenta
            { perpetualMarket: 'ETH/USD', marketPrice: '4020', fundingRate: '0.02%', hourChange: '-1%', openInterestLong: '800 ETH', openInterestShort: '850 ETH', skew: '30%' },
            { perpetualMarket: 'BTC/USD', marketPrice: '50500', fundingRate: '0.01%', hourChange: '-7.08%', openInterestLong: '$13.45M/$79.52M', openInterestShort: '$13.28M/$79.52M', skew: '50%/50%' }, //Kwenta
            { perpetualMarket: 'ETH/USD', marketPrice: '4020', fundingRate: '0.02%', hourChange: '-1%', openInterestLong: '800 ETH', openInterestShort: '850 ETH', skew: '30%' },
            { perpetualMarket: 'BTC/USD', marketPrice: '50500', fundingRate: '0.01%', hourChange: '-7.08%', openInterestLong: '$13.45M/$79.52M', openInterestShort: '$13.28M/$79.52M', skew: '50%/50%' }, //Kwenta
            { perpetualMarket: 'ETH/USD', marketPrice: '4020', fundingRate: '0.02%', hourChange: '-1%', openInterestLong: '800 ETH', openInterestShort: '850 ETH', skew: '30%' }
        ],[]
    )
    
    const columns = React.useMemo(
        ()=>[
            {
                Header: ()=> (
                    <span>
                        Perpetual Market <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'perpetualMarket',
            },
            {
                Header: ()=> (
                    <span>
                        Market Price <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'marketPrice',
            },
            {
                Header: ()=> (
                    <span>
                        Funding Rate <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'fundingRate',
            },
            {
                Header: ()=> (
                    <span>
                        24 Hour Change <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'hourChange',
            },
            {
                Header: ()=> (
                    <span>
                        Open Interest: Long <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'openInterestLong',
            },
            {
                Header: ()=> (
                    <span>
                        Open Interest: Short <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'openInterestShort',
            },
            {
                Header: ()=> (
                    <span>
                        Skew <span data-tooltip-id ="header-tooltip" data-tooltip-content="Hello World"data-tooltip-place="bottom"><Question className="tooltip-image"/> </span>
                        <Tooltip id = "header-tooltip"className="tooltip-info"/>
                    </span>
                ),
                accessor:'skew',
            },
        ],
        []
    );



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns,data});

    return(
        <div className = 'table-container'>
            <h2> All Funds</h2>
            <div className="table-scroll-container">
                <table{...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map(headerGroup=>(
                            <tr{...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column =>(
                                    <th{...column.getHeaderProps()}> {column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody{...getTableBodyProps()} className="tbody">
                    {rows.map(row=>{
                        prepareRow(row);
                        return(
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell =>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default InfoBox;
