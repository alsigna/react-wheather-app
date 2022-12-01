import React from "react";
import { Form } from "react-bootstrap";

import "../styles/City.css";

const City = ({onCityChange}) => {
    const [cityId, setCityId] = React.useState("");

    const handleChange = (event) => {
        console.log("City.js:handleChange:event.target.value:" + event.target.value)
        setCityId(event.target.value);
        onCityChange(event.target.value)
    };

    return (
        <div className="city-selection">
            <Form.Select value={cityId} onChange={handleChange}>
                <option value="">Select the City</option>
                <option value="524901">Moscow</option>
                <option value="498817">Saint Petersburg</option>
                <option value="491422">Sochi</option>
            </Form.Select>
        </div>
    );
};

export default City;
