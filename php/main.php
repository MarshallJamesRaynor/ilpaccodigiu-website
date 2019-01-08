<main>
      <div class="toolbar">
        <div class="toggle">
          <div class="toggle__option">week</div>
          <div class="toggle__option toggle__option--selected">month</div>
        </div>
        

        <div class="arrow" id="previous" onclick="previous()"> 
        <i class="fas fa-chevron-circle-left"></i>
        </div>

        <div id="monthAndYear" class="current-month monthtitle">June 2016</div>
        <div class="arrow" id="next" onclick="next()"> 
            <i class="fas fa-chevron-circle-right"></i>
        </div>



        <div class="search-input">
          <input type="text" value="What are you looking for?">
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div class="calendar">
        <div class="calendar__header">
          <div>mon</div>
          <div>tue</div>
          <div>wed</div>
          <div>thu</div>
          <div>fri</div>
          <div>sat</div>
          <div>sun</div>
        </div>
        <div id="calendar-body">
            <div class="calendar__week">
                <div class="calendar__day day">1</div>
                <div class="calendar__day day">2</div>
                <div class="calendar__day day">3</div>
                <div class="calendar__day day">4</div>
                <div class="calendar__day day">5</div>
                <div class="calendar__day day">6</div>
                <div class="calendar__day day">7</div>
            </div>
        </div>


      </div>
    </main>