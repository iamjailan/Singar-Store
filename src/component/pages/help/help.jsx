import React from "react";
import { MdManageAccounts } from "react-icons/md"
import { TbReportAnalytics } from "react-icons/tb"
import { BiPurchaseTagAlt } from "react-icons/bi"
import { Link } from "react-router-dom";

export default function Help(){
    return (
        <div className="help">
            <div className="help-image">
                <h1>How can we help ?</h1>
                <section>
                    <input type="text" placeholder="Search Products, list..."/>
                    <button>Search</button>
                </section>
            </div>
            <div className="help-desk">
                <h1>Help Desk</h1>
                <div className="desk-list">
                    <div className="desk-card">
                        <BiPurchaseTagAlt className="desk-icon" />
                        <h1 className="desk-title">Purchasing</h1>
                        <h4 className="desk-text">How any issue or think your account should be hacked with Purchasing ? we use the x-pay for Purchasing, secure and reliable.</h4>
                        <Link className="desk-link">View Purchasing Rules</Link>
                    </div>
                    <div className="desk-card">
                        <MdManageAccounts className="desk-icon" />
                        <h1 className="desk-title">Account Management</h1>
                        <h4 className="desk-text">Manage Your Account, create new user, manage pricing details and other</h4>
                        <Link className="desk-link">Manage Account</Link>
                    </div>
                    <div className="desk-card">
                        <TbReportAnalytics className="desk-icon" />
                        <h1 className="desk-title">Reporting</h1>
                        <h4 className="desk-text">Reporting features, metric definition, use case scenario</h4>
                        <Link className="desk-link" to="contact">Report scenario</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}