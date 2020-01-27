import headermenu from '../apis/headermenu';
export const fetchMenuitems = () => async dispatch =>{
    const responce = await headermenu.get('/headermenu.json');
    dispatch( {type: 'FETCH_MENUITEMS', payload: responce.data.headermenu } )
};