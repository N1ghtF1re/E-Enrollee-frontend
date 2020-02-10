import React from "react";
import MenuItem from "./MenuItem";
import {ENROLLEES} from "../../../../enrollee/const";
import {CT_CERTIFICATES} from "../../../../ct-certificate/const";
import {EDUCATION_DOCUMENT} from "../../../../education-document/const";

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
        borderBottom: "1px solid #807b7b",
        backgroundColor: "#fff !important"
    }}
    >
        <a className="navbar-brand" href="/">E-Enrollee</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <MenuItem title='Enrolleee' link={`/${ENROLLEES}`}/>
                <MenuItem title='Ct Certificates' link={`/${CT_CERTIFICATES}`}/>
                <MenuItem title='Education Documents' link={`/${EDUCATION_DOCUMENT}`}/>

            </div>
        </div>
    </nav>
);

export default Header;