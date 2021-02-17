import React, {Component} from 'react'
import Layout from '../components/layout'

class Film extends Component {
    render() {
      const film = this.props.desc;  
      return (
        <div className="card">
            <h1>{film.title}</h1>
            <p className="description">{film.description.substring(0, 300)}...</p>
        </div>
      );
    }
  }

class FilmList extends Component{
    render() {
        const filterText = this.props.filterText;
        const after2000Only = this.props.after2000Only;
        const rows = [];

        this.props.films.forEach((film) => {
            if (film.title.indexOf(filterText) === -1) {
                return;
            }
            if (after2000Only && (parseInt(film.release_date) < 2000)) {
                return;
            }
            rows.push(
                <Film
                desc={film}
                key={film.id} />
            );
        });
    
        return (
          <div className="container d-flex flex-wrap">{rows}</div>
        );
      }
}

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleAfter2000Change = this.handleAfter2000Change.bind(this);
    }
    
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    
    handleAfter2000Change(e) {
        this.props.onAfter2000Change(e.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const after2000Only = this.props.after2000Only;

        return (
        <div className="container">
            <img src="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png" title="logo.png" alt=""/>
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                <input 
                    type="checkbox" 
                    selected={after2000Only}
                    onChange={this.handleAfter2000Change}
                />
                {' '}
                Only show those release after 2000
                </p>
            </form>
        </div>
        );
      }
}


class FilterableFilmContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          after2000Only: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleAfter2000Change = this.handleAfter2000Change.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
    }
      
    handleAfter2000Change(after2000Only) {
        this.setState({
            after2000Only: after2000Only
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    after2000Only={this.state.after2000Only}
                    onFilterTextChange={this.handleFilterTextChange}
                    onAfter2000Change={this.handleAfter2000Change}
                />
                <FilmList
                    films={this.props.films}
                    filterText={this.state.filterText}
                    after2000Only={this.state.after2000Only}
                />
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
  
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
      const url =
        'https://ghibliapi.herokuapp.com/films'
  
      fetch(url)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            data: result,
          })
        })
    }
  
    render() {
      const {data} = this.state
  
    //   const result = data.map((entry, index) => {
    //     return (
    //         <div className="card" key={index}>
    //             <h1>{entry.title}</h1>
    //             <p>{entry.description.substring(0, 300)}...</p>
    //         </div>
    //     )
    //   })
  
      return (     
        <Layout>
            <FilterableFilmContainer films={data}/>
        </Layout>
        
      )
    }
  }
  
  export default App