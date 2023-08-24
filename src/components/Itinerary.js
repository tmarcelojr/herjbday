export default function Itinerary() {
    return (
        <div class="accordion accordion-flush app" id="accordionExample">
        {/* e+o kitchen and bar */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Suprise Dinner at E & O Kitchen + Bar
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://eandokitchen.com/wp-content/uploads/2020/09/header-06.jpg" alt="eo kitchen banner" />
              <p>
                <b>Description: </b>
                <small>Diners sample small & large Asian plates in this modern eatery with soaring ceilings & a trendy bar.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/F7wvzQXwQPUJVA4o9">314 Sutter St, San Francisco, CA 94108</a></small>
              </p>
  
              <p>
                <b>Phone: </b> <small>+14156930303</small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>Asian</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="https://eandokitchen.com/" >Nari</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>7:00 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>10 guests</li>
                  <li>Main dining room</li>
                  <li>Will hold table for 15 minutes</li>
                  <li>Cancellation before 8/30 7:00 pm will costs $35 per guest</li>
                  <li>Please arrive before 7:00 pm. Plan is to bring Herj around 7:10 pm.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* pandora  */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              Walk to Pandora Karaoke & Bar
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://pandorakaraoke.com/wp-content/uploads/2022/08/patron1-1024x683.jpg" alt="Patron room at Pandora karaoke" />
              <p>
                <b>Description: </b>
                <small>Guests belt out songs in the main lounge or in themed private rooms at this bar with bottle service.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/hdQBwvT7G1idpCsb8"> 50 Mason St, San Francisco, CA 94102</a></small>
              </p>

              <p>
                <b>Website: </b> <a href="https://pandorakaraoke.com/" >Pandora Karaoke & Bar</a>
              </p>

              <p>
                <b>Phone: </b> <small>+14158171580</small>
              </p>
  
              <p>
                <b>Reservation: </b><small>9:00 pm - 12:00 am</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>Max 15 guests.</li>
                  <li>$85 per hour, before taxes, and gratuity. Minimum 2-hours.</li>
                  <li>48 hour cancellation notice is required. If not, $50 cancellation fee.</li>
                  <li> Outside beverages are strictly prohibited. A $75 PENALTY fee will applied if items are found.</li>
                  <li>Your reservation will be cancelled 15 minutes after the scheduled time.</li>
                  <li>There are 2 parking lots within a 2 block radius. Closing times vary so please check with them on site to verify when they close.</li>
                  <li>Must be 21 and over.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Cafe  */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              Rideshare to The Cafe
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://cafesf.com/wp-content/uploads/2022/05/FRIDAYNIGHTS_CAFE_POSTER-791x1024.jpg" alt="fright nights the cafe" />
              <p>
                <b>Description: </b>
                <small>let's goooooo</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/fxb6h5qoy8JTq9Mv6">2369 Market St, San Francisco, CA 94114</a></small>
              </p>

              <p>
                <b>Website: </b> <a href="https://cafesf.com/" >The Café</a>
              </p>

              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>Stay here or do whatever. Cheers 💃💃💃</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
}