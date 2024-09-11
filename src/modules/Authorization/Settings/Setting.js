import "../../../App.css";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../../features/Layout";
import SettingSidebar from "../../../components/SettingSidebar";
import BasicSetting from "./BasicSetting/BasicSetting";
import FieldToCapture from "./FieldsToCapture/FieldToCapture";
import EmailSetting from "./EmailSetting/EmailSetting";
import AutomationSetting from "./AutomationSetting/AutomationSetting";
import AccessSetting from "./AccessSetting/AccessSetting";
import { useLocation } from "react-router-dom";
import { ACCESS_SETTING_ROUTE, AUTOMATION_SETTING_ROUTE, BASIC_SETTING_ROUTE, EMAIL_SETTING_ROUTE, FIELDS_TO_CAPTURE_ROUTE } from "../../../constants/RouteNameConstant";
function Setting() {
  
  const location=useLocation()
const renderComponents=()=>{
  switch (location.pathname) {
    case BASIC_SETTING_ROUTE:
      return <BasicSetting />;
    case FIELDS_TO_CAPTURE_ROUTE:
      return <FieldToCapture />;
    case EMAIL_SETTING_ROUTE:
      return <EmailSetting />;
    case AUTOMATION_SETTING_ROUTE:
      return <AutomationSetting />;
    case ACCESS_SETTING_ROUTE:
      return <AccessSetting />;
    default:
      return <BasicSetting />;
  }
}
const getActiveKey = () => {
  switch (location.pathname) {
    case BASIC_SETTING_ROUTE:
      return "first";
    case FIELDS_TO_CAPTURE_ROUTE:
      return "second";
    case EMAIL_SETTING_ROUTE:
      return "third";
    case AUTOMATION_SETTING_ROUTE:
      return "fourth";
    case ACCESS_SETTING_ROUTE:
      return "fifth";
    default:
      return "first";
  }
};
  return (
      <>
        {/* === Top Navbar ==== */}
        <Layout />
        <main className="content p-0">
        <Tab.Container id="left-tabs-example" defaultActiveKey={getActiveKey()}>
                    <div className="d-flex">
                       <SettingSidebar />
                       
                            <Tab.Content className="setting-rightside">
                                {/* {
                                    location.pathname === "/setting/basicsetting" ?
                                    <BasicSetting/>
                                    :
                                    location.pathname === "/setting/fieldstocapture" ?
                                    <FieldToCapture/>:
                                    location.pathname === "/setting/emailsetting"?
                                    <EmailSetting/>:
                                    location.pathname === "/setting/automationsetting"?
                                    <AutomationSetting/>:
                                    location.pathname === "/setting/accessseting"?
                                    <AccessSetting/>:
                                    <BasicSetting/>
                                } */}
                                {
                                  renderComponents()
                                }
                            </Tab.Content>
                        
                    </div>
                </Tab.Container>
        </main>
      </>
  );
}

export default Setting;
