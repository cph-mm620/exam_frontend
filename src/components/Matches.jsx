import React from "react";
import { useState } from "react";
import backgroundimg from "../images/bgsports.png";



const Matches = () => {

    return (
        <div className="Matches">
          <table>
            <tr>
              <th>Teams</th>
              <th>Judge</th>
              <th>Type</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>Aalborg vs Aarhus</td>
              <td>Maria Nally</td>
              <td>Friendship fight</td>
              <td>AABFC</td>
            </tr>
            <tr>
              <td>Nordsjælland vs Odense</td>
              <td>Ole Henriksen</td>
              <td>Traning</td>
              <td>Farum Arena</td>
            </tr>
            <tr>
              <td>Brønby vs København</td>
              <td>Torben Træsko</td>
              <td>Liga fight</td>
              <td>Brønby stadion</td>
            </tr>
          </table>
        </div>
      );
    }

export default Matches;