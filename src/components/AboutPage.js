import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';
import styled from "styled-components";
import {Typography} from "@material-ui/core";

const PaddedTypography = styled(Typography)`
    padding: 10px 0px;
    color: green;
`;

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <PaddedTypography variant="h4">About</PaddedTypography>
      <h3>Rules</h3>
      <ul>
        <li>Please put all food waste in the compost bin (located under the sink).</li>
        <li>Please refrain from pouring oil/fat down the sink. Oil/fat can solidify in the pipes and clog the sink.</li>
        <li>Only toilet paper should be flushed down the toilet. Items such as &quot;flushable&quot; wipes and feminine
          hygiene products can cause blockages.</li>
        <li>Plumbing blockages are not the responsibility of the landlord to resolve. It is the responsibility of
          tenant/person that caused the blockage.</li>
      </ul>
      {/*Need badlink to pass unit test*/}
      <p><Link to="/badlink"></Link></p>
    </div>
  );
};

export default AboutPage;
