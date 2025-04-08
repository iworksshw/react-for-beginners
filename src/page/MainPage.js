import CptHeader from "./component/common/CptHeader";
import CptFooter from "./component/common/CptFooter";
import CptMain from "./component/main/CptMain";

function MainPage() {

    return (
        <section style={{width:"100%"}}>
            <CptHeader />
            <CptMain />
            <CptFooter />
        </section>
    );
}

export default MainPage;