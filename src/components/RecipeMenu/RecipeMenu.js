import React from 'react';
import './RecipeMenu.scss';

const RecipeMenu = (props) => {
    const onRouteChange = props.onRouteChange;
    return (
        <div>
            <div className="menu-wrapper grey lighten-5 grey-text text-darken-4">
                <ul className="recipe-menu-items">
                    <li  className={'recipe-menu-item'}
                         onClick={''}>
                        Info
                    </li>
                    <li  className={'recipe-menu-item'}
                         onClick={''}>
                        Steps
                    </li>
                        <li  className={'recipe-menu-item'}
                         onClick={()=>onRouteChange('edit-recipe')}>
                        Edit
                    </li>
                        <li  className={'recipe-menu-item'}
                         onClick={''}>
                        Save to collection
                    </li>
                </ul>
            </div>
        </div>

    )
};

export default RecipeMenu;