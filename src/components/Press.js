import livemint from '../image/live_mint.png'
import quoteIcon from '../image/assets_iPhone 8_2021-05-24/copy-3.png'

function Press() {
    return (
      <div className="Pres">
        <img alt={livemint} src={livemint} className="live-mint" />
        <div className="livemint-story">
            
            <p>
                <img src={quoteIcon} /> Nestaway works towards<br />
                solving the existin trust-deficit<br />
                between home-owners and <br />
                tenants, thereby developing a <br />
                social infrastructure for <br />
                affordable renting.<br />
                <br />
                <strong>Jeff Gove</strong>, VP @Livemint <br />
                <br />
                <a href="url">View the entire article &gt&gt</a>
            </p>
        </div>
        
      </div>
    );
  }
  
  export default Press;
  