import React from "react";
import { Surface } from "./Surface";

export default function (/* props: Props */) {
  function setExpectedElementName(name: string): void {
    const element = document.getElementById('expectedElementName');
    if (element != null) {
      element.innerHTML = name;
    }
  }
  return Surface({ surface: 'inputs1' })(
    <div>
      <h3>Element Name Testing</h3>
      Check the console for al_ui_events after clicking the buttons. <br />
      Expected elementName: <div id="expectedElementName"></div>
      <table border={1} style={{
        margin: '0 auto',
      }}>
        <tbody>
          <tr>
            <td>aria-label</td>
            <td>
              <button onClick={() => {
                setExpectedElementName('Test Label 1');
              }} aria-label="Test Label 1">&nbsp;</button>
            </td>
          </tr>
          <tr>
            <td>aria-labelledby</td>
            <td>
              <button onClick={() => {
                setExpectedElementName('Test Label 2 Another Label');
              }} aria-labelledby="label2 label3">&nbsp;</button>
            </td>
          </tr>
          <tr>
            <td>aria-description</td>
            <td>
              <button onClick={() => {
                setExpectedElementName('Test Description 1');
              }} aria-description="Test Description 1">&nbsp;</button>
            </td>
          </tr>
          <tr>
            <td>aria-describedby</td>
            <td>
              <button onClick={() => {
                setExpectedElementName('Test Description 2 Another Description');
              }} aria-describedby="desc2 desc3">&nbsp;</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: 'none' }} id="label2">Test Label 2</div>
      <div style={{ display: 'none' }} id="label3">Another Label</div>
      <div style={{ display: 'none' }} id="desc2">Test Description 2</div>
      <div style={{ display: 'none' }} id="desc3">Another Description</div>
      <div>
        <label id='ch1'>Check box 1</label>
        <input type='checkbox' aria-labelledby="ch1" checked></input>
        <input type='checkbox' aria-label="Check box 2" ></input>
        {Surface({ surface: 'inputs2' })(<>
          <input type='radio' aria-label="Radio 1" name='radios'></input>
          <input type="radio" aria-label="Radio 2" name='radios'></input>
        </>
        )}
        <select>
          <option value='v1' >V1</option>
          <option value='v2' selected>V2</option>
          <option value='v3' >V3</option>
        </select>
      </div>
    </div>
  );
}
