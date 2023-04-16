import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShops} from "../../stores/actions/shopAction";

const Shop = () => {

    const dispatch = useDispatch()

    const shops = useSelector((state: any) => state.shop.shops)

    useEffect(() => {
        dispatch(getShops())
    }, [])

    console.log(shops)


    return (
        <div>
            {shops.items.map((item: any) => {
                return <li key={item.title}>{item.title}</li>
            })}
        </div>
    );
};

export default Shop;