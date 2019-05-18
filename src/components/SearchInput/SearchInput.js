import React from 'react';

const SearchInput = () => {
    return (
        <div className={'row'}>
            <div className={'col s1 m2 l3'}>                </div>
            <div className={'col s10 m8 l6'}>
                <input placeholder={'What do you wanna cook? '}/>
            </div>
            <div className={'col s1 m2 l3'}>                </div>
        </div>

    )
};

export default SearchInput;