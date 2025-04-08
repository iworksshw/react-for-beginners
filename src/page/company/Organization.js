import CptHeader from "../component/common/CptHeader";
import CptFooter from "../component/common/CptFooter";

function Organization() {
    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    <div className="inner">
                        <h2>조직도</h2>
                        <img src={`${process.env.PUBLIC_URL}/resource/images/sub/company/organization.png`} alt="#" />
                    </div>
                </section>
            
            <CptFooter />
        </section>
    );
}
export default Organization;