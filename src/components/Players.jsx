import React from "react";
import { useState } from "react";
import backgroundimg from "../images/bgsports.png";
import {allMatches} from "../Settings";



const Teams = () => {

    return (
        <div className="Players">
          <table>
            <tr>
              <th>Team</th>
              <th>Name</th>
              <th>Number</th>
              <th>Status</th>
            </tr>
            <tr>
              <div class="border">FC Nordsjælland</div>
              <td>Andreas Hansen</td>
              <td>13</td>
              <td>Goal Keeper</td>
            </tr>
            <tr>
            <div class="border">FC Nordsjælland</div>
              <td>Emmanuel Ogura</td>
              <td>16</td>
              <td>Goal Keeper</td>
            </tr>
            <tr>
            <div class="border">FC Nordsjælland</div>
              <td>Andreas Gülstorff</td>
              <td>31</td>
              <td>Goal Keeper</td>
            </tr>
            <tr>
            <div class="border">FC Nordsjælland</div>
              <td>Maxwell Woledzi</td>
              <td>3</td>
              <td>Defence</td>
            </tr>
            <tr>
            <div class="border">FC Nordsjælland</div>
              <td>Kian Hansen</td>
              <td>4</td>
              <td>Defence</td>
            </tr>
          </table>
        </div>
      );
    }

export default Teams;