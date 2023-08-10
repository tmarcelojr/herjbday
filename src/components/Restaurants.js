export default function Restaurants() {
    return (
        <div class="accordion accordion-flush app" id="accordionExample">
        {/* nari */}
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
              Nari
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/5d52fe9e08034a0001272731/b967a3a5-2bdc-4bed-9589-15ed1e8e30d4/wineroom.JPG?format=2500w" alt="Nari" />
              <p>
                <b>Description: </b>
                <small>Sophisticated venue for contemporary Thai-Californian cuisine & inventive cocktails.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/psyBsRYHbVpNM48p8">1625 Post St, San Francisco, CA 94115</a></small>
              </p>
  
              <p>
                <b>Phone: </b> <small>+14158686274</small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>Asian</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="https://www.narisf.com/" >Nari</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>7:30 pm to 9:30 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li><a href="https://s3.amazonaws.com/ts-prod-assets.tripleseat.com/assets/055/791/838/Nari_Sample_Menu.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIEQY7POSDOFQVXHQ%2F20230809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230809T224533Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=fcbad9b8be9537ecf14db2179e2add1284e3a76685fa6674b0ba63cfefe6bbc8">Sample Menu</a></li>
                  <li>Semi-secluded Wine Room</li>
                  <li>Chef's Pick menu is required.</li>
                  <li>Starting at $125 per person.</li>
                  <li>Restaurant as a whole cannot accommodate severe celiac, shellfish, or peanut allergies nor allium or sugar restrictions of any kind. </li>
                  <li>20% Gratuity automatically added.</li>
                  <li>72 hours notice or $20 per person cancellation fee.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  che fico*/}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Che Fico
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/5c7433f7e5f7d17a1ff644cf/07b29046-6622-4efa-b8b2-afaa568c8a47/Celentano+Room+EW.jpg" alt="Che Fico" />
              <p>
                <b>Description: </b>
                <small>A casual, seasonally-driven San Francisco Italian Restaurant on Divisadero serving house-made pizza, pasta, and salumi in a vibrant space.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/hqNJdcLVFo8wgjVn6">838 Divisadero St, San Francisco, CA 94117</a></small>
              </p>
  
              <p>
                <b>Phone: </b> <small>+14154166959</small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>Italian</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="https://www.chefico.com/" >Che Fico</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>9:00 pm to 11:00 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <p><a href="https://www.canva.com/design/DAEgiy6JlS4/hXtT-H81JH3V6is9OFZwYw/view">Menu</a></p>
                <ul>
                  <li>Famiglia Table</li>
                  <li>Sits 7 to 11 seats (or a cozy 12!)</li>
                  <li>Located in the main dining room</li>
                  <li>Seatings are available at 5:30pm or 8:30pm. The table will be yours to enjoy for 2.5 hours!</li>
                  <li>Everything is served family style, and menus start at $95 per person.</li>
                  <li>Famiglia Style Dining requires a Food and Beverage minimum of $1,200, before all taxes and fees.</li>
                </ul>
  
                <p><strong>or</strong></p>
  
                <ul>
                  <li>The Celentano Room</li>
                  <li>Sits up to 14 or cozy 16.</li>
                  <li>Everything is served family style, and menus start at $95 per person. </li>
                  <li>The Celentano Room requires a $2,200 Food and Beverage minimum, before all taxes and fees.</li>
                  <li>Gratuity not included.</li>
                  <li>No cancellation fee.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* boulevard */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Boulevard
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://images.getbento.com/accounts/de6c85e5381c94f81a2cdbf582ff1bc5/media/images/WineVaultPic.jpg?w=1000&fit=max&auto=compress,format&h=1000" alt="Boulevard" />
              <p>
                <b>Description: </b>
                <small>Refined American fare from renowned chef Nancy Oakes at a chic Embarcadero spot boasting bay views.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/qzomqEGTSG7ZkA8w6">1 Mission St, San Francisco, CA 94105</a></small>
              </p>
  
              <p>
                <b>Phone: </b> <small>+14155436084</small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>American</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="https://www.boulevardrestaurant.com/" >Boulevard</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>7:00 pm to 9:30 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>The Wine Vault</li>
                  <li>An intimate wine library offering our multi course dining room menu.</li>
                  <li>One long table provides seating for up to 12 guests in a semi private setting.</li>
                  <li>Multi-Course Menu Starting at $119.</li>
                  <li>Gratuity not mentioned.</li>
                  <li>Cancellation fee not mentioned.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* flour and water */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Flour + Water
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://www.fwhospitality.com/wp-content/uploads/2022/08/Dough-Room-1536x1024.jpg" alt="Flour + Water" />
              <p>
                <b>Description: </b>
                <small>Handcrafted Italian grub, including pasta & wood-fired pizza, served in a casual, rustic space.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/Fw5agi7Mzz3CKAcYA">2401 Harrison St, San Francisco, CA 94110</a></small>
              </p>
  
              <p>
                <b>Phone: </b> <small>+14158267000</small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>Italian</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="http://www.flourandwater.com/" >Flour + Water</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>7:30 pm to 9:30 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>Our Dough Room is completely private and can accommodate up to 14 seated guests. </li>
                  <li>Each private dining experience includes a chef's choice tasting menu served in a <strong>family-style</strong> format.</li>
                  <li>Required minimum spend for food and beverage $2000.</li>
                  <li>We require participation in a chef's choice tasting menu for private parties. </li>
                  <li>The $150 per person four-course family-style menu includes spuntini (table snacks) upon arrival, followed by three antipasti, three pastas with one contorno (side dish), a pizza course, and an individual dessert course.</li>
                  <li>We do not have a liquor license, but can offer an extensive selection of wines from all over Italy, beers and non-alcoholic beverages to accompany your meal. Beverages are charged on consumption by the bottle, or alternatively, our wine director is available to create wine pairings for your group starting at $95 per person.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* good good culture club */}
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
              Good Good Culture Club
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img className="img-fluid" src="https://cdn.vox-cdn.com/thumbor/R3hYwEZ12DT59zye2VfyK7ZQiHU=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/70405032/GoodGoodCultureClub_PChang_5447.0.jpg" alt="Good Good Culture Club" />
              <p>
                <b>Description: </b>
                <small>Airy spot with a colorful interior & a rooftop terrace serving creative comfort food & cocktails.</small>
              </p>
  
              <p>
                <b>Address: </b> 
                <small><a href="https://goo.gl/maps/59kSku2NA96rLZ8w5">3560 18th St, San Francisco, CA 94110</a></small>
              </p>
  
              <p>
                <b>Cuisine: </b><small>Fusian</small>
              </p>
  
              <p>
                <b>Website: </b> <a href="http://ggccsf.com/" >Good Good Culture Club</a>
              </p>
  
              <p>
                <b>Reservation: </b><small>7:45 pm to 9:30 pm</small>
              </p>
  
              <div className="notes">
                <h6>Notes:</h6>
                <ul>
                  <li>The Ohana Table</li>
                  <li><a href="https://goodgoodcultureclub.com/pages/menu-ohana">Sample Menu</a></li>
                  <li>Seats a minimum of 8 guests and a max of 16 guests.</li>
                  <li>Strict 48-hour 25.00 per guest cancellation fee</li>
                  <li>Final guest count and allergies confirmed prior to 48 hours.</li>
                  <li>Guests who arrive with less than their confirmed number will be charged for their confirmed guest count at 70.00 per no-ed guest.</li>
                  <li>Less than 8 guests? This is considered a cancellation. Please cancel prior to 48 hours via Resy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
}