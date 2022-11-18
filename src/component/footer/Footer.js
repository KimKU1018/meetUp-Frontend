import React from "react";
import "./Footer.scss";
import FooterSignUpComponent from "./FooterSignUpComponent";
import FooterBusinessInfo from "./FooterBusinessInfo";
import FooterIconComponent from "./FooterIconComponent";
import {
  WEBSITE_TERMS_MENU,
  COMPANY_INFO,
} from "./FooterConstData";

function Footer() {
  return (
    <div className="footer-frame">
      <div className="footer-company-info-area">
        <div className="footer-company-info-area-bar">
          <div className="Company history information">
            © 4GATE Groad 2022-2022
          </div>
          <div className="footer-website-terms-menu">
            {WEBSITE_TERMS_MENU.map(terms => {
              return (
                <div key={terms.id} className="each-terms">
                  {terms.termsElement}
                </div>
              );
            })}
          </div>
        </div>

        <div className="4gate-business-info-area">
          {COMPANY_INFO.map(info => {
            return (
              <div
                className="4gate-business-info-component-container"
                key={info.title}
              >
                <FooterBusinessInfo
                  id={info.id}
                  companyInfo={info.companyInfo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
