import React from "react";

const CategoryBtn = ({filterItems, catValue}) => {
    return(
        <>
            <div className="catBtn mt-4">
                {
                    catValue.map((currBtn) => {
                        return <button onClick={() => filterItems(currBtn)} className="btn btn-warning">{currBtn}</button>
                    })
                }
            </div>
        </>
    );
}

export default CategoryBtn;
