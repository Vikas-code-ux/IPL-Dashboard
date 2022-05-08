// import {useState, useEffect} from "react"
import BootstrapTable from "react-bootstrap-table-next"
import data from './matches data.json'
import paginationFactory from "react-bootstrap-table2-paginator"
import filterFactory, {textFilter} from "react-bootstrap-table2-filter"

import './App.css'

function App() {
  // const { SearchBar } = Search;
  const columns = [
    {dataField:"season", text:"Season", sort:true, filter:textFilter()},
    {dataField:"city", text:"City", sort:true, filter:textFilter()},
    {dataField:"date", text:"Date", sort:true, filter:textFilter()},
    {dataField:"team1", text:"Team 1", sort:true,filter:textFilter()},
    {dataField:"team2", text:"Team 2", sort:true, filter:textFilter()},
    {dataField:"toss_winner", text:"Toss Winner", sort:true, filter:textFilter()},
    {dataField:"toss_decision", text:"Toss Decision", sort:true, filter:textFilter()},
    {dataField:"result", text:"Result", sort:true, filter:textFilter()},
    {dataField:"winner", text:"Winner", sort:true, filter:textFilter()},
    {dataField:"win_by_runs", text:"Margin", sort:true, filter:textFilter()},
    {dataField:"win_by_wickets", text:"Wickets", sort:true, filter:textFilter()},
    {dataField:"player_of_match", text:"Player of the Match", sort:true, filter:textFilter()},
  ];
  // const[value, setValue]= useState("");
  // const[dataSource, setDataSource]= useState(data);
  // const[tablefilter, setTablefilter]= useState([]);

  // const filterOnClick=(e)=>{
  //   if(e.target.value != ""){
  //     setValue(e.target.value);
  //     const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
  //       String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
  //       ));
  //       setTablefilter([...filterTable])
  //   }else {
  //     setValue(e.target.value);
  //     setDataSource([...dataSource])
  //   }
  // }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">IPL DataSet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="searchbar">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <BootstrapTable 
      keyField="id" 
      data={data} 
      columns={columns} 
      bordered={false}
      hover
      condensed
      pagination={paginationFactory()}
      filter={filterFactory()}
      />
    </div>
  );
}

export default App;
