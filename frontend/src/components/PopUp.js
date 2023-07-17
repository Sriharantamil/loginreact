import { React, useEffect, useState } from "react";
import "./PackageData.js";
import "./PopUp.css";

const PopUp = (props) => {
    const [category, setCategory] = useState([]);
    const [stakeholder, setStakeholder] = useState([]);
    const [docContent, setdocContent] = useState([]);

    
    const fetchCateData = () => {
        fetch("http://localhost:8080/TSA/get")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategory(data);
            })
    }
    const fetchStakeData = () => {
        fetch("http://localhost:8080/stake/get")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setStakeholder(data);
            })
    }

    const fetchContentData = () => {
        fetch("http://localhost:8080/docdata/get")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setdocContent(data);
            })
    }

    useEffect(() => {
        fetchCateData()
    }, [])

    useEffect(() => {
        fetchContentData()
    }, [])
    
    useEffect(() => {
        fetchStakeData()
    },[])

    var WholeData = ([...category,...stakeholder,...docContent]);
    console.log(WholeData);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-inner-table">
                    <table>
                        <thead>
                            <tr>
                                <td>{"SDRL Code"}</td>
                                <td>{"Document Description"}</td>
                                <td>{"LCI Requirement-Reference"}</td>
                                <td>{"Project Code"}</td>
                                <td>{"Originator Code"}</td>
                                <td>{"System Code"}</td>
                                <td>{"Discipline"}</td>
                                <td>{"Sequence Number"}</td>
                                <td>{"Definition of Quantity"}</td>
                                <td>{"Accepted Format"}</td>
                                <td>{"Engineeering"}</td>
                                <td>{"Construnction"}</td>
                                <td>{"Commissioning"}</td>
                                <td>{"Quality"}</td>
                                <td>{"Sequence Number"}</td>
                                <td>{"Regulatory Compliance"}</td>
                                <td>{"LCI"}</td>
                                <td>{"ALM"}</td>
                                <td>{"Pre Ops"}</td>
                                <td>{"Deliverable Requirement"}</td>
                                <td>{"Submit with Bid"}</td>
                                <td>{"Submit for Review Approval"}</td>
                                <td>{"IFI"}</td>
                                <td>{"As Built"}</td>
                                <td>{"Final Data Submission"}</td>
                                <td>{"Document Chain"}</td>
                                <td>{"DFO"}</td>
                                <td>{"IFS DMS"}</td>
                                <td>{"IFS CMMS"}</td>
                                <td>{"AVEVA NET"}</td>
                            </tr>
                        </thead>
                        <tbody>  
                            {WholeData.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.New_SDRL_Code }</td>
                                        <td>{val.Document_Description}</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{val.Engineering }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>{ }</td>
                                        <td>
                                            <select name="trow" id="trow" defaultValue={val.TSA_Deliverable_Requirement}>
                                                <option name="yes">No</option>
                                                <option name="no">Yes</option>
                                                {/* <option value="name">{ val.TSA_Deliverable_Requirement}</option> */}
                                            </select>
                                        </td>
                                        <td>{val.TSA_Submit_with_Bid}</td>
                                        <td>{val.TSA_Submit_for_Review_Approval}</td>
                                        <td>{val.TSA_IFI}</td>
                                        <td>{val.TSA_As_Built}</td>
                                        <td>{val.TSA_Final_Data_Submission}</td>
                                        <td>{val.TSA_Document_Chain}</td>
                                        <td>{val.TSA_DFO}</td>
                                        <td>{val.TSA_IFS_DMS}</td>
                                        <td>{val.TSA_IFS_CMMS}</td>
                                        <td>{val.TSA_AVEVA_NET}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
        </div>
    ) : "";
}

export default PopUp;
