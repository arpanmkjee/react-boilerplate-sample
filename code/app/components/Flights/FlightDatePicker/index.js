import * as React from 'react';

export default class DatePicker extends React.Component {
    render() {debugger;
        return (
            <div class="datePickerContainer">
                <div class="flightCalOverlay">
                    <div class="dayPickerFlightWrap">
                        <div class="RangeExample">
                            <div class="dayPickerHeader dayToFromCont blackText">
                                <div class="calHeading makeFlex">
                                    <div class="dateFiled ">
                                        <p class="font16 blackText latoBold appendRight30"><span
                                            class="widgetSprite icCalendar appendRight10"></span><span
                                                class="selectedDateField appendBottom8"> 19 Nov 19</span></p>
                                    </div>
                                    <div class="font16 blackText latoBlack dashed appendRight30"> - </div>
                                    <div class="dateFilled">
                                        <p class="font16 blackText latoBold"><span data-cy="selectReturnDate">Book round trip for
                                    great savings</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="DayPicker" lang="en">
                                <div class="DayPicker-wrapper" tabindex="0">
                                    <div class="DayPicker-NavBar"><span tabindex="0" role="button" aria-label="Previous Month"
                                        class="DayPicker-NavButton DayPicker-NavButton--prev DayPicker-NavButton--interactionDisabled"></span><span
                                            tabindex="0" role="button" aria-label="Next Month"
                                            class="DayPicker-NavButton DayPicker-NavButton--next"></span></div>
                                    <div class="DayPicker-Months">
                                        <div class="DayPicker-Month" role="grid">
                                            <div class="DayPicker-Caption" role="heading">
                                                <div>November 2019</div>
                                            </div>
                                            <div class="DayPicker-Weekdays" role="rowgroup">
                                                <div class="DayPicker-WeekdaysRow" role="row">
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Sunday">Su</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Monday">Mo</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Tuesday">Tu</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Wednesday">We</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Thursday">Th</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Friday">Fr</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Saturday">Sa</abbr></div>
                                                </div>
                                            </div>
                                            <div class="DayPicker-Body" role="rowgroup">
                                                <div class="DayPicker-Week" role="row">
                                                    <div aria-disabled="true"
                                                        class="DayPicker-Day DayPicker-Day--disabled DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true"
                                                        class="DayPicker-Day DayPicker-Day--disabled DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true"
                                                        class="DayPicker-Day DayPicker-Day--disabled DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true"
                                                        class="DayPicker-Day DayPicker-Day--disabled DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true"
                                                        class="DayPicker-Day DayPicker-Day--disabled DayPicker-Day--outside"></div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="0" role="gridcell"
                                                        aria-label="Fri Nov 01 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Nov 02 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Nov 03 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>3</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Nov 04 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Nov 05 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>5</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Nov 06 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>6</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Nov 07 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>7</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Nov 08 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>8</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Nov 09 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>9</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Nov 10 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>10</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Nov 11 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>11</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Nov 12 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>12</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Nov 13 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>13</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Nov 14 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>14</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Nov 15 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>15</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Nov 16 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>16</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Nov 17 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>17</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--disabled" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Nov 18 2019" aria-disabled="true" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>18</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day DayPicker-Day--selected DayPicker-Day--today"
                                                        tabindex="-1" role="gridcell" aria-label="Tue Nov 19 2019"
                                                        aria-disabled="false" aria-selected="true">
                                                        <div class="dateInnerCell">
                                                            <p>19</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Nov 20 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>20</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Nov 21 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>21</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Nov 22 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>22</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Nov 23 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>23</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Nov 24 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>24</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Nov 25 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>25</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Nov 26 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>26</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Nov 27 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>27</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Nov 28 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>28</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Nov 29 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>29</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Nov 30 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>30</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="DayPicker-Month" role="grid">
                                            <div class="DayPicker-Caption" role="heading">
                                                <div>December 2019</div>
                                            </div>
                                            <div class="DayPicker-Weekdays" role="rowgroup">
                                                <div class="DayPicker-WeekdaysRow" role="row">
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Sunday">Su</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Monday">Mo</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Tuesday">Tu</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Wednesday">We</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Thursday">Th</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Friday">Fr</abbr></div>
                                                    <div class="DayPicker-Weekday" role="columnheader"><abbr
                                                        title="Saturday">Sa</abbr></div>
                                                </div>
                                            </div>
                                            <div class="DayPicker-Body" role="rowgroup">
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="0" role="gridcell"
                                                        aria-label="Sun Dec 01 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Dec 02 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>2</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Dec 03 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>3</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Dec 04 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Dec 05 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>5</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Dec 06 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>6</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Dec 07 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>7</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Dec 08 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>8</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Dec 09 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>9</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Dec 10 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>10</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Dec 11 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>11</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Dec 12 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>12</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Dec 13 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>13</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Dec 14 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>14</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Dec 15 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>15</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Dec 16 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>16</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Dec 17 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>17</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Dec 18 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>18</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Dec 19 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>19</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Dec 20 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>20</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Dec 21 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>21</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Dec 22 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>22</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Dec 23 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>23</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Dec 24 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>24</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Wed Dec 25 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>25</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Thu Dec 26 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>26</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Fri Dec 27 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>27</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sat Dec 28 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>28</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="DayPicker-Week" role="row">
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Sun Dec 29 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>29</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Mon Dec 30 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>30</p>
                                                        </div>
                                                    </div>
                                                    <div class="DayPicker-Day" tabindex="-1" role="gridcell"
                                                        aria-label="Tue Dec 31 2019" aria-disabled="false" aria-selected="false">
                                                        <div class="dateInnerCell">
                                                            <p>31</p>
                                                        </div>
                                                    </div>
                                                    <div aria-disabled="true" class="DayPicker-Day DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true" class="DayPicker-Day DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true" class="DayPicker-Day DayPicker-Day--outside"></div>
                                                    <div aria-disabled="true" class="DayPicker-Day DayPicker-Day--outside"></div>
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
        )
    }
}