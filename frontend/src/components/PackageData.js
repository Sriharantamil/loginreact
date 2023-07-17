import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUp from "./PopUp.js";
const PackageData = () => {


    const CATEGORY = [
        {
            "id": 1, "option": "Topside Contractor - Category TSA", "shortcat": "TSA",
        }, {
            "id": 2, "option": "Topside Contractor - Category TSB", "shortcat": "TSB",
        }, {
            "id": 3, "option": "Topside Contractor - Category TSC", "shortcat": "TSC",
        }, {
            "id": 4, "option": "Topside Contractor - Category TSD", "shortcat": "TSD",
        }, {
            "id": 5, "option": "Topside Contractor - Category MNA", "shortcat": "MNA",
        }, {
            "id": 6, "option": "Marine Package Vendors - Category MNB", "shortcat": "MNB",
        }, {
            "id": 7, "option": "Marine Package Vendors - Category MNC", "shortcat": "MNC",
        }, {
            "id": 8, "option": "Marine Package Vendors - Category MND", "shortcat": "MND",
        }, {
            "id": 9, "option": "Marine Package Vendors - Category MNE", "shortcat": "MNE",
        }, {
            "id": 10, "option": "Marine Package Vendors - Category MNF", "shortcat": "MNF",
        }, {
            "id": 11, "option": "Marine Package Vendors - Category MNG", "shortcat": "MNG",
        }, {
            "id": 12, "option": "Metering Package - Category TSF", "shortcat": "TSF",
        }, {
            "id": 13, "option": "R&LEC Shipyard - Category RSD", "shortcat": "RSD",
        }, {
            "id": 14, "option": "3rd Party Studies - Category TPS", "shortcat": "TPS",
        }, {
            "id": 15, "option": "RC Contractor- Category RCC", "shortcat": "RCC",
        }, {
            "id": 16, "option": "Topside Main Power Generation- Category TSE", "shortcat": "TSE",
        },
    ];

    const [val, setVal] = useState('');
    const [inputs, setInputs] = useState({});
    const [btnPopUp, setBtnPopUp] = useState(false);

    const handleSelect = (e) => {
        for (let i = 0; i < CATEGORY.length; i++) {
            if (CATEGORY[i].option === e) {
                setVal(CATEGORY[i].shortcat);
            }
        }
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        handleSelect(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
         console.log(inputs);
    }

    return (
        <div className="package-data">
            <form action="" onSubmit={submitHandler} >
                <label>Project Number
                    <input type="text" id="input-field" placeholder="eg: H01" name="prjno" value={inputs.prjno || ""} onChange={changeHandler} /></label><br />
                <label >Project Category
                    <select name="prjcat" id="input-field-select" onChange={changeHandler}>
                        {CATEGORY.map((val) => <option value={val.option}>{val.option}</option>)}
                    </select></label>
                <br />
                <label>Package Clean category
                    <input name="cleancat" value={val} /></label><br />
                <label>Package Title
                    <input type="text" id="input-field" name="pactitle" onChange={changeHandler} value={inputs.pactitle || ""} /></label><br />
                <label>RFQ Number
                    <input type="text" id="input-field" name="rfqno" onChange={changeHandler} value={inputs.rfqno || ""} /></label><br />
                <label >Document Number
                    <input type="text" id="input-field" name="docno" onChange={changeHandler} value={inputs.docno || ""} /></label><br />
                <label>Sequence
                    <input type="text" id="input-field" name="sequence" onChange={changeHandler} value={inputs.sequence || ""} /></label><br />
                <label>System
                    <input type="text" id="input-field" name="system" onChange={changeHandler} value={inputs.system || ""} /></label><br />
                <label>Document Title
                    <input type="text" id="input-field" name="doctitle" onChange={changeHandler} value={inputs.doctitle || ""} /></label><br />
                <button type="Submit" value="Export" onClick={() => setBtnPopUp(true)} >Export</button>
                <PopUp trigger={btnPopUp} setTrigger={setBtnPopUp} values={inputs}></PopUp>
            </form>


        </div>
    )
}


export default PackageData;