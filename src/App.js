import React, {useState} from "react"
import BootstrapTable from "react-bootstrap-table-next"
import data from './matches data.json'
import paginationFactory from "react-bootstrap-table2-paginator"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import './App.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


function App() {
  // const MyExportCSV =(props)=> {
  //   const handleClick = () => {
  //     props.onExport();
  //   };
  //   return (
  //     <div>
  //       <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
  //     </div>
  //   )
  // }

  const [myStyle,setMyStyle]=useState({ backgroundColor: "black", color: "white" })
  const [nvbarStyle,setNvbarStyle]=useState({ backgroundColor: "white", color: "black" })
  const [tableStyle, setTableStyle]=useState({ backgroundColor: "#bb86fc", color: "black" })
  
  const toggleStyle = ()=> {
    if(myStyle.color==='white'){
      setMyStyle({ color:'black', backgroundColor:'white' })
      setNvbarStyle({ color:'white',  backgroundColor:'black' })
      setTableStyle({ color:'white', backgroundColor:'#6200EE' })
    }else{
      setMyStyle({ color:'white', backgroundColor:'black' })
      setNvbarStyle({ color:'black', backgroundColor:'white' })
      setTableStyle({ color:'black', backgroundColor:'#bb86fc' })
    }
  }

  const columns = [
    {dataField:"season", text:"Season", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"city", text:"City", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"date", text:"Date", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"team1", text:"Team 1", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"team2", text:"Team 2", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"toss_winner", text:"Toss Winner", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"toss_decision", text:"Toss Decision", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"result", text:"Result", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"winner", text:"Winner", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"win_by_runs", text:"Margin", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"win_by_wickets", text:"Wickets", sort:true, filter: textFilter({style: myStyle})},
    {dataField:"player_of_match", text:"Player of the Match", sort:true, filter: textFilter({style: myStyle})},
  ];

  const pagination = paginationFactory({
    page : 1,
    sizePerPage : 5,
    lastPageText : '>>',
    firstPageText : '<<',
    nextPageText : '>',
    prePageText : '<',
    showTotal : true,
    alwaysShowAllBtns : true
  })

  
  return (
    <div className="App" style={myStyle}>
      <div className="nvbar" style={nvbarStyle}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" style={nvbarStyle} href="/">IPL DataSet</a>
          <a className="navbar-brand" style={nvbarStyle} aria-current="page" href="/">Home</a>
        </div>
      </nav>
      </div>
      <div className="searchbar">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
        </div>
      </div>
      <div className="Tablebody" style={tableStyle}>
      {/* <ToolkitProvider
        bootstrap4
        keyField="id"
        data={ data }
        columns={ columns }
        exportCSV
      >
        {
          props => (
            <React.Fragment>
              <MyExportCSV {...props.searchProps} />
              <BootstrapTable
                // bootstrap4
                // keyField="id" 
                // data={data} 
                // columns={columns} 
                bordered={false}
                hover
                condensed
                pagination={pagination}
                filter={filterFactory()}
                filterPosition='top'
                { ...props.baseProps }
              />
            </React.Fragment>
          )
        }
      </ToolkitProvider> */}
      <BootstrapTable
      bootstrap4
      keyField="id" 
      data={data} 
      columns={columns} 
      bordered={false}
      hover
      condensed
      pagination={pagination}
      filter={filterFactory()}
      filterPosition='top'
      />
      </div>
    </div>
  );
}

export default App;
