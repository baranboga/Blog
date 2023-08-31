import React from 'react';
import photo from '../images/3.jpeg';

function About() {
  return (
    <div>
      <div className='container' style={{marginTop:"50px"}}>
      <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-uppercase">Hakkımda</h2>
                        <hr className="templatemo-section-header-hr" />
                        <p className="text-uppercase templatemo-section-subheader">CV</p>
                    </div>
                </div>
      </div>
      <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px", marginBottom: "100px" }}>
        <div class="w3-row-padding">

          <div class="w3-third">

            <div class="w3-white w3-text-black w3-card-4"> {/* Changed w3-text-grey to w3-text-black */}
              <div class="w3-display-container">
                <img src={photo} style={{ width: "100%" }} alt="Avatar" />
                <div class="w3-display-bottomleft w3-container w3-text-black"> {/* Changed w3-text-black */}
                  <h2 style={{ fontFamily: 'revert-layer',color:"white" }}>Rıza Baran Boğa</h2>
                </div>
              </div>
              <div class="w3-container">
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-black"></i>Web Developer/Lawyer</p> {/* Changed w3-text-teal to w3-text-black */}
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-black"></i>İstanbul, TR</p> {/* Changed w3-text-teal to w3-text-black */}
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black"></i>baraboga97@gmail.com</p> {/* Changed w3-text-teal to w3-text-black */}
                <hr />

                <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-black"></i>Yetenekler</b></p> {/* Changed w3-text-teal to w3-text-black */}
                <p>React.js</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-black" style={{ width: "90%" }}>90%</div> {/* Changed w3-teal to w3-black */}
                </div>
                <p>Node.js</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-black" style={{ width: "90%" }}>
                    <div class="w3-center w3-text-white">80%</div> {/* Changed w3-teal to w3-black */}
                  </div>
                </div>
                <p>Bootstrap</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-black" style={{ width: "90%" }}>80%</div> {/* Changed w3-teal to w3-black */}
                </div>
                <p>CSS</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-black" style={{ width: "80%" }}>80%</div> {/* Changed w3-teal to w3-black */}
                </div>
                <br />

                <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>Diller</b></p> {/* Changed w3-text-teal to w3-text-black */}
                <p>Türkçe</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-black" style={{ height: "24px", width: "100%" }}></div> {/* Changed w3-teal to w3-black */}
                </div>
                <p>İngilizce</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-black" style={{ height: "24px", width: "80%" }}></div> {/* Changed w3-teal to w3-black */}
                </div>
                <br />
              </div>
            </div><br />

          </div>

          <div class="w3-twothird">

            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-black w3-padding-16"><i style={{ color: "red" }} class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>İş Tecrübesi</h2> {/* Changed w3-text-teal to w3-text-black */}
              <div class="w3-container">
                <h5 class="w3-opacity"><b>React Developer / İnfotech academy</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>27/03 -13/06/2023</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>Next.js kullanarak mobil duyarlı (responsive) bir e-ticaret sitesi oluşturuldu.</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Front End Developer / İnfotech academy</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>27/03 -13/06/2023</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>React.js kullanarak mobil duyarlı (responsive) bir e-ticaret sitesi oluşturuldu.</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Kurucu Avukat / Topsakal & Boğa Hukuk Bürosu</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2022 - 2023</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>Bilgi Teknolojisi (IT) Hukuku alanında davalarda hukuki danışmanlık sağlandı</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Hukuk Stajyeri / AdIdas Sports Equipment Sales and MarketIng Inc., Legal Department</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>13/06 - 30/11/2017 </h6> {/* Changed w3-text-teal to w3-text-black */}
                <p></p><br />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-black w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>Eğitim</h2> {/* Changed w3-text-teal to w3-text-black */}
              <div class="w3-container">
                <h5 class="w3-opacity"><b>İstanbul Üniversitesi</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2022-2024</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>Bilgisayar Programcılığı</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Bilgi Üniversitesi</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>Hukuk Fakültesi</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Özel Maltepe Uğur Hazırlık lisesi</b></h5>
                <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2011 - 2015</h6> {/* Changed w3-text-teal to w3-text-black */}
                <p>Lise</p><br />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-black w3-padding-16">
                <i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>Hakkımda
              </h2>
              <div class="w3-container">

                <p>
                  Hukuk ve yazılım dünyasına olan merakım ve ilgim sayesinde, bu iki alanı bir araya getirerek benzersiz bir deneyim kazandım. Kendimi hem hukuki sorunları çözerken hem de yazılım teknolojilerini kullanarak çözümler geliştirirken buluyorum.
                </p>

                <p>
                  Hukuk alanında edindiğim bilgi ve deneyimle, çeşitli hukuki dokümanları analiz edebilme, yasal düzenlemeleri anlayabilme ve mevzuat takibini sağlayabilme yetkinliklerine sahibim. Aynı zamanda, güçlü analitik ve araştırma becerilerim sayesinde hukuki konularda derinlemesine çalışmalar yapabiliyorum.
                </p>

                <p>
                  Yazılım dünyasındaki becerilerimle ise, problem çözme yeteneğim ve programlama bilgim sayesinde hukuk alanındaki süreçleri optimize edebilecek çözümler geliştirebiliyorum. Veri tabanı yönetimi, web uygulamaları, yapay zeka ve otomasyon gibi teknolojilere hakimim, bu da hukuki süreçlerin daha verimli ve etkili bir şekilde yönetilmesine katkı sağlamamı sağlıyor.
                </p>

                <p>
                  Hukuk ve yazılım alanlarının kesişiminde çalışarak, müşterilere daha hızlı ve akıllı çözümler sunmanın yanı sıra, yargı süreçlerini daha erişilebilir ve şeffaf hale getirmeyi hedefliyorum. Takım çalışmasına olan yatkınlığım sayesinde, farklı disiplinlerden uzmanlarla birlikte çalışarak yenilikçi projelere imza atmak benim için büyük bir zevk.
                </p>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
