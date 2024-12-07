const PointCollection = () => {
    return (
        <div>
            <span>핸드폰 번호를 입력해주세요.</span>
            {/* 이 텍스트 크기는 작게 */}
            <div>또는 이미지를 스캔해주세요.</div>
            <input type="text" />
            <section>
                <button>취소</button>
                <button>완료</button>
            </section>
        </div>
    );
};

export default PointCollection;
