import React from 'react'
import patara from "../images/pataragate.jpg";

function İletisim() {
    return (
        <div>
            <div className='mt-5'>
                <section class="templatemo-container padding-0">

                    <div class="templatemo-block-left contact">
                        <div class="templatemo-contact-info">
                            <h2 class="text-uppercase">İletişim</h2>
                            <hr class="templatemo-section-header-hr w-120" />
                            <p class="margin-bottom-20">Aenean non ex neque. Sed vitae purus in urna volutpat iaculis. Ut congue vel tortor in tincidunt. Maecenas varius pellentesque.</p>
                            <form action="#" method="post" class="tm-contact-form">
                                <div class="tm-contact-form">
                                    <div class="form-group">
                                        <input type="text" id="contact_name" class="form-control" placeholder="Name..." />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="contact_email" class="form-control" placeholder="Email..." />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="contact_subject" class="form-control" placeholder="Subject..." />
                                    </div>
                                    <div class="form-group">
                                        <textarea id="contact_message" class="form-control" rows="8" placeholder="Message..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" name="submit" class="btn text-uppercase templatemo-btn-gold">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="templatemo-block-right">
                        <div id="">
                        <img  src={patara} style={{width:"800px",height:"600px",marginLeft:"10rem"}} alt="" />

                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default İletisim



