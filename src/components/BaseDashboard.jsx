import React from 'react';
import base from "../module.css/BaseDashboard.module.css"
import TitleBaseDashboard from './HeaderDashboard'
import { useState } from "react";
import BaseAddItem from './BaseAddItem';

function BaseDashboard() {

    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div className={base.spinner}></div>
        );

    }

    return (
        <div className={base.background}>
            <TitleBaseDashboard title={'Base'} />

            <div className={base.content}>
                <BaseAddItem title={"Base"}/>

                <div className={base.cards}>

                </div>
            </div>
        </div>
    );
}

export default BaseDashboard;
