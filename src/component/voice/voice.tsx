import useSpeechToText from '../../hooks/useSpeechToText'
import MicImage from '../../assets/image/mic.png'

const Voice = () => {
    const { transcript, listening, toggleListening } = useSpeechToText()

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
            }}
        >
            <h1 style={{ marginBottom: '1rem', fontWeight: '600' }}>말해서 메뉴 찾기</h1>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                마이크 버튼을 클릭하고 검색하려는 메뉴의 이름을 말해주세요.
            </p>

            <button
                onClick={toggleListening}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100px',
                    height: '100px',
                    border: 'none',
                    borderRadius: '50%',
                    backgroundColor: listening ? '#4CAF50' : '#f0f0f0',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={MicImage}
                    alt='마이크 이미지'
                    style={{
                        height: '50px',
                        filter: listening ? 'brightness(0) invert(1)' : 'none',
                    }}
                />
            </button>

            <p
                style={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: listening ? '#4CAF50' : '#333',
                }}
            >
                {listening ? '음성인식 중...' : '음성인식 대기'}
            </p>

            <textarea
                className='transcript'
                value={transcript}
                readOnly
                style={{
                    width: '100%',
                    minHeight: '100px',
                    marginTop: '2rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    resize: 'vertical',
                }}
                placeholder='음성 인식 결과가 여기에 표시됩니다...'
            />
        </div>
    )
}

export default Voice
