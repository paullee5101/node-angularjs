import {Link} from 'react-router';
import React from 'react';

const CategoriesListItemComponent = (props) => (
        <tbody>
            {
                props.categories.map(category => 
                    <tr key={ category.category_id} >
                        <td></td>
                        <td><Link to={"categories/edit/"+ category.category_id}>{ category.title }</Link></td>
                        <td>
                           {
                               getTitle(props, category.parent_id)
                           }
                        </td>
                        <td>{category.taxonomy}</td>
                    </tr> 
                )
            }
        </tbody>
)

const getTitle = (props, parent_id) => {
    for(let i=0;i<props.categories.length;i++){
        let category = props.categories[i];
        if(parent_id == category.category_id){
            return category.title;
        }
    }
}
export default CategoriesListItemComponent;