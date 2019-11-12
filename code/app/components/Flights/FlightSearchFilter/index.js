import React from 'react';

function FlightSearchFilter() {
  return (

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
  );
}

export default FlightSearchFilter;
