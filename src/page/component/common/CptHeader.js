import { Link } from "react-router-dom";

function CptHeader() {
    const menuDep1Name = ["회사소개","사업소개","공고","알림홍보"];
    const menuDep1Arr = ["/react-for-beginners/company/company","/react-for-beginners/business/business1","/react-for-beginners/board/careers","/react-for-beginners/board/pr"];
    const menuDep2Name = [
        ["회사소개","CEO인사말","조직도"],
        ["체육진흥투표권","상품소개","관련단체소개"],
        ["채용공고","입찰공고"],
        ["공지사항"]];
    const menuDep2Arr = [
        ["/react-for-beginners/company/company","/react-for-beginners/company/ceo","/react-for-beginners/company/organization"],
        ["/react-for-beginners/business/business1","/react-for-beginners/business/business2","/react-for-beginners/business/business3"],
        ["/react-for-beginners/board/careers","/react-for-beginners/board/bidding"],
        ["/react-for-beginners/board/pr"]];
    return (
        <header className="cptHeader">
            <div className="headerArea">
                <div className="logoArea">
                    <Link to="/react-for-beginners/"><img src={`${process.env.PUBLIC_URL}/resource/images/main/toto_logo.svg`} alt="스포츠 토토 레져(주)" /></Link>
                </div>
                <div className="gnbArea">
                    <ul className="depth1Group">
                        {menuDep1Name.map((item, index) => (
                            <li className="depth1Menu" key={index}>
                                <Link to={menuDep1Arr[index]} className="depth1Name">{item}</Link>
                                <ul className="depth2Group">
                                    {menuDep2Name[index].map((subItem, subIndex) => (
                                        <li className="depth2Menu" key={subIndex}>
                                            <Link to={menuDep2Arr[index][subIndex]} className="depth2Name">{subItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="quickArea">
                    <a href="https://www.sportstoto.co.kr/" target="_blank" rel='noreferrer' title="새 창 열림" className="quick01">스포츠토토</a>
                    <a href="https://www.betman.co.kr/" target="_blank" rel='noreferrer' title="새 창 열림" className="quick02">betman</a>
                </div>
                <div className="allMenu">
                    <button type="button" className="btnAllMenu">전체메뉴</button>
                </div>
                <div className="allMenuArea">
                    <div className="menuBox">
                        <div className="logo"><img src={`${process.env.PUBLIC_URL}/resource/images/main/toto_logo.svg`} alt="스포츠 토토 레져(주)" /></div>
                        <ul className="depth1Group">
                            {menuDep1Name.map((item, index) => (
                                <li className="depth1Menu" key={index}>
                                    <Link to={menuDep1Arr[index]} className="depth1Name">{item}</Link>
                                    <ul className="depth2Group">
                                        {menuDep2Name[index].map((subItem, subIndex) => (
                                            <li className="depth2Menu" key={subIndex}>
                                                <Link to={menuDep2Arr[index][subIndex]} className="depth2Name">{subItem}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="btnClose">닫기</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default CptHeader;