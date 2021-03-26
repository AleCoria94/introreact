import { React } from "react";
import Topbar from './Topbar';
import Footer from './Footer';
import Info1 from './Info';
import Last from './Last';
import Categories from './Categories';

function Wrapper (){
    return (
      <div id="content-wrapper" class="d-flex flex-column">
      <Topbar/>
      <div class="container-fluid">
      <Info1/>
      <div className="row">
<Last/>
<Categories/>

    </div>
      </div>
      <Footer/>
    </div>


    )
}

export default Wrapper;