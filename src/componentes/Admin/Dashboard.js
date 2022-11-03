import React, { Fragment } from 'react'



export const Dashboard = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col-12 col-md-2'>

                    <Sidebar />

                </div>
                <div className='col-12 col-md-10'>
                    <h1 classname='my-4'>Panel de control</h1>
                    <Fragment>
                        <Metadata title={"Panel de control"} />
                    </Fragment>
                </div>
            </div>
        </Fragment>
    )

}