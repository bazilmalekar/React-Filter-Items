import React from "react";

const MenuItems = ({items}) => {
    return(
        <>
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                    {/* items map */}
                    {
                        items.map((curElem) => {
                            const {id, name, description, image, price} = curElem;
                            return(
                            <div className="col-lg-4 col-md-12 item_outer mt-4" key={id}>
                                <div className="item_inner">
                                    <div className="row">
                                        <div className="col-3 item_image">
                                            <img src={image} alt="Dish Image" />
                                        </div>
                                        <div className="col-9 item_description">
                                            <div>
                                                <h4>{name}</h4>
                                                <p className="description">{description}</p>
                                            </div>
                                            <div className="order_details">
                                                <div>
                                                    <h6>Price: {price}</h6>
                                                    <p className="note">*prices may vary</p>
                                                </div>
                                                <div className="orderBtn">
                                                    <button className="btn btn-primary">Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            );
                        })
                    }
                </div>
            </div>            
        </div>
        </>
    );
}

export default MenuItems;