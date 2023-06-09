import temporaryLogo from '../img/temporaryLogo.png';

function WikiEditCompleted() {
    const editText = "문서가 수정되었습니다!\n기여해주셔서 감사합니다 :)"
    const point = "+ 15000 P"
    return (
        <div className='container'>
            <div className='mobile-view'>
                <div className='editResult'>
                    <img className='temporaryLogo' src={temporaryLogo} alt='temporary_logo' />
                    <p>{editText}</p>
                    <p>{point}</p>
                    <button className="completedButton">문서로 돌아가기</button>
                </div>
            </div>
        </div>
    );
};

export default WikiEditCompleted;