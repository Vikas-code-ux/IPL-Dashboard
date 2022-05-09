import {useState} from "react"
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

  const [myStyle,setMyStyle]=useState({
    backgroundColor: "black",
    color: "white"
  })
  const [nvbarStyle,setNvbarStyle]=useState({
    backgroundColor: "white",
    color: "black"
  })

  const toggleStyle = ()=> {
    if(myStyle.color==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setNvbarStyle({
        color:'white',
        backgroundColor:'black'
      })
    }else{
      setMyStyle({
        color:'white',
        backgroundColor:'black'
      })
      setNvbarStyle({
        color:'black',
        backgroundColor:'white'
      })
    }
  }

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
      <div className="Tablebody" style={nvbarStyle}>
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
    </div>
  );
}

export default App;
