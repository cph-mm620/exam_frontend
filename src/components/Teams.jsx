import React from "react";
import { useState } from "react";
import backgroundimg from "../images/bgsports.png";
import {allMatches} from "../Settings";



const Teams = () => {

    return (
        <div className="Teams">
          <table>
            <tr>
              <th>Name</th>
              <th>Place</th>
              <th>Players</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>Aalborg</td>
              <td>AAB FC</td>
              <div class="border">View Here</div>
              <td>Juli 20th</td>
            </tr>
            <tr>
              <td>Nordsjælland</td>
              <td>FCN</td>
              <div class="border">View Here</div>
              <td>Juli 29th</td>
            </tr>
            <tr>
              <td>Brønby</td>
              <td>Brønby stadion</td>
              <div class="border">View Here</div>
              <td>August 1th</td>
            </tr>
          </table>
        </div>
      );
    }

export default Teams;