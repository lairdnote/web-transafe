import React from "react";
import TableComponent from '../components/TableComponent';
import MainLayout from '../components/MainLayout';
function BuyAction() {
    return (
        <>
        <MainLayout>
            <div className="bg-gray-800 m-4 dark:bg-gray-800  ">
                <TableComponent />
            </div>
            </MainLayout>
        </>
    )
}
export default BuyAction;