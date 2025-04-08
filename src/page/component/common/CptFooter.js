import { Link } from "react-router-dom";

function CptFooter() {
    return (
        <div className="cptFooter">
            <div className="footerArea">
                <div className="logoArea">
                    <div className="logoBox">
                        <img src={`${process.env.PUBLIC_URL}/resource/images/main/toto_logo_ft.svg`} alt="(주)스포츠 토토 레져" />
                    </div>
                    <ul className="quickBox">
                        <li className="menuItem">
                            <Link to="/react-for-beginners/legal/legal" className="menuName">법적고지</Link>
                        </li>
                    </ul>
                </div>
                <div className="copyArea">
                    <div className="copyGroup">
                        <div className="infoBox">
                            <span>(주)스포츠 토토 레져</span><br />
                            <span>주소: 서울 송파구 방이동 88-2</span><span>대표자명: 홍길동</span><br />
                            <span>사업자등록번호: 123-45-67890</span><span>고객센터: 1588-4900</span>
                        </div>
                        <div className="copyright">COPYRIGHTⓒ Sports Korea Leisure CO.,LTD ALL RIGHT RESERVED</div>
                    </div>
                    <div className="bnGroup">
                        <img src={`${process.env.PUBLIC_URL}/resource/images/main/ft_wla.png`} alt="WLA" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CptFooter;