import React from 'react'
import Customer from './customer'
import Filter from './formFilter'

class ViewCustomer extends React.Component {
    render() {
        return (
            <div class="body mt-5 container">
                <div className="filter-form col-md col-md-2">
                    <div class="border border-dark">
                        <Filter/>
                    </div>
                   
                </div>
                <div className="main-body-customer col-md col-md-10">
                    <Customer/>
                </div>
            </div>
        )
    }
}

export default ViewCustomer