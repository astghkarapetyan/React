import React from 'react';
import {API_URL} from '../../config';
import {handleResponse} from  '../../helper';
import Table from './Table';
import Loading from '../common/Loading';
import Pagenation from './Pagenation';
import './Table.css';
class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages:0,
            page:1,
        };
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {
       this.fetchCurrencies();
    }
    fetchCurrencies(){
        this.setState({ loading: true });
        const {page} = this.state
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const {currencies,totalPages} = data
                this.setState({
                    currencies,
                    totalPages,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }

    handleChange(number){
        let nextNumber=this.state.page;
        if(number==='next'){
            nextNumber++
        }else{
            nextNumber--
        }
        this.setState({page: nextNumber},()=>{
            this.fetchCurrencies();
        })
    }
    render() {
        const { loading, error,currencies,page,totalPages} = this.state;

        
        if (loading) {
            return <div className="loading-container"><Loading/></div>
        }

       
        if (error) {
            return <div className="error">{error}</div>
        }


        return (
            <div>
                <Table
                    currencies={currencies}
                />

                <Pagenation
                    page={page}
                    totalPages={totalPages}
                    handleChange={this.handleChange}
                />
            </div>
        )

}
}

export default List;
