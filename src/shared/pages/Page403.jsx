import React from "react";
const Page403 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            403 Forbidden</h2>
                        <div className="error-details">
                            Sorry, an error has occured, You don't have permissions to do it
                        </div>
                        <div className="error-actions">
                            <a href="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Home </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Page403;