import { useState, useRef } from 'react';
import ListItem from '../ListItem/ListItem';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import './list.scss';

const List = () => {

    const [curSlide, setCurSlide] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && curSlide > 0) {
            // console.log((curSlide * -225) + 225);
            listRef.current.style.transform = `translateX(${(curSlide * -225) + 225}px)`;   
            // listRef.current.style.transform = `translateX(${(curSlide * -225) + 225})`;   
            setCurSlide(curSlide - 1);
        }
        if (direction === 'right' && curSlide < 5) {
            // console.log((curSlide * -225) - 225);
            listRef.current.style.transform = `translateX(${(curSlide * -225) - 225}px)`;
            setCurSlide(curSlide + 1);
        }
    } 

    return (
        <div className="list">
            <div className="title">Continue To Watch</div>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}/>
                <span className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </span>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    );
}

export default List;