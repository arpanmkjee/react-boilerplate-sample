/**
 * AncillaryPage
 *
 * 
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

//import H1 from 'components/H1';
import messages from './messages';
import Header from '../../../components/App/Header';
import SearchWidget from '../../../components/App/LandingSearchWidget';

export default function FlightSearchPage() {
  return (
    // <article>
    //   {/* <H1> */}
    //   FlightSearchPage
    //   {/* </H1> */}
    // </article>
    <div class="commonHeader">
      <div data-cy="landingContainer" class="singleHeader  ">
        <HeaderOuter></HeaderOuter>
      </div>
      <div id="root-element">
        <SearchWidget></SearchWidget>
        <div class="fix_header_mar_top padding_bottom15" id="body--wraper">
          <div id="filter--wrapper" class="scrollable_filter ">
            <div class="normal_filter fli_filter clearfix LatoRegular filter_loaded  ">
              <div class="fli-intl-container clearfix">
                <div class="fli_filter__col1 pull-left" id="stop_group">
                  <p class="append_bottom9 clearfix"><span class="fli_filter__heading">Stops</span><a
                    class="pull-right reset-filter stop_reset" href="javascript:void(0)">Reset</a>
                  </p><span class="checkbox-group  append_bottom5 fli-filter-items "><input
                    type="checkbox" id="collapsed_79200de8-1840-4d0b-a342-6c23e55d90db" /><label
                      for="collapsed_79200de8-1840-4d0b-a342-6c23e55d90db"><span class="box"><span
                        class="check" data-ischecked="false"
                        data-filtertext="collapsed_stop_nonStop"></span></span><span
                          class="labeltext"
                          style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Non
                                            Stop&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items ">
                    <input type="checkbox"
                      id="collapsed_a69bfeb1-c748-4d63-a6c4-5ebd72b1f6b6" /><label
                        for="collapsed_a69bfeb1-c748-4d63-a6c4-5ebd72b1f6b6"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_stop_oneStop"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>1
                                            Stop&nbsp; </span></label></span>
                </div>
                <div class="fli_filter__col2 pull-left" id="departure_group">
                  <p class="append_bottom9 clearfix"><span class="fli_filter__heading">Departure From
                                        Mumbai</span><a class="pull-right reset-filter departure_reset"
                      href="javascript:void(0)">Reset</a></p><span
                        class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_a1e6dc8e-f1ff-474d-abb6-048e7c675ee5" /><label
                        for="collapsed_a1e6dc8e-f1ff-474d-abb6-048e7c675ee5"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_departure_morning"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Before
                                            6AM&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_a5f49521-6843-4cfc-bdbb-b77aaf915ae2" /><label
                        for="collapsed_a5f49521-6843-4cfc-bdbb-b77aaf915ae2"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_departure_noon"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>6AM-12
                                            Noon&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_a905a70b-3ac2-4adb-b639-047182bda29f" /><label
                        for="collapsed_a905a70b-3ac2-4adb-b639-047182bda29f"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_departure_evening"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>12
                                            Noon-6PM&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_78e32f32-1cf9-43b4-9c5d-612b82a6f625" /><label
                        for="collapsed_78e32f32-1cf9-43b4-9c5d-612b82a6f625"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_departure_night"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>After
                                            6PM&nbsp; </span></label></span>
                </div>
                <div class="fli_filter__col3 pull-left" id="arrival_group">
                  <p class="append_bottom9 clearfix"><span class="fli_filter__heading">Arrival at
                                        Hyderabad</span><a class="pull-right reset-filter arrival_reset"
                      href="javascript:void(0)">Reset</a></p><span
                        class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_2344930c-177d-47ad-b57f-802c525ffdc8" /><label
                        for="collapsed_2344930c-177d-47ad-b57f-802c525ffdc8"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_arrival_morning"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Before
                                            6AM&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_9559abbd-659a-47e1-8613-8a9dfad5787a" /><label
                        for="collapsed_9559abbd-659a-47e1-8613-8a9dfad5787a"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_arrival_noon"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>6AM-12
                                            Noon&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_fccf2bde-4959-4d94-bb84-949085b795b4" /><label
                        for="collapsed_fccf2bde-4959-4d94-bb84-949085b795b4"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_arrival_evening"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>12
                                            Noon-6PM&nbsp; </span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_88e10cdb-59c3-467d-88da-4226f10143b6" /><label
                        for="collapsed_88e10cdb-59c3-467d-88da-4226f10143b6"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_arrival_night"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>After
                                            6PM&nbsp; </span></label></span>
                </div>
                <div class="fli_filter__col4 pull-left" id="airline_group">
                  <p class="append_bottom9 clearfix"><span class="fli_filter__heading">Airlines</span><a
                    class="LatoRegular more-airlines ">+ 3 airlines</a></p><span
                      class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_c2b1a258-24ba-45dd-89ec-824f2cc7f90b" /><label
                        for="collapsed_c2b1a258-24ba-45dd-89ec-824f2cc7f90b"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_airline_AI"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Air
                                            India&nbsp; </span><span class="labeltext"> (15)&nbsp; </span><span
                        class="labeltext">₹ 1,758</span></label></span><span
                          class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_d477afcf-0fd1-431b-9db9-f74718d2cef9" /><label
                        for="collapsed_d477afcf-0fd1-431b-9db9-f74718d2cef9"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_airline_I5"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>AirAsia&nbsp;
                                        </span><span class="labeltext"> (1)&nbsp; </span><span class="labeltext">₹
                                            2,007</span></label></span><span
                    class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_5ac45408-b2db-4020-b76f-2e42f636681c" /><label
                        for="collapsed_5ac45408-b2db-4020-b76f-2e42f636681c"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_airline_G8"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Go
                                            Air&nbsp; </span><span class="labeltext"> (3)&nbsp; </span><span
                        class="labeltext">₹ 3,505</span></label></span><span
                          class="checkbox-group  append_bottom5 fli-filter-items wth_half"><input
                      type="checkbox" id="collapsed_aa4153f1-8a03-4776-8f13-db7020232c44" /><label
                        for="collapsed_aa4153f1-8a03-4776-8f13-db7020232c44"><span class="box"><span
                          class="check" data-ischecked="false"
                          data-filtertext="collapsed_airline_6E"></span></span><span
                            class="labeltext"
                            style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>IndiGo&nbsp;
                                        </span><span class="labeltext"> (12)&nbsp; </span><span class="labeltext">₹
                                            1,700</span></label></span>
                </div><a id="more_filters" class="fli_filter__dropdown pull-right"><span
                  class="filter-arw">More Filters</span></a>
              </div>
              <div class="filterWrapper collapse">
                <div class="fli_filter_btns clearfix">
                  <p class="fli_filter_hdng pull-left">Filter Mumbai - Hyderabad Flights</p><a
                    id="extended-filter-apply" class="fli_primary_btn filter_btn pull-right">Apply</a><a
                      id="extended-filter-cancel"
                      class="fli_secondry_btn filter_btn pull-right marR20 fli-rounded-btn">Cancel</a>
                </div>
                <div class="fli_filter_extended LatoRegular">
                  <div class="fli-intl-container clearfix">
                    <div class="fli_filter_extended-group__col pull-left col1 custom-scroll">
                      <div class="fli_filter_extended-group__row append_bottom15" id="stop_group">
                        <div class="fli_filter_extended__head append_bottom15 clearfix"><span
                          class="col__heading">Stops From Mumbai</span><a
                            class="pull-right stop_reset">Reset</a></div>
                        <ul>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_2116c286-8234-4b68-bc3e-43e4b5ce778f" /><label
                                for="extended_2116c286-8234-4b68-bc3e-43e4b5ce778f"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_stop_nonStop"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>Non
                                                                    Stop</span><span
                                  class="filter_left_text">(23)</span></span></label></span><span
                                    class="pull-right fli_list_right"><span
                                      class="fli_filter_extended__price LatoBold">₹
                                                            1,700</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_6c6ab2e4-5f7e-48f1-a627-27124341a22f" /><label
                                for="extended_6c6ab2e4-5f7e-48f1-a627-27124341a22f"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_stop_oneStop"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>1
                                                                    Stop</span><span
                                  class="filter_left_text">(27)</span></span></label></span><span
                                    class="pull-right fli_list_right"><span
                                      class="fli_filter_extended__price LatoBold">₹
                                                            3,505</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_c0f38782-88fc-4fcc-b64d-83759cf0f492" /><label
                                for="extended_c0f38782-88fc-4fcc-b64d-83759cf0f492"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_stop_multiStop"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>1+
                                                                    Stop</span><span
                                  class="filter_left_text">(7)</span></span></label></span><span
                                    class="pull-right fli_list_right"><span
                                      class="fli_filter_extended__price LatoBold">₹
                                                            7,292</span></span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="fli_filter_extended-group__col pull-left col2 custom-scroll">
                      <div class="fli_filter_extended-group__row append_bottom15" id="airline_group">
                        <div class="fli_filter_extended__head append_bottom15 clearfix"><span
                          class="col__heading">Airlines</span><a
                            class="pull-right airline_reset">Reset</a></div>
                        <ul>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_c2b1a258-24ba-45dd-89ec-824f2cc7f90b" /><label
                                for="extended_c2b1a258-24ba-45dd-89ec-824f2cc7f90b"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_AI"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>Air
                                                                    India</span><span
                                  class="filter_left_text">(15)</span></span></label></span><span
                                    class="pull-right fli_list_right"><span
                                      class="fli_filter_extended__price LatoBold">₹
                                                            1,758</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_d477afcf-0fd1-431b-9db9-f74718d2cef9" /><label
                                for="extended_d477afcf-0fd1-431b-9db9-f74718d2cef9"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_I5"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>AirAsia</span><span
                                          class="filter_left_text">(1)</span></span></label></span><span
                                            class="pull-right fli_list_right"><span
                                              class="fli_filter_extended__price LatoBold">₹
                                                            2,007</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_5ac45408-b2db-4020-b76f-2e42f636681c" /><label
                                for="extended_5ac45408-b2db-4020-b76f-2e42f636681c"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_G8"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>Go
                                                                    Air</span><span
                                  class="filter_left_text">(3)</span></span></label></span><span
                                    class="pull-right fli_list_right"><span
                                      class="fli_filter_extended__price LatoBold">₹
                                                            3,505</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_aa4153f1-8a03-4776-8f13-db7020232c44" /><label
                                for="extended_aa4153f1-8a03-4776-8f13-db7020232c44"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_6E"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>IndiGo</span><span
                                          class="filter_left_text">(12)</span></span></label></span><span
                                            class="pull-right fli_list_right"><span
                                              class="fli_filter_extended__price LatoBold">₹
                                                            1,700</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_3170cc9c-dd99-4965-ab42-2c51b655d877" /><label
                                for="extended_3170cc9c-dd99-4965-ab42-2c51b655d877"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_SG"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>Spicejet</span><span
                                          class="filter_left_text">(9)</span></span></label></span><span
                                            class="pull-right fli_list_right"><span
                                              class="fli_filter_extended__price LatoBold">₹
                                                            1,700</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_920c524b-dbd4-4fe6-87ae-1ae468f87efe" /><label
                                for="extended_920c524b-dbd4-4fe6-87ae-1ae468f87efe"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_2T"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>TruJet</span><span
                                          class="filter_left_text">(1)</span></span></label></span><span
                                            class="pull-right fli_list_right"><span
                                              class="fli_filter_extended__price LatoBold">₹
                                                            4,140</span></span></li>
                          <li class="fli_filter_extended__content append_bottom5 list1"><span
                            class="checkbox-group fli_list_left "><input type="checkbox"
                              id="extended_9b003f7e-8e9b-4bce-af95-adeb7edacf8c" /><label
                                for="extended_9b003f7e-8e9b-4bce-af95-adeb7edacf8c"><span
                                  class="box"><span class="check" data-ischecked="false"
                                    data-filtertext="extended_airline_UK"></span></span><span
                                      class="labeltext make_flex alC"><span
                                        style={{ maxWidth: "100px", whiteSpace: " nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", marginRight: "5px" }}>Vistara</span><span
                                          class="filter_left_text">(16)</span></span></label></span><span
                                            class="pull-right fli_list_right"><span
                                              class="fli_filter_extended__price LatoBold">₹
                                                            2,000</span></span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="fli_filter_extended-group__col pull-left col3 custom-scroll">
                      <div class="fli_filter_extended-group__row append_bottom15">
                        <div class="fli_filter_extended__head append_bottom15 clearfix"><span
                          class="col__heading">Price</span></div>
                        <div id="slider_filters_panel" class="clearfix">
                          <div class="rows">
                            <div class="filter_partone">
                              <div class="filter_subdivisions filter_price">
                                <div class="price_slider">
                                  <div class="rc-slider">
                                    <div class="rc-slider-rail"
                                      style={{ height: "auto", minHeight: "2px" }}></div>
                                    <div class="rc-slider-track rc-slider-track-1"
                                      style={{ backgroundColor: "rgb(235, 32, 38)", height: "2px", left: "0%", right: "auto", width: "100%" }}>
                                    </div>
                                    <div class="rc-slider-step"></div>
                                    <div tabindex="0"
                                      class="rc-slider-handle rc-slider-handle-1"
                                      role="slider" aria-valuemin="1700"
                                      aria-valuemax="20155" aria-valuenow="1700"
                                      aria-disabled="false"
                                      style={{ width: "16px", height: "16px", borderStyle: "solid", borderWidth: "1px", borderColor: "rgb(188, 188, 188)", borderRadius: "20px", marginTop: "-7px", marginLeft: "-8px", left: "0%", right: "auto", transform: "translateX(-50%)" }}>
                                    </div>
                                    <div tabindex="0"
                                      class="rc-slider-handle rc-slider-handle-2"
                                      role="slider" aria-valuemin="1700"
                                      aria-valuemax="20155" aria-valuenow="20155"
                                      aria-disabled="false"
                                      style={{ width: "16px", height: "16px", borderStyle: "solid", borderWidth: "1px", borderColor: "rgb(188, 188, 188)", borderRadius: "20px", marginTop: "-7px", marginLeft: "-8px", left: "0%", right: "auto", transform: "translateX(-50%)" }}>
                                    </div>
                                    <div class="rc-slider-mark"></div>
                                  </div>
                                </div>
                                <p class="filters_subhead"><span
                                  class="price_text pull-left"><span
                                    class="min_price">₹ 1700</span></span><span
                                      class="price_text pull-right"><span
                                        class="max_price">₹ 20155</span></span></p>
                              </div>
                            </div>
                          </div>
                          <div class="fli_filter_extended__head append_bottom20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fli-intl-container clearfix" id="section--wrapper" style={{ marginTop: "0px" }}>
            <div class="fli-intl-lhs pull-left" id="left-side--wrapper">
              <div id="weekly_fare_crous" class="append_bottom10">
                <div class="slider "
                  style={{ position: "relative", display: "block", width: "100%", height: "auto", boxSizing: "border-box", visibility: "visible" }}>
                  <div class="slider-frame"
                    style={{ position: "relative", display: "block", overflow: "hidden", height: "auto", margin: "0px", padding: "0px", transform: "translate3d(0px, 0px, 0px)", boxSizing: "border-box" }}>
                    <ul class="slider-list"
                      style={{ transform: "translate3d(-518.75px, 0px, 0px)", position: "relative", display: "block", margin: "0px", padding: "0px", height: "66px", width: "9337.5px", cursor: "inherit", boxSizing: "border-box" }}>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "0px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,08 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 6,103</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "103.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,09 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 2,502</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "207.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,10 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 2,000</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "311.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,11 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "415px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,12 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "518.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,13 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "622.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,14 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "726.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,15 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "830px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item blue_active"><a>
                          <p class="crous_weekly_dates">Sat,16 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "933.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,17 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1037.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,18 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1141.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,19 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1245px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,20 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1348.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,21 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1452.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,22 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1556.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,23 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1660px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,24 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1763.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,25 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1867.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,26 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "1971.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,27 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2075px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,28 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2178.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,29 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2282.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,30 Nov</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2386.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,01 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2490px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,02 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2593.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,03 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2697.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,04 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2801.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,05 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "2905px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,06 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3008.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,07 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3112.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,08 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3216.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,09 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3320px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,10 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3423.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,11 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3527.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,12 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3631.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,13 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3735px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,14 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3838.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,15 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "3942.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,16 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4046.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,17 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4150px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,18 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,007</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4253.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,19 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4357.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,20 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4461.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,21 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4565px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,22 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,173</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4668.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,23 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4772.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,24 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4876.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,25 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "4980px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,26 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5083.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,27 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5187.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,28 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5291.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,29 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5395px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,30 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5498.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,31 Dec</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5602.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,01 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5706.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,02 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5810px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,03 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,007</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "5913.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,04 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,007</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6017.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,05 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,178</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6121.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,06 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6225px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,07 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72);" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6328.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,08 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6432.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,09 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6536.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,10 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 2,177</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6640px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,11 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6743.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,12 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6847.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,13 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "6951.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,14 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7055px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,15 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7158.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,16 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7262.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,17 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7366.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,18 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7470px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,19 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7573.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,20 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7677.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,21 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7781.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,22 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7885px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,23 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "7988.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,24 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8092.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,25 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8196.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,26 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8300px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,27 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8403.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,28 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8507.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,29 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8611.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Thu,30 Jan</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8715px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Fri,31 Jan</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8818.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sat,01 Feb</p>
                          <p class="crous_weekly_price"><span>₹ 1,958</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "8922.5px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Sun,02 Feb</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "9026.25px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Mon,03 Feb</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,631</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "9130px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Tue,04 Feb</p>
                          <p class="crous_weekly_price"><span>₹ 1,700</span></p>
                        </a></div>
                      </li>
                      <li class="slider-slide"
                        style={{ position: "absolute", left: "9233.75px", top: "0px", display: "inline-block", listStyleType: "none", verticalAlign: "top", width: "103.75px", height: "auto", boxSizing: "border-box", margin: "auto 0px" }}>
                        <div class="item "><a>
                          <p class="crous_weekly_dates">Wed,05 Feb</p>
                          <p class="crous_weekly_price"><span
                            style={{ color: "rgb(22, 190, 72)" }}>₹ 1,596</span></p>
                        </a></div>
                      </li>
                    </ul>
                  </div>
                  <div class="slider-decorator-0"
                    style={{ position: "absolute", top: "50%", left: "0px", transform: "translateY(-50%)" }}>
                    <div class="owl-prev" style={{ opacity: " 1" }}>prev</div>
                  </div>
                  <div class="slider-decorator-1"
                    style={{ position: "absolute", top: "50%", right: "0px", transform: "translateY(-50%)" }}>
                    <div class="owl-next" style={{ opacity: " 1" }}>next</div>
                  </div>
                </div>
              </div>
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
              <div class="fli-intl-lhs pull-left">
                <div>
                  <div id="fli_list_item_d6963860-f8c3-4f53-8468-01d7f6f37b46" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-5375</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrnyd6963860-f8c3-4f53-8468-01d7f6f37b46_BOM$HYD$1611191555$6E-5375"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">15:55</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>25</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          17:20<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button 
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:1"
                              class="fli_primary_btn text-uppercase "><a href="/review">Book Now</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-1">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-1-tab-1"
                              role="tab" aria-controls="flightDetailsTab-1-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-1-tab-2"
                              role="tab" aria-controls="flightDetailsTab-1-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-1-pane-1"
                              aria-labelledby="flightDetailsTab-1-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>25</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                5375 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">15:55</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>25</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">17:20</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-1-pane-2"
                              aria-labelledby="flightDetailsTab-1-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_f6e25e69-ed93-412a-a289-3efef2ba8abb" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">Spicejet</span></p>
                                <p class="fli-code">SG-703</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrnyf6e25e69-ed93-412a-a289-3efef2ba8abb_BOM$HYD$1611192245$SG-703"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">22:45</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>25</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          00:10<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold">+1
                                                                                            DAY</span><span
                                              class="tag-info fli-overlay-white placement-top plusDay-tooltip"><span
                                                class="plusDay-tooltip-content"><span>Arrival
                                                    :
                                                                                                    Hyderabad</span><span
                                                  class="LatoBold">17
                                                  Nov
                                                                                                    2019</span></span></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:0"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: " url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;);" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-0">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-0-tab-1"
                              role="tab" aria-controls="flightDetailsTab-0-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-0-tab-2"
                              role="tab" aria-controls="flightDetailsTab-0-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-0-pane-1"
                              aria-labelledby="flightDetailsTab-0-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>25</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">Spicejet
                                                                                SG 703 | Boeing 737-700</span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">22:45</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>25</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">00:10</span>
                                          <p class="date_details" id="dateId">Sun,
                                                                                    17 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-0-pane-2"
                              aria-labelledby="flightDetailsTab-0-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>₹ 1,135
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135);" }}>₹ 565
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_3af9b69d-b646-4636-8d62-544e9f79ba65" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-834</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny3af9b69d-b646-4636-8d62-544e9f79ba65_BOM$HYD$1611191655$6E-834"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">16:55</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>30</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          18:25<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:2"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-2">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-2-tab-1"
                              role="tab" aria-controls="flightDetailsTab-2-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-2-tab-2"
                              role="tab" aria-controls="flightDetailsTab-2-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-2-pane-1"
                              aria-labelledby="flightDetailsTab-2-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>30</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                834 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">16:55</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>30</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">18:25</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-2-pane-2"
                              aria-labelledby="flightDetailsTab-2-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0)" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0)" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_88ea10b2-c3aa-4849-a31c-da1a90f85e19" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-5342</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny88ea10b2-c3aa-4849-a31c-da1a90f85e19_BOM$HYD$1611191820$6E-5342"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">18:20</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>30</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          19:50<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:3"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-3">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-3-tab-1"
                              role="tab" aria-controls="flightDetailsTab-3-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-3-tab-2"
                              role="tab" aria-controls="flightDetailsTab-3-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-3-pane-1"
                              aria-labelledby="flightDetailsTab-3-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>30</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                5342 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">18:20</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>30</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">19:50</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-3-pane-2"
                              aria-labelledby="flightDetailsTab-3-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_7fc6f437-eb52-4de8-beb7-879d5b6c964a" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-254</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny7fc6f437-eb52-4de8-beb7-879d5b6c964a_BOM$HYD$1611192005$6E-254"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">20:05</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>30</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          21:35<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:4"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-4">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-4-tab-1"
                              role="tab" aria-controls="flightDetailsTab-4-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-4-tab-2"
                              role="tab" aria-controls="flightDetailsTab-4-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-4-pane-1"
                              aria-labelledby="flightDetailsTab-4-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>30</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                254 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">20:05</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>30</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">21:35</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-4-pane-2"
                              aria-labelledby="flightDetailsTab-4-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_77fc239e-9693-4eac-a6e2-70ba7bd5493e" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-234</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny77fc239e-9693-4eac-a6e2-70ba7bd5493e_BOM$HYD$1611192130$6E-234"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">21:30</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>30</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          23:00<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:5"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-5">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-5-tab-1"
                              role="tab" aria-controls="flightDetailsTab-5-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-5-tab-2"
                              role="tab" aria-controls="flightDetailsTab-5-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-5-pane-1"
                              aria-labelledby="flightDetailsTab-5-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>30</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                234 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">21:30</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>30</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">23:00</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-5-pane-2"
                              aria-labelledby="flightDetailsTab-5-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_86ac4170-5414-4298-a4c8-22a0be973f5a" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-5384</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny86ac4170-5414-4298-a4c8-22a0be973f5a_BOM$HYD$1611190050$6E-5384"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">00:50</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>35</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          02:25<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:7"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-7">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-7-tab-1"
                              role="tab" aria-controls="flightDetailsTab-7-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-7-tab-2"
                              role="tab" aria-controls="flightDetailsTab-7-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-7-pane-1"
                              aria-labelledby="flightDetailsTab-7-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>35</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                5384 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">00:50</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>35</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">02:25</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-7-pane-2"
                              aria-labelledby="flightDetailsTab-7-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_3c0d8bbd-62bc-433a-9c07-87dfc43a18b3" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">IndiGo</span></p>
                                <p class="fli-code">6E-628</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny3c0d8bbd-62bc-433a-9c07-87dfc43a18b3_BOM$HYD$1611191905$6E-628"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span
                                      style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">19:05</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>35</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          20:40<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:8"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-8">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-8-tab-1"
                              role="tab" aria-controls="flightDetailsTab-8-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-8-tab-2"
                              role="tab" aria-controls="flightDetailsTab-8-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-8-pane-1"
                              aria-labelledby="flightDetailsTab-8-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>35</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">IndiGo 6E
                                                                                628 | Airbus A320 </span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">19:05</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>35</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">20:40</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-8-pane-2"
                              aria-labelledby="flightDetailsTab-8-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="fli_list_item_329ce82d-e49b-4ac9-8a97-7bba9b12ee47" class="fli-list one-way">
                    <div>
                      <div class="fli-list-body-section"
                        style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                        <div class="dept-options">
                          <div class="dept-options-section clearfix">
                            <div class="pull-left airline-info">
                              <div class="pull-left"><span class=" "><span
                                class="arln-logo logo1"
                                style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=4&quot;)" }}></span></span>
                              </div>
                              <div class="pull-left airways-info-sect">
                                <p><span class="airways-name ">Spicejet</span></p>
                                <p class="fli-code">SG-6364</p>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="">
                                <div class="make_relative">
                                  <div class="timing-option "><label
                                    for="jrny329ce82d-e49b-4ac9-8a97-7bba9b12ee47_BOM$HYD$1611192130$SG-6364"
                                    class="clearfix radio"
                                    style={{ cursor: "default" }}><span style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>
                                      &nbsp;</span>
                                    <div
                                      class="fli-time-section pull-left departure">
                                      <div class="dept-time">21:30</div>
                                      <p class="dept-city">Mumbai</p>
                                    </div>
                                    <div class="pull-left fli-stops make_relative">
                                      <p class="fli-duration"><strong>01</strong>
                                        hr <strong>35</strong> mins </p>
                                      <div class="make_relative fli-stops-sep">
                                        <p class="fli-stops-seperator"></p>
                                      </div>
                                      <p class="fli-stops-desc">Non stop</p>
                                    </div>
                                    <div class="fli-time-section pull-left arrival">
                                      <div class="text-left pull-left wdh_full">
                                        <p class="reaching-time append_bottom3">
                                          23:05<span
                                            class="plusDay-info make_relative"><span
                                              class="fli-trvlDays LatoBold"></span></span>
                                        </p>
                                        <p class="arrival-city">Hyderabad</p>
                                      </div>
                                    </div>
                                  </label></div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left  make_relative price">
                              <p><span class="actual-price">₹ 1,700</span></p>
                            </div>
                            <div class="pull-left make_relative"><button
                              id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:6"
                              class="fli_primary_btn text-uppercase ">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fli-list-footer-section clearfix">
                      <div class="pull-right">
                        <div class="pull-left">
                          <div class="zc-listing-strip clearfix make_relative"><span
                            class="zc-card-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                              class="pull-left marT2">
                              <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                        </font>
                            </span>
                            <div
                              class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                              <a href="javascript:void(0);"><span
                                class="green-solid-info-icon"></span></a>
                              <div class="fli-overlay-white zc-benefits-tooltip">
                                <p class="font16 append_bottom15"><strong>ZERO
                                                                </strong>Cancellation, Benefits<span
                                    class="zc-inner-icon"
                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                                </p>
                                <div class="zc-benefits-sctn font14 append_bottom12">
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Approx Refund per
                                                                        pax</span><span class="pull-right zc-fare">₹
                                                                        1,700</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">Airline Penalty
                                                                        Charge</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                  <p class="clearfix append_bottom3"><span
                                    class="pull-left">MMT Cancellation
                                                                        Fee</span><span class="pull-right zc-fare">₹
                                                                        0</span></p>
                                </div>
                                <p class="zc-asterisk-txt"><span
                                  class="grey-info-icon"></span>20% of our users
                                                                cancel their flight.<a
                                    href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                    target="_blank">Know more</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pull-left fli-details">
                          <p class="flight-detail-tab "><span>Flight Details</span><span
                            class="fli-details-arrow "></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="collapse">
                      <div class="fli-list-flight_details">
                        <div id="flightDetailsTab-6">
                          <ul transition="false" role="tablist" class="nav nav-tabs">
                            <li role="presentation" class=""><a id="flightDetailsTab-6-tab-1"
                              role="tab" aria-controls="flightDetailsTab-6-pane-1"
                              tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                            DETAILS</a></li>
                            <li role="presentation" class=""><a id="flightDetailsTab-6-tab-2"
                              role="tab" aria-controls="flightDetailsTab-6-pane-2"
                              tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                            &amp; CANCELLATION</a></li>
                          </ul>
                          <div class="tab-content">
                            <div id="flightDetailsTab-6-pane-1"
                              aria-labelledby="flightDetailsTab-6-tab-1" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="clearfix">
                                <div class="fli-list-flight_details__oneway_col pull-left">
                                  <p class="font16 fli-intl-dark-grey append_bottom13 ">
                                    <span class="LatoBold"> </span><span
                                      class="LatoLight"></span></p>
                                  <p
                                    class="fli-list-flight_details__head append_bottom15 clearfix">
                                    <span
                                      class="pull-left flight_details__flinam">Mumbai
                                                                        to Hyderabad , 16 Nov</span><span
                                      class="pull-right"><strong>01</strong> hr
                                                                        <strong>35</strong> mins </span></p>
                                  <div class="clearfix append_bottom15">
                                    <div
                                      class="pull-left make_relative airline-information wdh_half">
                                      <p
                                        class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                        <span
                                          class="pull-left multi-ticket make_relative append_right10 "><span
                                            class="arln-logo"
                                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                              class="pull-left flight-name">Spicejet
                                                                                SG 6364 | Boeing 737-700</span></p>
                                      <div
                                        class="clearfix append_bottom15 font18 make_relative time-options">
                                        <div class="pull-left departure-option">
                                          <span
                                            class="flight-time departure">21:30</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Mumbai, India</p>
                                        </div>
                                        <div class="pull-left stops-option">
                                          <p
                                            class="clearfix append_bottom7 append_right24 append_left10">
                                            <span
                                              class="line-map pull-left"><span
                                                class="flight-duration"><strong>01</strong>
                                                hr <strong>35</strong> mins
                                                                                        </span></span></p>
                                        </div>
                                        <div class="pull-left arrival-option"><span
                                          class="flight-time arrival">23:05</span>
                                          <p class="date_details" id="dateId">Sat,
                                                                                    16 Nov 19 </p>
                                          <p class="city_details" id="cityId">
                                            Hyderabad, India</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="baggage-info pull-left wdh_half">
                                      <p
                                        class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :
                                                                            </span><span
                                          class="itnry-flt-footer-col">Check-in</span><span
                                            class="itnry-flt-footer-col">Cabin</span>
                                      </p>
                                      <p class="itnry-flt-footer-row text-red">
                                        Information not available</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="flightDetailsTab-6-pane-2"
                              aria-labelledby="flightDetailsTab-6-tab-2" role="tabpanel"
                              aria-hidden="true" class="tab-pane fade">
                              <div class="fli-list-fare_details clearfix">
                                <div class="fli-list-fare_details__left pull-left">
                                  <p
                                    class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                                    Fare breakup</p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        TOTAL</font>
                                    </span><span class="pull-right">
                                      <font
                                        style={{ fontSize: "14px", color: "rgb(0, 0, 0);" }}>
                                        ₹ 1,700</font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                            Fare</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,135
                                                                        </font>
                                    </span></p>
                                  <p class="clearfix append_bottom10 fareBreakup-item">
                                    <span class="pull-left">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>
                                        Surcharges</font>
                                    </span><span class="pull-right">
                                      <font style={{ color: "rgb(135, 135, 135)" }}>₹ 565
                                                                        </font>
                                    </span></p>
                                </div>
                                <div class="fli-list-fare_details__right pull-right">
                                  <div class="append_bottom15">
                                    <div class="fare-rules not-found">
                                      <p><span
                                        class="fare-rules-not-found-icon"></span><br /><span
                                          class="display-text">Sorry! Fare rules
                                          could not be fetched at the
                                                                                moment.</span></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fli-intl-rhs pull-left">
              <div id="right-side--wrapper" style={{ marginTop: "10px" }}>
                <div class="banner-offers-wrapper make_relative roundedbox">
                  <div class="banner-offers">
                    <p class="marR15 banner-offers-sctn"><span class="banner-icon"
                      style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                    </p>
                    <div class="flexOne">
                      <div class="make_flex append_bottom8 space_between">
                        <p class="font16" style={{ color: "rgb(72, 72, 72)" }}>
                          <font color="#4a4a4a"><b>Zero Cancellation</b></font>
                        </p>
                      </div>
                      <p class="font14"><span class="LatoBold" style={{ color: "rgb(117, 117, 117)" }}>
                        <font color="#4a4a4a">Get full refund on cancellation penalties. Buy
                                                    Zero cancellation @ ₹ 549 only</font>
                      </span></p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
