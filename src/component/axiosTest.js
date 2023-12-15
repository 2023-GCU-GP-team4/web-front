import React, { useState, useRef } from 'react';
import { GetTest, PostPrompt } from '../axios/API';
// import useAutosizeTextArea from './useAutosizeTextArea';

const AxiosTest = (props) => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            if (loading) return;
            setLoading(true);
            setInput('');
            console.log(e.target.value);
            PostPrompt(e.target.value).then((res) => {
                console.log(res);
                // const element = document.getElementById('section-1');
                // setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500)
            }).catch((e) => alert(e)).finally(() => {
                setLoading(false);
            });
        }
    }

    const [data, setData] = useState(null);

    const onClick = () => {
        GetTest().then(response => {
            setData(response.data);
        });
    };
    // const textAreaRef = useRef(null);
    // useAutosizeTextArea(textAreaRef.current, input);

    return (
        <div>
            {/* <button onClick={onClick}>불러오기</button> */}
            {data}
            <div style={{ height: '100vh' }}>
                <div style={{ width: '100%', height: '100%', flexDirection: 'column', maxWidth: '1390px', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        borderRadius: '56px', backgroundColor: 'rgba(213, 213, 213, 0.9)',
                        display: 'flex', paddingLeft: '24px', paddingRight: '30px',
                        alignItems: 'center', justifyContent: 'center', marginTop: '100px',
                        minWidth: '800px',
                        minHeight: '80px',
                    }}>
                        <textarea type='text' name='search' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
                            placeholder='질문을 입력하세요'
                            // rows={1}
                            // ref={textAreaRef}
                            style={{
                                fontFamily: 'AppleSDGothicNeo',
                                borderRadius: '56px', paddingLeft: '24px', paddingRight: '30px',
                                fontSize: '25px', color: '#191b26', flex: 'auto',
                                padding: '15px', border: 'none', background: 'transparent',
                                overflowY: 'hidden', resize: "none"
                                , height: 'auto', outline: "none"
                            }} />
                    </div>
                </div>
            </div >
        </div>

    );
}

export default AxiosTest;