import './IntroPane.css'

const IntroPane = () => {
  return ( 
    <div className="IntroPane">
      <div className="IntroText">
        <div style={{fontSize: "large", fontWeight: "500", textAlign: "center"}}>Welcome to the DAV Elections 2022!</div><br /> 
        This year, you will be voting for 4 positions: the head boy, head girl, sports captain boy and sports captain girl. <br /><br /> 
        <div style={{fontSize: "medium", fontWeight: "400", textAlign: "center"}}>To begin voting for candidates, please click on the Next button.</div>
      </div>
    </div>
  );
}
 
export default IntroPane;