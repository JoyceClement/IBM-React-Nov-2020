import addNew from './addNew';
import remove from './remove';
import addToCart from './addToCart';
import removeFromCart from './removeFromCart'
import toggleOutOfStock from './toggleOutOfStock';
import removeOutOfStock from './removeOutOfStock';
import load from './load';

const actionCreators = { 
    addNew, remove, toggleOutOfStock, removeOutOfStock, load ,addToCart ,removeFromCart
};

export default actionCreators;