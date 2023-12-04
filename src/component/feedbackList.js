import './feedbackList.css';

import logo from "../img/BottomLogo.png";
import bin_mouseleave from "../img/bin_mouseleave.png"
import bin_mouseover from "../img/bin_mouseover.png"

//firebase에서 데이터 받아와야 함 -> 추후 재진행 필요

export default function feedbackList()
{
    return (
    <div className='main_list'>
        <h1 className="title_list">Feedback List</h1>
        <div className='list'>
            <div className='block'>
                <div className='date'> <h3>2023/04/12</h3> </div>
                <div className='bin'>
                    <img src={bin_mouseleave} alt='쓰레기통' className='bin_mouseleave'></img>
                    <img src={bin_mouseover} alt='쓰레기통' className='bin_mouseover'></img>
                </div>
            </div>
            <div className='block'>
            <div className='date'> <h3>2023/12/12</h3> </div>
                <div className='bin'>
                    <img src={bin_mouseleave} alt='쓰레기통' className='bin_mouseleave'></img>
                    <img src={bin_mouseover} alt='쓰레기통' className='bin_mouseover'></img>
                </div>
            </div>
            <div className='block'>
            <div className='date'> <h3>2023/12/04</h3> </div>
                <div className='bin'>
                    <img src={bin_mouseleave} alt='쓰레기통' className='bin_mouseleave'></img>
                    <img src={bin_mouseover} alt='쓰레기통' className='bin_mouseover'></img>
                </div>
            </div>
        </div>
        <img src={logo} alt="로고" className="logo"></img>
    </div>
    )
}