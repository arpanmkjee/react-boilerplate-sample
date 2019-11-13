import React from 'react';
import FlightWeeklySearch from '../FlightWeeklySearch';
import FlightAvailableOnSearch from '../FlightsAvailableOnSearch';
import FlightZeroCancellation from '../FlightZeroCancellation';

function FlightSearchResults() {
  return (
    <div class="fli-intl-container clearfix" id="section--wrapper" style={{ marginTop: "0px" }}>
      <div class="fli-intl-lhs pull-left" id="left-side--wrapper">
        <FlightWeeklySearch></FlightWeeklySearch>
        <div class="clearfix sortby-container" id="left-side-header--wrapper">
          <div class="sortby-dom pull-left append_bottom5 " id="sorting-togglers"
            style={{ height: " 30px", display: "flex" }}><span class="sort-label">Sorted By:</span>
            <div class="sortby-dom-sctn popularity_sorter "
              style={{ opacity: "0", visibility: "hidden", textAlign: "left", marginLeft: " 10px", width: "135px" }}>
              <span class="pointer"><span>Popularity</span></span></div>
            <div class="sortby-dom-sctn departure_sorter "
              style={{ opacity: "1", visibility: "visible", width: "100px", textAlign: "left", marginLeft: "30px" }}>
              <span class="pointer"><span>Departure</span></span></div>
            <div class="sortby-dom-sctn duration_sorter "
              style={{ opacity: "1", visibility: "visible", width: "100px" }}><span
                class="pointer"><span>Duration</span></span></div>
            <div class="sortby-dom-sctn arrival_sorter "
              style={{ opacity: "1", visibility: "visible", width: "170px" }}><span
                class="pointer"><span>Arrival</span></span></div>
            <div class="sortby-dom-sctn price_sorter  active"
              style={{ opacity: "1", visibility: "visible", width: "140px", textAlign: "right" }}><span
                class="pointer"><span>Price</span><span class="down sort-arrow"></span></span>
            </div>
          </div>
        </div>
        <FlightAvailableOnSearch></FlightAvailableOnSearch>
      </div>
      <FlightZeroCancellation></FlightZeroCancellation>
    </div>
  );
}

export default FlightSearchResults;
