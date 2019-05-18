import React from 'react';
import SearchIntro from "../../components/SearchIntro/SearchIntro";
import SearchInput from "../../components/SearchInput/SearchInput";
import SearchCategories from "../../components/SearchCategories/SearchCategories";
import SearchSortBy from "../../components/SearchSortBy/SearchSortBy";
import SearchRecipeList from "../../components/SearchRecipeList/SearchRecipeList";
import SearchTopWrapper from "../../components/SearchTopWrapper/SearchTopWrapper";


const initialState = {}


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        this.setState(initialState)
    }

    /*a debugging console logging*/
    componentDidUpdate() {
    }

    render() {
        return (
            <article className={'bordered'}>
                <SearchTopWrapper ref={this.htmlModule}>
                    <SearchIntro/>
                    <SearchInput/>
                </SearchTopWrapper>
                <SearchCategories/>
                <SearchSortBy/>
                <SearchRecipeList/>
            </article>
        )
    }
}

export default Search