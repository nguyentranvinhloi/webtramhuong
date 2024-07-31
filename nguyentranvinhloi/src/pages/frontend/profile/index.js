
import Content from "./Content"
import PageTop from "./PageTop"
import { useEffect } from "react";

function Profile() {
  useEffect(() => {
		document.title = 'Tài khoản';
	  }, []);
  return (
  <section className="maincontent ">
    <PageTop/>
    <Content/>
  </section>);
}

export default Profile;
