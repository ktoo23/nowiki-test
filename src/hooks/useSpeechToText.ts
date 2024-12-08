import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const useSpeechToText = () => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition()

    const toggleListening = () => {
        if (listening) {
            SpeechRecognition.stopListening()
        } else {
            resetTranscript()
            SpeechRecognition.startListening({ language: 'ko-KR' })
        }
    }

    return { transcript, listening, toggleListening, resetTranscript }
}

export default useSpeechToText
